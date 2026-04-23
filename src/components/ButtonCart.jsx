"use client";

import useCartStore from "@/store/cartStore";

export default function ButtonCart({ product }) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <button onClick={() => addToCart(product)} className="cursor-pointer border px-4 py-2 rounded">
      ADD TO CART
    </button>
  );
}
