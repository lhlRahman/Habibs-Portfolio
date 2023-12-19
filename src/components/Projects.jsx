import { data } from "../data/data.js";

const Projects = () => {
  const project = data;

  return (
    <div name='work' className='w-full h-3/6 text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Projects
          </p>
          <p className='py-6'>Check out some of my recent Projects</p>
        {/* container for projects */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* Grid Item */}
          {project.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "200px"
              }
              
            }
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'
            >
              {/* Hover effect for images */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font bold text-[#0a192f] tracking-wider '>
                  {item.name}
                </span>
                <div className='pt-8 text-center '>
                  <a href={item.github} target='_blank' rel='noreferrer'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Code
                    </button>
                  </a>
                  {item.live !== '' && (
                  <a href={item.live} target='_blank' rel='noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Live
                  </button>
                </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;