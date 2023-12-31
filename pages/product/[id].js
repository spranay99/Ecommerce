// import ProductDetail from "@/components/ProductDetail";
import shoeproduct from "../../components/products.json";
import React from "react";

const ProductDetails = ({ product }) => {
  // console.log(product);
  return (
    <div className="w-full md:py-20">
      <div className="w-full max-w-[1280px] px-5 md:px-10 mx-auto">
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <div>
              <img
                src={product.image}
                className="w-full bg-gray-50"
                alt="Product Image"
              />
            </div>
          </div>
          <div className="flex-[1] py-3 my-auto">
            {/* PRODUCT TITLE */}
            <div className="text-[34px] font-semibold mb-2 leading-tight">
              {product.name}
            </div>

            {/* PRODUCT PRICE */}
            <div className="flex items-center">
              <p className="mr-2 text-lg font-semibold">
                MRP : &#8377;{product.price}
              </p>
            </div>

            <div className="text-md font-medium text-black/[0.5]">
              incl. of taxes
            </div>
            <div className="text-md font-medium text-black/[0.5] mb-20">
              {`(Also includes all applicable duties)`}
            </div>

            <button className="w-full py-4 rounded-full bg-[#D6001C] text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

export const getStaticPaths = async () => {
  const paths = shoeproduct.map((p) => ({
    params: {
      id: p.id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const product = shoeproduct.filter((p) => p.id.toString() === params.id);
  console.log(product);
  return {
    props: {
      product: product[0],
    },
  };
};
