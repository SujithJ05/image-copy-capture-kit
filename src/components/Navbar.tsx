
import React from 'react';
import { Button } from './ui/button';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If we're already on the home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/4aa88874-4800-484a-989f-f5943dceddd6.png" 
              alt="RY Services Logo" 
              className="h-12 w-auto"
            />
          </div>
          
          {/* Center navigation links */}
          <div className="flex-1 flex justify-center">
            <div className="flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('hero')} 
                className="nav-link"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="nav-link"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('creators')} 
                className="nav-link"
              >
                Creators
              </button>
            </div>
          </div>

          <div className="flex items-center">
            <Button className="cta-button">Contact Us</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
