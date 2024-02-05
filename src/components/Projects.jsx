import { data } from "../data/data.js";

const Projects = ({ light }) => {
  const project = data;
  const projectsClass = light ? 'bg-[#607D8B] text-white' : 'bg-[#0a192f] text-gray-300';
  const borderClass = light ? 'border-white' : 'border-pink-600';
  const shadowClass = light ? 'shadow-sm shadow-[#607D8B]' : 'shadow-lg shadow-[#040c16]';
  const projectTextClass = light ? 'text-black' : 'text-[#0a192f]';
  const buttonClass = light ? 'bg-gray-300 text-gray-700' : 'bg-white text-gray-700';

  return (
    <div className={`w-full h-3/6 ${projectsClass}`}>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <p className={`max-w-fit text-4xl font-bold inline border-b-4 ${borderClass}`}>
          Projects
        </p>
        <p className='py-6'>Check out some of my recent Projects</p>
        {/* container for projects */}
        <div className='grid sha sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* Grid Items */}
          {project.map((item, index) => (
          <div key={index} className={`${borderClass} hover:scale-110 duration-300 shadow-xl rounded-2xl group`}>
            <div
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "230px",
              }}
              className={`group container rounded-md flex justify-center items-center mx-auto text-center content-div ${shadowClass}`}
            >
              {/* Hover effect for images */}
              <div className={`collapse group-hover:visible group-hover:scale-125 duration-300 ${projectTextClass}`}>
                <div className='pt-8 text-center'>
                  <a href={item.github} target='_blank' rel='noreferrer'>
                    <button className={`text-center rounded-lg px-4 py-3 m-2 ${buttonClass} font-bold text-lg`}>
                      Code
                    </button>
                  </a>
                  {item.live !== '' && (
                    <a href={item.live} target='_blank' rel='noreferrer'>
                      <button className={`text-center rounded-lg px-4 py-3 m-2 ${buttonClass} font-bold text-lg`}>
                        Live
                      </button>
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className=" text-center">
            <h1 className='text-xl font-bold tracking-wider group-hover:-translate-y-14 group-hover:text-black duration-300'>
                  {item.name}
            </h1>
            </div>
            </div>
          ))}
        </div>
        <hr name='contact' className='my-16' />
      </div>
    </div>
  );
};

export default Projects;
