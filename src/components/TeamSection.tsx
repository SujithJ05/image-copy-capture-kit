
import React from 'react';

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
  }
];

const TeamSection = () => {
  return (
    <section id="creators" className="py-20 px-4 bg-black/30">
      <h2 className="section-title">Meet Our Creators</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <div key={member.name} className="team-card">
            <div className="w-full aspect-video bg-gray-800 rounded-lg mb-4"></div>
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-[#F6B017] mb-2">{member.role}</p>
            <p className="text-gray-400">{member.email}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
