"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
  {
    id: 1,
    alt: "product image",
    url: "https://images.pexels.com/photos/1456737/pexels-photo-1456737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    alt: "product image",
    url: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    alt: "product image",
    url: "https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    alt: "product image",
    url: "https://images.pexels.com/photos/2529146/pexels-photo-2529146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

//
const ProductImages = () => {
  const [index, setIndex] = useState(0);

  //
  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src={images[index].url}
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between gap-4 mt-4">
        {images.map((image, i) => (
          <div key={image.id} className="w-1/4 h-32 relative gap-4">
            <Image
              src={image.url}
              alt={image.alt}
              fill
              sizes="30vw"
              className={`border-2 cursor-pointer transition-all ease-in-out duration-300 object-cover rounded-md 
                ${i === index ? "border-brinkpink" : "border-transparent"}`}
              onClick={() => setIndex(i)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
