import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    const parsedCart = storedCart ? JSON.parse(storedCart) : [];
    setCart(parsedCart);


  }, []);

  return (
    <div class="container mx-auto px-4 py-8">
      <div class="flex flex-col md:flex-row md:justify-between md:items-center">
        <h1 class="text-2xl font-bold my-4">Shopping Cart</h1>
        <Link
          to="/checkOutSuccess"
          class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
        >
          Checkout
        </Link>
      </div>
      {cart && cart.length > 0 ? (
        cart.map((item) => (
          <div class="mt-8">
            <div class="flex flex-col md:flex-row border-b border-gray-400 py-4">
              <div class="flex-shrink-0">
                <img
                  src={`http://127.0.0.1:4000/${item.img}`}
                  alt="Product image"
                  class="w-32 h-32 object-cover"
                />
              </div>
              <div class="mt-4 md:mt-0 md:ml-6">
                <h2 class="text-lg font-bold">Product Title ${item.name}</h2>
                <div class="mt-4 flex items-center">
                  <span class="ml-auto font-bold">Price: ${item.price}</span>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>No product In Cart</div>
      )}
    </div>
  );
};

export default Checkout;
