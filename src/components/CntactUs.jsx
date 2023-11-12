import React from 'react';
import Footer from './Footer';
import RelationshipIcon1 from "../assets/picture/bx_bx-support25.svg"
import location1 from "../assets/picture/bx_bx-time location 4.svg"


const ContactUs = () => {
  return (
    <>
      <div className='px-[258px] w-full flex '>

        <div className='w-9/12  '>

          <p className='font-Poppins-SemiBold text-[32px]'>
            Contact Us
          </p>
          <p className='font-Poppins-Light text-base mt-5'>
            We love hearing from you, our Shop customers.
          </p>
          <p className='font-Poppins-Light text-base '>
            Please contact us and we will make sure to get back to you as soon as we possibly can.
          </p>

          <div className='w-full flex flex-wrap gap-5'>
            <div className='w-[45%] flex flex-col mt-4 gap-2 '>
              <p className='font-Poppins-SemiBold text-[13px] '>Your Name <span className='text-red-500'>*</span></p>
              <input className='outline-none w-full ps-4 h-12 border-2 border-[#A2A6B0] rounded-md ' type="text" placeholder='Your Name' />
            </div>

            <div className='w-[45%] flex flex-col mt-4 gap-2 '>
              <p className='font-Poppins-SemiBold text-[13px] '>Your Email <span className='text-red-500'>*</span></p>
              <input className='outline-none w-full ps-4 h-12 border-2 border-[#A2A6B0] rounded-md ' type="text" placeholder='Your Name' />
            </div>

            <div className='w-[45%] flex flex-col  gap-2 '>
              <p className='font-Poppins-SemiBold text-[13px] '>Your Phone Number <span className='text-red-500'>*</span></p>
              <input className='outline-none w-full ps-4 h-12 border-2 border-[#A2A6B0] rounded-md ' type="text" placeholder='Your Name' />
            </div>

          </div>

          <div className='w-full flex flex-col mt-5 gap-2 '>
            <p className='font-Poppins-SemiBold text-[13px] '>What’s on your mind? <span className='text-red-500'>*</span></p>
            <textarea className='resize-none outline-none w-full ps-4 border-2 border-[#A2A6B0] rounded-md' name="" id="" placeholder='Jot us a note and we’ll get back to you as quickly as possible' cols="30" rows="10"></textarea>
          </div>


          <button className='py-4 px-8 rounded-full bg-[#0156FF] text-white mt-5'>
            submit
          </button>
        </div>




        <div className='w-3/12 bg-[#F5F7FF] p-8 flex flex-col gap-4 h-fit mt-24'>

          <div className='flex '>
            <div>
              <img src={location1} alt="" />

            </div>

            <div className='flex flex-col '>
              <p className='font-Poppins-SemiBold text-lg'>
                Address:
              </p>
              <p className='font-Poppins-Regular text-[13px] '>
                1234 Street Adress City Address, 1234
              </p>

            </div>
          </div>

          <div className='flex '>
            <div>
              <img src={location1} alt="" />

            </div>

            <div className='flex flex-col '>
              <p className='font-Poppins-SemiBold text-lg'>
                Phone:
              </p>
              <p className='font-Poppins-Regular text-[13px] '>
                (00)1234 5678
              </p>

            </div>
          </div>

          <div className='flex '>
            <div>
              <img src={location1} alt="" />

            </div>

            <div className='flex flex-col '>
              <p className='font-Poppins-SemiBold text-lg'>
                We are open:
              </p>
              <p className='font-Poppins-Regular text-[13px] '>
                Monday - Thursday: 9:00 AM - 5:30 PM
                Friday 9:00 AM - 6:00 PM
                Saturday: 11:00 AM - 5:00 PM
              </p>

            </div>
          </div>

          <div className='flex '>
            <div>
              <img src={location1} alt="" />

            </div>

            <div className='flex flex-col '>
              <p className='font-Poppins-SemiBold text-lg'>
              E-mail:
              </p>
              <p className='font-Poppins-Regular text-[13px] text-[#0156FF]'>
              shop@email.com
              </p>

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

export default ContactUs;