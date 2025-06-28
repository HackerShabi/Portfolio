import React, { useState } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const sections = [
  { id: 'home', Component: Hero },
  { id: 'about', Component: About },
  { id: 'skills', Component: Skills },
  { id: 'projects', Component: Projects },
  { id: 'contact', Component: Contact },
];

function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Listen for scroll or nav click to update activeSection (optional: can be improved)
  // For now, just render all with slide/fade effect

  return (
    <div className="App">
      <Navbar />
      <main>
        {sections.map(({ id, Component }) => (
          <div key={id} id={id} className="section-slide-fade">
            <Component />
          </div>
        ))}
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="container-custom">
          <div className="text-center">
            <p className="text-gray-400">
              © 2025 DALIWEB. All rights reserved. Built with ❤️ using React & Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
