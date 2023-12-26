import React from 'react';
import TitleTypeWriter from './TitleTypeWriter';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = ({ light }) => {
  const homeClass = light ? 'bg-grey-500 text-black' : 'bg-[#0a192f] text-blue-50';
  const titleClass = light ? 'text-black' : 'text-[#ccd6f6]';
  const subTitleClass = light ? 'text-black' : 'text-[#8892b0]';
  const hoverClass = light ? 'hover:text-blue-900' : 'hover:text-red-900';

  return (
    <div name='home' className={`w-full h-3/6 ${homeClass}`}>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <div className="mt-32"></div>
        <p className={`${homeClass}`}> Hi 👋, my name is</p>
        <h1 className={`text-5xl sm:text 7xl font-bold ${titleClass}`}>Habib Rahman</h1>
        <span className={`inline-block text-5xl sm:text 7xl font-bold ${subTitleClass}`}>
          I'm <TitleTypeWriter />
        </span>
        <p className={`py-4 max-w-[700px] ${homeClass}`}>
          Welcome to my portfolio, a platform where I showcase my current and past projects. Feel free to look around and contact me for any inquiries.
        </p>
        <div>
          <Link to='work' smooth={true} duration={500} className={hoverClass}>
            <button className='group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
              View Projects 
              <span className='ml-2 group-hover:rotate-90 duration-300'><HiOutlineArrowNarrowRight /></span>
            </button>
          </Link>
        </div>
        <hr className='my-10' name='about' />
      </div>
    </div>
  );
};

export default Home;
