"use client";

import { useState } from "react";

const Add = () => {
  const [quantity, setQuantity] = useState(1);
  const MAX_STOCK = 4; // Replace with actual max stock quantity

  const handleQuantity = (type: "inc" | "dec") => {
    if (type === "dec" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    } else if (type === "inc" && quantity < MAX_STOCK) {
      setQuantity((prev) => prev + 1);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">Choose a Qty.</h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="w-32 bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between">
            <button
              className={`${quantity <= 1 ? "text-gray-300 cursor-not-allowed" : ""} text-xl cursor-pointer`}
              onClick={() => handleQuantity("dec")}
            >
              -
            </button>
            {quantity}
            <button
              className={`${quantity === MAX_STOCK ? "text-gray-300 cursor-not-allowed" : ""} text-xl cursor-pointer`}
              onClick={() => handleQuantity("inc")}
            >
              +
            </button>
          </div>
          <div className="text-xs">
            Only <span className="text-orange-500">{MAX_STOCK} items</span>{" "}
            left! <br /> {"Don't"} miss it
          </div>
        </div>
        <button className="w-max rounded-3xl ring-1 ring-brinkpink text-brinkpink py-2 px-4 text-xs hover:bg-brinkpink hover:text-white transition-all ease-in-out duration-300 disabled:bg-pink-200 disabled:text-white disabled:ring-none disabled:cursor-not-allowed">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Add;
