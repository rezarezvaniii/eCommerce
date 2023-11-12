import React from 'react';
import { Outlet, Link, NavLink } from 'react-router-dom';
import instaIcon from "../assets/picture/ant-design_instagram-filled.svg";
import faceboockIcon from "../assets/picture/ant-design_facebook-filled.svg";
import LogoIcon from "../assets/picture/1 Logo.svg"
import searchSvg from "../assets/picture/gg_search.svg"
import profileSvg from "../assets/picture/Ellipse 8.png"
import shopeSvg from "../assets/picture/jam_shopping-cart.svg"



const Header = () => {
  return (<>
    <div className='h-11 w-full bg-black px-[258px] flex '>
      <div className='w-3/12 h-full flex items-center font-semibold text-xs'>
        <p className='text-[#A2A6B0] '>
          Mon-Thu
        </p>
        <p className='font-semibold text-white text-xs ms-2'>
          9:00 AM - 5:30 PM
        </p>
      </div>
      <div className='w-6/12 h-full flex items-center justify-center '>
        <p className='text-[#A2A6B0] font-semibold text-xs'>Visit our showroom in 1234 Street Adress City Address, 1234
          <span className='font-semibold text-xs text-white ms-2'>
            Contact Us
          </span>
        </p>
      </div>
      <div className='w-3/12 h-full flex items-center justify-end gap-2'>
        <p className='font-semibold font-Poppins text-xs text-white'>
          Call Us: (00) 1234 5678
        </p>
        <img src={instaIcon} alt="" />
        <img src={faceboockIcon} alt="" />

      </div>

    </div>

    <div className='px-[258px] flex h-20 '>
      <div className='flex items-center gap-6 w-9/12 h-full'>
        <img src={LogoIcon} alt="" />
        <NavLink to={"/home"}>
          <p className='font-Poppins-SemiBold text-sm cursor-pointer'>
            Home
          </p>
        </NavLink>
        <NavLink to={"/catalog"}>
          <p className='font-Poppins-SemiBold text-sm cursor-pointer'>
            Product
          </p>
        </NavLink>
        <NavLink to={"/laptops"}>
        <p className='font-Poppins-SemiBold text-sm cursor-pointer'>Laptops</p>
        </NavLink>
        <NavLink to={"/pcgaming"}>
        <p className='font-Poppins-SemiBold text-sm cursor-pointer'>PC Parts</p>
        </NavLink>
        <NavLink to={"/contactus"}>
        <p className='font-Poppins-SemiBold text-sm cursor-pointer'>Contact Us</p>
        </NavLink>
        <NavLink to={"/login"}>
        <p className='font-Poppins-SemiBold text-sm cursor-pointer'>LogIn</p>
        </NavLink>

        <p className='font-Poppins-SemiBold text-sm cursor-pointer'>Repairs</p>
        <button className='text-[#0156FF] font-Poppins-SemiBold border-2 border-[#0156FF]  rounded-full py-2 px-6'>Our Deals</button>
      </div>
      <div className='h-full w-3/12 flex items-center gap-5 justify-end'>
        <img src={searchSvg} alt="" />
        <img src={shopeSvg} alt="" />
        <img src={profileSvg} alt="" />
      </div>

    </div>



  </>);
}

export default Header;