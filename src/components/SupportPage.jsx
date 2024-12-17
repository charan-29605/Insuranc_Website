import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, FileQuestion, Search, ChevronDown, ArrowRight, Clock, CheckCircle2, AlertCircle } from 'lucide-react';

const SupportPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showChat, setShowChat] = useState(false);

  const categories = [
    {
      title: "Claims",
      icon: CheckCircle2,
      description: "File or track an insurance claim",
      subCategories: ["File New Claim", "Track Existing Claim", "Claims Documents"]
    },
    {
      title: "Policy Management",
      icon: FileQuestion,
      description: "Manage your insurance policies",
      subCategories: ["Update Policy", "Policy Documents", "Add Beneficiary"]
    },
    {
      title: "Billing & Payments",
      icon: Mail,
      description: "Handle payments and billing inquiries",
      subCategories: ["Payment Methods", "Billing History", "Auto-Pay Setup"]
    },
    {
      title: "Technical Support",
      icon: MessageCircle,
      description: "Get help with technical issues",
      subCategories: ["Account Access", "Mobile App", "Password Reset"]
    }
  ];

  const faqData = [
    {
      question: "How do I file a claim?",
      answer: "You can file a claim through our mobile app or website by logging into your account and selecting 'File a Claim' from the Claims section."
    },
    {
      question: "What documents do I need for a claim?",
      answer: "Required documents typically include proof of incident, police report (if applicable), photos of damage, and any relevant receipts."
    },
    {
      question: "How long does claim processing take?",
      answer: "Most claims are processed within 5-7 business days, though complex cases may take longer."
    }
  ];

  const statuses = [
    {
      type: "Average Response Time",
      value: "2 min",
      icon: Clock,
      color: "text-blue-600"
    },
    {
      type: "Support Status",
      value: "Online",
      icon: CheckCircle2,
      color: "text-green-600"
    },
    {
      type: "Current Queue",
      value: "5 tickets",
      icon: AlertCircle,
      color: "text-yellow-600"
    }
  ];

  const ChatWidget = () => (
    <div className="fixed bottom-6 right-6 bg-white rounded-lg shadow-xl w-96 z-50">
      <div className="bg-blue-600 p-4 rounded-t-lg flex justify-between items-center">
        <h3 className="text-white font-semibold">Live Chat Support</h3>
        <button onClick={() => setShowChat(false)} className="text-white">×</button>
      </div>
      <div className="h-96 p-4 overflow-y-auto">
        <div className="bg-gray-100 rounded-lg p-3 mb-4">
          <p className="text-sm">Hello! How can we help you today?</p>
        </div>
      </div>
      <div className="p-4 border-t">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 p-2 border rounded-lg"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Send</button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">How can we help you?</h1>
          <div className="relative max-w-2xl">
            <input
              type="text"
              placeholder="Search for help..."
              className="w-full p-4 rounded-lg pl-12 text-gray-800"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-4 top-4 text-gray-400" />
          </div>
        </div>
      </header>

      {/* Support Status */}
      <div className="max-w-7xl mx-auto px-4 -mt-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {statuses.map((status, index) => (
              <div key={index} className="flex items-center gap-4">
                <status.icon className={`w-8 h-8 ${status.color}`} />
                <div>
                  <p className="text-sm text-gray-600">{status.type}</p>
                  <p className="font-semibold">{status.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow"
              onClick={() => setSelectedCategory(selectedCategory === index ? null : index)}
            >
              <div className="flex items-center justify-between mb-4">
                <category.icon className="w-8 h-8 text-blue-600" />
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${
                  selectedCategory === index ? 'transform rotate-180' : ''
                }`} />
              </div>
              <h2 className="text-xl font-semibold mb-2">{category.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{category.description}</p>
              {selectedCategory === index && (
                <div className="space-y-2">
                  {category.subCategories.map((sub, subIndex) => (
                    <div key={subIndex} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                      <span className="text-sm">{sub}</span>
                      <ArrowRight className="w-4 h-4 text-blue-600" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <div key={index} className="border-b pb-4">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <Phone className="w-8 h-8 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-gray-600 mb-4">24/7 Support Available</p>
            <p className="text-blue-600 font-semibold">1-800-INSURANCE</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <Mail className="w-8 h-8 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email Support</h3>
            <p className="text-gray-600 mb-4">Response within 24 hours</p>
            <p className="text-blue-600 font-semibold">support@insurance.com</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <MessageCircle className="w-8 h-8 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
            <p className="text-gray-600 mb-4">Chat with our support team</p>
            <button
              onClick={() => setShowChat(true)}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              Start Chat
            </button>
          </div>
        </div>
      </main>

      {/* Chat Widget */}
      {showChat && <ChatWidget />}
    </div>
  );
};

export default SupportPage;