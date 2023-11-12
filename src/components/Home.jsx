import React from 'react';
import Header from './Header';
import Footer from "./Footer"
import DiscriptionHead from './DiscriptionHead';
import sliderpng1 from "../assets/picture/image 26.png"
import ProductCard from './ProductCard';
import zipImgicon from "../assets/picture/primary 1.png"
import imageheadproduct from "../assets/picture/image 30.png"
import imageheadproduct1 from "../assets/picture/image 35.png"
import imageheadproduct2 from "../assets/picture/image 40.png"
import imageheadproduct3 from "../assets/picture/image 50.png"
import brandImg1 from "../assets/picture/image 33.png"
import brandImg2 from "../assets/picture/Frame 34.png"
import brandImg3 from "../assets/picture/image 36.png"
import brandImg4 from "../assets/picture/Frame 37.png"
import brandImg5 from "../assets/picture/Frame 38.png"
import brandImg6 from "../assets/picture/Frame 39.png"
import brandImg7 from "../assets/picture/Frame 41.png"
import RelationshipIcon1 from "../assets/picture/bx_bx-support25.svg"




const Home = () => {
  return (
    <>
      {/* <Header/> */}
      <div className='px-[258px] flex flex-col mb-16'>
        <img src={sliderpng1} alt="" />
        <div className='flex justify-between mt-8'>
          <p className='font-Poppins-SemiBold text-[22px]'>New Products</p>
          <p className='text-[#0156FF] text-[13px] font-Poppins-Regular underline'>See All New Products</p>
        </div>

        <div className='flex'>

          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />



        </div>

        <div className='flex justify-center gap-3 bg-[#F5F7FF] h-16 items-center'>
          <img src={zipImgicon} alt="" />
          <span className='h-7 w-[3px] rounded-3xl bg-[#00AEB8] '>
          </span>
          <p className='flex items-center gap-1 text-lg font-Poppins-Regular text-[#272560] '>

            <span className='font-Poppins-SemiBold '>
              own

            </span>

            it now, up to 6 months interest free

            <span className='text-sm font-Poppins-Regular underline cursor-pointer '>
              learn more

            </span>
          </p>
        </div>

        <div className='flex mt-4'>

          <div className='w-2/12 relative  mt-4 '>
            <div className='w-full  h-full top-0 flex items-center justify-center'>
              <p className='w-1/2 text-center font-Poppins-Bold text-[22px] text-white'>

                Custome
                Builds

              </p>
              <p className='text-[13px] absolute bottom-4 text-white underline font-Poppins-Regular'>
                See All Products
              </p>

            </div>

            <img className='w-full h-full top-0 -z-30  absolute ' src={imageheadproduct} alt="" />
          </div>

          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />



        </div>


        <div className='flex gap-4 my-6'>
          <p className='font-Poppins-SemiBold text-base text-black border-b-2 border-[#0156FF]'>MSI GS Series</p>
          <p className='font-Poppins-SemiBold text-base text-[#838383] '>MSI GT Series</p>
          <p className='font-Poppins-SemiBold text-base text-[#838383] '>MSI GL Series</p>
          <p className='font-Poppins-SemiBold text-base text-[#838383] '>MSI GE Series</p>
        </div>

        <div className='flex mt-4'>

          <div className='w-2/12 relative  mt-4 '>
            <div className='w-full  h-full top-0 flex items-center justify-center'>
              <p className='w-1/2 text-center font-Poppins-Bold text-[22px] text-white'>

                MSI
                Laptops

              </p>
              <p className='text-[13px] absolute bottom-4 text-white underline font-Poppins-Regular'>
                See All Products
              </p>

            </div>

            <img className='w-full h-full top-0 -z-30  absolute ' src={imageheadproduct3} alt="" />
          </div>

          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />



        </div>

        <div className='flex gap-4 my-6'>
          <p className='font-Poppins-SemiBold text-base text-black border-b-2 border-[#0156FF]'>MSI GS Series</p>
          <p className='font-Poppins-SemiBold text-base text-[#838383] '>MSI GT Series</p>
          <p className='font-Poppins-SemiBold text-base text-[#838383] '>MSI GL Series</p>
          <p className='font-Poppins-SemiBold text-base text-[#838383] '>MSI GE Series</p>
        </div>

        <div className='flex mt-4'>

          <div className='w-2/12 relative  mt-4 '>
            <div className='w-full  h-full top-0 flex items-center justify-center'>
              <p className='w-1/2 text-center font-Poppins-Bold text-[22px] text-white'>

                Desktops
              </p>
              <p className='text-[13px] absolute bottom-4 text-white underline font-Poppins-Regular'>
                See All Products
              </p>

            </div>

            <img className='w-full h-full top-0 -z-30  absolute ' src={imageheadproduct1} alt="" />
          </div>

          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />



        </div>

        <div className='flex mt-4'>

          <div className='w-2/12 relative  mt-4 '>
            <div className='w-full  h-full top-0 flex items-center justify-center'>
              <p className='w-1/2 text-center font-Poppins-Bold text-[22px] text-white'>
                Gaming
                Monitors

              </p>
              <p className='text-[13px] absolute bottom-4 text-white underline font-Poppins-Regular'>
                See All Products
              </p>

            </div>

            <img className='w-full h-full top-0 -z-30  absolute ' src={imageheadproduct2} alt="" />
          </div>

          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />



        </div>

        <div className='flex justify-evenly'>
          <img src={brandImg1} alt="" />
          <img src={brandImg2} alt="" />
          <img src={brandImg3} alt="" />
          <img src={brandImg4} alt="" />
          <img src={brandImg5} alt="" />
          <img src={brandImg6} alt="" />
          <img src={brandImg7} alt="" />

        </div>

        <p className='font-Poppins-SemiBold text-[22px]'>
          Follow us on Instagram for News, Offers & More
        </p>

        <div className='mt-4 flex flex-wrap '>
          <DiscriptionHead />
          <DiscriptionHead />
          <DiscriptionHead />
          <DiscriptionHead />
          <DiscriptionHead />
          <DiscriptionHead />
          <DiscriptionHead />
          <DiscriptionHead />
          <DiscriptionHead />

        </div>

        <div className='w-full flex justify-center mt-6'>
          <div className='w-5/6 py-[52px] px-[123px] bg-[#F5F7FF] '>
            <div className='flex gap-6'>
              <p className='font-normal text-8xl '>
                ‘’
              </p>
              <p className='font-Poppins-Regular text-lg '>
                My first order arrived today in perfect condition.  From the time I sent a question about the
                item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.
                I look forward to shopping on your site in the future and would highly recommend it.

              </p>

            </div>
            <p className='font-Poppins-Regular text-sm text-end '>
              - Tama Brown
            </p>
            <div className='mt-7 flex justify-between '>
              <button className='font-Poppins-SemiBold text-sm text-[#0156FF] rounded-full border-2 border-[#0156FF] py-2 px-6'>
                - Tama Brown
              </button>
            </div>

          </div>


        </div>


        <div className='flex justify-evenly mt-6'>
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




      </div>

      <Footer />


      



    </>
  );
}

export default Home;