import React from 'react';

function Projects() {
  return (
    <div className="projects p-8">
      <h2 className="text-4xl font-bold mb-8 text-center">My Projects</h2>

      {/* Python/Flask Projects */}
      <div className="category mb-8">
        <h3 className="text-3xl font-semibold text-blue-600 mb-4">Python/Flask</h3>

        {/* Flask Project 1 */}
        <div className="project-card mt-6 w-96 border rounded-lg p-6 shadow-lg">
          <div className="mb-4 h-12 w-12 text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clipRule="evenodd" />
            </svg>
          </div>
          <h5 className="text-xl font-semibold text-blue-gray mb-2">Flask Blog App</h5>
          <p>A simple blogging platform built with Flask and SQLite.</p>
          <div className="mt-4">
            <a href="https://github.com/yourusername/flask-blog" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
              View on GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Python/Django Projects */}
      <div className="category mb-8">
        <h3 className="text-3xl font-semibold text-blue-600 mb-4">Python/Django</h3>

        {/* Django Project 1 */}
        <div className="project-card mt-6 w-96 border rounded-lg p-6 shadow-lg">
          <div className="mb-4 h-12 w-12 text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clipRule="evenodd" />
            </svg>
          </div>
          <h5 className="text-xl font-semibold text-blue-gray mb-2">Online Store</h5>
          <p>An e-commerce platform built using Django and PostgreSQL.</p>
          <div className="mt-4">
            <a href="https://github.com/yourusername/django-store" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
              View on GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Java/Spring Boot Projects */}
      <div className="category mb-8">
        <h3 className="text-3xl font-semibold text-blue-600 mb-4">Java/Spring Boot</h3>

        {/* Spring Boot Project 1 */}
        <div className="project-card mt-6 w-96 border rounded-lg p-6 shadow-lg">
          <div className="mb-4 h-12 w-12 text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clipRule="evenodd" />
            </svg>
          </div>
          <h5 className="text-xl font-semibold text-blue-gray mb-2">Online Banking System</h5>
          <p>A banking system built with Spring Boot and MySQL, featuring account management and transactions.</p>
          <div className="mt-4">
            <a href="https://github.com/yourusername/online-banking-system" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
