"use client";

import useCartStore from "@/store/cartStore";

const Checkout = () => {
  const cart = useCartStore(
    (state) => state.cart
  );
  const increaseQuantity = useCartStore(
    (state) => state.increaseQuantity
  );
  const decreaseQuantity = useCartStore(
    (state) => state.decreaseQuantity
  );
  const removeFromCart = useCartStore(
    (state) => state.removeFromCart
  );

  const totalPrice = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const formatPrice = (price) => {
    const roundedPrice =
      Math.round(price * 100) / 100;

    return roundedPrice.toLocaleString("da-DK", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    });
  };

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="mb-10 text-3xl font-semibold">
        Checkout
      </h1>

      {cart.length === 0 ? (
        <div className="rounded border p-8 text-center">
          <p className="text-lg font-medium">
            Your cart is empty
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Add some products before going to
            checkout.
          </p>
        </div>
      ) : (
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
          <div className="rounded border">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-4 border-b p-6 last:border-b-0 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-24 w-24 rounded object-cover"
                  />

                  <div>
                    <h2 className="text-lg font-medium">
                      {item.title}
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">
                      {item.brand}
                    </p>
                    <p className="mt-2 text-sm">
                      {formatPrice(item.price)} kr
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() =>
                        decreaseQuantity(item.id)
                      }
                      className="rounded border px-3 py-1"
                    >
                      -
                    </button>

                    <span className="min-w-6 text-center">
                      {item.quantity}
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        increaseQuantity(item.id)
                      }
                      className="rounded border px-3 py-1"
                    >
                      +
                    </button>
                  </div>

                  <div className="min-w-20 text-right">
                    <p className="font-medium">
                      {formatPrice(
                        item.price * item.quantity
                      )}{" "}
                      kr
                    </p>
                    <button
                      type="button"
                      onClick={() =>
                        removeFromCart(item.id)
                      }
                      className="mt-2 text-sm text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <aside className="h-fit rounded border p-6">
            <h2 className="mb-6 text-xl font-semibold">
              Order summary
            </h2>

            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span>Items</span>
                <span>
                  {cart.reduce(
                    (total, item) =>
                      total + item.quantity,
                    0
                  )}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span>Delivery</span>
                <span>Free</span>
              </div>

              <div className="flex items-center justify-between border-t pt-3 text-base font-semibold">
                <span>Total</span>
                <span>
                  {formatPrice(totalPrice)} kr
                </span>
              </div>
            </div>

            <button
              type="button"
              className="mt-6 w-full rounded bg-red-800 px-4 py-3 text-white"
            >
              Complete purchase
            </button>
          </aside>
        </div>
      )}
    </section>
  );
};

export default Checkout;
