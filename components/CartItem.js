import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const CartItem = ({ products }) => {
  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
        <img src={products[0].image} />
      </div>
      <div className="w-full flex flex-col my-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
            {products[0].name}
          </div>

          {/* PRODUCT PRICE */}
          <div className="text-sm md:text-md font-bold text-black/[0.5]">
            MRP : &#8377;{products[0].price}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between my-auto">
        <RiDeleteBin6Line className="cursor-pointer text-[#D6001C] hover:opacity-75 text-[16px] md:text-[20px]" />
      </div>
    </div>
  );
};

export default CartItem;
