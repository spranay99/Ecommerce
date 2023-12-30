import ProductCard from "@/components/ProductCard";
import products from "../components/products.json";

export default function Home() {
  return (
    <main>
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </main>
  );
}
