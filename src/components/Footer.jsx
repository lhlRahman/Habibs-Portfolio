import React from 'react';
import './HoverAnimation.css'; // Ensure this CSS file contains your hover animations
import HoverText from './HoverText';

const Footer = ({ light }) => {
  const FooterClass = light ? 'bg-[#607D8B] text-white duration-300' : 'bg-[#0a192f] text-gray-300 duration-300';
  const hover = light ? '#93def5 duration-300' : '#0a192f duration-300';
  const text = light ? 'black duration-300' : '#9dd9f3 duration-300';

  return (
    <div className={`${FooterClass}`}>
      <div className={`max-w-[1500px] mx-auto px-16 ${FooterClass}`}>
        <hr className='h-1 mb-4' />
        <div className="grid sm:grid-cols-3 md:grid-cols-5 gap-4 justify-items-center">
          <div className="relative hover-target px-6 py-4 border border-white shadow-2xl w-full min-h-[50px] flex items-center justify-center">
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h1 className={`${text} hover-initial`}>LinkedIn</h1>
              <h1 className={`${text} hover-final`}><a href='https://www.linkedin.com/in/habib-rahman-tmu/' target="_blank"><HoverText text={text} hover={hover}>Lets Connect!</HoverText></a></h1>
            </div>
          </div>
          <div className="relative hover-target px-6 py-4 border border-white shadow-2xl w-full min-h-[50px] flex items-center justify-center">
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h1 className={`${text} hover-initial`}>Resume</h1>
              <h1 className={`${text} hover-final`}><a href="https://drive.google.com/file/d/13iGIn5DshvhsDf2LvSp6cvidgDfvZYG8/view?usp=sharing" target='_blank'><HoverText text={text} hover={hover}>Hire Me!</HoverText></a></h1>
            </div>
          </div>
          <div className="relative hover-target px-6 py-4 border border-white shadow-2xl w-full min-h-[50px] flex items-center justify-center">
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h1 className={`${text} hover-initial`}>Youtube</h1>
              <h1 className={`${text} hover-final`}><a href='https://www.youtube.com/channel/UCBPh3GvFHktv-noutxsUYtg' target='_blank'><HoverText text={text} hover={hover}>Check out my Videos!</HoverText></a></h1>
            </div>
          </div>
          <div className="relative hover-target px-6 py-4 border border-white shadow-2xl w-full min-h-[50px] flex items-center justify-center">
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h1 className={`${text} hover-initial`}>GitHub</h1>
              <h1 className={`${text} hover-final`}><a href="https://github.com/lhlrahman" target='_blank'><HoverText text={text} hover={hover}>I Like to Code!</HoverText></a></h1>
            </div>
          </div>
          <div className="relative hover-target px-6 py-4 border border-white shadow-2xl w-full min-h-[50px] flex items-center justify-center">
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h1 className={`${text} hover-initial`}>Email</h1>
              <h1 className={`${text} hover-final`}><a href="mailto:lhlrahman@gmail.com"><HoverText text={text} hover={hover}>Who still emails?</HoverText></a></h1>
            </div>
          </div>
        </div>
        <h1 className='grid place-content-center mt-4'>
          No Copyright lol © 2024. Coded by Habib Rahman.
        </h1>
      </div>
    </div>
  );
};

export default Footer;
