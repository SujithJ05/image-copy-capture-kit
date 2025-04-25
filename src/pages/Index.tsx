
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import TeamSection from '../components/TeamSection';
import { Separator } from '../components/ui/separator';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <TeamSection />
      <Separator className="h-px bg-gray-800 mx-auto max-w-7xl my-8" />
      <Footer />
    </div>
  );
};

export default Index;
