import { FaGithub, FaExternalLinkAlt, FaBrain, FaReact } from "react-icons/fa";

const Projects = () => {
  const aiProjects = [
    {
      title: 'AI Clinic Scheduling Agent',
      description: `An autonomous AI agent that handles clinic reservations via email. 
                    Processes natural language requests, registers new patients, books appointments, 
                    handles scheduling conflicts with smart alternatives, and sends automated 
                    email confirmations — all without human intervention.`,
      tags: ['OpenClaw', 'AI Agents', 'Email Automation', 'Workflow Orchestration', 'Next.js', 'MongoDB'],
      link: 'https://github.com/Jaaarl/Clinic_v3/tree/feature/queue-system-v2',
      gradient: 'from-indigo-500 to-purple-600',
      features: [
        'Natural language email parsing',
        'Automated patient registration',
        'Appointment conflict resolution',
        'Smart alternative slot suggestions',
        'Automated email confirmations'
      ]
    },
    {
      title: 'RAG Knowledge Assistant',
      description: `Retrieval-Augmented Generation system for intelligent document Q&A. 
                    Built with LangChain and MiniMax, enabling accurate responses based on 
                    custom knowledge bases with source citation.`,
      tags: ['RAG', 'LangChain', 'MiniMax', 'Python', 'Vector Databases'],
      link: '#',
      gradient: 'from-cyan-500 to-blue-600',
      features: [
        'Semantic document search',
        'Context-aware responses',
        'Source attribution',
        'Custom knowledge base support'
      ]
    },
  ];

  const fullStackProjects = [
    {
      title: 'Resort Platform System',
      description: `Full-stack resort management system with real-time availability, secure payments, 
                    inventory management, staff scheduling, and analytics dashboard.`,
      tags: ['React', 'Express.js', 'TypeScript', 'PostgreSQL', 'Tailwind', 'ShadCN', 'Docker'],
      link: 'https://github.com/Jaaarl?tab=repositories',
    },
    {
      title: 'Clinic Management System',
      description: `Comprehensive healthcare platform with patient records management, 
                    SOAP documentation, prescription handling, and automated medical certificate 
                    issuance. Includes analytics dashboard and inventory management.`,
      tags: ['Next.js', 'MongoDB', 'Tailwind', 'Analytics', 'Inventory'],
      link: 'https://github.com/Jaaarl/Clinic_v3',
    },
    {
      title: 'Raffle System',
      description: `Dual-view raffle platform with authentication, ticket system, 
                    and bilingual support.`,
      tags: ['Ruby on Rails', 'MySQL', 'Bootstrap', 'Docker'],
      link: 'https://github.com/Jaaarl/item-raffle-system',
    },
  ];

  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-indigo-400 font-medium tracking-wide text-sm uppercase mb-4">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of work spanning AI engineering and full-stack development
          </p>
        </div>

        {/* AI Engineering Projects */}
        <div className="mb-20">
          <h3 className="flex items-center gap-3 text-xl font-semibold mb-8">
            <span className="p-2 glass-card rounded-lg"><FaBrain className="text-indigo-400" /></span>
            AI Engineering
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {aiProjects.map((project, index) => (
              <div 
                key={index} 
                className="glass-card rounded-2xl overflow-hidden group"
              >
                {/* Project Header with Gradient */}
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-xl font-semibold">{project.title}</h4>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                  
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features list */}
                  {project.features && (
                    <ul className="space-y-2 mb-4">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                          <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient}`}></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="tech-badge">{tag}</span>
                    ))}
                  </div>

                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors text-sm font-medium"
                  >
                    View Project <FaExternalLinkAlt className="text-xs" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Full-Stack Projects */}
        <div>
          <h3 className="flex items-center gap-3 text-xl font-semibold mb-8">
            <span className="p-2 glass-card rounded-lg"><FaReact className="text-cyan-400" /></span>
            Full-Stack Development
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {fullStackProjects.map((project, index) => (
              <div 
                key={index} 
                className="glass-card rounded-2xl overflow-hidden group"
              >
                <div className="p-6">
                  <h4 className="text-lg font-semibold mb-3">{project.title}</h4>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="tech-badge">{tag}</span>
                    ))}
                  </div>
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    <FaGithub /> Source
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
