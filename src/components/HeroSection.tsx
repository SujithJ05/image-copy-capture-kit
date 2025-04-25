import React from 'react';
import { Button } from './ui/button';

const HeroSection = () => {
  return (
    <div id="hero" className="min-h-screen flex items-center justify-center text-center px-4 pt-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Creative Solutions for Your Business
        </h1>
        <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          We bring your ideas to life through expert script writing, stunning graphic design, and professional video editing.
        </p>
        <Button className="cta-button">
          Explore Our Services
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
