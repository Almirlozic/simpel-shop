import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-7xl typewriter">A&D Supply</h1>
        <Link href="/products">
          <button className="mt-10 border px-8 py-2 rounded-full animate-fadeIn">
            VIEW PRODUCTS
          </button>
        </Link>
      </div>
    </div>
  );
}
