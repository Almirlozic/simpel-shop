"use client";

import { CiShoppingCart } from "react-icons/ci";
import useCartStore from "@/store/cartStore";
import Link from "next/link";

const Cart = () => {
  const cart = useCartStore(
    (state) => state.cart
  );
  const increaseQuantity = useCartStore(
    (state) => state.increaseQuantity
  );
  const decreaseQuantity = useCartStore(
    (state) => state.decreaseQuantity
  );

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
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
    <div className="relative group pb-2">
      <CiShoppingCart size={30} />
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-800 text-xs text-white">
          {totalItems}
        </span>
      )}
      <div className="absolute top-full right-0 w-80 bg-white shadow-lg border p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition z-50">
        {cart.length === 0 ? (
          <p className="text-sm">
            Your cart is empty
          </p>
        ) : (
          <div className="flex flex-col gap-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between gap-3 border-b pb-3"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-14 w-14 object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium">
                      {item.title}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <button
                        onClick={() =>
                          decreaseQuantity(
                            item.id
                          )
                        }
                        className="px-2 border rounded"
                      >
                        -
                      </button>
                      <span className="text-xs">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          increaseQuantity(
                            item.id
                          )
                        }
                        className="px-2 border rounded"
                      >
                        +
                      </button>
                    </div>
                    <p className="text-xs text-gray-500">
                      {formatPrice(item.price)} kr
                    </p>
                  </div>
                </div>
                <p className="text-sm font-semibold">
                  {formatPrice(
                    item.price * item.quantity
                  )}{" "}
                  kr
                </p>
              </div>
            ))}

            <div className="flex items-center justify-between pt-2 font-semibold">
              <span>Total</span>
              <span>
                {formatPrice(totalPrice)} kr
              </span>
            </div>

            <Link
              href="/payment"
              className="block rounded bg-red-800 px-4 py-3 text-center text-sm font-medium text-white"
            >
              Go to checkout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
