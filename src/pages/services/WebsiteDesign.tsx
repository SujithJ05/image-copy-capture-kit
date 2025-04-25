
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const WebsiteDesignPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 px-4">
        <div className="max-w-7xl mx-auto py-12">
          <h1 className="text-4xl font-bold mb-6">Website Design Services</h1>
          <p className="text-gray-400">Content coming soon...</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WebsiteDesignPage;
