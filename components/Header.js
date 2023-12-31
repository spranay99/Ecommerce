import React from "react";
import Link from "next/link";
import Menu from "./Menu";

import { BsCart } from "react-icons/bs";

const Header = () => {
  return (
    <header
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300`}
    >
      <div className="w-full max-w-[1280px] px-5 md:px-10 mx-auto h-[60px] flex justify-between items-center">
        <Link href="/">
          <img src="/Air-Jordan.jpeg" className="w-[40px] md:[60px]" />
        </Link>

        <Menu />

        <Link href="/cart">
          <div className="flex items-center gap-2 text-black">
            <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
              <BsCart className="text-[15px] md:text-[20px] " />
              <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-[#D6001C] absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                5
              </div>
            </div>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
