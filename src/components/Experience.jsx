import { useState, useEffect, useRef } from "react";
import { FaCalendarAlt, FaBriefcase } from "react-icons/fa";

const TimelineItem = ({ exp, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 200);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div 
      ref={ref}
      className={`relative transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="flex gap-6">
        {/* Left side - accent line */}
        <div className="flex flex-col items-center">
          <div className={`w-3 h-3 rounded-full ${
            exp.current 
              ? 'bg-gradient-to-br from-indigo-500 to-purple-500 shadow-lg shadow-indigo-500/50' 
              : 'bg-purple-600'
          }`}></div>
          {index !== 3 && (
            <div className="w-px flex-1 bg-gradient-to-b from-purple-500/50 to-transparent mt-2"></div>
          )}
        </div>

        {/* Right side - content */}
        <div className={`flex-1 pb-12 ${exp.current ? 'pb-10' : ''}`}>
          {/* Period badge */}
          <div className="flex items-center gap-2 text-gray-500 text-xs mb-3">
            <FaCalendarAlt className="text-indigo-400" />
            <span>{exp.period}</span>
            {exp.current && (
              <span className="px-2 py-0.5 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] uppercase tracking-wider">
                Present
              </span>
            )}
          </div>

          {/* Card */}
          <div className="glass-card rounded-xl p-5 hover:bg-white/[0.04] transition-colors group">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-lg font-semibold group-hover:text-indigo-400 transition-colors">
                  {exp.title}
                </h3>
                <p className="text-indigo-400/80 text-sm font-medium">{exp.company}</p>
              </div>
              <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-500/10 to-purple-500/10">
                <FaBriefcase className="text-indigo-400 text-sm" />
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {exp.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech, i) => (
                <span 
                  key={i} 
                  className="px-2.5 py-1 text-[11px] rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 text-indigo-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: 'Prompt Engineer',
      company: 'Global Coordination Center',
      period: 'March 2025 - Present',
      description: 'Fine-tuned OpenAI models for domain-specific applications, designed prompts, cleaned and prepared datasets, conducted data validation and quality checks, validated model performance and outputs, and wrote Python scripts to automate and optimize AI workflows.',
      technologies: ['Python', 'OpenAI', 'Fine-tuning', 'AI Model Validation'],
      current: true,
    },
    {
      title: 'Jr. Software Engineer',
      company: 'KODACAMP Bootcamp',
      period: 'September 2024 - December 2024',
      description: 'Developed a raffle system using Ruby on Rails, MySQL, Docker, and Bootstrap featuring user authentication, ticket generation, raffle management, random winner selection, role-based access with distinct admin and client sides, and an invite system using QR codes.',
      technologies: ['Ruby on Rails', 'MySQL', 'Docker', 'Bootstrap'],
      current: false,
    },
    {
      title: 'Jr. Full Stack Web Developer',
      company: "Gubat Mom's & Kids Clinic",
      period: 'March 2024 - September 2024',
      description: 'Developed a patient management system using Next.js, MongoDB, and Tailwind to track patient registrations and visits, including SOAP documentation operations.',
      technologies: ['Next.js', 'MongoDB', 'Tailwind', 'Patient Management'],
      current: false,
    },
    {
      title: 'Full Stack Web Developer Intern',
      company: 'BU Research and Development Management Division',
      period: 'June 2022 - August 2022',
      description: 'Built a thesis dissertation system using PHP, SQL, and Bootstrap to manage and track thesis projects with features like user authentication, file uploads, and progress tracking.',
      technologies: ['PHP', 'MySQL', 'Bootstrap'],
      current: false,
    },
  ];

  return (
    <section id="experience" className="py-32 relative">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-indigo-400 font-medium tracking-wide text-sm uppercase mb-4">Journey</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-md mx-auto">
            A timeline of my professional growth in AI engineering and full-stack development
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-2">
          {experiences.map((exp, index) => (
            <TimelineItem key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
