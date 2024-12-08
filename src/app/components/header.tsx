
import React from 'react'

import { Heart, Mail, PhoneCall, Search, ShoppingCart, User } from 'lucide-react';
import Link from 'next/link'


export default function Header() {
  return (
    <>
      <header>

        <div className=" w-full h-[44px] py-2 px-[136px] bg-[#7E33E0] text-white flex items-center justify-between">

          <div className="flex items-center gap-2.5">
            <div className="mr-4">
            </div>
            <Mail size={16} />
            <span className="text-[16px] font-sans">mhhasanul@gmail.com</span>
          </div>


          <div className="py-2 px-4 flex items-center justify-center gap-3 font-[16px]font-family:JosefinSans">
            <div className="hidden md:flex space-x-4">
            </div>
            <PhoneCall size={16} />
            <span className="text-[16px] font-sans">(12345)67890</span>
          </div>

          <div className="flex items-center space-x-4 font-sans">
            <select className="bg-transparent text-sm border-none focus:outline-none">
              <option>English</option>
              <option>Spanish</option>
            </select>
            <select className="bg-transparent text-sm border-none focus:outline-none">
              <option>USD</option>
              <option>EUR</option>
            </select>
            <div className='flex justify-between items-center gap-1'>
              <Link href={"login"} className="text-sm text-white text-[16px] gap-1">Login</Link>
              < User size={20} />
            </div>

            <div className='flex justify-between items-center gap-1'>
              <Link href={"login"} className="text-sm text-white text-[16px] gap-1">Wishlist</Link>
              <Heart size={20} />
            </div>

            <button aria-label="Cart" className="text-sm">
              <ShoppingCart />
            </button>
          </div>
        </div>

        <div className='flex flex-col md:flex-row w-full   md:w-[1170px] mt-[30px] px-4 md:px-16 items-center max-w-screen-xl mx-auto  '>
          <h2 className='font-bold mr-16  font-inter text-[#000000] text-center md:text-left  text-3xl md:text-[24px]  md:w-auto'>
            Hekto
          </h2>

          <ul className='flex flex-col md:flex-row w-full md:w-auto justify-center md:justify-between gap-4 md:gap-[48px] text-[#000000]'>
            <Link href={"/"} className='font-poppins text-[16px] text-[#FB2E86] font-bold text-center md:text-left w-[48px] h-[24px] '>
              <select name='' id='' className='  text-center mr-10 '>
                <option value=""> Home</option>
              </select>
            </Link>
            <Link href={"/"} className='font-poppins text-[16px] font-bold text-center md:text-left w-[66px] h-[24px] '>Pages</Link>
            <Link href={"/"} className='font-poppins text-[16px] font-bold text-center md:text-left w-[48px] h-[24px] '>Product</Link>
            <Link href={"/"} className='font-poppins text-[16px] font-bold text-center md:text-left w-[61px] h-[24px] '>Blog</Link>
            <Link href={"/"} className='font-poppins text-[16px] font-bold text-center md:text-left w-[61px] h-[24px] '>Shop</Link>
            <Link href={"/"} className='font-poppins text-[16px] font-bold text-center md:text-left w-[61px] h-[24px] '>Contact</Link>

          </ul>

          <div className='flex gap-2 mt-4 md:mt-0'>
            <button className='flex items-center w-full ml-14 mr-11 md:w-[180px] h-[38px] rounded-[4px] pl-[20px] pt-[7px] pb-[7px] pr-[12px] gap-[7px] bg-white'>
              <input
                type='text'
                className='font-poppins text-[13px] font-normal w-[125px] h-[18px] opacity-[50%] border-2 border-gray-500 text-[#000000]' />
              <Search className='w-[20px] h-[16px] text-white bg-[#FB2E86]' />
            </button>
          </div>
        </div>
      </header>

    </>
  )
}

