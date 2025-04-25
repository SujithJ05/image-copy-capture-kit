
import React from 'react';
import { Button } from './ui/button';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-white">RY</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#" className="nav-link">Home</a>
              <a href="#services" className="nav-link">Services</a>
              <a href="#creators" className="nav-link">Creators</a>
              <Button className="cta-button">Contact Us</Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
