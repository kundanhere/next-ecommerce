"use client";

// https://images.pexels.com/photos/975250/pexels-photo-975250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2
// https://images.pexels.com/photos/22856153/pexels-photo-22856153/free-photo-of-studio-shot-of-a-young-fashionable-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2
// https://images.pexels.com/photos/8276911/pexels-photo-8276911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2
// https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    alt: "Slide 1",
    title: "Spring Sale Collections",
    description: "Sale! Up to 50% off!",
    image:
      "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    background: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
  {
    id: 2,
    alt: "Slide 2",
    title: "Summer Sale Collections",
    description: "Sale! Up to 50% off!",
    image:
      "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    background: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 3,
    alt: "Slide 3",
    title: "Winter Sale Collections",
    description: "Sale! Up to 50% off!",
    image:
      "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    background: "bg-gradient-to-r from-blue-50 to-yello-50",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  //     }, 3000);

  //     return () => clearInterval(interval);
  //   }, []);

  return (
    <div className="h-[calc(100vh-5rem)] overflow-hidden">
      <div
        className="flex w-max h-full transition-all ease-in-out duration-1000"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`${slide.background} w-screen h-full flex flex-col gap-16 xl:flex-row`}
          >
            {/* TEXT Container */}
            <div className="h-1/2 xl:h-full xl:w-1/2 text-center flex flex-col items-center justify-center gap-8 2xl:gap-12">
              <h2 className="text-xl lg:text-3xl 2xl:text-5xl">
                {slide.description}
              </h2>
              <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">
                {slide.title}
              </h1>
              <Link href={slide.url}>
                <button className="rounded-md bg-zinc-950 text-white py-3 px-4">
                  SHOP NOW
                </button>
              </Link>
            </div>
            {/* IMAGE Container */}
            <div className="h-1/2 xl:h-full xl:w-1/2 relative">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                sizes="100%"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      {/* INDICATORS */}
      <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-full ring ring-gray-600 cursor-pointer flex items-center justify-center transition-all ease-in-out duration-300 ${
              current === index ? "scale-150" : ""
            }`}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
