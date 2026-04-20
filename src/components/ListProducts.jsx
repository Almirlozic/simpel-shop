import Product from "./Product";
const ListProducts = () => {
  return <FetchBreeds />;
};

const FetchProducts = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

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
