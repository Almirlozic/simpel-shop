import Product from "./Product";
import { getProducts } from "@/app/lib/api";

const ListProducts = ({ searchParams }) => {
  return (
    <FetchProducts searchParams={searchParams} />
  );
};

const FetchProducts = async ({
  searchParams,
}) => {
  const { query, sort } = await searchParams;

  const data = await getProducts(query);

  let products = [...data.products];

  if (sort === "asc") {
    products.sort((a, b) => a.price - b.price);
  } else if (sort === "desc") {
    products.sort((a, b) => b.price - a.price);
  }

  if (products.length === 0) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        no products found
      </div>
    );
  }

  return (
    <div className="w-full mt-10">
      <div className="grid grid-cols-3 w-full">
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            price={product.price}
            title={product.title}
            brand={product.brand}
            img={product.images?.[0]}
          />
        ))}
      </div>
    </div>
  );
};

export default ListProducts;
