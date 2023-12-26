import React from 'react';

const About = ({ light }) => {
  const aboutClass = light ? 'bg-grey-500 text-black' : 'bg-[#0a192f] text-gray-300';
  const borderClass = light ? 'border-blue-600' : 'border-pink-600';
  return (
    <div className={`w-full h-3/6 pt-10 ${aboutClass}`}>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className={`text-4xl font-bold inline border-b-4 ${borderClass}`}>
              About
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
            I am currently a first year Computer Science student at Toronto Metroplitan University (Formerly known as Ryerson). When I'm not forced into coding at school, I code in my free time, working on my projects. I love to learn new things and work with new technologies, I'm always looking for new opportunities to learn and grow. I'm currently looking for a summer internship for the summer of 2024.
            </p>  
            <hr className='my-8' name='skills' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
