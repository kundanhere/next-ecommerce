import Filter from "@/components/Filter";
import ProductList from "@/components/ProductList";
import Image from "next/image";

const ListPage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* Campaign */}
      <div className="bg-pink-50 px-4 mt-4 hidden sm:flex justify-between h-72 rounded-2xl">
        <div className="w-2/3 flex flex-col ml-4 md:ml-8 lg:ml-16 justify-center gap-8">
          <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
            Grab up to 50% off on <br /> Selected Products
          </h1>
          <button className="w-max rounded-3xl py-3 px-5 text-sm bg-brinkpink text-white hover:bg-zinc-950 transition-all ease-in-out duration-300">
            Buy now
          </button>
        </div>
        <div className="relative w-1/2">
          <Image src="/woman.png" alt="" fill className="object-contain" />
        </div>
      </div>
      {/* FILETR */}
      <Filter />
      {/* PRODUCTS */}
      <h1 className="mt-12 font-semibold text-xl">Shoes For You!</h1>
      <ProductList />
    </div>
  );
};

export default ListPage;
