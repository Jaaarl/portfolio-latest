import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen gradient-bg flex items-center relative">
      <div className="max-w-6xl mx-auto px-6 py-32 md:grid md:grid-cols-2 md:gap-16 items-center">
        {/* Text Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-indigo-400 font-medium tracking-wide text-sm uppercase">
              AI Engineer & Full-Stack Developer
            </p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Building Real-World{' '}
              <span className="gradient-text">AI Applications</span>
            </h1>
          </div>
          
          <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
            I build AI-powered systems that solve real problems — from fine-tuning models and 
            creating agentic workflows to developing scalable full-stack applications.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a 
              href="https://github.com/Jaaarl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-modern flex items-center gap-2"
            >
              <FaGithub /> GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/jarlempleo13" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-outline-modern flex items-center gap-2"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="mt-16 md:mt-0 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full blur-3xl opacity-20"></div>
            <img 
              src="/Jarl.jpg" 
              alt="Jarl" 
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
