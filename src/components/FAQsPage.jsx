import React, { useState } from 'react';
import { 
  ChevronDown, 
  Search, 
  HelpCircle, 
  Info, 
  Send,
  MessageCircle 
} from 'lucide-react';

const FAQsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openQuestion, setOpenQuestion] = useState(null);
  const [isDoubtsModalOpen, setIsDoubtsModalOpen] = useState(false);
  const [doubtForm, setDoubtForm] = useState({
    name: '',
    email: '',
    category: 'General',
    doubt: ''
  });

  // Expanded FAQs data with more categories
  const faqs = [
    {
      category: "Home Insurance",
      questions: [
        {
          id: 1,
          question: "What does home insurance typically cover?",
          answer: "Home insurance typically covers damage to your home's structure, personal belongings, and provides liability protection. This includes protection against fire, theft, wind damage, and some water-related damages. It also offers coverage for additional living expenses if your home becomes uninhabitable due to a covered event."
        },
        {
          id: 2,
          question: "How much home insurance do I need?",
          answer: "The amount of home insurance you need depends on several factors, including your home's replacement cost, personal property value, and potential liability risks. Generally, you should have enough coverage to rebuild your home, replace your belongings, and protect your assets in case of a lawsuit."
        },
        {
          id: 7,
          question: "Are natural disasters covered in home insurance?",
          answer: "Coverage for natural disasters varies. Standard home insurance typically covers damage from wind, hail, and lightning. However, flood and earthquake damage usually require separate policies. Always review your policy details or consult with your insurance provider to understand specific natural disaster coverage."
        }
      ]
    },
    {
      category: "Auto Insurance",
      questions: [
        {
          id: 3,
          question: "What factors affect my auto insurance rates?",
          answer: "Auto insurance rates are influenced by multiple factors, including your driving record, age, type of vehicle, credit score, location, annual mileage, and coverage levels. Drivers with clean records and safety features in their cars typically receive lower rates."
        },
        {
          id: 4,
          question: "Do I need full coverage auto insurance?",
          answer: "Full coverage is recommended if you have a newer or financed vehicle. It includes comprehensive and collision coverage in addition to liability. For older vehicles with lower value, you might consider liability-only coverage to reduce premiums."
        },
        {
          id: 8,
          question: "How can I lower my auto insurance premiums?",
          answer: "To lower premiums, maintain a clean driving record, increase your deductible, bundle multiple policies, install anti-theft devices, take defensive driving courses, and regularly review and compare insurance quotes. Some insurers also offer discounts for good students and low-mileage drivers."
        }
      ]
    },
    {
      category: "Life Insurance",
      questions: [
        {
          id: 5,
          question: "How much life insurance do I need?",
          answer: "The amount of life insurance depends on your financial obligations, income, debts, and family's future needs. A common rule of thumb is to have coverage 10-15 times your annual income, but individual circumstances vary. Consider factors like mortgage, children's education, and ongoing family expenses."
        },
        {
          id: 6,
          question: "What's the difference between term and whole life insurance?",
          answer: "Term life insurance provides coverage for a specific period (e.g., 10, 20, 30 years) and is typically more affordable. Whole life insurance offers lifelong coverage and includes a cash value component that can be borrowed against. The choice depends on your financial goals and budget."
        },
        {
          id: 9,
          question: "Can I get life insurance if I have pre-existing conditions?",
          answer: "Yes, you can get life insurance with pre-existing conditions, but it may affect your premiums. Some insurers specialize in high-risk policies. Options include guaranteed issue policies, simplified issue policies, or policies with higher premiums. It's best to shop around and be transparent about your health history."
        }
      ]
    },
    {
      category: "Health Insurance",
      questions: [
        {
          id: 10,
          question: "What's the difference between HMO and PPO?",
          answer: "HMO (Health Maintenance Organization) plans typically have lower premiums and require you to choose a primary care physician and get referrals for specialists. PPO (Preferred Provider Organization) plans offer more flexibility in choosing doctors and don't require referrals, but usually have higher premiums."
        },
        {
          id: 11,
          question: "Are preventive services free in health insurance?",
          answer: "Most health insurance plans cover preventive services at 100% with no out-of-pocket cost. These typically include annual check-ups, vaccinations, screenings, and preventive tests. However, coverage can vary, so it's important to check your specific plan details."
        }
      ]
    }
  ];

  // Flatten FAQs for easier searching
  const flattenedFAQs = faqs.flatMap(category => 
    category.questions.map(q => ({...q, category: category.category}))
  );

  // Filter FAQs based on search term
  const filteredFAQs = flattenedFAQs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Toggle question open/close
  const toggleQuestion = (id) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  // Handle doubt form input changes
  const handleDoubtChange = (e) => {
    const { name, value } = e.target;
    setDoubtForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Submit doubt form
  const handleDoubtSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this to a backend
    console.log('Doubt Submitted:', doubtForm);
    alert('Thank you for your doubt! We will get back to you soon.');
    setIsDoubtsModalOpen(false);
    // Reset form
    setDoubtForm({
      name: '',
      email: '',
      category: 'General',
      doubt: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 p-6 md:p-12">
      {/* Header Section */}
      <header className="text-center mb-12 relative">
        <div className="absolute -z-10 top-0 left-0 right-0 h-full bg-gradient-to-r from-blue-600 to-indigo-600 opacity-10 blur-3xl"></div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600 mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg flex items-center justify-center">
          <HelpCircle className="mr-3 text-blue-500" size={28} />
          Find answers to your most important insurance questions
        </p>
      </header>

      {/* Search and Ask Doubt Section */}
      <div className="max-w-2xl mx-auto mb-12 flex items-center space-x-4">
        <div className="flex-grow relative">
          <input 
            type="text" 
            placeholder="Search questions, categories, or keywords..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-4 pl-12 border-2 border-blue-200 rounded-xl 
              focus:ring-4 focus:ring-blue-300/50 transition duration-300
              shadow-lg hover:shadow-xl"
          />
          <Search className="absolute left-4 top-4 text-blue-500" size={24} />
        </div>
        <button 
          onClick={() => setIsDoubtsModalOpen(true)}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white 
            px-4 py-4 rounded-xl hover:from-blue-700 hover:to-indigo-700 
            transition duration-300 flex items-center space-x-2"
        >
          <MessageCircle size={24} />
          <span className="hidden md:block">Ask a Doubt</span>
        </button>
      </div>

      {/* FAQs Content */}
      <div className="max-w-4xl mx-auto space-y-6">
        {faqs.map((category) => (
          <div key={category.category} className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Category Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 flex items-center">
              <Info className="mr-3" size={24} />
              <h2 className="text-xl font-bold">{category.category} FAQs</h2>
            </div>

            {/* Questions in Category */}
            {category.questions
              .filter(q => 
                searchTerm === '' || 
                q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                q.answer.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((faq) => (
                <div 
                  key={faq.id} 
                  className="border-b last:border-b-0 border-blue-100"
                >
                  <button 
                    onClick={() => toggleQuestion(faq.id)}
                    className="w-full text-left p-6 flex justify-between items-center 
                      hover:bg-blue-50 transition duration-300 
                      focus:outline-none focus:ring-2 focus:ring-blue-300"
                  >
                    <span className="text-lg font-semibold text-blue-900">
                      {faq.question}
                    </span>
                    <ChevronDown 
                      className={`transform transition-transform duration-300 
                        ${openQuestion === faq.id ? 'rotate-180' : ''} 
                        text-blue-500`}
                    />
                  </button>

                  {openQuestion === faq.id && (
                    <div 
                      className="px-6 pb-6 text-gray-700 bg-blue-50 
                        animate-fade-in-down"
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))
            }
          </div>
        ))}
      </div>

      {/* No Results State */}
      {filteredFAQs.length === 0 && (
        <div className="text-center py-16 bg-white rounded-2xl shadow-xl max-w-2xl mx-auto mt-12">
          <HelpCircle className="mx-auto mb-6 text-blue-500" size={64} />
          <p className="text-2xl text-gray-500 mb-4">
            No FAQs found
          </p>
          <p className="text-gray-400">
            Try a different search term or browse our categories
          </p>
        </div>
      )}

      {/* Ask a Doubt Modal */}
      {isDoubtsModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative">
            <button 
              onClick={() => setIsDoubtsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
              <MessageCircle className="mr-3 text-blue-500" size={28} />
              Ask Your Insurance Doubt
            </h2>
            <form onSubmit={handleDoubtSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={doubtForm.name}
                  onChange={handleDoubtChange}
                  required
                  className="w-full p-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-300"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={doubtForm.email}
                  onChange={handleDoubtChange}
                  required
                  className="w-full p-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-300"
                />
              </div>
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                  Doubt Category
                </label>
                <select 
                  id="category"
                  name="category"
                  value={doubtForm.category}
                  onChange={handleDoubtChange}
                  className="w-full p-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-300"
                >
                  <option value="General">General</option>
                  <option value="Home Insurance">Home Insurance</option>
                  <option value="Auto Insurance">Auto Insurance</option>
                  <option value="Life Insurance">Life Insurance</option>
                  <option value="Health Insurance">Health Insurance</option>
                </select>
              </div>
              <div>
                <label htmlFor="doubt" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Doubt
                </label>
                <textarea 
                  id="doubt"
                  name="doubt"
                  rows={4}
                  value={doubtForm.doubt}
                  onChange={handleDoubtChange}
                  required
                  placeholder="Describe your insurance-related doubt in detail..."
                  className="w-full p-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-300"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white 
                  py-3 rounded-xl hover:from-blue-700 hover:to-indigo-700 
                  transition duration-300 flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Submit Doubt</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default FAQsPage;