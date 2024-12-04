import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './home/home';
import About from './about/about';
import Projects from './project/projects';
import Contact from './contacts/contacts';
import { ThemeProvider } from '@material-tailwind/react'; // Correct import

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div>
          {/* Navigation Bar */}
          <nav className="bg-blue-600 p-4">
            <ul className="flex justify-center space-x-8">
              <li>
                <Link to="/" className="text-white text-lg">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-white text-lg">About</Link>
              </li>
              <li>
                <Link to="/projects" className="text-white text-lg">Projects</Link>
              </li>
              <li>
                <Link to="/contact" className="text-white text-lg">Contact</Link>
              </li>
            </ul>
          </nav>

          {/* Page Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
