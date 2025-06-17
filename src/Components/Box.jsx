import React from 'react';
import box_robot from '../assets/box_robot.png';

const Box = () => {
  return (
    <div className="bg-gradient-to-br from-[#6e8efb] to-[#a777e3] text-white py-10 px-3 sm:px-10 lg:px-20 rounded-[40px] overflow-hidden mx-8 sm:mx-10 md:mx-15 lg:mx-25">
      <div className='flex flex-col md:flex-row items-center'>
        <div className='flex-shrink-0 mb-5 md:mb-0'>
          <img src={box_robot} alt="Box Robot" className="w-auto h-48 md:h-64 lg:h-80 object-cover" />
        </div>
        <div className='md:ml-5 px-5'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-5 md:mb-8'>
            <span className='text-green-300'>Powerful </span>
            & Intuitive. The AI Editor For Everyone.
          </h1>
          <h2 className='text-gray-50 mb-2'>
            NO MATTER WHAT YOU DO. WE HAVE A TEMPLATE FOR YOU.
          </h2>
          <p className='text-gray-200 mb-10'>
            Effortlessly Edit Text, Images, And Language Translations To Ensure That
            Every Word Is Precisely Crafted To Perfection.
          </p>
          <button className='btn-primary px-6 py-2'>TRY IT FREE</button>
        </div>
      </div>
    </div>
  );
}

export default Box;
