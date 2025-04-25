
import React from 'react';

const services = [
  {
    title: "Script Writing",
    description: "Professional script writing services for all your creative needs",
    icon: "📝",
  },
  {
    title: "Graphic Designing",
    description: "Creative and innovative graphic design solutions",
    icon: "🎨",
  },
  {
    title: "Video Editing",
    description: "Professional video editing and post-production services",
    icon: "🎬",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 px-4">
      <h2 className="section-title">Our Services</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.title} className="service-card">
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-400">{service.description}</p>
            <a href="#" className="inline-block mt-4 text-[#F6B017] hover:text-[#E5A416]">
              Learn more →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
