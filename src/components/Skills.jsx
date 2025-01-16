import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiRubyonrails, SiTypescript, SiMongodb } from "react-icons/si";
import { RiTailwindCssFill, RiNextjsLine } from "react-icons/ri";
import { FaPhp, FaBootstrap, FaGem, FaPython, FaJava, FaDocker} from "react-icons/fa";
import { DiMysql } from "react-icons/di";
const Skills = () => {
  return (
    <div className="min-h-screen p-8  bg-slate-50">
      <h2 className="text-4xl font-semibold text-center mb-8">My Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

        <div className="p-6 rounded-lg shadow-md text-center">
          <FaJs className="text-4xl text-yellow-500 mb-4" />
          <h4 className="text-xl font-semibold mb-2">JavaScript</h4>
        </div>

        <div className="p-6 rounded-lg shadow-md text-center">
          <SiRubyonrails className="text-4xl text-red-600 mb-4" />
          <h4 className="text-xl font-semibold mb-2">Ruby on Rails</h4>
        </div>

        <div className="p-6 rounded-lg shadow-md text-center">
          <FaReact className="text-4xl text-blue-400 mb-4" />
          <h4 className="text-xl font-semibold mb-2">React</h4>
        </div>

        <div className="p-6 rounded-lg shadow-md text-center">
          <RiTailwindCssFill className="text-4xl text-cyan-500 mb-4" />
          <h4 className="text-xl font-semibold mb-2">Tailwind</h4>
        </div>

        <div className="p-6 rounded-lg shadow-md text-center">
          <RiNextjsLine className="text-4xl text-white mb-4" />
          <h4 className="text-xl font-semibold mb-2">Next.js</h4>
        </div>

        <div className="p-6 rounded-lg shadow-md text-center">
          <SiTypescript className="text-4xl text-blue-500 mb-4" />
          <h4 className="text-xl font-semibold mb-2">TypeScript</h4>
        </div>

        <div className="p-6 rounded-lg shadow-md text-center">
          <FaPhp className="text-4xl text-purple-500 mb-4" />
          <h4 className="text-xl font-semibold mb-2">Php</h4>
        </div>

        <div className="p-6 rounded-lg shadow-md text-center">
          <FaBootstrap className="text-4xl text-purple-500 mb-4" />
          <h4 className="text-xl font-semibold mb-2">Bootstrap</h4>
        </div>

        <div className="p-6 rounded-lg shadow-md text-center">
          <FaNodeJs className="text-4xl text-green-500 mb-4" />
          <h4 className="text-xl font-semibold mb-2">Node.js</h4>
        </div>

        <div className="p-6 rounded-lg shadow-md text-center">
          <SiMongodb className="text-4xl text-green-500 mb-4" />
          <h4 className="text-xl font-semibold mb-2">MongoDb</h4>
        </div>

        <div className="p-6 rounded-lg shadow-md text-center">
          <DiMysql className="text-4xl text-teal-500 mb-4" />
          <h4 className="text-xl font-semibold mb-2">Sql</h4>
        </div>

        <div className="p-6 rounded-lg shadow-md text-center">
          <FaDocker className="text-4xl text-blue-400 mb-4" />
          <h4 className="text-xl font-semibold mb-2">Docker</h4>
        </div>
        
        <div className="p-6 rounded-lg shadow-md text-center">
          <FaGitAlt className="text-4xl text-orange-500 mb-4" />
          <h4 className="text-xl font-semibold mb-2">Git</h4>
        </div>

        <div className="p-6 rounded-lg shadow-md text-center">
        <FaGem className="text-4xl text-red-500 mb-4" />
        <h4 className="text-xl font-semibold mb-2">Ruby</h4>
      </div>
        <div className="p-6 rounded-lg shadow-md text-center">
            <FaPython className="text-4xl text-yellow-500 mb-4" />
            <h4 className="text-xl font-semibold mb-2">Python</h4>
        </div>

        <div className="p-6 rounded-lg shadow-md text-center">
            <FaJava className="text-4xl text-orange-500 mb-4" />
            <h4 className="text-xl font-semibold mb-2">Java</h4>
        </div>

        <div className="p-6 rounded-lg shadow-md text-center">
          <FaHtml5 className="text-4xl text-orange-500 mb-4" />
          <h4 className="text-xl font-semibold mb-2">HTML</h4>
        </div>

        <div className="p-6 rounded-lg shadow-md text-center">
          <FaCss3Alt className="text-4xl text-blue-500 mb-4" />
          <h4 className="text-xl font-semibold mb-2">CSS</h4>
        </div>
      </div>
    </div>
  );
};

export default Skills;
