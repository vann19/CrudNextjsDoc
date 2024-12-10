"use client";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";

const Choose = () => {
  return (
    <div className="pt-24 pb-16">
      {/* Defined Grid */}
      <div className="w-[95%] sm:w-[80%] mx-auto items-center grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* image content */}
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <Image src="/images/penduduk-2.jpg" alt="Image" width={700} height={700} className="object-contain rounded-lg " />
        </div>
        {/* Text Content */}
        <div className="p-6">
          <h1 className="text-base font-semibold text-orange-500">Audience tracking and insights</h1>
          <h1 className="mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">Powerfull Analytics tools that put you in controll and are fully customizable.</h1>
          <p className="mt-4 text-gray-600 text-sm font-medium  leading-[2rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error hic neque officiis ullam omnis numquam saepe dolorum a animi nihil! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint molestiae fugiat tempora quisquam
            quas nulla qui quis ea id ut?
          </p>
          <ul className="mt-7 space-y-2 text-gray-800">
            <li className="flex items-center font-semibold">
              <FaCheckCircle className="text-green-500 mr-2" />
              Chat Prompt Module Supoorts
            </li>
            <li className="flex items-center font-semibold">
              <FaCheckCircle className="text-green-500 mr-2" />
              Enjoy Unlimited feature by paid plan
            </li>
            <li className="flex items-center font-semibold">
              <FaCheckCircle className="text-green-500 mr-2" />
              Manage Unlimited conversation
            </li>
          </ul>
          <button
            className="mt-8 px-8 py-3 bg-gray-100 text-gray-800 font-semibold rounded-full hover:bg-orange-400 transition-all duration-200
                hover:text-white"
          >
            Explore More &rarr;{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Choose