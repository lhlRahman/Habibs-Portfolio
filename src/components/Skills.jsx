import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import PostgreSQL from '../assets/postgresql.png';
import Java from '../assets/java.png';
import Express from '../assets/express.webp';
import Python from '../assets/python.png';
import TypeScript from '../assets/ts.png';
import Neon from '../assets/neon.webp';
const Skills = ({ light }) => {
    const skillsClass = light ? 'bg-[#51b7d3] text-white' : 'bg-[#0a192f] text-gray-300';
    const borderClass = light ? 'border-blue-600' : 'border-pink-600';
    const shadowClass = light ? 'shadow-md shadow-gray-300 hover:scale-110 duration-500' : 'shadow-md shadow-[#040c16] hover:scale-110 duration-500';
  
    return (
      <div className={`w-full h-3/6 ${skillsClass}`}>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
            <p className={`text-4xl font-bold inline border-b-4 ${borderClass}`}>Skills</p>
            <p className='py-4'>These are most of the technologies I've worked with</p>
          </div>
  
          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            {/* Skill items with shadowClass applied */}
            <div className={shadowClass}>
            <img className='w-20 h-[80px] mx-auto' src={HTML} alt="HTML" />
            <p className='my-4'>HTML</p>
            </div>
            <div className={shadowClass}>
            <img className='w-20 h-[80px] mx-auto' src={CSS} alt="CSS" />
            <p className='my-4'>CSS</p>
            </div>
            <div className={shadowClass}>
            <img className='w-20 h-[80px] mx-auto' src={JavaScript} alt="JavaScript" />
            <p className='my-4'>JavaScript</p>
            </div>
            <div className={shadowClass}>
            <img className='w-20 h-[80px] mx-auto' src={TypeScript} alt="TypeScript" />
            <p className='my-4'>TypeScript</p>
            </div>
            <div className={shadowClass}>
            <img className='w-20 h-[80px] mx-auto' src={ReactImg} alt="React" />
            <p className='my-4'>React</p>
            </div>
            <div className={shadowClass}>
            <img className='w-20 h-[80px] mx-auto' src={Java} alt="Java" />
            <p className='my-4'>Java</p>
            </div>
            <div className={shadowClass}>
            <img className='w-20 h-[80px] mx-auto' src={Python} alt="Python" />
            <p className='my-4'>Python</p>
            </div>
            <div className={shadowClass}>
            <img className='w-20 h-[80px] mx-auto' src={GitHub} alt="GitHub" />
            <p className='my-4'>GitHub</p>
            </div>
            <div className={shadowClass}>
            <img className='w-20 h-[80px] mx-auto' src={Node} alt="Node.js" />
            <p className='my-4'>Node.js</p>
            </div>
            <div className={shadowClass}>
            <img className='w-20 h-[80px] mx-auto' src={Mongo} alt="MongoDB" />
            <p className='my-4'>MongoDB</p>
            </div>
            <div className={shadowClass}>
            <img className='w-20 h-[80px] mx-auto' src={Tailwind} alt="Tailwind CSS" />
            <p className='my-4'>Tailwind CSS</p>
            </div>
            <div className={shadowClass}>
            <img className='w-20 h-[80px] mx-auto' src={FireBase} alt="Firebase" />
            <p className='my-4'>Firebase</p>
            </div>
            <div className={shadowClass}>
            <img className='w-20 h-[80px] mx-auto' src={PostgreSQL} alt="PostgreSQL" />
            <p className='my-4'>PostgreSQL</p>
            </div>
            <div className={shadowClass}>
            <img className='w-20 h-[80px] mx-auto' src={Express} alt="Express.js" />
            <p className='my-4'>Express.js</p>
            </div>
            <div className={shadowClass}>
            <img className='w-20 h-[80px] mx-auto' src={Neon} alt="Neon DB" />
            <p className='my-4'>Neon DB</p>
            </div>
         </div>
         <hr name='work' className='my-16' />
        </div>
    </div>
    );
  };

export default Skills;