import { wixClientServer } from "@/lib/wixClientServer";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategorytList = async () => {
  const wixClient = await wixClientServer();
  const categories = await wixClient.collections.queryCollections().find();

  return (
    <div className="px-4 mr-4 overflow-x-scroll no-scrollbar">
      <div className="flex gap-4 md:gap-8">
        {categories.items.map((category) => (
          <Link
            key={category._id}
            href={`/list?cat=${category.slug}`}
            className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
          >
            <div className="relative bg-slate-100 w-full h-96 rounded-md">
              <Image
                src={category.media?.mainMedia?.image?.url || "/cat.png"}
                alt={category.name!}
                fill
                sizes="20vw"
                className="object-cover rounded-md"
              />
            </div>
            <h1 className="mt-4 font-light text-xl tracking-wide">
              {category.name}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategorytList;
