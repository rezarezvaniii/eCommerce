import React from 'react';
import headtitleImg from "../assets/picture/image 51.png"

const DiscriptionHead = (props) => {
    return ( 
        <>
        <div className='flex flex-col w-2/12 gap-2 p-2'>
            <img src={headtitleImg} alt="" />

            <p className='text-black text-xs font-Poppins-Regular text-center px-6'>
            If you’ve recently made a desktop PC or laptop purchase, you might want to consider
             adding peripherals to enhance
             your home office setup, your gaming rig, or your business workspace...
             
            </p>
            <p className='font-Poppins-Regular text-[10px] text-[#A2A6B0] text-center'>
            01.09.2020
            </p>
          </div>
        </>
     );
}
 
export default DiscriptionHead;