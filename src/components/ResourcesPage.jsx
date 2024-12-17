import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { 
  FileText, 
  Book, 
  BookOpen, 
  HelpCircle, 
  LifeBuoy, 
  Shield, 
  Car, 
  Home, 
  Heart,
  DollarSign,
  Search
} from 'lucide-react';

const ResourcesPage = () => {
  const [activeSection, setActiveSection] = useState('explore');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedInsuranceType, setSelectedInsuranceType] = useState('all');

  const insuranceTypes = [
    { id: 'all', label: 'All Insurance', icon: <Shield className="w-4 h-4" /> },
    { id: 'auto', label: 'Auto Insurance', icon: <Car className="w-4 h-4" /> },
    { id: 'home', label: 'Home Insurance', icon: <Home className="w-4 h-4" /> },
    { id: 'life', label: 'Life Insurance', icon: <Heart className="w-4 h-4" /> }
  ];

  const sections = {
    explore: [
      { 
        title: 'Insurance Articles', 
        icon: <FileText className="w-5 h-5" />, 
        description: 'Expert insights on insurance policies and coverage options',
        type: 'all',
        categories: ['Coverage Basics', 'Policy Comparisons', 'Industry Updates']
      },
      { 
        title: 'Insurance Guides', 
        icon: <Book className="w-5 h-5" />, 
        description: 'Step-by-step guides for choosing the right insurance',
        type: 'all',
        categories: ['Buying Guides', 'Claim Filing', 'Policy Management']
      },
      { 
        title: 'Premium Calculators', 
        icon: <DollarSign className="w-5 h-5" />, 
        description: 'Interactive tools to estimate your insurance costs',
        type: 'all',
        categories: ['Auto Rates', 'Home Coverage', 'Life Insurance']
      },
      { 
        title: 'Policy Ebooks', 
        icon: <BookOpen className="w-5 h-5" />, 
        description: 'Comprehensive resources about insurance coverage',
        type: 'all',
        categories: ['Beginners Guide', 'Advanced Topics', 'Case Studies']
      }
    ],
    help: [
      { 
        title: 'Insurance FAQs', 
        icon: <HelpCircle className="w-5 h-5" />, 
        description: 'Find answers about policies, claims, and coverage',
        type: 'all',
        categories: ['Claims', 'Coverage', 'Payments']
      },
      { 
        title: 'Claims Support', 
        icon: <LifeBuoy className="w-5 h-5" />, 
        description: 'Get assistance with filing and tracking claims',
        type: 'all',
        categories: ['File a Claim', 'Track Status', 'Emergency Support']
      }
    ]
  };

  const filteredSections = sections[activeSection].filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedInsuranceType === 'all' || item.type === selectedInsuranceType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search resources..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
          {insuranceTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedInsuranceType(type.id)}
              className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap
                ${selectedInsuranceType === type.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
                }`}
            >
              {type.icon}
              <span className="ml-2">{type.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-4">
        <button
          onClick={() => setActiveSection('explore')}
          className={`px-6 py-3 rounded-lg font-medium transition-colors ${
            activeSection === 'explore'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          EXPLORE
        </button>
        <button
          onClick={() => setActiveSection('help')}
          className={`px-6 py-3 rounded-lg font-medium transition-colors ${
            activeSection === 'help'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          HELP CENTER
        </button>
      </div>

      {/* Resource Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {filteredSections.map((item) => (
          <Card key={item.title} className="group hover:shadow-lg transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl font-semibold">{item.title}</CardTitle>
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                {item.icon}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">{item.description}</p>
              
              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {item.categories.map((category) => (
                  <span key={category} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600 hover:bg-gray-200 cursor-pointer transition-colors">
                    {category}
                  </span>
                ))}
              </div>

              <button className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center group">
                <span>Access {item.title}</span>
                <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ResourcesPage;