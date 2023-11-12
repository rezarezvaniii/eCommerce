import React from 'react';
import laptopimgproduct from "../assets/picture/image 66.png"
import sabadbuy from "../assets/picture/Group 67.svg"
import gmailimg from "../assets/picture/Group 107.svg"
import chartgroup from "../assets/picture/Group 109.svg"
import heartgroup from "../assets/picture/Group 112.svg"
import starpointnull from "../assets/picture/Star 10.svg";
import starpoint from "../assets/picture/Star 7.svg"








const LaptopInfoCard = () => {
    return (
        <>
            <div className='flex shadow-lg pb-10 px-10 mt-12'>


                <div className='w-4/12'>

                    <img src={laptopimgproduct} alt="" />

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

                </div>

                <div className='w-8/12 '>

                    <p className='font-Poppins-Light text-[12px] mt-10'>SKU D5515AI</p>
                    <div className='w-full flex '>
                        <div className='w-1/2 flex flex-col gap-5 '>
                            <p className='font-Poppins-Regular text-[13px] mt-5'>
                                MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop
                            </p>
                            <p className='font-Poppins-Regular text-[14px] '>
                                $499.00
                                <span className='font-Poppins-SemiBold text-[18px] '>
                                    $499.00
                                </span>
                            </p>
                        </div>

                        <div className='w-1/2 flex flex-col pt-5 ps-5'>
                            <div className='flex justify-evenly w-10/12'>
                                <p className='w-5/12 '>CPU</p>
                                <p className='w-5/12 '>N/A</p>
                            </div>
                            <div className='flex justify-evenly bg-[#F5F7FF] w-10/12'>
                                <p className='w-5/12 '>Featured</p>
                                <p className='w-5/12 '>N/A</p>
                            </div>
                            <div className='flex justify-evenly w-10/12'>
                                <p className='w-5/12 '>I/O Ports</p>
                                <p className='w-5/12 '>N/A</p>
                            </div>

                        </div>
                    </div>

                    <div className='flex w-full justify-between mt-10'>
                        <button className='text-[#0156FF] border-2 border-[#0156FF] rounded-full py-2 px-4 font-Poppins-SemiBold text-sm flex items-center gap-2'>
                            <img src={sabadbuy} alt="" />
                            Add To Cart
                        </button>

                        <div className='flex gap-2'>
                            <img src={gmailimg} alt="" />
                            <img src={chartgroup} alt="" />
                            <img src={heartgroup} alt="" />
                        </div>
                    </div>







                </div>
            </div>
        </>
    );
}

export default LaptopInfoCard;