import { FaBrain, FaCode, FaReact, FaPython, FaDocker, FaGitAlt } from "react-icons/fa";
import { SiOpenai, SiRubyonrails, SiTypescript } from "react-icons/si";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb, DiMysql } from "react-icons/di";

const Skills = () => {
  const aiSkills = [
    { name: 'RAG Pipelines', icon: <FaBrain />, color: 'from-indigo-500 to-purple-500' },
    { name: 'Agentic AI', icon: <SiOpenai />, color: 'from-purple-500 to-pink-500' },
    { name: 'Fine-tuning', icon: <FaPython />, color: 'from-blue-500 to-cyan-500' },
    { name: 'AI Automation', icon: <FaBrain />, color: 'from-green-500 to-emerald-500' },
    { name: 'Prompt Engineering', icon: <FaCode />, color: 'from-orange-500 to-amber-500' },
    { name: 'OpenClaw', icon: <SiOpenai />, color: 'from-cyan-500 to-blue-500' },
  ];

  const fullStackSkills = [
    { name: 'React', icon: <FaReact />, color: 'from-blue-500 to-cyan-400' },
    { name: 'Next.js', icon: <RiNextjsLine />, color: 'from-gray-600 to-gray-900' },
    { name: 'Ruby on Rails', icon: <SiRubyonrails />, color: 'from-red-500 to-red-700' },
    { name: 'TypeScript', icon: <SiTypescript />, color: 'from-blue-600 to-blue-400' },
    { name: 'Tailwind', icon: <RiTailwindCssFill />, color: 'from-cyan-500 to-teal-400' },
    { name: 'Node.js', icon: <FaCode />, color: 'from-green-500 to-green-700' },
    { name: 'MongoDB', icon: <DiMongodb />, color: 'from-green-500 to-emerald-600' },
    { name: 'MySQL', icon: <DiMysql />, color: 'from-blue-600 to-blue-800' },
    { name: 'Python', icon: <FaPython />, color: 'from-yellow-500 to-yellow-600' },
    { name: 'Docker', icon: <FaDocker />, color: 'from-blue-500 to-blue-700' },
    { name: 'Git', icon: <FaGitAlt />, color: 'from-orange-500 to-orange-600' },
  ];

  return (
    <section id="skills" className="py-32 relative gradient-bg">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-indigo-400 font-medium tracking-wide text-sm uppercase mb-4">Expertise</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Building intelligent systems with modern AI engineering and full-stack development
          </p>
        </div>

        {/* AI Engineering Skills */}
        <div className="mb-16">
          <h3 className="flex items-center gap-3 text-lg font-semibold mb-8 text-indigo-400">
            <span className="p-2 glass rounded-lg"><FaBrain /></span>
            AI Engineering
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {aiSkills.map((skill, index) => (
              <div 
                key={index} 
                className="glass-card rounded-2xl p-5 flex flex-col items-center text-center group hover:scale-105 transition-transform"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <span className="text-xl text-white">{skill.icon}</span>
                </div>
                <p className="text-sm font-medium text-gray-300">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Full-Stack Skills */}
        <div>
          <h3 className="flex items-center gap-3 text-lg font-semibold mb-8 text-cyan-400">
            <span className="p-2 glass rounded-lg"><FaCode /></span>
            Full-Stack Development
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {fullStackSkills.map((skill, index) => (
              <div 
                key={index} 
                className="glass-card rounded-xl p-4 flex flex-col items-center text-center group hover:scale-105 transition-transform cursor-default"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <p className="text-xs font-medium text-gray-400">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
