import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";

const Header = () => {
  return (
    <header>
      <nav className="flex items-center justify-between py-4 px-8">
        <div className="flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
        </div>
        <CiShoppingCart size={30} />
      </nav>
    </header>
  );
};

export default Header;
