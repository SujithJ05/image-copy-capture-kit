
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const teamMembers = [
  {
    name: "John Doe",
    role: "Script Writer",
    email: "john@example.com"
  },
  {
    name: "Jane Smith",
    role: "Graphic Designer",
    email: "jane@example.com"
  },
  {
    name: "Mike Johnson",
    role: "Video Editor",
    email: "mike@example.com"
  },
  {
    name: "Sarah Williams",
    role: "Content Creator",
    email: "sarah@example.com"
  },
  {
    name: "David Brown",
    role: "Motion Designer",
    email: "david@example.com"
  }
];

const TeamSection = () => {
  return (
    <section id="creators" className="py-20 px-4 bg-black/30">
      <h2 className="section-title">Meet Our Creators</h2>
      <div className="max-w-7xl mx-auto">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {teamMembers.map((member, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/3 lg:basis-1/3">
                <div className="team-card">
                  <div className="w-full aspect-video bg-gray-800 rounded-lg mb-4"></div>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-[#F6B017] mb-2">{member.role}</p>
                  <p className="text-gray-400">{member.email}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default TeamSection;
