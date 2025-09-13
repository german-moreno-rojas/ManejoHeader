export default function ProductCard({ image, title, price }) {
  return (
    <div className="border p-4 rounded-lg shadow">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover rounded"
      />
      <p className="mt-2 font-semibold">{title}</p>
      <span>{price}</span>
    </div>
  );
}
