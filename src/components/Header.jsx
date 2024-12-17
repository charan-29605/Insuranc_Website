import React, { useState } from 'react';
import { 
  Menu, X, ChevronDown,
  BookOpen, Phone, HelpCircle,
  Package, FileText, RefreshCcw, LifeBuoy
} from 'lucide-react';

export const Header = ({ onMenuToggle }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const dropdownCloseHandler = () => setActiveDropdown(null);

  const dropdownMenus = {
    resources: [
      { name: 'Articles', path: '/articles', icon: BookOpen },
      { name: 'Guides', path: '/guides', icon: BookOpen },
      { name: 'Ebooks', path: '/ebooks', icon: BookOpen },
      { name: 'FAQs', path: '/faqs', icon: HelpCircle },
      { name: 'Support', path: '/support', icon: Phone }
    ]
  };

  const DropdownMenu = ({ title, items, isOpen }) => (
    <div className="relative group">
      <button
        onClick={() => toggleDropdown(title.toLowerCase())}
        className="flex items-center text-lg font-semibold text-white hover:text-blue-200 transition-colors"
      >
        {title}
        <ChevronDown className={`h-5 w-5 ml-2 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="absolute left-1/2 transform -translate-x-1/2 mt-4 w-64 bg-white text-gray-800 shadow-2xl rounded-xl overflow-hidden animate-dropdown">
          <div className="px-6 py-4">
            <h4 className="font-bold text-blue-600 mb-3 uppercase tracking-wider">
              Explore
            </h4>
            {items.map((item) => (
              <a 
                key={item.path} 
                href={item.path} 
                className="block px-4 py-2 text-sm hover:bg-blue-50 rounded-md transition-colors group"
                onClick={dropdownCloseHandler}
              >
                <div className="flex items-center space-x-3">
                  <item.icon className="w-5 h-5 text-blue-600" />
                  <span className="group-hover:text-blue-600">{item.name}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <header className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white shadow-2xl sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
    <a href="/" className="flex items-center">
      <img 
        src="./src/components/logo.png" 
        alt="LifeAssure Logo" 
        className="h-12 w-12 rounded-full mr-2 transition-transform duration-300 ease-in-out hover:scale-110" 
      />
      <span className="text-3xl font-extrabold text-cyan-300 hover:text-blue-200 tracking-wider shadow-md transition-colors">
        LIFEASSURE
      </span>
    </a>

    <nav className="hidden md:flex items-center space-x-8">
      <a href="/In" className="flex items-center text-lg font-semibold text-white hover:text-cyan-300 transition-colors">
        <Package className="mr-2 h-5 w-5" />
        Products
      </a>
      <a href="/claims" className="flex items-center text-lg font-semibold text-white hover:text-cyan-300 transition-colors">
        <FileText className="mr-2 h-5 w-5" />
        Claims
      </a>
      <a href="/renewals" className="flex items-center text-lg font-semibold text-white hover:text-cyan-300 transition-colors">
        <RefreshCcw className="mr-2 h-5 w-5" />
        Renewals
      </a>
      <a href="/about" className="flex items-center text-lg font-semibold text-white hover:text-cyan-300 transition-colors">
    <LifeBuoy className="mr-2 h-5 w-5" />
    About Us
  </a>
      {Object.entries(dropdownMenus).map(([key, items]) => (
        <DropdownMenu 
          key={key} 
          title={key.charAt(0).toUpperCase() + key.slice(1)} 
          items={items} 
          isOpen={activeDropdown === key}
        />
      ))}
    </nav>

    <div className="hidden md:flex">
      <a
        href="/login"
        className="text-lg px-8 py-3 bg-white text-blue-700 rounded-full font-semibold hover:bg-blue-100 transition-colors"
      >
        Login
      </a>
    </div>

    <button
      onClick={onMenuToggle}
      className="block md:hidden text-white focus:outline-none"
    >
      <Menu className="h-8 w-8" />
    </button>
  </div>
</header>
  );
};

export const MobileMenu = ({ onClose }) => {
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);
  
  const toggleResourcesDropdown = () => setIsResourcesDropdownOpen(!isResourcesDropdownOpen);

  return (
    <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-75">
      <div className="bg-white w-3/4 h-full p-4">
        <div className="flex justify-between">
          <a href="/" className="text-2xl font-bold">
            LifeAssure
          </a>
          <button onClick={onClose} className="text-gray-600">
            <X className="h-8 w-8" />
          </button>
        </div>

        <div className="mt-8">
          <div className="space-y-4">
            <a href="/In" className="b text-gray-800 flex items-center">
              <Package className="mr-2 h-5 w-5" />
              Products
            </a>
            <a href="/claims" className="b text-gray-800 flex items-center">
              <FileText className="mr-2 h-5 w-5" />
              Claims
            </a>
            <a href="/renewals" className="b text-gray-800 flex items-center">
              <RefreshCcw className="mr-2 h-5 w-5" />
              Renewals
            </a>
            <a href="/about" className="b text-gray-800 flex items-center">
    <LifeBuoy className="mr-2 h-5 w-5" />
    About Us
  </a>
            <button onClick={toggleResourcesDropdown} className="w-full text-left">
              <LifeBuoy className="mr-2 h-5 w-5" />
              Resources
            </button>
            
            {isResourcesDropdownOpen && (
              <div className="space-y-2 pl-4">
                <a href="/articles" onClick={onClose}>Articles</a>
                <a href="/guides" onClick={onClose}>Guides</a>
                <a href="/ebooks" onClick={onClose}>Ebooks</a>
                <a href="/faqs" onClick={onClose}>FAQs</a>
                <a href="/support" onClick={onClose}>Support</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
