import React from 'react';
import TitleTypeWriter from './TitleTypeWriter';
import { Link } from 'react-scroll';
import WordRotate from './WordRotate';
import Button from './Button';

const Home = ({ light }) => {
  const homeClass = light ? 'bg-[#607D8B] text-white duration-300' : 'bg-[#0a192f] text-blue-50 duration-300';
  const titleClass = light ? 'text-white' : 'text-[#ccd6f6]';
  const subTitleClass = light ? 'text-white duration-300' : 'text-[#8892b0] duration-300';
  const hoverClass = light ? 'hover:text-blue-900' : 'hover:text-red-900';


  return (
    <div name='home' className={`min-w-screen h-3/6 ${homeClass}`}>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <div className="mt-32"></div>
        <p className={`${homeClass}`}> Hi 👋, my name is</p>
        <div className="">
        <h1 className={`text-5xl sm:text 7xl font-bold`}> <WordRotate CYCLES_PER_LETTER={25} SHUFFLE_TIME={2}>Habib Rahman</WordRotate></h1>
        <span className={`inline-block text-5xl sm:text 7xl font-bold ${subTitleClass}`}>
          I'm <TitleTypeWriter />
        </span>
        <p className={`py-4 max-w-[700px] ${homeClass}`}>
          Welcome to my portfolio, a platform where I showcase my current and past projects. Feel free to look around and contact me for any inquiries.
        </p>
        {/* Link Component */}
        {/* Link Component */}
        <Link to='work' smooth={true} duration={500}>
          {/* Button */}
          <Button>
            View Projects
            {/* Icon with Hover Effect */}
          </Button>
        </Link>
        </div>
        <hr className='my-10' name='about' />
      </div>
    </div>

  );
};

export default Home;
