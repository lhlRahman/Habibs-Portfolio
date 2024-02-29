import { data } from "../data/data.js";

const Projects = ({ light }) => {
  const project = data;
  const projectsClass = light ? 'bg-[#607D8B] text-white duration-300' : 'bg-[#0a192f] text-gray-300 duration-300';
  const borderClass = light ? 'border-white duration-300' : 'border-pink-600 duration-300';
  const shadowClass = light ? 'shadow-sm shadow-[#607D8B] duration-300' : 'shadow-lg shadow-[#040c16] duration-300';
  const projectTextClass = light ? 'text-blue-500 duration-300' : 'text-[#0a192f] duration-300';
  const buttonClass = light ? 'bg-gray-300 text-gray-700 duration-300' : 'bg-white text-gray-700 duration-300';

  return (
    <section className={`w-full h-3/6 ${projectsClass}`}>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <header>
          <h2 className={`max-w-fit text-4xl font-bold inline border-b-4 ${borderClass}`}>
            Projects
          </h2>
        </header>
        <p className='py-6'>Check out some of my recent Projects</p>
        {/* container for projects */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* Grid Items */}
          {project.map((item, index) => (
            <article key={index} className={`${borderClass} hover:scale-105 duration-300 shadow-xl rounded-2xl group hover:${projectsClass}`}>
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
                    <a href={item.github} target='_blank' rel='noopener noreferrer' aria-label={`View ${item.name} project code on GitHub`}>
                      <button className={`text-center rounded-lg px-4 py-3 m-2 ${buttonClass} font-bold text-lg`}>
                        Code
                      </button>
                    </a>
                    {item.live !== '' && (
                      <a href={item.live} target='_blank' rel='noopener noreferrer' aria-label={`View live version of ${item.name}`}>
                        <button className={`text-center rounded-lg px-4 py-3 m-2 ${buttonClass} font-bold text-lg`}>
                          Live
                        </button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className='group-hover:bg-white hover:border text-xl font-bold tracking-wider group-hover:-translate-y-14 group-hover:text-black duration-300'>
                  {item.name}
                </h3>
              </div>
            </article>
          ))}
        </div>
        <hr name='contact' className='my-16' />
      </div>
    </section>
  );
};

export default Projects;
