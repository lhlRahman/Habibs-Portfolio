import React from 'react';

const Leetcode = ({ light }) => {
    const backgroundClass = light ? 'bg-[#607D8B] text-white' : 'bg-[#0a192f] text-gray-300';
    const buttonBgClass = light ? 'hover:bg-[#78909C] hover:text-white' : 'hover:bg-[#263238] hover:text-gray-300';
    const borderColor = light ? 'border-[#607D8B]' : 'border-[#0a192f]';

    return (
        <div className={`w-screen min-h-full h-full pt-32 font-inter ${backgroundClass} duration-300`}>
            <div className='flex flex-col items-center'>
                <a 
                    href="/blog"
                    className={`mb-4 inline-block px-4 py-3 text-sm md:text-base font-semibold rounded-lg border ${borderColor} transition duration-300 ease-in-out ${buttonBgClass} shadow`}
                    style={{ textDecoration: 'none' }}
                >
                    ← Back
                </a>
                <h1 className="text-4xl font-bold mb-10">My LeetCode Journey</h1>
            </div>
            <article className="max-w-4xl mx-auto p-8 h-auto text-center sm:text-left">
                <h2 className='text-2xl font-bold my-4'>What is LeetCode?</h2>
                <p className="text-lg mb-4">
                    LeetCode is a platform where people solve programming problems often used in job interviews.
                    In the tech world, technical interviews commonly include data structures and algorithms questions,
                    popularized by companies like Google. LeetCode provides practice for such interview scenarios.
                </p>
                <h2 className='text-2xl font-bold mb-4'>My Journey</h2>
                <p className="text-lg mb-4">
                    My programming journey began in grade 12 with a competition called the Canadian Computing Competition,
                    hosted by the University of Waterloo. Knowing some Java, I decided to participate and managed to solve
                    1 out of 5 questions. That's when I discovered data structures and algorithms, and the fact that I was not good at it lol.
                </p>
                <p className="text-lg mb-4">
                    During my first semester at university, I learned a bit of Python and started solving LeetCode problems for fun.
                    Initially, easy problems were challenging, particularly finding the most optimal solutions. By watching tutorials,
                    I learned about various algorithms and data structures, such as hashmaps, two-pointers, graphs, DFS, BFS, Kadane's algorithm,
                    Moore's voting algorithm, etc. Now, I try to complete the daily LeetCode challenge every day. I'm currently on a 19-day streak
                    and previously achieved a 38-day streak. I also share my solutions and explanations on my YouTube channel.
                </p>
                <h2 className='text-2xl font-bold mb-4'>My Progress</h2>
                <p className="text-lg">
                    My goal is to solve approximately 400 problems by my second year. I am also studying graph theory in the context of computer
                    science to gain a deeper understanding of graph-related questions.
                </p>
                <div className="mt-4 flex justify-center">
                    <img src="https://leetcard.jacoblin.cool/lhlrahman?theme=nord&font=Montserrat&ext=heatmap" alt="LeetCode stats" />
                </div>
            </article>
        </div>
    );
}

export default Leetcode;