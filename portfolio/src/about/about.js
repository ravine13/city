// src/components/About/About.js
import React from 'react';
// import profilePic from './path-to-your-image.jpg';  // Make sure to add your profile image in the 'src' folder

function About() {
  return (
    <div className="about p-8 text-center">
      <img 
        // src={profilePic} 
        alt="Profile Picture" 
        className="w-32 h-32 rounded-full mx-auto mb-4" 
      />
      <h2 className="text-3xl font-semibold mb-4">About Me</h2>
      <p className="text-xl mb-4">
        I am a software developer with a strong background in building web applications. 
        I specialize in full-stack development, including web design, back-end programming, and database management.
      </p>

      {/* LinkedIn and GitHub Links */}
      <div className="social-links mb-6">
        <p className="text-lg mb-2">Connect with me:</p>
        <div className="flex justify-center space-x-6">
          <a 
            href="https://www.linkedin.com/in/your-linkedin" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/your-github" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-gray-600"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* CV Download */}
      <div className="cv mb-6">
        <p className="text-lg mb-2">Download my CV:</p>
        <a 
          href="/path-to-your-cv.pdf" 
          download 
          className="text-blue-600 hover:text-blue-800"
        >
          Download CV (PDF)
        </a>
      </div>

      {/* Fun Facts */}
      <div className="fun-facts mt-8">
        <h3 className="text-2xl font-semibold mb-4">Fun Facts</h3>
        <ul className="list-disc pl-6 text-lg">
          <li>I love hiking and exploring nature during the weekends.</li>
          <li>I'm a passionate gamer and enjoy playing strategy games in my free time.</li>
          <li>I enjoy learning new programming languages and experimenting with different technologies.</li>
          <li>I'm also into photography and capturing beautiful moments in nature.</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
