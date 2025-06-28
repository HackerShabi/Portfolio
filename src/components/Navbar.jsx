import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [autoOpened, setAutoOpened] = useState(false);

  // Entrance animation
  useEffect(() => {
    setScrolled(true);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  // Add useEffect to auto-open menu on scroll from landing page, then auto-close after 3s
  useEffect(() => {
    let autoCloseTimeout;
    const handleScroll = () => {
      if (!autoOpened && window.scrollY > window.innerHeight * 0.5 && window.innerWidth < 768) {
        setIsOpen(true);
        setAutoOpened(true);
        clearTimeout(autoCloseTimeout);
        autoCloseTimeout = setTimeout(() => setIsOpen(false), 3000);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(autoCloseTimeout);
    };
  }, [autoOpened]);

  // Hide menu on outside click
  useEffect(() => {
    if (!isOpen) return;
    const handleClick = (e) => {
      if (!e.target.closest('.mobile-nav-menu') && !e.target.closest('.hamburger-icon')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isOpen]);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed md:bottom-4 bottom-4 left-4 md:left-1/2 md:transform md:-translate-x-1/2 z-50 transition-all duration-500 ${scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-fade-in`}> 
      <div className="glass-effect rounded-full shadow-2xl px-4 py-2 flex items-center space-x-2 md:space-x-8">
        {/* Hamburger Icon (three floating lines, daliweb color, floating effect, inline) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden hamburger-icon relative flex flex-col justify-center items-center w-8 h-8 p-0 m-0 bg-transparent border-none outline-none focus:outline-none"
          style={{ color: '#7f5af0' }}
          aria-label="Open navigation menu"
        >
          <span className="block w-6 h-0.5 mb-1 rounded-full bg-current animate-float-line"></span>
          <span className="block w-6 h-0.5 mb-1 rounded-full bg-current animate-float-line" style={{ animationDelay: '0.15s' }}></span>
          <span className="block w-6 h-0.5 rounded-full bg-current animate-float-line" style={{ animationDelay: '0.3s' }}></span>
        </button>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-gray-300 hover:text-white font-semibold text-lg px-4 py-2 transition-all duration-300 relative group"
            >
              <span className="inline-block group-hover:scale-110 group-hover:text-gradient transition-all duration-300 animate-nav-link-entrance" style={{ animationDelay: `${idx * 0.1}s` }}>{item.label}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-1 bg-gradient-to-r from-primary-500 to-accent-purple rounded-full group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}
        </div>
      </div>
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden glass-effect border-t border-white/20 mt-2 rounded-xl animate-mobile-menu-in mobile-nav-menu">
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-gray-300 hover:text-white font-semibold text-lg py-2 transition-all duration-300 group"
              >
                <span className="inline-block group-hover:scale-110 group-hover:text-gradient transition-all duration-300 animate-nav-link-entrance" style={{ animationDelay: `${idx * 0.1}s` }}>{item.label}</span>
                <span className="absolute left-0 -bottom-1 w-0 h-1 bg-gradient-to-r from-primary-500 to-accent-purple rounded-full group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 