import { addToCart } from "@/store/cartSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import shoeproduct from "../api/products.json";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = ({ product }) => {
  const dispatch = useDispatch();

  const [addCartButton, setAddCartButton] = useState(false);

  const notify = () =>
    toast.success("Product added to Cart!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  return (
    <div className="w-full md:py-20">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
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
            <div className="text-[34px] font-semibold mb-2 leading-tight">
              {product.name}
            </div>
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

            {addCartButton ? (
              <button
                className="w-full py-4 rounded-full bg-[#D6001C] text-white text-lg font-medium transition-transform active:scale-95 mb-3 opacity-75 cursor-not-allowed"
                disabled={addCartButton}
              >
                Added to Cart
              </button>
            ) : (
              <button
                className="w-full py-4 rounded-full bg-[#D6001C] text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
                disabled={addCartButton}
                onClick={() => {
                  dispatch(addToCart({ ...product }));
                  notify();
                  setAddCartButton(true);
                }}
              >
                Add to Cart
              </button>
            )}
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
  return {
    props: {
      product: product[0],
    },
  };
};
