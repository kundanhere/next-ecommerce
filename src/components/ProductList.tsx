import { wixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";

const MAX_PRODUCT_PER_PAGE = 20;
//
const ProductList = async ({
  categoryId,
  limit,
  searchParams,
}: {
  categoryId: string;
  limit?: number;
  searchParams?: any;
}) => {
  const wixClient = await wixClientServer();
  const response = await wixClient.products
    .queryProducts()
    .eq("collectionIds", categoryId)
    .limit(limit || MAX_PRODUCT_PER_PAGE)
    .find();

  return (
    <div className="mt-12 flex flex-wrap gap-x-8 gap-y-16">
      {response.items.map((product: products.Product) => (
        <Link
          key={product._id}
          href={"/" + product.slug}
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        >
          <div className="relative w-full h-80">
            <Image
              src={product.media?.mainMedia?.image?.url || "/product.png"}
              alt={product.name!}
              fill
              priority={true}
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500"
            />
            {product.media?.items && (
              <Image
                src={product.media?.items[1]?.image?.url || "/product.png"}
                alt={product.name!}
                fill
                priority={true}
                sizes="25vw"
                className="absolute object-cover rounded-md"
              />
            )}
          </div>
          <div className="flex justify-between">
            <span className="font-medium">{product.name}</span>
            <span className="font-semibold">${product.price?.price}</span>
          </div>
          {product.additionalInfoSections && (
            <div
              className="text-sm text-gray-500"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  product.additionalInfoSections.find(
                    (section: any) => section.title === "shortDesc",
                  )?.description || "",
                ),
              }}
            ></div>
          )}
          <button className="w-max rounded-2xl ring-1 ring-brinkpink text-brinkpink py-2 px-4 text-xs hover:bg-brinkpink hover:text-white transition-all ease-in-out duration-300">
            Add to Cart
          </button>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
