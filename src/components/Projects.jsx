import { data } from "../data/data.js";

const Projects = ({ light }) => {
  const project = data;
  const projectsClass = light ? 'bg-grey-500 text-black' : 'bg-[#0a192f] text-gray-300';
  const borderClass = light ? 'border-blue-600' : 'border-pink-600';
  const shadowClass = light ? 'shadow-lg shadow-gray-300' : 'shadow-lg shadow-[#040c16]';
  const projectTextClass = light ? 'text-gray-900' : 'text-[#0a192f]';
  const buttonClass = light ? 'bg-gray-300 text-gray-700' : 'bg-white text-gray-700';

  return (
    <div name='work' className={`w-full h-3/6 ${projectsClass}`}>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <p className={`max-w-fit text-4xl font-bold inline border-b-4 ${borderClass}`}>
          Projects
        </p>
        <p className='py-6'>Check out some of my recent Projects</p>
        {/* container for projects */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* Grid Items */}
          {project.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "200px"
              }}
              className={`group container rounded-md flex justify-center items-center mx-auto content-div ${shadowClass}`}
            >
              {/* Hover effect for images */}
              <div className={`opacity-0 group-hover:opacity-100 ${projectTextClass}`}>
                <span className='text-2xl font-bold tracking-wider'>
                  {item.name}
                </span>
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
