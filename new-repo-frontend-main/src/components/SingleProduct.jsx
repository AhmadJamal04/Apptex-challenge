import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import ProductServices from "../services/Products";

const SingleProduct = ({ prod, className }) => {
  const [cart, setCart] = useState([]);
 function deleteClickHandler(product){

ProductServices.deleteProduct(product.id).then((res)=>{
 console.log(res)
  if(res.status===204){
    alert("product deleted")
  }
  
    
  
})
 }
  function clickHandler(product) {
    setCart((prevCart) => {
      const isProductInCart = prevCart.some((item) => item.id === product.id);

      if (isProductInCart) {
        // Remove the product from the cart
        const updatedCart = prevCart.filter((item) => item.id !== product.id);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
      } else {
        // Add the product to the cart
        const updatedCart = [...prevCart, product];
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
      }
    });
  }

  // Fetch the latest cart state from localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    const parsedCart = storedCart ? JSON.parse(storedCart) : [];
    setCart(parsedCart);
  }, [cart]);

  // Check whether the product is in the cart
  const isProductInCart = cart.some((item) => item.id === prod.id);

  return (
    <div className={`px-4 sm:px-0 ${className} relative `} key={prod.id}>
      <div className="bg-white border rounded-lg overflow-hidden hover:cursor-pointer ">
        <div className="">
          <img
            src={`http://127.0.0.1:4000/${prod.img}`}
            alt={prod.title}
            className="w-[720px] h-[300px] object-cover object-center "
          />
        </div>
        <div className="p-3">
          <p className="text-gray-800 font-semibold text-xl truncate my-2">
            {prod.name}
          </p>
        </div>
        <div className="flex justify-between items-center p-2">
          <p className="text-green-600 text-lg font-semibold pl-3 whitespace-nowrap">
            ₹ {prod.price}
          </p>
          <div className="flex space-x-2 pr-2 items-center">
            <button className="text-white p-2 rounded-lg border hover:scale-105 font-semibold bg-green-400" onClick={()=>{
              deleteClickHandler(prod);
            }}>Delete Item</button>
            <Link to={`/product/${prod.id}`}></Link>
            <button
              className={`text-white p-2 rounded-lg border hover:scale-105 font-semibold ${
                isProductInCart ? "bg-red-400" : "bg-green-400"
              }`}
              onClick={() => {
                clickHandler(prod);
              }}
            >
              {isProductInCart ? "Remove from Cart" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
