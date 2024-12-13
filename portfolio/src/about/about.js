import React from 'react';
// import profilePic from './path-to-your-image.jpg';  // Make sure to add your profile image in the 'src' folder

function About() {
  return (
    <div className="about p-8 text-center max-w-3xl mx-auto">
      {/* Profile Image */}
      <img 
        // src={profilePic} 
        alt="Profile Picture" 
        className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-blue-600 shadow-lg transition-transform transform hover:scale-110"
      />
      
      {/* Heading */}
      <h2 className="text-4xl font-bold text-gray-800 mb-6">About Me</h2>
      
      {/* Description */}
      <p className="text-xl text-gray-700 mb-6 leading-relaxed">
        I am a software developer with a strong background in building web applications. 
        I specialize in full-stack development, including web design, back-end programming, and database management.
      </p>

      {/* Social Links */}
      <div className="social-links mb-8">
        <p className="text-lg text-gray-800 mb-4">Connect with me:</p>
        <div className="flex justify-center space-x-8">
          <a 
            href="https://www.linkedin.com/in/derick-kuria/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 text-lg font-semibold transition duration-300"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/ravine13" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-gray-600 text-lg font-semibold transition duration-300"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* CV Download */}
      <div className="cv mb-8">
        <p className="text-lg text-gray-800 mb-4">Download my CV:</p>
        <a 
          href="/path-to-your-cv.pdf" 
          download 
          className="text-blue-600 hover:text-blue-800 text-lg font-semibold transition duration-300"
        >
          Download CV (PDF)
        </a>
      </div>

      {/* Fun Facts */}
      <div className="fun-facts mt-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Fun Facts</h3>
        <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
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
