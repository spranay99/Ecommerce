import ProductCard from "@/components/ProductCard";
import products from "../components/products.json";

export default function Home({ shoeProducts }) {
  return (
    <main>
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
        {shoeProducts.map((shoeProduct) => (
          <ProductCard key={shoeProduct.id} {...shoeProduct} />
        ))}
      </div>
    </main>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      shoeProducts: products,
    },
  };
};
