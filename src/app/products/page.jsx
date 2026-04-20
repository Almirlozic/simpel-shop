import ListProducts from "@/components/ListProducts";
import { LiaSearchSolid } from "react-icons/lia";

export default function Products() {
  return (
    <>
      <form>
        <div className="flex items-center justify-between mt-20 px-8">
          <div>
            <select>
              <option value="">Low - High</option>
              <option value="">High - low</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="submit"
              className="bg-red-800 p-3 rounded-full text-white"
            >
              <LiaSearchSolid
                size={18}
                className=""
              />
            </button>
            <input
              name="query"
              type="search"
              placeholder="Search for products"
              className="border font-medium p-2 rounded-full focus:outline-none focus:ring-1 focus:ring-red-800"
            />
          </div>
        </div>
      </form>
      <ListProducts />
    </>
  );
}
