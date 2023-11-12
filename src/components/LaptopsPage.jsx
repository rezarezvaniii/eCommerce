import React from 'react';
import LaptopCard from './LaptopCards';
import headimagepng from "../assets/picture/image 61.png"
import brandImg1 from "../assets/picture/image 33.png"
import brandImg2 from "../assets/picture/Frame 34.png"
import brandImg3 from "../assets/picture/image 36.png"
import brandImg4 from "../assets/picture/Frame 37.png"
import brandImg5 from "../assets/picture/Frame 38.png"
import brandImg6 from "../assets/picture/Frame 39.png"
import brandImg7 from "../assets/picture/Frame 41.png"
import cheairImg from "../assets/picture/image 62.png"
import menueFilterimg from "../assets/picture/Frame 64.svg"
import menueFiltersideimg from "../assets/picture/Frame 63.svg"
import closeFiltericon from "../assets/picture/Group 108.svg"
import Footer from './Footer';
import RelationshipIcon1 from "../assets/picture/bx_bx-support25.svg"
import tickgreenIcon from "../assets/picture/Group 132.svg"
import product1Img from "../assets/picture/image 29.png"
import starpointnull from "../assets/picture/Star 10.svg";
import starpoint from "../assets/picture/Star 7.svg"
import laptop1img from "../assets/picture/image 65.png"
import laptopimgproduct from "../assets/picture/image 66.png"
import sabadbuy from "../assets/picture/Group 67.svg"
import gmailimg from "../assets/picture/Group 107.svg"
import chartgroup from "../assets/picture/Group 109.svg"
import heartgroup from "../assets/picture/Group 112.svg"
import LaptopInfoCard from './LaptopInfoCard';

