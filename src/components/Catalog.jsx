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
import laptop1img from "../assets/picture/image 65.png"
import { useState } from 'react';
import { NavLink } from 'react-router-dom';




const Catalog = () => {


  const [afterfilter, setAfterfilter] = useState([
    {"id": 154621 , "price": 550.00, "picture": laptop1img },
    {"id": 154622 , "price": 50.00, "picture": laptop1img },
    {"id": 154623 , "price": 75.00, "picture": laptop1img },
    {"id": 154624 , "price": 499.00, "picture": laptop1img },
    {"id": 154625 , "price": 100.00, "picture": laptop1img },
    {"id": 154626 , "price": 801.00, "picture": laptop1img },
    {"id": 154627 , "price": 750.00, "picture": laptop1img },
    {"id": 154628 , "price": 499.00, "picture": laptop1img },
    {"id": 154629 , "price": 499.00, "picture": laptop1img },
    {"id": 154630 , "price": 320.00, "picture": laptop1img },
    {"id": 154631 , "price": 320.00, "picture": laptop1img },
    {"id": 154632 , "price": 499.00, "picture": laptop1img },
    {"id": 154633 , "price": 650.00, "picture": laptop1img },
    {"id": 154634 , "price": 220.00, "picture": laptop1img },
    {"id": 154635 , "price": 220.00, "picture": laptop1img },
    {"id": 154636 , "price": 220.00, "picture": laptop1img },
  ])

  



  const [products, setProducts] = useState([
    {"id": 154621 , "price": 550.00, "picture": laptop1img },
    {"id": 154622 , "price": 50.00, "picture": laptop1img },
    {"id": 154623 , "price": 75.00, "picture": laptop1img },
    {"id": 154624 , "price": 499.00, "picture": laptop1img },
    {"id": 154625 , "price": 100.00, "picture": laptop1img },
    {"id": 154626 , "price": 801.00, "picture": laptop1img },
    {"id": 154627 , "price": 750.00, "picture": laptop1img },
    {"id": 154628 , "price": 499.00, "picture": laptop1img },
    {"id": 154629 , "price": 499.00, "picture": laptop1img },
    {"id": 154630 , "price": 320.00, "picture": laptop1img },
    {"id": 154631 , "price": 320.00, "picture": laptop1img },
    {"id": 154632 , "price": 499.00, "picture": laptop1img },
    {"id": 154633 , "price": 650.00, "picture": laptop1img },
    {"id": 154634 , "price": 220.00, "picture": laptop1img },
    {"id": 154635 , "price": 220.00, "picture": laptop1img },
    {"id": 154636 , "price": 220.00, "picture": laptop1img },
  ])


  const [pricestyle , setPricestyle] = useState(null)


  const [filterprice, setFilterprice] = useState(null);

  console.log(pricestyle)

  const [isfiltering , setIsfiltering] = useState(false)

  const handleFilter = () => {
    setIsfiltering(true)

    setAfterfilter(products.filter(item => item.price >= filterprice - 100 && item.price <= filterprice));

    if(filterprice === null){
      setAfterfilter(products)
    }
  }



  return (
    <>
      <div className='px-[258px] '>
        <img src={headimagepng} alt="" />

        <p className='font-Poppins-SemiBold text-[32px] mt-6'>
          MSI PS Series (20)
        </p>


        <div className='w-full  flex'>

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

                <p onClick={() => setFilterprice(100.00) || setPricestyle(1)} className={`${pricestyle ===1 ? "bg-white": null} font-Poppins-Regular cursor-pointer text-[13px] flex justify-between`}>
                  $0.00 - $100.00
                  <span>
                    15
                  </span>
                </p>
                <p onClick={() => setFilterprice(300.00) || setPricestyle(2)} className={`${pricestyle ===2 ? "bg-white": null} font-Poppins-Regular  text-[13px] flex cursor-pointer justify-betwee`}>
                  $200.00 - $300.00
                  <span>
                    13
                  </span>
                </p>
                <p onClick={() => setFilterprice(400.00) || setPricestyle(3)} className={`${pricestyle ===3 ? "bg-white": null} font-Poppins-Regular text-[13px] flex cursor-pointer justify-between`}>
                  $300.00 - $400.00
                  <span>
                    19
                  </span>
                </p>
                <p onClick={() => setFilterprice(500.00) || setPricestyle(4)} className={`${pricestyle ===4 ? "bg-white": null} font-Poppins-Regular text-[13px] flex cursor-pointer justify-between`}>
                  $400.00 - $500.00
                  <span>
                    45
                  </span>
                </p>
                <p onClick={() => setFilterprice(600.00) || setPricestyle(5)} className={`${pricestyle ===5 ? "bg-white": null} font-Poppins-Regular text-[13px] flex cursor-pointer justify-between`}>
                  $500.00 - $600.00
                  <span>
                    1
                  </span>
                </p>
                <p onClick={() => setFilterprice(700.00) || setPricestyle(6)} className={`${pricestyle ===6 ? "bg-white": null} font-Poppins-Regular text-[13px] flex cursor-pointer justify-between`}>
                  $600.00 - $700.00
                  <span>
                    1
                  </span>
                </p>
                <p onClick={() => setFilterprice(800.00) || setPricestyle(7)} className={`${pricestyle ===7 ? "bg-white": null} font-Poppins-Regular text-[13px] flex cursor-pointer justify-between`}>
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
              <button onClick={handleFilter} className='text-[#0156FF] rounded-full border-2 border-[#0156FF] w-full py-2 mt-3'>
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
              {
                filterprice && isfiltering ?
                <div className='border-2 border-[#CACDD8] py-2 px-4 flex gap-2 ms-4'>
                <p className='text-[13px] text-[#CACDD8] font-Poppins-SemiBold flex gap-1'>
                  Prise between 
                  <span className='text-black'>
                  {filterprice - 100} - {filterprice}
                  </span>
                </p>
                <img onClick={()=>setFilterprice(null) || setAfterfilter(products) || setIsfiltering(false) || setPricestyle(null)} src={closeFiltericon} alt="" />
              </div>:
              null
              }
              {/* <div className='border-2 border-[#CACDD8] py-2 px-4 flex gap-2'>
                <p className='text-[13px] text-[#CACDD8] font-Poppins-SemiBold flex gap-1'>
                  CUSTOM PCS
                  <span className='text-black'>
                    (24)
                  </span>
                </p>
                <img src={closeFiltericon} alt="" />
              </div> */}

              <div onClick={()=>setFilterprice(null) || setAfterfilter(products) || setIsfiltering(false) || setPricestyle(null)} className='border-2 cursor-pointer border-[#CACDD8] py-2 px-4 flex gap-2'>
                <p className='text-[13px] text-black font-Poppins-SemiBold flex gap-1'>
                  Clear All

                </p>

              </div>
            </div>

            <div className='w-full flex flex-wrap '>

              {
                afterfilter.map((item, index) => (
                  
                    <LaptopCard key={index} id={item.id} price={item.price} picture={item.picture} />

                ))
              }


            </div>





          </div>

        </div>

      </div>


      <div className='flex justify-evenly mt-12 bg-[#F5F7FF] px-[258px] py-16'>
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

export default Catalog;