import React from 'react';
import TitleTypeWriter from './TitleTypeWriter';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'> Hi 👋, my name is</p>
        <h1 className='text-5xl sm:text 7xl font-bold text-[#ccd6f6]'>Habib Rahman</h1>
        <span className='inline-block text-5xl sm:text 7xl font-bold text-[#8892b0]'>
          I'm <TitleTypeWriter />
        </span>
        <p className='text-blue-50 py-4 max-w-[700px]'>
            Welcome to my portfolio, a platform where I showcase my current and past projects. feel free to look around and contact me for any inquiries.        
        </p>
        <div>
        <button className='group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
          View Projects 
          <span className='ml-2 group-hover:rotate-90 duration-300'><HiOutlineArrowNarrowRight /></span>
        </button>
      </div>
      <hr className='mt-8' />

      </div>
    </div>
  );
};

export default Home;