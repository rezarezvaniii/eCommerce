import React from 'react';
import { useState } from 'react';
import Footer from './Footer';
import PcInfo1 from "../components/PcGaming/PcInfo1"
import PcInfo2 from "../components/PcGaming/PcInfo2"
import PcInfo3 from "../components/PcGaming/PcInfo3"
import paypalImg from "../assets/picture/Group 120.svg"
import caseImage1 from "../assets/picture/case 9.png"
import gmailimg from "../assets/picture/Group 107.svg"
import chartgroup from "../assets/picture/Group 109.svg"
import heartgroup from "../assets/picture/Group 112.svg"
import zipImgicon from "../assets/picture/primary 1.png"
import RectangleImg1 from "../assets/picture/Rectangle 24.png"
import womanpic from "../assets/picture/image 150.png"
import hardwareImg1 from "../assets/picture/image 126.png";
import hardwareImg2 from "../assets/picture/image 127.png";
import hardwareImg3 from "../assets/picture/image 128.png";
import hardwareImg4 from "../assets/picture/image 129.png";
import RelationshipIcon1 from "../assets/picture/bx_bx-support25.svg"



const PcGaming = () => {

  const [pagepcgaming , setPagepcgaming] = useState(1)


  return (
    <>

      <div className='px-[258px]'>

        <div className='py-5 flex justify-between'>
          <div className='flex gap-5 '>
            <button onClick={()=>setPagepcgaming(1)} className={`${pagepcgaming == 1 ? "border-b-2 border-[#0156FF] text-black": null} font-Poppins-SemiBold text-[14px] text-[#666666] h-fit`}>About Product</button>
            <button onClick={()=>setPagepcgaming(2)} className={`${pagepcgaming == 2 ? "border-b-2 border-[#0156FF] text-black": null} font-Poppins-SemiBold text-[14px] text-[#666666] h-fit`}>Details</button>
            <button onClick={()=>setPagepcgaming(3)} className={`${pagepcgaming == 3 ? "border-b-2 border-[#0156FF] text-black": null} font-Poppins-SemiBold text-[14px] text-[#666666] h-fit`}>Specs</button>
          </div>

          <div className='flex gap-4'>
            <button className='bg-[#0156FF] text-white font-Poppins-SemiBold text-sm rounded-full py-4 px-6 '>
              Add to Cart
            </button>
            <button className='bg-[#FFB800] text-white font-Poppins-SemiBold text-sm rounded-full py-4 px-6 '>
              <img src={paypalImg} alt="" />
            </button>


          </div>

        </div>
      </div>

      <div className='w-full flex '>
        <div className='w-1/2 bg-[#F5F7FF] pb-10'>
          <div className='flex flex-col gap-8 mt-16 ml-80 pe-20'>
            <p className='text-[32px] font-Poppins-Medium '>MSI MPG Trident 3</p>
            <p className='text-[12px] font-Poppins-Regular text-[#0156FF]'>Be the first to review this product</p>
            {pagepcgaming == 1 ?
              <PcInfo1 /> 
            :
            pagepcgaming == 2 ?
            <PcInfo2 /> :
            <PcInfo3 /> 

            }

            <div className='flex justify-between '>
              <p className='font-Poppins-SemiBold text-[12px] '>
                Have a Question?
                <span className='text-[#0156FF] underline ms-2 font-Poppins-Regular'>
                  Contact Us
                </span>
              </p>
              <span className='font-light text-xs '>
                SKU D5515AI
              </span>
            </div>
          </div>
          <p className='font-Poppins-Bold text-sm ms-56 mt-20'>
            + More information
          </p>
        </div>


        <div className='w-1/2 flex flex-col '>

          <div className='pt-10 ps-5 flex gap-10 h-fit'>
            <div className='flex flex-col gap-2 '>
              <img className='cursor-pointer ' src={gmailimg} alt="" />
              <img className='cursor-pointer ' src={chartgroup} alt="" />
              <img className='cursor-pointer ' src={heartgroup} alt="" />
            </div>

            <div>
              <img src={caseImage1} alt="" />
            </div>

          </div>

          <div className='flex ps-10 gap-3 items-center '>
            {/* <img src={zipImgicon} alt="" /> */}
            <img src={zipImgicon} alt="" />
            <span className='h-7 w-[3px] rounded-3xl bg-[#00AEB8] '>
            </span>
            <p className='font-Poppins-Light text-xs w-3/12'>own it now, up to 6 months interest free learn more</p>
          </div>
          <div className='flex gap-4 justify-center items-center h-12 '>
            <div className='w-[10px] h-[10px] rounded-full bg-[#0156FF]'></div>
            <div className='w-[10px] h-[10px] rounded-full bg-[#CACDD8]'></div>
            <div className='w-[10px] h-[10px] rounded-full bg-[#CACDD8]'></div>
          </div>

        </div>



      </div>

      <div className='w-full flex bg-black '>
        <div className='w-1/2 py-36 flex flex-col gap-14 ps-64 z-30 text-white '>
          <p className='font-Poppins-Medium text-[44px]'>
          Outplay the Competittion
          </p>
          <p className='font-Poppins-Light text-[18px] '>
          Experience a 40% boost in computing from last generation. 
          MSI Desktop equips the 10th Gen. Intel® Core™ i7 processor
          with the upmost computing power to bring you an unparalleled gaming experience.
          </p>
          <p className='font-Poppins-Light text-[18px]'>
          *Performance compared to i7-9700. Specs varies by model.
          </p>
        </div>



        <div className='w-1/2 relative'>
            <img className='absolute w-10/12 -left-24 ' src={RectangleImg1} alt="" />
        </div>

      </div>

      <div className='w-full flex bg-[#F5F7FF]'>
        <div className='w-1/2 flex flex-col items-end  justify-center gap-5 pe-5'>
          <div className='w-4/12 bg-white border-2 border-[#CACDD8] rounded-md h-12 flex items-center ps-5'>
            <p className='font-Poppins-Medium text-base'>
              Product Support
            </p>
          </div>
          <div className='w-4/12 bg-white border-2 border-[#CACDD8] rounded-md h-12 flex items-center ps-5'>
            <p className='font-Poppins-Medium text-base'>
            FAQ 
            </p>
          </div>
          <div className='w-4/12 bg-white border-2 border-[#CACDD8] rounded-md h-12 flex items-center ps-5'>
            <p className='font-Poppins-Medium text-base'>
            Our Buyer Guide
            </p>
          </div>
        </div>

        <div className='w-1/2'>

        <img src={womanpic} alt="" />
        </div>


      </div>

      <div className='w-full py-24 bg-black px-[285px] flex flex-col gap-6'>
        <p className='text-[38px] font-Poppins-Medium text-white text-center'>
        Featues
        </p>
        <div className='w-full flex justify-center'>
        <div className='w-4/12'>
        <p className='font-Poppins-Light text-[18px] text-center text-white'>
        The MPG series brings out the best in gamers by allowing full expression in color with advanced RGB lighting control and synchronization.
        </p>

          </div>

        </div>

        <div className='w-full flex '>
        <div className='w-1/4 flex flex-col items-center gap-5 '>
            <div className='w-16 h-16 rounded-full'>
              <img src={hardwareImg1} alt="" />
            </div>
            <p className='text-white font-Poppins-Light text-sm text-center w-9/12'>
            Intel® Core™ i7 processor with the upmost computing power to bring you an unparalleled gaming experience.
            </p>


          </div>
          <div className='w-1/4 flex flex-col items-center gap-5 '>
            <div className='w-16 h-16 rounded-full'>
              <img src={hardwareImg2} alt="" />
            </div>
            <p className='text-white font-Poppins-Light text-sm text-center w-9/12'>
            Intel® Core™ i7 processor with the upmost computing power to bring you an unparalleled gaming experience.
            </p>


          </div>
          <div className='w-1/4 flex flex-col items-center gap-5 '>
            <div className='w-16 h-16 rounded-full'>
              <img src={hardwareImg3} alt="" />
            </div>
            <p className='text-white font-Poppins-Light text-sm text-center w-9/12'>
            Intel® Core™ i7 processor with the upmost computing power to bring you an unparalleled gaming experience.
            </p>


          </div>
          <div className='w-1/4 flex flex-col items-center gap-5 '>
            <div className='w-16 h-16 rounded-full'>
              <img src={hardwareImg4} alt="" />
            </div>
            <p className='text-white font-Poppins-Light text-sm text-center w-9/12'>
            Intel® Core™ i7 processor with the upmost computing power to bring you an unparalleled gaming experience.
            </p>


          </div>
          
        </div>

      </div>



      <div className='flex justify-evenly bg-[#F5F7FF] px-[258px] py-16'>
        <div className='flex flex-col items-center w-2/12'>
          <div className='bg-[#0156FF] w-fit p-[17px] rounded-full'>
            <img src={RelationshipIcon1} alt="" />
          </div>
          <p className='font-Poppins-Bold text-lg mt-6 text-center '>
            Product Support
          </p>
          <p className='mt-3 font-Poppins-Regular text-sm text-center'>
            Up to 3 years on-site warranty available for your peace of mind.
          </p>
        </div>

        <div className='flex flex-col items-center w-2/12'>
          <div className='bg-[#0156FF] w-fit p-[17px] rounded-full'>
            <img src={RelationshipIcon1} alt="" />
          </div>
          <p className='font-Poppins-Bold text-lg mt-6 text-center '>
            Product Support
          </p>
          <p className='mt-3 font-Poppins-Regular text-sm text-center'>
            Up to 3 years on-site warranty available for your peace of mind.
          </p>
        </div>

        <div className='flex flex-col items-center w-2/12'>
          <div className='bg-[#0156FF] w-fit p-[17px] rounded-full'>
            <img src={RelationshipIcon1} alt="" />
          </div>
          <p className='font-Poppins-Bold text-lg mt-6 text-center '>
            Product Support
          </p>
          <p className='mt-3 font-Poppins-Regular text-sm text-center'>
            Up to 3 years on-site warranty available for your peace of mind.
          </p>
        </div>


      </div>


      <Footer />









    </>
  );
}

export default PcGaming;