import React, { useState, useEffect } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi'; // Arrow icon for button
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from 'react-icons/fa'; // Skill icons
import panda from '../assets/images/panda2.webp';
import { Link } from "react-scroll"; // For smooth scrolling

const Home = () => {
  const [typedName, setTypedName] = useState('');
  const name = "Derick Kuria";  // Name to be typed

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedName((prev) => prev + name[index]);
      index += 1;
      if (index === name.length) clearInterval(interval);
    }, 150); // Adjust typing speed (ms)
    
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    // Main container - full screen with dark background
    <div name="home" className="h-screen w-full bg-[#0a192f]">
      {/* Content wrapper - centers content and handles responsive layout */}
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        {/* Left side - Text content */}
        <div className="flex flex-col justify-center h-full">
          {/* Main headline with typing effect */}
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Hello, I'm {name}
          </h2>
          {/* Brief introduction */}
          <p className="text-gray-500 py-4 max-w-md">
            A passionate web developer specializing in creating amazing user experiences. I enjoy building web applications with technologies like React, Tailwind, and more.
          </p>
          {/* About Me button with hover effect */}
          <div>
            <Link
              to="about"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              About Me
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight size={25} className="ml-3" />
              </span>
            </Link>
          </div>
        </div>

        {/* Right side - Profile image with reduced size */}
        <div>
          <img
            src={panda}
            alt="my profile"
            className="rounded-2xl mx-auto w-1 md:w-3/4" // Reduced image size
          />
        </div>
      </div>

      {/* Skills Section */}
      <div className="skills mt-8 bg-gray-800 py-8">
        <h2 className="text-2xl font-semibold text-white text-center mb-4">
          My Skills
        </h2>
        <div className="icons flex justify-center space-x-8">
          <div className="icon text-4xl text-white">
            <FaHtml5 title="HTML5" />
          </div>
          <div className="icon text-4xl text-white">
            <FaCss3Alt title="CSS3" />
          </div>
          <div className="icon text-4xl text-white">
            <FaJs title="JavaScript" />
          </div>
          <div className="icon text-4xl text-white">
            <FaReact title="React" />
          </div>
          <div className="icon text-4xl text-white">
            <FaGithub title="GitHub" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
