import React from 'react';


const PcInfo1 = () => {
  return (
    <>
      <p className='text-[18px] font-Poppins-Light'>MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER,
        16GB RAM, 512GB SSD, 2TB HDD,
        Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop</p>

      <div className='w-full flex gap-4'>
        <div className='h-7 w-7 bg-[#4B4D4F] rounded-full cursor-pointer '>
        </div>
        <div className='h-7 w-7 bg-[#F2E9DC] rounded-full cursor-pointer '>
        </div>
        <div className='h-7 w-7 bg-[#EAE8EB] rounded-full cursor-pointer '>
        </div>
      </div>

    </>
  );
}

export default PcInfo1;