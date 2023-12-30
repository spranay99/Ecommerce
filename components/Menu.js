import React from "react";
import Link from "next/link";

const data = [
  { id: 1, name: "Trending", url: "/" },
  { id: 2, name: "Men", url: "/" },
  { id: 3, name: "Women", url: "/" },
  { id: 4, name: "Kids", url: "/" },
  { id: 5, name: "Sale", url: "/" },
  { id: 6, name: "Find Store", url: "/" },
];

const Menu = () => {
  return (
    <ul className="hidden md:flex items-center gap-8 font-medium text-black">
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <li className="cursor-pointer hover:text-[#D6001C]">
              <Link href={item.url}>{item.name}</Link>
            </li>
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default Menu;
