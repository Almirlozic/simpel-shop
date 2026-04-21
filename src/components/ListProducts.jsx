import Product from "./Product";
const ListProducts = ({ searchParams }) => {
  return <FetchBreeds searchParams={searchParams} />;
};

const FetchProducts = async ({ searchParams }) => {
  "use server";
  const { query } = await searchParams;
  const url = query
    ? `https://dummyjson.com/products/search?q=${query}`
    : "https://dummyjson.com/products";
  const res = await fetch(url, {
    cache: "no-store",
  });
  const data = await res.json();
  if (data.products.length === 0) {
    return <div className="flex justify-center items-center h-[50vh]">no products found</div>;
  }

  return (
    <div className="w-full mt-10">
      <div className="grid grid-cols-3 w-full">
        {data.products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            price={product.price}
            title={product.title}
            brand={product.brand}
            img={product.images[0]}
          />
        ))}
      </div>
    </div>
  );
};

export default FetchProducts;
