import React from 'react';

const Contact = ({ light }) => {
  const contactClass = light ? 'bg-grey-500 text-black' : 'bg-[#0a192f] text-gray-300';
  const borderClass = light ? 'border-blue-600' : 'border-pink-600';
  const inputClass = light ? 'bg-gray-100 text-black' : 'bg-[#ccd6f6] text-gray-700';
  const buttonClass = light ? 'text-gray-800 border-black border-2 hover:bg-gray-300 hover:border-gray-300' : 'text-white border-2 hover:bg-pink-600 hover:border-pink-600';
  

  return (
    <div name='contact' className={`w-full h-3/6 ${contactClass} flex justify-center items-center p-4`}>
      <form method='POST' action="https://getform.io/f/8635160a-ade1-40fb-91c4-20b887ce3345" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className={`text-4xl font-bold inline ${borderClass}`}>Contact</p>
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
