import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  Search, 
  Calendar, 
  User, 
  Layers, 
  BookOpen, 
  Filter 
} from 'lucide-react';

const ArticlesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState("All Articles");
  const [articles, setArticles] = useState([]);
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  // Enhanced articles data with more details
  const initialArticles = [
    {
      id: 1,
      title: "Understanding Home Insurance Coverage",
      excerpt: "A comprehensive guide to protecting your most valuable asset",
      author: "Sarah Johnson",
      date: "Nov 15, 2024",
      category: "Home Insurance",
      readTime: "5 min read",
      tags: ["Protection", "Property"],
      imageUrl: "./src/components/home-insurance.png",
      featured: true
    },
    {
      id: 2,
      title: "Top 5 Ways to Lower Your Auto Insurance Premiums",
      excerpt: "Smart strategies to save money without compromising coverage",
      author: "Mike Rodriguez",
      date: "Oct 22, 2024",
      category: "Auto Insurance",
      readTime: "4 min read",
      tags: ["Savings", "Finance"],
      imageUrl: "./src/components/car-insurance.png",
      featured: false
    },
    {
      id: 3,
      title: "Navigating Life Insurance: A Beginner's Guide",
      excerpt: "Everything you need to know about securing your family's financial future",
      author: "Emily Chen",
      date: "Sep 10, 2024",
      category: "Life Insurance",
      readTime: "6 min read",
      tags: ["Planning", "Family"],
      imageUrl: "./src/components/la-1.png",
      featured: true
    }
  ];

  useEffect(() => {
    setArticles(initialArticles);
  }, []);

  // Categories for filtering
  const categories = [
    "All Articles", 
    "Home Insurance", 
    "Auto Insurance", 
    "Life Insurance", 
    "Health Insurance"
  ];

  // Filter articles based on search and category
  const filteredArticles = articles.filter(article => 
    (selectedCategory === "All Articles" || article.category === selectedCategory) &&
    (article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
     article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Sort articles to highlight featured articles
  const sortedArticles = [
    ...filteredArticles.filter(article => article.featured),
    ...filteredArticles.filter(article => !article.featured)
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 p-6 md:p-12">
      {/* Gradient Background Header */}
      <header className="text-center mb-12 relative">
        <div className="absolute -z-10 top-0 left-0 right-0 h-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-10 blur-3xl"></div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-600 mb-4">
          Insurance Insights Hub
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Empowering you with expert knowledge, actionable advice, and industry-leading insights
        </p>
      </header>

      {/* Advanced Search and Filter Section */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="relative">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* Search Input with Enhanced Styling */}
            <div className="flex-grow relative">
              <input 
                type="text" 
                placeholder="Search articles by title or topic..." 
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

          {/* Category Filters with Responsive Behavior */}
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
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                    : 'bg-blue-100 text-blue-700 hover:bg-blue-200'}
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Articles Grid with Enhanced Layout */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedArticles.map((article) => (
          <div 
            key={article.id} 
            className={`
              bg-white rounded-2xl overflow-hidden 
              shadow-xl hover:shadow-2xl transition-all duration-400 
              transform hover:-translate-y-3 
              border-2 border-transparent hover:border-blue-200
              ${article.featured 
                ? 'ring-4 ring-blue-200/50 scale-105' 
                : ''}
            `}
          >
            {/* Article Image with Overlay */}
            <div className="relative">
              <img 
                src={article.imageUrl} 
                alt={article.title} 
                className="w-full h-56 object-cover"
              />
              {article.featured && (
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                  Featured
                </div>
              )}
            </div>

            {/* Article Content */}
            <div className="p-6">
              {/* Metadata and Tags */}
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center text-sm text-gray-500 space-x-3">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="w-4 h-4 mr-2" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  {article.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Title and Excerpt */}
              <h2 className="text-xl font-bold text-blue-900 mb-3 hover:text-blue-700 transition">
                {article.title}
              </h2>

              <p className="text-gray-600 mb-4">
                {article.excerpt}
              </p>

              {/* Read More Button */}
              <a 
                href="#" 
                className="
                  flex items-center justify-between 
                  bg-gradient-to-r from-blue-600 to-purple-600 
                  text-white px-4 py-2 rounded-lg 
                  hover:from-blue-700 hover:to-purple-700 
                  transition duration-300 group
                "
              >
                <span>Read More</span>
                <ChevronRight 
                  className="ml-2 transform group-hover:translate-x-1 transition" 
                />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* No Articles Found State */}
      {sortedArticles.length === 0 && (
        <div className="text-center py-16 bg-white rounded-2xl shadow-xl max-w-2xl mx-auto">
          <Layers className="mx-auto mb-6 text-blue-500" size={64} />
          <p className="text-2xl text-gray-500 mb-4">
            No articles found
          </p>
          <p className="text-gray-400">
            Try adjusting your search or category filters
          </p>
        </div>
      )}
    </div>
  );
};

export default ArticlesPage;