import React from "react";
import CartItem from "@/components/CartItem";
import products from "../components/products.json";
import Image from "next/image";
import Link from "next/link";

const Cart = () => {
  return (
    <div className="w-full md:py-20">
      <div className="w-full max-w-[1280px] px-5 md:px-10 mx-auto">
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Shopping Cart
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 py-10">
          <div className="flex-[2]">
            <div className="text-lg font-bold">Cart Items</div>
            <CartItem products={products} />
            <CartItem products={products} />
            <CartItem products={products} />
          </div>
          <div className="flex-[1]">
            <div className="text-lg font-bold">Summary</div>

            <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
              <div className="flex flex-col justify-between">
                <div className="flex justify-between">
                  <div className="uppercase text-md md:text-lg font-medium text-black">
                    Subtotal
                  </div>
                  <div className="text-md md:text-lg font-medium text-black">
                    &#8377;48000
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="uppercase text-md md:text-lg font-medium text-black">
                    Delivery
                  </div>
                  <div className="text-md md:text-lg font-medium text-black">
                    &#8377;0
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="uppercase text-md md:text-lg font-medium text-black">
                    Total
                  </div>
                  <div className="text-md md:text-lg font-medium text-black">
                    &#8377;48000
                  </div>
                </div>
              </div>
            </div>
            <button className="w-full py-4 rounded-full bg-[#D6001C] text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center">
              Checkout
            </button>
          </div>
        </div>

        {/* <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
          <Image
            src="/ec1.jpg"
            width={500}
            height={500}
            className="w-[300px] md:w-[400px]"
            alt="Empty Cart Image"
          />
          <span className="text-xl font-bold">Your cart is empty</span>
          <span className="text-center mt-4">
            Looks like you have not added anything in your cart.
            <br />
            Go ahead and explore top categories.
          </span>
          <Link
            href="/"
            className="py-4 px-8 rounded-full bg-[#D6001C] text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
          >
            Continue Shopping
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Cart;
