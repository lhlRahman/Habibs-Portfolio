import React from 'react';
import WordRotate from './WordRotate';
import HoverText from './HoverText';

const About = ({ light }) => {
  const aboutClass = light ? 'bg-[#607D8B] text-white duration-300' : 'bg-[#0a192f] text-gray-300 duration-300';
  const borderClass = light ? 'border-white duration-300' : 'border-pink-600 duration-300';
  
  return (
      <div>
        <div className={`w-full h-3/6 pt-10 ${aboutClass}`}>
          <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
              <div className='sm:text-right pb-8 pl-4'>
                <p className={`text-4xl font-bold inline border-b-4 ${borderClass}`}>
                <WordRotate CYCLES_PER_LETTER={50} SHUFFLE_TIME={3}>About</WordRotate>
                </p>
              </div>
              <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 mb-16'>
              <div className='sm:text-right text-4xl font-bold'>
                <p>Hi, nice to meet you. Take a look around.</p>
              </div>
              <div>
                <p className='font-serif font'>
                I am currently a Computer Science student at Toronto Metropolitan University (formerly known as Ryerson). When I am not coding at school, I spend my free time working on personal projects and attending hackathons. If I were not pursuing computer science, I would have  joined the Royal Canadian Air Force. I love learning new things and working with new technologies. I'm always on the lookout for new opportunities to learn and grow. Currently, I am seeking an Opportunites for 2024.                </p>  
                <hr className='my-8' name='skills' />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default About;