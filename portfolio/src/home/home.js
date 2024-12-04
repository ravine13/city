import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from 'react-icons/fa'; // Importing icons

function Home() {
  return (
    <div className="home text-center p-8">
      <h1 className="text-4xl font-bold">Welcome to My Portfolio!</h1>
      <p className="text-xl mt-4">I'm a passionate developer specializing in web development.</p>

      <div className="skills mt-8">
        <h2 className="text-2xl font-semibold mb-4">My Skills</h2>
        <div className="icons flex justify-center space-x-8">
          <div className="icon text-4xl">
            <FaHtml5 title="HTML5" />
          </div>
          <div className="icon text-4xl">
            <FaCss3Alt title="CSS3" />
          </div>
          <div className="icon text-4xl">
            <FaJs title="JavaScript" />
          </div>
          <div className="icon text-4xl">
            <FaReact title="React" />
          </div>
          <div className="icon text-4xl">
            <FaGithub title="GitHub" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
