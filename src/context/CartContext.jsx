"use client";
import { createContext, useContext, useState } from "react";

// Crear el contexto
const CartContext = createContext();

// Proveedor del contexto
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // 🛒 Agregar producto al carrito
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        // Si ya está en el carrito, aumenta la cantidad
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      } else {
        // Si no está, agrégalo con quantity = 1
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  // ❌ Eliminar producto por ID
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // 🧹 Vaciar todo el carrito
  const clearCart = () => {
    setCart([]);
  };

  // 📦 Calcular el total del carrito
  const total = cart.reduce(
    (acc, item) => acc + item.precio * (item.quantity || 1),
    0
  );

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Hook personalizado para usar el carrito
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe usarse dentro de un CartProvider");
  }
  return context;
}
