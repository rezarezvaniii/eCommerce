import React from 'react';
import Footer from './Footer';
import RelationshipIcon1 from "../assets/picture/bx_bx-support25.svg"




const Login = () => {
  return (
    <>
      <div className='px-[258px]'>
        <p className='text-[32px] font-Poppins-SemiBold '>
          Customer Login
        </p>

        <div className='px-[150px] mt-8 flex gap-8'>

          <div className='w-[45%] bg-[#F5F7FF] p-8 flex flex-col gap-4'>

            <p className='font-Poppins-SemiBold text-lg '>Registered Customers</p>
            <p className='font-light text-[18px] '>If you have an account, sign in with your email address.</p>
            <div className='w-full flex flex-col  gap-2 '>
              <p className='font-Poppins-SemiBold text-[13px] '>Email <span className='text-red-500'>*</span></p>
              <input className='outline-none w-full ps-4 h-12 border-2 border-[#A2A6B0] rounded-md ' type="text" placeholder='Your Email' />
            </div>
            <div className='w-full flex flex-col  gap-2 '>
              <p className='font-Poppins-SemiBold text-[13px] '>Password <span className='text-red-500'>*</span></p>
              <input className='outline-none w-full ps-4 h-12 border-2 border-[#A2A6B0] rounded-md ' type="text" placeholder='Your Password' />
            </div>

            <div className='flex gap-5 items-center  font-Poppins-Regular text-[14px] '>

              <button className='py-4 px-8 rounded-full bg-[#0156FF] text-white'>
                submit
              </button>
              <p className='text-[#0156FF] '>
                Forgot Your Password?
              </p>

            </div>

          </div>


          <div className='w-[45%] bg-[#F5F7FF] p-8 flex flex-col gap-4'>
            <p className='font-Poppins-SemiBold text-[18px] '>New Customer?</p>

            <p className='font-Poppins-Light text-[14px] '>Creating an account has many benefits:</p>

            <ul className='list-disc ms-4 font-Poppins-Light text-[14px]'>
              <li>Check out faster</li>
              <li>Check out faster</li>
              <li>Check out faster</li>

            </ul>

            <button className='py-4 px-8 w-fit mt-4 rounded-full bg-[#0156FF] text-white'>
              Create An Account
            </button>

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

export default Login;