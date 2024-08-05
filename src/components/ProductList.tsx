import Image from "next/image";
import Link from "next/link";

//

const ProductList = () => {
  return (
    <div className="mt-12 flex flex-wrap justify-between gap-x-8 gap-y-16">
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/4041391/pexels-photo-4041391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Cosmetic Bottle</span>
          <span className="font-semibold">$5</span>
        </div>
        <div className="text-sm text-gray-500">
          Cosmetic bottle with pink rose petals and wooden plate
        </div>
        <button className="w-max rounded-2xl ring-1 ring-brinkpink text-brinkpink py-2 px-4 text-xs hover:bg-brinkpink hover:text-white transition-all ease-in-out duration-300">
          Add to Cart
        </button>
      </Link>
      {/* Repeat for other products */}
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/6633450/pexels-photo-6633450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/6633451/pexels-photo-6633451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">
            Md Decor Solid Sheesham Bar Chair Modern Furniture
          </span>
          <span className="font-semibold">$59</span>
        </div>
        <div className="text-sm text-gray-500">
          No featured offers available
        </div>
        <button className="w-max rounded-2xl ring-1 ring-brinkpink text-brinkpink py-2 px-4 text-xs hover:bg-brinkpink hover:text-white transition-all ease-in-out duration-300">
          Add to Cart
        </button>
      </Link>
      {/* 3 */}
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/3756908/pexels-photo-3756908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">boAt Rockerz 450</span>
          <span className="font-semibold">$23</span>
        </div>
        <div className="text-sm text-gray-500">
          boAt Rockerz 450 Bluetooth On Ear Headphones with Mic
        </div>
        <button className="w-max rounded-2xl ring-1 ring-brinkpink text-brinkpink py-2 px-4 text-xs hover:bg-brinkpink hover:text-white transition-all ease-in-out duration-300">
          Add to Cart
        </button>
      </Link>
      {/* 4 */}
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/5947542/pexels-photo-5947542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/3948028/pexels-photo-3948028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Denim look</span>
          <span className="font-semibold">$9</span>
        </div>
        <div className="text-sm text-gray-500">
          A Denim Jeans with Black Friday Offer
        </div>
        <button className="w-max rounded-2xl ring-1 ring-brinkpink text-brinkpink py-2 px-4 text-xs hover:bg-brinkpink hover:text-white transition-all ease-in-out duration-300">
          Add to Cart
        </button>
      </Link>
    </div>
  );
};

export default ProductList;
