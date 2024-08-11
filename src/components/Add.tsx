"use client";

import { useState } from "react";

const Add = ({
  productId,
  variantId,
  stockNumber,
}: {
  productId: string;
  variantId: string;
  stockNumber: number;
}) => {
  const [quantity, setQuantity] = useState(1);
  const MAX_STOCK = 4; // Replace with actual max stock quantity

  const handleQuantity = (type: "inc" | "dec") => {
    if (type === "dec" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    } else if (type === "inc" && quantity < stockNumber) {
      setQuantity((prev) => prev + 1);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">Choose a Qty.</h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="w-32 bg-gray-100  rounded-3xl flex items-center justify-between">
            <button
              className={`${quantity <= 1 ? "text-gray-300 cursor-not-allowed" : "cursor-pointer hover:bg-gray-200"} text-xl w-1/3 p-2 rounded-full`}
              onClick={() => handleQuantity("dec")}
            >
              -
            </button>
            {quantity}
            <button
              className={`${quantity === stockNumber ? "text-gray-300 cursor-not-allowed" : "cursor-pointer hover:bg-gray-200"} text-xl w-1/3 p-2 rounded-full`}
              onClick={() => handleQuantity("inc")}
            >
              +
            </button>
          </div>
          {stockNumber < 1 ? (
            <div className="text-xs text-orange-500">
              Product is out of stock
            </div>
          ) : (
            <div className="text-xs">
              Only <span className="text-orange-500">{stockNumber} items</span>{" "}
              left! <br /> {"Don't"} miss it
            </div>
          )}
        </div>
        <button className="w-max rounded-3xl ring-1 ring-brinkpink text-brinkpink py-2 px-4 text-xs hover:bg-brinkpink hover:text-white transition-all ease-in-out duration-300 disabled:bg-pink-200 disabled:text-white disabled:ring-none disabled:cursor-not-allowed">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Add;
