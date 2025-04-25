
import React from 'react';
import { Link } from 'react-router-dom';
import { Code, MessageSquare, BarChart2, Pencil, Palette, Film } from 'lucide-react';

const services = [
  {
    title: "Script Writing",
    description: "Professional script writing services for all your creative needs",
    icon: Pencil,
    path: "/services/script-writing"
  },
  {
    title: "Graphic Designing",
    description: "Creative and innovative graphic design solutions",
    icon: Palette,
    path: "/services/graphic-designing"
  },
  {
    title: "Video Editing",
    description: "Professional video editing and post-production services",
    icon: Film,
    path: "/services/video-editing"
  },
  {
    title: "Website Designer",
    description: "Custom website design and development for your digital presence",
    icon: Code,
    path: "/services/website-design"
  },
  {
    title: "SMO Expert",
    description: "Strategic social media optimization to boost your online reach",
    icon: MessageSquare,
    path: "/services/smo-expert"
  },
  {
    title: "Google ADS Manager",
    description: "Effective Google Ads management to maximize your ROI",
    icon: BarChart2,
    path: "/services/google-ads"
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 px-4">
      <h2 className="section-title">Our Services</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.title} className="service-card">
            <div className="text-4xl mb-4">
              <service.icon className="w-12 h-12 text-[#F6B017]" />
            </div>
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-400">{service.description}</p>
            <Link to={service.path} className="inline-block mt-4 text-[#F6B017] hover:text-[#E5A416]">
              Learn more →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
