import React from 'react';

const Contact = ({ light }) => {
  const contactClass = light ? 'bg-[#607D8B] text-white pt-4 duration-300' : 'bg-[#0a192f] text-gray-300 pt-4 duration-300';
  const borderClass = light ? 'border-white duration-300' : 'border-pink-600 duration-300';
  const inputClass = light ? 'bg-gray-100 text-black duration-300' : 'bg-[#ccd6f6] text-gray-700 duration-300';
  const buttonClass = light ? 'text-white border-white border-2 hover:bg-gray-300 hover:border-gray-300 duration-300' : 'text-white border-2 hover:bg-pink-600 hover:border-pink-600 duration-300';
  

  return (
    <div className={`w-full h-3/6 ${contactClass} flex justify-center items-center p-4`}>
      <form method='POST' action="https://getform.io/f/8635160a-ade1-40fb-91c4-20b887ce3345" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className={`text-4xl font-bold inline border-b-4 w-fit ${borderClass}`}>Contact</p>
          <p className={contactClass}>Submit the form below or shoot me an email - habib.rahman@torontomu.ca</p>
        </div>
        <input className={`p-2 ${inputClass}`} type="text" placeholder='Name' name='name' />
        <input className={`my-4 p-2 ${inputClass}`} type="email" placeholder='Email' name='email' />
        <textarea className={`p-2 ${inputClass}`} name="message" rows="10" placeholder='Message'></textarea>
        <button className={`px-4 py-3 my-8 mx-auto flex items-center ${buttonClass}`}>Let's Collaborate</button>
      </form>
    </div>
  );
};

export default Contact;
