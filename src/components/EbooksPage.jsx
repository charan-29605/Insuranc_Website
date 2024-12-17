import React, { useState } from 'react';
import { 
  Book, 
  Search, 
  Download, 
  Filter, 
  ChevronRight 
} from 'lucide-react';

const EbooksPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState("All eBooks");
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  // Enhanced eBooks data
  const ebooks = [
    {
      id: 1,
      title: "The Complete Guide to Home Insurance",
      author: "Emily Carter",
      description: "Comprehensive insights into protecting your home and assets",
      category: "Home Insurance",
      pages: 124,
      downloadCount: 3500,
      coverUrl: "./src/components/home-insurance.png",
      price: "Free",
      tags: ["Beginner", "Essential"]
    },
    {
      id: 2,
      title: "Mastering Auto Insurance Strategies",
      author: "Michael Rodriguez",
      description: "Advanced techniques to optimize your auto insurance coverage",
      category: "Auto Insurance",
      pages: 96,
      downloadCount: 2800,
      coverUrl: "./src/components/car-insurance.png",
      price: "$4.99",
      tags: ["Advanced", "Savings"]
    },
    {
      id: 3,
      title: "Life Insurance Planning for Families",
      author: "Sarah Thompson",
      description: "Comprehensive planning for your family's financial security",
      category: "Life Insurance",
      pages: 142,
      downloadCount: 4200,
      coverUrl: "./src/components/la-1.png",
      price: "Free",
      tags: ["Family", "Planning"]
    }
  ];

  // Categories for filtering
  const categories = [
    "All eBooks", 
    "Home Insurance", 
    "Auto Insurance", 
    "Life Insurance", 
    "Health Insurance"
  ];

  // Filter eBooks based on search and category
  const filteredEbooks = ebooks.filter(ebook => 
    (selectedCategory === "All eBooks" || ebook.category === selectedCategory) &&
    (ebook.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
     ebook.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 p-6 md:p-12">
      {/* Header Section */}
      <header className="text-center mb-12 relative">
        <div className="absolute -z-10 top-0 left-0 right-0 h-full bg-gradient-to-r from-blue-600 to-indigo-600 opacity-10 blur-3xl"></div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600 mb-4">
          Insurance eBook Library
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Unlock expert knowledge and comprehensive insights with our curated insurance eBooks
        </p>
      </header>

      {/* Search and Filter Section */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="relative">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* Search Input */}
            <div className="flex-grow relative">
              <input 
                type="text" 
                placeholder="Search eBooks by title or topic..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-4 pl-12 border-2 border-blue-200 rounded-xl 
                  focus:ring-4 focus:ring-blue-300/50 transition duration-300
                  shadow-lg hover:shadow-xl"
              />
              <Search className="absolute left-4 top-4 text-blue-500" size={24} />
            </div>

            {/* Mobile Filter Toggle */}
            <button 
              onClick={() => setIsFiltersVisible(!isFiltersVisible)}
              className="md:hidden flex items-center justify-center p-3 bg-blue-100 text-blue-700 rounded-xl"
            >
              <Filter />
            </button>
          </div>

          {/* Category Filters */}
          <div className={`
            ${isFiltersVisible ? 'block' : 'hidden'} md:block
            flex flex-wrap justify-center gap-2 mb-4
          `}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setIsFiltersVisible(false);
                }}
                className={`
                  px-4 py-2 rounded-full text-sm font-medium transition duration-300
                  ${selectedCategory === category 
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg' 
                    : 'bg-blue-100 text-indigo-700 hover:bg-blue-200'}
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* eBooks Grid */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredEbooks.map((ebook) => (
          <div 
            key={ebook.id} 
            className="bg-white rounded-2xl overflow-hidden 
              shadow-xl hover:shadow-2xl transition-all duration-400 
              transform hover:-translate-y-3 
              border-2 border-transparent hover:border-blue-200"
          >
            {/* eBook Cover */}
            <div className="relative">
              <img 
                src={ebook.coverUrl} 
                alt={ebook.title} 
                className="w-full h-96 object-cover"
              />
              <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                {ebook.price}
              </div>
            </div>

            {/* eBook Details */}
            <div className="p-6">
              {/* Metadata */}
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center text-sm text-gray-500 space-x-3">
                  <div className="flex items-center">
                    <Book className="w-4 h-4 mr-2" />
                    <span>{ebook.pages} Pages</span>
                  </div>
                  <div className="flex items-center">
                    <Download className="w-4 h-4 mr-2" />
                    <span>{ebook.downloadCount} Downloads</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  {ebook.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="bg-blue-100 text-indigo-700 text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Title and Description */}
              <h2 className="text-xl font-bold text-indigo-900 mb-3 hover:text-indigo-700 transition">
                {ebook.title}
              </h2>
              <p className="text-gray-600 mb-4">
                {ebook.description}
              </p>

              {/* Author */}
              <div className="text-sm text-gray-500 mb-4">
                By {ebook.author}
              </div>

              {/* Download Button */}
              <a 
                href="#" 
                className="
                  flex items-center justify-between 
                  bg-gradient-to-r from-blue-600 to-indigo-600 
                  text-white px-4 py-2 rounded-lg 
                  hover:from-blue-700 hover:to-indigo-700 
                  transition duration-300 group
                "
              >
                <span>Download eBook</span>
                <ChevronRight 
                  className="ml-2 transform group-hover:translate-x-1 transition" 
                />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* No eBooks Found State */}
      {filteredEbooks.length === 0 && (
        <div className="text-center py-16 bg-white rounded-2xl shadow-xl max-w-2xl mx-auto">
          <Book className="mx-auto mb-6 text-blue-500" size={64} />
          <p className="text-2xl text-gray-500 mb-4">
            No eBooks found
          </p>
          <p className="text-gray-400">
            Try adjusting your search or category filters
          </p>
        </div>
      )}
    </div>
  );
};

export default EbooksPage;