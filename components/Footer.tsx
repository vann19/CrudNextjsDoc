import React from 'react'
import Link from 'next/link';
import {  FaInstagram, FaMapMarkedAlt, } from 'react-icons/fa';
import { SiFiverr, SiGmail } from 'react-icons/si';
import Image from 'next/image';
const Footer = () => {
  return (
    <div className="bg-white py-8">
      <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Logo and descript */}
          <div className='flex flex-col '>
            {/* logo */}
            <h1 className="text-xl md:text-3xl font-extrabold ">
              <Image src="/images/bar.png" alt="logo" width={50} height={50} className="object-contain"/>
              BPS
            </h1>
            {/* descript */}
            <p className="mt-4 text-sm font-medium leading-[2rem] w-[80%] text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit.</p>
          </div>
          {/* About us links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">About us</h3>
            <ul className="mt-4 space-y-4 text-sm font-semibold text-gray-500">
              <li>Support Center</li>
              <li>Costumer Support</li>
              <li>About us</li>
              <li>Copyright</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          {/* Our Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Our Information</h3>
            <ul className="mt-4 space-y-4 text-sm font-semibold text-gray-500">
              <li>Support Center</li>
              <li>Costumer Support</li>
              <li>About us</li>
              <li>Copyright</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Contact Info</h3>
            <ul className="mt-4 space-y-4 text-sm font-semibold text-gray-500">
              <li className="flex items-center">
                <FaMapMarkedAlt className="mr-2" />
                Indonesia, Yogyakarta
              </li>
              <li className="flex items-center ">
                <SiFiverr className="mr-2 " />
                BPSWakanda
              </li>
              <li className="flex items-center">
                <FaInstagram className="mr-2" />
                @wakanda_
              </li>
              <li className="flex items-center">
                <SiGmail className="mr-2" />
                Wakandaforever@gmail.com
              </li>
            </ul>
          </div>
        </div>
        {/* Bottom Section */}
        <div className='mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm'>
          <p className='text-center md:text-left'>
            Copyright Badan Pusat Statistik (BPS) Pemerintah Wakanda
          </p>
          <div className='flex items-center space-x-4 mt-4 md:mt-0'>
            <span>Social : </span>
            <Link href="#" className='text-gray-500 hover:text-gray-800'>
            <FaInstagram />
            </Link>
            <Link href="#" className='text-gray-500 hover:text-gray-800'>
            <SiFiverr />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer