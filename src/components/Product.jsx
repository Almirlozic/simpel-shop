"use client";

import Image from "next/image";
import Link from "next/link";
import useCartStore from "@/store/cartStore";
import ButtonCart from "./ButtonCart";

const Product = ({ id, img, title, price, brand }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  return (
    <div className="border-r border-t">
      <Link href={`/detailview/${id}`} className="flex flex-col items-center gap-2">
        <h2>{brand}</h2>
        <div className="relative group">
          <Image src={img} alt={title} width={200} height={200} className="object-cover" />
        </div>
        <div className="text-center">
          <h3 className="text-sm mb-4 mt-4">{title}</h3>
          <p className="font-bold mb-10">{price} kr</p>
        </div>
      </Link>
      <div className="flex justify-center pb-6">
        {/*     <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            addToCart({
              id,
              img,
              title,
              price,
              brand,
            });
          }}
          className="cursor-pointer border px-4 py-2 rounded"
        >
          ADD TO CART
        </button> */}
        <ButtonCart
          product={{
            id,
            img,
            title,
            price,
            brand,
          }}
        />
      </div>
    </div>
  );
};

export default Product;
