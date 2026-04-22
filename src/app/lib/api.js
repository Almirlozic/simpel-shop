export async function getProducts(query) {
  const url = query
    ? `https://dummyjson.com/products/search?q=${query}`
    : "https://dummyjson.com/products";

  try {
    const res = await fetch(url, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error();

    return await res.json();
  } catch (error) {
    return {
      products: [
        {
          id: 0,
          title: "Fallback produkt",
          price: 0,
          images: [
            "https://via.placeholder.com/400",
          ],
        },
      ],
    };
  }
}

export async function getProduct(id) {
  try {
    const res = await fetch(
      `https://dummyjson.com/products/${id}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) throw new Error();

    return await res.json();
  } catch (error) {
    return {
      id: 0,
      title: "Fallback produkt",
      description: "Kunne ikke hente data",
      images: ["https://via.placeholder.com/400"],
      reviews: [],
    };
  }
}
