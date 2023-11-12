import React from 'react';


const PcInfo3 = () => {
  return (
    <>
      <div className='w-8/12 border-2 bg-white border-[#CACDD8] flex flex-col h-44 '>
        <div className='w-full flex  h-1/3 items-center justify-evenly'>
          <p className='font-Poppins-Regular text-sm '>CPU</p>
          <p className='font-Poppins-Regular text-sm text-[#666666]'>N/A</p>
          <div className='h-full w-1/12'>

          </div>
        </div>
        <div className='w-full flex  h-1/3 items-center bg-[#F5F7FF] justify-evenly'>
          <p className='font-Poppins-Regular text-sm '>Featured</p>
          <p className='font-Poppins-Regular text-sm text-[#666666]'>N/A</p>
          <div className='h-full w-1/12'>

          </div>
        </div>
        <div className='w-full flex  h-1/3 items-center justify-evenly'>
          <p className='font-Poppins-Regular text-sm '>I/O Ports</p>
          <p className='font-Poppins-Regular text-sm text-[#666666]'>N/A</p>
          <div className='h-full w-1/12'>

          </div>
        </div>
        
      </div>
      
    </>
  );
}

export default PcInfo3;