const LaptopPage = () => {
  return (
    <>

      <div className='px-[258px] '>
        <img src={headimagepng} alt="" />

        <p className='font-Poppins-SemiBold text-[32px] mt-6'>
          MSI PS Series (20)
        </p>


        <div className='w-full flex'>

          <div className='w-2/12 '>
            <p className='font-Poppins-SemiBold text-sm text-center my-3'>Back</p>
            <div className='w-full bg-[#F5F7FF] p-3'>
              <p className='font-Poppins-Bold text-base text-center '>Filter</p>

              <div className='flex justify-center mt-3'>
                <button className='font-Poppins-SemiBold text-[14px] text-[#A2A6B0] border-[#A2A6B0] border-2 py-2  rounded-full w-8/12'>
                  Clear Filter
                </button>

              </div>

              <p className='font-Poppins-SemiBold text-sm mt-3'>
                Category
              </p>

              <div className='flex flex-col gap-2  mt-3'>

                <p className='font-Poppins-Regular text-[13px] flex justify-between'>
                  CUSTOM PCS
                  <span>
                    15
                  </span>
                </p>
                <p className='font-Poppins-Regular text-[13px] flex justify-between'>
                  MSI ALL-IN-ONE PCS
                  <span>
                    45
                  </span>
                </p>
                <p className='font-Poppins-Regular text-[13px] flex justify-between'>
                  HP/COMPAQ PCS
                  <span>
                    1
                  </span>
                </p>

              </div>


              <p className='font-Poppins-SemiBold text-sm mt-3'>
                Price
              </p>

              <div className='flex flex-col gap-2  mt-3'>

                <p className='font-Poppins-Regular text-[13px] flex justify-between'>
                  $0.00 - $1,000.00
                  <span>
                    15
                  </span>
                </p>
                <p className='font-Poppins-Regular text-[13px] flex justify-between'>
                  $2,000.00 - $3,000.00
                  <span>
                    13
                  </span>
                </p>
                <p className='font-Poppins-Regular text-[13px] flex justify-between'>
                  $3,000.00 - $4,000.00
                  <span>
                    19
                  </span>
                </p>
                <p className='font-Poppins-Regular text-[13px] flex justify-between'>
                  $4,000.00 - $5,000.00
                  <span>
                    45
                  </span>
                </p>
                <p className='font-Poppins-Regular text-[13px] flex justify-between'>
                  $5,000.00 - $6,000.00
                  <span>
                    1
                  </span>
                </p>
                <p className='font-Poppins-Regular text-[13px] flex justify-between'>
                  $6,000.00 - $7,000.00
                  <span>
                    1
                  </span>
                </p>
                <p className='font-Poppins-Regular text-[13px] flex justify-between'>
                  $7,000.00 And Above
                  <span>
                    1
                  </span>
                </p>


              </div>

              <p className='font-Poppins-SemiBold text-sm mt-3'>
                Color
              </p>
              <div className='flex gap-2'>
                <div className='w-6 h-6 bg-black rounded-full'>

                </div>
                <div className='w-6 h-6 rounded-full bg-red-500'>

                </div>
              </div>

              <p className='font-Poppins-SemiBold text-sm mt-3'>
                Filter Name
              </p>
              <button className='text-[#0156FF] rounded-full border-2 border-[#0156FF] w-full py-2 mt-3'>
                Apply Filters (2)
              </button>



            </div>


            <div className='bg-[#F5F7FF] mt-3 p-3'>
              <p className='font-Poppins-Bold text-base text-center '>Brands</p>

              <button className='text-[#A2A6B0] border-[#A2A6B0] border-2 rounded-full py-2 w-full mt-3'>
                All Brands
              </button>

              <div className='flex flex-wrap mt-3'>

                <img className='w-1/2 bg-white' src={brandImg1} alt="" />
                <img className='w-1/2 bg-white' src={brandImg2} alt="" />
                <img className='w-1/2 bg-white' src={brandImg3} alt="" />
                <img className='w-1/2 bg-white' src={brandImg4} alt="" />
                <img className='w-1/2 bg-white' src={brandImg5} alt="" />
                <img className='w-1/2 bg-white' src={brandImg6} alt="" />
                {/* <img className='w-1/2 bg-white' src={brandImg7} alt="" /> */}
              </div>

            </div>


            <div className='w-full bg-[#F5F7FF] p-3 mt-3'>
              <p className='font-Poppins-Bold text-base mt-3 text-center'>
                Compare Products
              </p>
              <p className='font-Poppins-Regular text-[13px] mt-5  text-center'>
                You have no items to compare.
              </p>

            </div>

            <div className='w-full bg-[#F5F7FF] p-3 mt-3'>
              <p className='font-Poppins-Bold text-base mt-3 text-center'>
                My Wish List
              </p>
              <p className='font-Poppins-Regular text-[13px] mt-5  text-center'>
                You have no items in your wish list.
              </p>

            </div>

            <div className='w-full'>
              <img src={cheairImg} alt="" />
            </div>






          </div>

          <div className='w-10/12 '>

            <div className='w-full flex justify-between items-center'>
              <p className='font-Poppins-Regular text-[13px] '>Items 1-35 of 61</p>
              <div className='flex gap-4'>
                <div className='border-2 border-[#CACDD8] py-2 px-4'>
                  <p className='text-[13px] text-[#CACDD8] font-Poppins-SemiBold flex gap-1'>
                    Sort By:
                    <span className='text-black'>

                      Position
                    </span>
                  </p>
                </div>
                <div className='border-2 border-[#CACDD8] py-2 px-4'>
                  <p className='text-[13px] text-[#CACDD8] font-Poppins-SemiBold flex gap-1'>
                    Show:
                    <span className='text-black'>
                      35 per page
                    </span>
                  </p>
                </div>
                <img src={menueFilterimg} alt="" />
                <img src={menueFiltersideimg} alt="" />


              </div>
            </div>

            <div className='w-full flex gap-4 '>
              <div className='border-2 border-[#CACDD8] py-2 px-4 flex gap-2 ms-4'>
                <p className='text-[13px] text-[#CACDD8] font-Poppins-SemiBold flex gap-1'>
                  HP/COMPAQ PCS
                  <span className='text-black'>
                    (24)
                  </span>
                </p>
                <img src={closeFiltericon} alt="" />
              </div>
              <div className='border-2 border-[#CACDD8] py-2 px-4 flex gap-2'>
                <p className='text-[13px] text-[#CACDD8] font-Poppins-SemiBold flex gap-1'>
                  CUSTOM PCS
                  <span className='text-black'>
                    (24)
                  </span>
                </p>
                <img src={closeFiltericon} alt="" />
              </div>

              <div className='border-2 border-[#CACDD8] py-2 px-4 flex gap-2'>
                <p className='text-[13px] text-black font-Poppins-SemiBold flex gap-1'>
                  Clear All

                </p>

              </div>
            </div>

            <div className='w-full '>






              <div className='w-full px-6 pb-4  mt-4 '>
                <div className='flex justify-end'>
                  <p className='flex items-center gap-1 my-1  font-Poppins-Regular text-[10px] text-[#78A962]'>
                    <img className='' src={tickgreenIcon} alt="" />
                    is stock
                  </p>

                </div>



                <div className='flex shadow-lg pb-10 px-10'>


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


                <LaptopInfoCard />
                <LaptopInfoCard/>
                <LaptopInfoCard/>
                <LaptopInfoCard/>

              </div>











            </div>





          </div>

        </div>
      </div>



    </>
  );
}

export default LaptopPage;