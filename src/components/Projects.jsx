import React from 'react';
import { FaGithub, FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap, FaDocker } from 'react-icons/fa';
import { DiMongodb, DiMysql } from "react-icons/di";
import { SiRubyonrails } from "react-icons/si";
import { RiTailwindCssFill, RiNextjsLine } from "react-icons/ri";
import { FaSass } from "react-icons/fa6";

const Projects = () => {
  const projectList = [
    {
      title: 'Raffle System',
      description: `A Raffle System featuring both Admin and User views, complete with user authentication 
                    for secure access. Users can participate by purchasing raffle tickets, and benefit 
                    from an invitation system that rewards them for inviting others. The platform supports 
                    bilingual support with Tagalog and English translations, ensuring a broader reach and 
                    improved user experience.`,
      link: 'https://github.com/Jaaarl/item-raffle-system',
      image: 'raffle2.png',
      technologies: ['Ruby on Rails', 'Bootstrap', 'MySql', 'JavaScript', 'SASS', 'HTML' , 'Docker'],
    },
    {
      title: 'Clinic System',
      description: `The Clinic Management System helps healthcare providers easily 
                    manage patient information and medical procedures. It allows for 
                    recording patient history, documenting SOAP notes, and generating important 
                    documents like prescriptions, medical certificates, and laboratory requests.`,
      link: 'https://github.com/Jaaarl/Clinic_v2',
      image: 'clinic2.png',
      technologies: ['Next.js', 'React', 'MongoDB', 'Tailwind', 'CSS', 'HTML'],
    },
    {
      title: 'Movie Review',
      description: 'A System where user can post review, movies. and filter based on categories',
      link: 'https://github.com/Jaaarl/movie_review',
      image: 'movie-review.png',
      technologies: ['Ruby on Rails', 'MySql', 'Bootstrap', 'CSS', 'HTML', 'Docker'],
    },
    {
      title: `Jarl's Portfolio`,
      description: 'Showcasing my projects, skills and contact information.',
      link: 'https://github.com/Jaaarl/portfolio-latest',
      image: 'personal-portfolio.png',
      technologies: ['React', 'Tailwind', 'CSS', 'HTML'],
    },
  ];

  const getTechIcon = (tech) => {
    switch (tech) {
      case 'React':
        return <FaReact className="w-6 h-6 text-blue-500" />;
      case 'Node.js':
        return <FaNodeJs className="w-6 h-6 text-green-500" />;
      case 'Python':
        return <FaPython className="w-6 h-6 text-yellow-500" />;
      case 'JavaScript':
        return <FaJsSquare className="w-6 h-6 text-yellow-500" />;
      case 'MongoDB':
        return <DiMongodb className="w-6 h-6 text-green-500" />;
      case 'Bootstrap':
        return <FaBootstrap className="w-6 h-6 text-purple-500" />;      
      case 'Ruby on Rails':
        return <SiRubyonrails className="w-6 h-6 text-red-500" />;
      case 'Next.js':
        return <RiNextjsLine className="w-6 h-6 text-black-500" />;      
      case 'Tailwind':
        return <RiTailwindCssFill className="w-6 h-6 text-cyan-500" />;
      case 'MySql':
        return <DiMysql className="w-6 h-6 text-teal-700" />;
      case 'CSS':
        return <FaCss3Alt className="w-6 h-6 text-blue-700" />;
      case 'HTML':
        return <FaHtml5 className="w-6 h-6 text-orange-700" />;
      case 'SASS':
        return <FaSass className="w-6 h-6 text-pink-700" />;
      case 'Docker':
        return <FaDocker className="w-6 h-6 text-blue-700" />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projectList.map((project, index) => (
          <div key={index} className="card w-full bg-base-100 shadow-xl">
            <figure>
              <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
            </figure>
            <div className="card-body">
              <h3 className="card-title">{project.title}</h3>
              <p>{project.description}</p>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-4 items-center">
                  {project.technologies.map((tech, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      {getTechIcon(tech)}
                      <span className="text-lg">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-actions justify-end mt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-outline"
                >
                  <FaGithub/>View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;