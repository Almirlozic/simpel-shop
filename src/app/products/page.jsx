import ListProducts from "@/components/ListProducts";
import { LiaSearchSolid } from "react-icons/lia";
import { Suspense } from "react";
import LoadingProducts from "@/components/Loading";

export default function Products({ searchParams }) {
  return (
    <>
      <form>
        <div className="flex items-center justify-between mt-20 px-8">
          <div>
            <select name="sort">
              <option value="asc">Low - High</option>
              <option value="desc">High - Low</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <button type="submit" className="bg-red-800 p-3 rounded-full text-white">
              <LiaSearchSolid size={18} />
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
      <Suspense fallback={<LoadingProducts />}>
        <ListProducts searchParams={searchParams} />
      </Suspense>
    </>
  );
}
