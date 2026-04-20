import Image from "next/image";
import Link from "next/link";

const Product = ({ id, img, title, price, brand }) => {
  return (
    <div className="border-r border-t">
      <Link href={`/detailview/${id}`} className="flex flex-col items-center gap-2">
        <h2>{brand}</h2>
        <div className="relative group">
          <Image src={img} alt={title} width={200} height={200} className="object-cover" />
          <div className="absolute inset-0 bg-gray-200/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
            <form action="submit">
              <button className="cursor-pointer border px-4 py-2 rounded">ADD TO CART</button>
            </form>
          </div>
        </div>
        <div className="text-center">
          <h3 className="text-sm mb-4 mt-4">{title}</h3>
          <p className="font-bold mb-10">{price} kr</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
