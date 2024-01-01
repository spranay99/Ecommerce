import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import Image from "next/image";
import { removeFromCart } from "@/store/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
        <Image width={100} height={100} src={item.image} alt={item.name} />
      </div>
      <div className="w-full flex flex-col my-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
            {item.name}
          </div>
          <div className="text-sm md:text-md font-bold text-black/[0.5]">
            MRP : &#8377;{item.price}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between my-auto">
        <RiDeleteBin6Line
          className="cursor-pointer text-[#D6001C] hover:opacity-75 text-[16px] md:text-[20px]"
          onClick={() => dispatch(removeFromCart({ id: item.id }))}
        />
      </div>
    </div>
  );
};

export default CartItem;
