import React from "react";
import Link from "next/link";

const ProductCard = ({ id, name, price, image }) => {
  return (
    <Link
      href={`/product/${id}`}
      className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
    >
      <img src={image} className="w-full bg-gray-50" alt="Product Image" />
      <div className="p-4 text-black/[0.9] ">
        <h2 className="text-lg font-medium ">{name}</h2>
        <div className="flex items-center text-black/[0.5]">
          <p className="mr-2 text-lg font-semibold ">&#8377;{price}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
