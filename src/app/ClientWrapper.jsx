"use client";

import LayoutClient from "./layoutClient.jsx";

export default function ClientWrapper({ children }) {
  return <LayoutClient>{children}</LayoutClient>;
}
