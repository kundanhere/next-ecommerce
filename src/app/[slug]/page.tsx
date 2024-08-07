import Add from "@/components/Add";
import CustomizeProduct from "@/components/CustomizeProduct";
import ProductImages from "@/components/ProductImages";

const SinglePage = () => {
  return (
    <div className="py-8 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* Image Container */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      {/* Text Container */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        {/* Product name and description */}
        <h1 className="text-4xl font-medium">
          Mens Air Winflo 10 Running Shoe
        </h1>
        <p className="text-gray-500">
          I&apos;m a product description. I&apos;m great plcae to add more
          details about your product such as sizing, material, dimensions and
          care instructions.
        </p>
        {/* Pricing  */}
        <div className="h-[2px] bg-gray-100"></div>
        <div className="flex items-center gap-4">
          <h3 className="text-xl line-through text-red-400">$62</h3>
          <h2 className="font-medium text-2xl">$49</h2>
        </div>
        <div className="h-[2px] bg-gray-100"></div>
        {/* Customer Choices */}
        <CustomizeProduct />
        {/* Add or remove product items */}
        <Add />
        {/* Product details */}
        <div className="h-[2px] bg-gray-100"></div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">PRODUCT INFO</h4>
          <p className="text-gray-500">
            I&apos;m a product detail. I&apos;m a great place to add more
            information about your product such as sizing, material, care and
            cleaning instructions. This is also a great place to write what
            makes this product special and how your customers can benifit from
            the item.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">RETURN & REFUND POLICY</h4>
          <p className="text-gray-500">
            I&apos;m a Return & Refund policy. I&apos;m a great place to let
            your customers to know what to do in case they are dissatisfied with
            their purchase. Having a straightforward refund or exchange policy
            is a great way to build trust and reassure your customers that they
            can buy with confidence.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">SHIPPING INFO</h4>
          <p className="text-gray-500">
            I&apos;m a Shipping policy. I&apos;m a great place to add more
            information about your shipping methods, packaging and cost.
            Providing straightforward information about your shipping policy is
            a great way to build trust and reassure your customers that they can
            buy from you with confidence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
