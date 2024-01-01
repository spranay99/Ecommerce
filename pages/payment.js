import Link from "next/link";
import React from "react";

const Payment = () => {
  return (
    <>
      <div className="w-full md:pt-20">
        <div className="w-full max-w-[1280px] px-5 md:px-10 mx-auto">
          <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
            <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
              Card payment
            </div>
          </div>
        </div>
      </div>
      <div className="md:pb-20">
        <div className="credit-card max-w-[400px] sm:w-auto shadow-lg mx-auto rounded-xl bg-white">
          <div className="flex flex-col justify-center items-center">
            <img
              className="w-full h-auto"
              src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/svg-cards/card-visa-front.png"
              alt="front credit card"
            />
          </div>
          <ul className="flex flex-row-reverse mr-5">
            <li className="mx-2">
              <img
                className="w-14"
                src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/verified-by-visa.png"
                alt=""
              />
            </li>
            <li className="ml-5">
              <img
                className="w-7"
                src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/mastercard-id-check.png"
                alt=""
              />
            </li>
          </ul>
          <div className="mt-4 p-4">
            <div className="my-3">
              <input
                type="text"
                className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                placeholder="Card holder"
                maxLength="20"
              />
            </div>
            <div className="my-3">
              <input
                type="text"
                className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                placeholder="Card number"
                maxLength="16"
              />
            </div>
            <div className="my-3 flex flex-col">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <select className="form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none">
                  <option disabled>MM</option>
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  <option value="05">05</option>
                  <option value="06">06</option>
                  <option value="07">07</option>
                  <option value="08">08</option>
                  <option value="09">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
                <select className="form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none">
                  <option disabled>YY</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2021">2027</option>
                  <option value="2022">2028</option>
                  <option value="2023">2029</option>
                </select>
                <input
                  type="text"
                  className="block w-full col-span-2 px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                  placeholder="Security code"
                  maxLength="3"
                />
              </div>
            </div>
          </div>
          <Link href="/success">
            <div className="p-5">
              <button className="w-full py-4 rounded-full bg-[#D6001C] text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center">
                Pay Now
              </button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Payment;
