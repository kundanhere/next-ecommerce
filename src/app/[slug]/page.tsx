import Add from "@/components/Add";
import CustomizeProduct from "@/components/CustomizeProduct";
import ProductImages from "@/components/ProductImages";
import DOMPurify from "isomorphic-dompurify";
import { wixClientServer } from "@/lib/wixClientServer";
import { notFound } from "next/navigation";

const SinglePage = async ({ params }: { params: { slug: string } }) => {
  const wixClient = await wixClientServer();
  const products = await wixClient.products
    .queryProducts()
    .eq("slug", params.slug)
    .find();

  if (!products.items[0]) {
    return notFound();
  }

  const product = products.items[0];

  return (
    <div className="py-8 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* Image Container */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages items={product.media?.items} />
      </div>
      {/* Text Container */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        {/* Product name and description */}
        <h1 className="text-4xl font-medium">{product.name}</h1>

        {product.description && (
          <div
            className="text-gray-500"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(product.description || ""),
            }}
          ></div>
        )}

        {/* Pricing  */}
        <div className="h-[2px] bg-gray-100" />
        {product.price?.price === product.price?.discountedPrice ? (
          <h2 className="font-medium text-2xl">{`$${product.price?.price}`}</h2>
        ) : (
          <div className="flex items-center gap-4">
            <h3 className="text-xl line-through text-red-400">{`$${product.price?.price}`}</h3>
            <h2 className="font-medium text-2xl">{`$${product.price?.discountedPrice}`}</h2>
          </div>
        )}

        {/* Product variants */}
        <div className="h-[2px] bg-gray-100" />
        {product.variants && product.productOptions ? (
          <CustomizeProduct
            productId={product._id!}
            variants={product.variants}
            productOptions={product.productOptions}
          />
        ) : (
          //  Add or remove product items
          <Add
            productId={product._id!}
            variantId="00000000-0000-0000-0000-000000000000"
            stockNumber={product.stock?.quantity || 0}
          />
        )}

        {/* Product details */}
        <div className="h-[2px] bg-gray-100" />
        {product.additionalInfoSections?.map((section, index) => (
          <div className="text-sm" key={index}>
            <h4 className="font-medium mb-4">{section.title}</h4>
            <div
              className="text-gray-500"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(section.description || ""),
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SinglePage;
