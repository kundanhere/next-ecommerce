import Slider from "@/components/Slider";
import ProductList from "@/components/ProductList";
import CategorytList from "@/components/CategorytList";
import { Suspense } from "react";
import Skeleton from "@/components/Skeleton";

const HomePage = async () => {
  // TEST (FETCHING ON THE CLIENT COMPONENT)
  // const wixClient = useWixClient();
  // useEffect(() => {
  //   const getProducts = async () => {
  //     // Fetch products from Wix API
  //     const response = await wixClient.products.queryProducts().find();

  //     console.log(response);
  //   };

  //   getProducts();
  // }, [wixClient]);

  // TEST (FETCHING ON THE SERVER COMPONENT)
  // const wixClient = await wixClientServer();
  // const response = await wixClient.products.queryProducts().find();

  // console.log(response);

  return (
    <div>
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Featured Products</h1>
        <Suspense fallback={<Skeleton />}>
          <ProductList
            categoryId={process.env.FEATURED_PRODUCTS_CATEGORY_ID!}
            limit={4}
          />
        </Suspense>
      </div>
      <div className="mt-24">
        <h1 className="text-2xl mb-12 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
          Categories
        </h1>
        <Suspense fallback={<Skeleton />}>
          <CategorytList />
        </Suspense>
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">New Products</h1>
        <Suspense fallback={<Skeleton />}>
          <ProductList
            categoryId={process.env.FEATURED_PRODUCTS_CATEGORY_ID!}
            limit={4}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default HomePage;
