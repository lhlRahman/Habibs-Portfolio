import React from 'react';
import { Link } from 'react-router-dom';

const Blog = ({ light }) => {
  const backgroundClass = light ? ' bg-[#607D8B] duration-300' : 'bg-[#0a192f] duration-300';
  const cardBackground = light ? 'bg-white' : 'bg-gray-800';
  const textColor = light ? 'text-gray-900' : 'text-gray-100';
  const borderColor = light ? 'border-gray-200' : 'border-gray-700';
  
  const blogPosts = [
    { title: 'My Leetcode Journey', description: 'my leetcode journey and streak', date: '2024-03-16', link: '/blog/leetcode' },
  ];

  return (
    <div className={`w-screen h-screen font-inter text-white ${backgroundClass} duration-300 overflow-auto`}>
      <h1 className='pt-32 text-4xl text-center font-semibold mb-12'>My Blog Posts</h1>
      <div className='max-w-4xl mx-auto px-4'>
        {blogPosts.map((post, index) => (
          <div key={index} className={`mb-8 p-6 hover:scale-105 scale-100 duration-300 ${cardBackground} rounded-lg shadow-lg border ${borderColor}`}>
            <h2 className={`text-2xl ${textColor} font-bold mb-2 hover:underline`}>
              <Link className='font-inter lowercase' to={post.link}>{post.title}</Link>
            </h2>
            <p className='text-gray-500 mb-4'>{post.description}</p>
            <p className={`text-sm ${textColor} text-right`}>{post.date}</p>
          </div>
        ))}
        <hr />
      </div>
    </div>
  );
}

export default Blog;
