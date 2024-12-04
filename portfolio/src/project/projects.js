import React from 'react';
import { Card, CardBody, CardFooter, Typography, Button } from '@material-tailwind/react';

function Projects() {
  return (
    <div className="projects p-8">
      <h2 className="text-4xl font-bold mb-8 text-center">My Projects</h2>

      {/* Python/Flask Projects */}
      <div className="category mb-8">
        <h3 className="text-3xl font-semibold text-blue-600 mb-4">Python/Flask</h3>
        
        {/* Flask Project 1 */}
        <Card className="mt-6 w-96">
          <CardBody>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mb-4 h-12 w-12 text-gray-900">
              <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clipRule="evenodd" />
            </svg>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Flask Blog App
            </Typography>
            <Typography>
              A simple blogging platform built with Flask and SQLite.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <a href="https://github.com/yourusername/flask-blog" target="_blank" rel="noopener noreferrer" className="inline-block">
              <Button size="sm" variant="text" className="flex items-center gap-2">
                View on GitHub
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </Button>
            </a>
          </CardFooter>
        </Card>
      </div>

      {/* Python/Django Projects */}
      <div className="category mb-8">
        <h3 className="text-3xl font-semibold text-blue-600 mb-4">Python/Django</h3>

        {/* Django Project 1 */}
        <Card className="mt-6 w-96">
          <CardBody>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mb-4 h-12 w-12 text-gray-900">
              <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clipRule="evenodd" />
            </svg>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Online Store
            </Typography>
            <Typography>
              An e-commerce platform built using Django and PostgreSQL.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <a href="https://github.com/yourusername/django-store" target="_blank" rel="noopener noreferrer" className="inline-block">
              <Button size="sm" variant="text" className="flex items-center gap-2">
                View on GitHub
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </Button>
            </a>
          </CardFooter>
        </Card>
      </div>

      {/* Java/Spring Boot Projects */}
      <div className="category mb-8">
        <h3 className="text-3xl font-semibold text-blue-600 mb-4">Java/Spring Boot</h3>

        {/* Spring Boot Project 1 */}
        <Card className="mt-6 w-96">
          <CardBody>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mb-4 h-12 w-12 text-gray-900">
              <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clipRule="evenodd" />
            </svg>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Online Banking System
            </Typography>
            <Typography>
              A banking system built with Spring Boot and MySQL, featuring account management and transactions.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <a href="https://github.com/yourusername/online-banking-system" target="_blank" rel="noopener noreferrer" className="inline-block">
              <Button size="sm" variant="text" className="flex items-center gap-2">
                View on GitHub
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </Button>
            </a>
          </CardFooter>
        </Card>

        {/* Spring Boot Project 2 */}
        <Card className="mt-6 w-96">
          <CardBody>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mb-4 h-12 w-12 text-gray-900">
              <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clipRule="evenodd" />
            </svg>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Task Management App
            </Typography>
            <Typography>
              A task management app using Spring Boot, offering task creation, deadlines, and user management.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <a href="https://github.com/yourusername/task-management-app" target="_blank" rel="noopener noreferrer" className="inline-block">
              <Button size="sm" variant="text" className="flex items-center gap-2">
                View on GitHub
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </Button>
            </a>
          </CardFooter>
        </Card>
      </div>

    </div>
  );
}

export default Projects;
