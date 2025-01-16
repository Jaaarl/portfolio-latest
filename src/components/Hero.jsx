import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFileAlt } from "react-icons/fa";
const Hero = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse gap-8">
      <img
        src="/Jarl.jpg"
        className="max-w-sm rounded-lg shadow-2xl" />
      <div> 
        <h1 className="text-5xl font-bold">Hi, I'm Jarl!</h1>
        <p className="py-6">
        A versatile full-stack developer with expertise in Ruby on Rails and Next.js, adept at building scalable, high-performance web applications from front-end to back-end.
        </p>
        <div className="flex items-center gap-2">
          <a href="Empleo_CV.pdf" download>
            <button className="btn btn-primary">
              <FaFileAlt /> Download CV
            </button>
          </a>

          <a href="https://github.com/Jaaarl" target="_blank" rel="noopener noreferrer">
            <button className="btn btn-success">
              <FaGithub className="text-white"/> Github
            </button>
          </a>

          <a href="https://www.linkedin.com/in/jarlempleo13" target="_blank" rel="noopener noreferrer">
            <button className="btn btn-info">
              <FaLinkedin className="text-white"/> LinkedIn
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>

  );
};

export default Hero;