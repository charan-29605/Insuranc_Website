import React, { useState } from 'react';
import { Search, Book, Shield, Heart, Home, Car, Briefcase, Plane, X } from 'lucide-react';

const CustomModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full relative">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-5 h-5" />
        </button>
        {children}
      </div>
    </div>
  );
};

const ContactForm = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    onClose();
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Contact an Insurance Expert</h2>
        <p className="text-gray-600 mt-2">Fill out the form below and we'll get back to you soon.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
            placeholder="Your name"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
            placeholder="your@email.com"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            type="tel"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
            placeholder="Your phone number"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
            rows="3"
            placeholder="How can we help you?"
            required
          ></textarea>
        </div>
        
        <div className="flex justify-end gap-3 mt-6">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 transition-colors"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

const InsuranceGuides = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const guides = [
    {
      title: 'Health Insurance Basics',
      description: 'Understanding health insurance coverage, deductibles, and choosing the right plan for you and your family.',
      icon: Heart,
      category: 'Health',
      readTime: '8 min read'
    },
    {
      title: 'Home Insurance 101',
      description: 'Learn about protecting your home, valuables, and understanding different types of coverage options.',
      icon: Home,
      category: 'Property',
      readTime: '10 min read'
    },
    {
      title: 'Auto Insurance Guide',
      description: 'Everything you need to know about car insurance, from liability to comprehensive coverage.',
      icon: Car,
      category: 'Auto',
      readTime: '7 min read'
    },
    {
      title: 'Life Insurance Explained',
      description: 'Discover the different types of life insurance and how to choose the right coverage for your loved ones.',
      icon: Shield,
      category: 'Life',
      readTime: '12 min read'
    },
    {
      title: 'Business Insurance Essentials',
      description: 'Protect your business with the right insurance coverage. Learn about liability, workers comp, and more.',
      icon: Briefcase,
      category: 'Business',
      readTime: '15 min read'
    },
    {
      title: 'Travel Insurance Tips',
      description: 'Stay protected during your travels. Understanding travel insurance coverage and benefits.',
      icon: Plane,
      category: 'Travel',
      readTime: '6 min read'
    }
  ];

  const filteredGuides = guides.filter(guide =>
    guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    guide.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    guide.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Book className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Insurance Guides & Resources</h1>
            <p className="text-xl text-red-100 mb-8">
              Expert insights and comprehensive guides to help you make informed insurance decisions
            </p>
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search guides..."
                className="w-full px-6 py-4 rounded-full text-gray-900 bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-red-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute right-4 top-4 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Guides Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGuides.map((guide, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                    {guide.category}
                  </span>
                  <span className="text-sm text-gray-500">{guide.readTime}</span>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <guide.icon className="w-6 h-6 text-red-600" />
                  <h3 className="text-xl font-bold text-gray-900">{guide.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{guide.description}</p>
                <button className="text-red-600 font-medium hover:text-red-800 transition-colors inline-flex items-center">
                  Read More 
                  <span className="ml-1">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Personal Assistance?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our insurance experts are here to help you find the perfect coverage for your needs.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium"
          >
            Contact an Expert
          </button>
        </div>
      </div>

      {/* Custom Modal */}
      <CustomModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
      >
        <ContactForm onClose={() => setIsModalOpen(false)} />
      </CustomModal>
    </div>
  );
};

export default InsuranceGuides;