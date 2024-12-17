import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => (
  <footer className="bg-indigo-900 text-white py-16">
    <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-4 gap-12">
      {/* About Section */}
      <div>
        <h4 className="font-bold text-lg mb-4">LifeAssure</h4>
        <p className="text-gray-300 leading-relaxed">
          Comprehensive insurance solutions for peace of mind. Protect your future with trusted coverage.
        </p>
        <div className="mt-4 flex space-x-3">
          <a href="#" className="p-2 bg-indigo-700 rounded-full hover:bg-indigo-600">
            <Facebook size={20} />
          </a>
          <a href="#" className="p-2 bg-indigo-700 rounded-full hover:bg-indigo-600">
            <Twitter size={20} />
          </a>
          <a href="#" className="p-2 bg-indigo-700 rounded-full hover:bg-indigo-600">
            <Instagram size={20} />
          </a>
          <a href="#" className="p-2 bg-indigo-700 rounded-full hover:bg-indigo-600">
            <Linkedin size={20} />
          </a>
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="font-bold text-lg mb-4">Quick Links</h4>
        <ul className="space-y-2 text-gray-300">
          <li><a href="#" className="hover:text-white">Home</a></li>
          <li><a href="/In" className="hover:text-white">Insurance Plans</a></li>
          <li><a href="/about" className="hover:text-white">About Us</a></li>
          <li><a href="/Support" className="hover:text-white">Contact Us</a></li>
        </ul>
      </div>

      {/* Contact Information */}
      <div>
        <h4 className="font-bold text-lg mb-4">Contact Us</h4>
        <p className="text-gray-300">1234 Insurance St, Suite 500</p>
        <p className="text-gray-300">City, State, ZIP</p>
        <p className="mt-2 text-gray-300">Email: <a href="mailto:info@lifeassure.com" className="hover:text-white">info@lifeassure.com</a></p>
        <p className="text-gray-300">Phone: <a href="tel:+123456789" className="hover:text-white">+1 (234) 567-89</a></p>
      </div>

      {/* Newsletter Subscription */}
      <div>
        <h4 className="font-bold text-lg mb-4">Stay Updated</h4>
        <p className="text-gray-300 mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
        <form>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 mb-4 rounded-md bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-md transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="mt-12 border-t border-indigo-800 pt-6 text-center text-gray-400">
      <p>© 2024 LifeAssure. All Rights Reserved.</p>
      <p>Privacy Policy | Terms of Service</p>
    </div>
  </footer>
);

export default Footer;
