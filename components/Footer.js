import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const footerColumn1 = [
  { id: 1, name: "Find a store" },
  { id: 2, name: "Become a partner" },
  { id: 3, name: "Send us feedback" },
];

const footerColumn2 = [
  { id: 1, name: "Order Status" },
  { id: 2, name: "Delivery" },
  { id: 3, name: "Returns" },
  { id: 4, name: "Payment Options" },
  { id: 5, name: "Contact Us" },
];

const footerColumn3 = [
  { id: 1, name: "News" },
  { id: 2, name: "Careers" },
  { id: 3, name: "Investors" },
  { id: 4, name: "Sustainability" },
];

const Footer = () => {
  return (
    <footer className="bg-[#D6001C] text-white py-14 ">
      <div className="w-full max-w-[1280px] px-5 md:px-10 mx-auto flex justify-between flex-col md:flex-row gap-[50px] md:gap-0">
        <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row">
          <div className="flex flex-col gap-3 shrink-0 ">
            {footerColumn1.map((data) => {
              return (
                <React.Fragment key={data.id}>
                  <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                    {data.name}
                  </div>
                </React.Fragment>
              );
            })}
          </div>

          <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] shrink-0">
            <div className="flex flex-col gap-3">
              <div className="font-oswald font-medium uppercase text-sm">
                get help
              </div>
              {footerColumn2.map((data) => {
                return (
                  <React.Fragment key={data.id}>
                    <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                      {data.name}
                    </div>
                  </React.Fragment>
                );
              })}
            </div>

            <div className="flex flex-col gap-3">
              <div className="font-oswald font-medium uppercase text-sm">
                About nike
              </div>
              {footerColumn3.map((data) => {
                return (
                  <React.Fragment key={data.id}>
                    <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                      {data.name}
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 justify-center md:justify-start">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#D6001C] hover:bg-white/[0.5] cursor-pointer">
            <FaFacebookF size={20} />
          </div>
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#D6001C] hover:bg-white/[0.5] cursor-pointer">
            <FaTwitter size={20} />
          </div>
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#D6001C] hover:bg-white/[0.5] cursor-pointer">
            <FaYoutube size={20} />
          </div>
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#D6001C] hover:bg-white/[0.5] cursor-pointer">
            <FaInstagram size={20} />
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
