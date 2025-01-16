import React from 'react';

import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import { DiMongodb } from "react-icons/di";

const Projects = () => {
  const projectList = [
    {
      title: 'Project 1',
      description: 'A short description of Project 1.',
      link: 'https://example.com/project1',
      image: 'https://via.placeholder.com/300',
      technologies: ['React', 'TailwindCSS', 'Node.js'],
    },
    {
      title: 'Project 2',
      description: 'A short description of Project 2.',
      link: 'https://example.com/project2',
      image: 'https://via.placeholder.com/300',
      technologies: ['JavaScript', 'Express', 'MongoDB'],
    },
    {
      title: 'Project 3',
      description: 'A short description of Project 3.',
      link: 'https://example.com/project3',
      image: 'https://via.placeholder.com/300',
      technologies: ['Python', 'Django', 'PostgreSQL'],
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
                  className="btn btn-primary"
                >
                  View Project
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