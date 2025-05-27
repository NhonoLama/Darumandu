import ProductList from "@/components/shared/product/productList";
// import sampleData from "@/db/sample-data";
import { getLatestProducts } from "@/lib/actions/product.action";

const page = async () => {
  const latestProducts = await getLatestProducts();
  return (
    <div>
      <ProductList data={latestProducts} title="New Arrivals" limit={4} />
    </div>
  );
};

export default page;
