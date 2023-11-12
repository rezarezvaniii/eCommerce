import React from 'react';
import tickgreenIcon from "../assets/picture/Group 132.svg"
import product1Img from "../assets/picture/image 29.png"
import starpointnull from "../assets/picture/Star 10.svg";
import starpoint from "../assets/picture/Star 7.svg"
import laptop1img from "../assets/picture/image 65.png"
import { NavLink } from 'react-router-dom';

const LaptopCard = (props) => {



  return (
    <>


      <div className='w-[20%] px-6 pb-4  mt-4 cursor-pointer'>
    <NavLink to={`/catalog/${props.id}`}>
        <p className='flex items-center gap-1 my-1 font-Poppins-Regular text-[10px] text-[#78A962]'>
          <img className='' src={tickgreenIcon} alt="" />
          is stock
        </p>
        <img src={props.picture} alt="" />
        <div className='flex gap-3'>
          <div className='flex  items-center'>
            <img src={starpoint} alt="" />
            <img src={starpoint} alt="" />
            <img src={starpoint} alt="" />
            <img src={starpoint} alt="" />
            <img src={starpointnull} alt="" />
          </div>
          <p className='text-[#A2A6B0] font-Poppins-Regular text-xs'>Reviews (4)</p>

        </div>
        <p className='font-Poppins-Regular text-[13px] mt-2'>
          EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...
        </p>
        <p className='line-through font-Poppins-Regular text-[14px] text-[#666] mt-4'>
          ${props.price}
        </p>

        <p className='font-Poppins-SemiBold text-lg '>
        ${props.price}
        </p>
    </NavLink>

      </div>
    </>
  );
}

export default LaptopCard;