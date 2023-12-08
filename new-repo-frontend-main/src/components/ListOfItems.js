import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import ProductServices from "../services/Products";

export default function ListOfItems() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductServices.getAllproducts().then((res) => {
      if (res.status === 200) {
        setProducts(res.data);
        console.log("response", res);
      }
    });
  }, []);
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </>
  );
}
