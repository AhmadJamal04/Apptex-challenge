import React, { useReducer } from "react";

import { useNavigate } from "react-router";
import ProductServices from "../services/Products";

const initialState = {
  id: "",
  title: "",
  description: "",
  info: "",
  price: "",
  imgUrl: "",
};
function reducer(state, action) {
  if (action.type === "ID") {
    return { ...state, id: action.payload };
  } else if (action.type === "TITLE") {
    return { ...state, title: action.payload };
  } else if (action.type === "DESCRIPTION") {
    return { ...state, description: action.payload };
  } else if (action.type === "INFO") {
    return { ...state, info: action.payload };
  } else if (action.type === "PRICE") {
    return { ...state, price: action.payload };
  } else if (action.type === "IMGURL") {
    return { ...state, imgUrl: action.payload };
  } else {
    return state;
  }
}

export default function AddProducts() {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);

  function clickHandler(e) {
    e.preventDefault();
    if(!state.title)
    {
      alert("Title is required");
      return;
    }
    const formData = new FormData();

    formData.append("name", state.title);
    formData.append("price", state.price);
    formData.append("img", state.imgUrl);

    ProductServices.addProduct(formData)
      .then((response) => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <main className="flex items-center justify-center h-screen bg-zinc-200 ">
        <div className="border-2 border-gray-300 bg-white p-4 w-96 shadow-md shadow-slate-600 rounded-xl">
          {/* from */}
          <form action="">
            <h1 className=" font-bold pb-2 text-2xl tracking-wide text-center">
              ADD Product
            </h1>

            <div>
              <p className=" text-zinc-700 font-semibold">Title :</p>
              <input
                name="productTitle"
                type="text"
                placeholder="Enter product title"
                className=" border border-gray-400 p-2 w-full focus:outline-none"
                required
                onChange={(e) => {
                  dispatch({ type: "TITLE", payload: e.target.value });
                }}
                value={state.title}
              />
            </div>

            <div>
              <p className=" text-zinc-700 font-semibold">Price :</p>
              <input
                name="productPrice"
                type="number"
                placeholder="Enter product price"
                className=" border border-gray-400 p-2 w-full focus:outline-none"
                required
                onChange={(e) => {
                  dispatch({ type: "PRICE", payload: e.target.value });
                }}
                value={state.price}
              />
            </div>
            <div>
              <p className=" text-zinc-700 font-semibold">ImageUrl :</p>
              <input
                name="productImageUrl"
                type="text"
                placeholder="Enter product imgurl"
                className=" border border-gray-400 p-2 w-full focus:outline-none"
                required
                onChange={(e) => {
                  dispatch({ type: "IMGURL", payload: e.target.value });
                }}
                value={state.imgUrl}
              />
            </div>
            <div className="mt-4">
              <button
                className="border border-gray-400 bg-blue-700 text-white px-20 p-2 text-xl rounded-full w-full "
                onClick={clickHandler}
              >
                ADD product
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
