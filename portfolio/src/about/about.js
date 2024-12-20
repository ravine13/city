import React from 'react';
import profilepic from '../assets/images/profile picture.jpeg';
import { FaLinkedin, FaGithub, FaHiking, FaGamepad, FaCameraRetro, FaCode } from 'react-icons/fa'; // Import icons

function About() {
  return (
    <div name="about" className="min-h-screen w-full bg-[#0a192f] text-white p-8 text-center">
      {/* Wrapper to ensure background color covers entire page */}
      <div className="max-w-4xl mx-auto">
        {/* Profile Image */}
        <img 
          src={profilepic} 
          alt="Profile Picture" 
          className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-cyan-500 shadow-lg transition-transform transform hover:scale-110"
        />

        {/* Heading */}
        <h2 className="text-4xl font-bold text-cyan-500 mb-6">About Me</h2>

        {/* Description */}
        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
          I am a software developer with a strong background in building web applications. 
          I specialize in full-stack development, including web design, back-end programming, and database management.
        </p>

        {/* Social Links */}
        <div className="social-links mb-8">
          <p className="text-lg text-gray-300 mb-4">Connect with me:</p>
          <div className="flex justify-center space-x-8">
            <a 
              href="https://www.linkedin.com/in/derick-kuria/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cyan-500 hover:text-cyan-300 text-lg font-semibold transition duration-300 flex items-center"
            >
              <FaLinkedin className="mr-2" /> LinkedIn
            </a>
            <a 
              href="https://github.com/ravine13" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cyan-500 hover:text-cyan-300 text-lg font-semibold transition duration-300 flex items-center"
            >
              <FaGithub className="mr-2" /> GitHub
            </a>
          </div>
        </div>

        {/* CV Download */}
        <div className="cv mb-8">
          <p className="text-lg text-gray-300 mb-4">Download my CV:</p>
          <a 
            href="/path-to-your-cv.pdf" 
            download 
            className="text-cyan-500 hover:text-cyan-300 text-lg font-semibold transition duration-300"
          >
            Download CV (PDF)
          </a>
        </div>

        {/* Fun Facts */}
        <div className="fun-facts mt-8">
          <h3 className="text-2xl font-semibold text-cyan-500 mb-6">Fun Facts</h3>
          <ul className="list-none text-lg text-gray-300 space-y-4">
            <li className="flex items-center">
              <FaHiking className="text-cyan-500 mr-2" /> I love hiking and exploring nature during the weekends.
            </li>
            <li className="flex items-center">
              <FaGamepad className="text-cyan-500 mr-2" /> I'm a passionate gamer and enjoy playing strategy games in my free time.
            </li>
            <li className="flex items-center">
              <FaCode className="text-cyan-500 mr-2" /> I enjoy learning new programming languages and experimenting with different technologies.
            </li>
            <li className="flex items-center">
              <FaCameraRetro className="text-cyan-500 mr-2" /> I'm also into photography and capturing beautiful moments in nature.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
