import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, Umbrella, DollarSign, Star, Award, 
  TrendingUp, Shield, Lock, Zap, Cpu, BarChart,
  Clock, CheckCircle, Globe, Crown, Gift, Sparkles 
} from 'lucide-react';

const InsuranceServicesPremium = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [animation, setAnimation] = useState(false);
  const [showStats, setShowStats] = useState(false);

  useEffect(() => {
    setAnimation(true);
    const timer = setTimeout(() => setAnimation(false), 500);
    return () => clearTimeout(timer);
  }, [activeSection]);

  useEffect(() => {
    setShowStats(true);
  }, []);

  const stats = [
    { icon: <Shield className="text-indigo-600" />, value: "99.9%", label: "Claims Approval" },
    { icon: <TrendingUp className="text-emerald-600" />, value: "$2.5B+", label: "Claims Processed" },
    { icon: <Star className="text-amber-500" />, value: "4.9/5", label: "Client Satisfaction" },
    { icon: <Award className="text-purple-600" />, value: "15+", label: "Industry Awards" }
  ];

  const premiumBenefits = [
    {
      icon: <Crown size={48} className="text-white" />,
      title: "VIP Treatment",
      description: "Priority processing and dedicated account manager.",
      gradient: "from-amber-500 to-yellow-600"
    },
    {
      icon: <Gift size={48} className="text-white" />,
      title: "Exclusive Rewards",
      description: "Special discounts and premium partner benefits.",
      gradient: "from-pink-500 to-rose-600"
    },
    {
      icon: <Sparkles size={48} className="text-white" />,
      title: "Premium Features",
      description: "Advanced analytics and personalized risk assessment.",
      gradient: "from-indigo-500 to-blue-600"
    }
  ];

  const features = [
    {
      icon: <Globe size={48} className="text-white" />,
      title: "Global Coverage",
      description: "Comprehensive protection across international borders with 24/7 support.",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: <CheckCircle size={48} className="text-white" />,
      title: "Instant Approval",
      description: "Advanced algorithms enable real-time policy approvals and updates.",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: <Clock size={48} className="text-white" />,
      title: "24/7 Service",
      description: "Round-the-clock support with AI-powered assistance and human expertise.",
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  const innovationHighlights = [
    {
      icon: <Cpu size={48} className="text-white" />,
      title: "AI-Powered Insights",
      description: "Leverage cutting-edge machine learning to predict and mitigate risks before they emerge.",
      gradient: "from-violet-500 to-purple-600"
    },
    {
      icon: <Lock size={48} className="text-white" />,
      title: "Blockchain Security",
      description: "Immutable, transparent risk management with military-grade security protocols.",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: <Zap size={48} className="text-white" />,
      title: "Instant Processing",
      description: "Smart contracts enable lightning-fast claims resolution and payouts.",
      gradient: "from-amber-500 to-orange-600"
    }
  ];

  const Navigation = () => (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-lg shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex space-x-8">
            <button 
              onClick={() => setActiveSection('overview')}
              className={`px-3 py-2 text-sm font-medium transition-colors duration-300
                ${activeSection === 'overview' ? 'text-indigo-600' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Overview
            </button>
            <button 
              onClick={() => setActiveSection('premium')}
              className={`px-3 py-2 text-sm font-medium transition-colors duration-300
                ${activeSection === 'premium' ? 'text-indigo-600' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Premium Benefits
            </button>
          </div>
        </div>
      </div>
    </nav>
  );

  const renderStats = () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
      {stats.map((stat, index) => (
        <div 
          key={index}
          className="bg-white rounded-2xl p-6 shadow-xl backdrop-blur-lg bg-white/90
            transform transition-all duration-700 hover:scale-105
            border border-gray-100 group"
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <div className="flex items-center justify-center mb-3 group-hover:rotate-12 transition-transform duration-500">
            {React.cloneElement(stat.icon, { size: 36 })}
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 
              bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500">
              {stat.value}
            </div>
            <div className="text-sm font-medium text-gray-600 mt-1">{stat.label}</div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderFeatures = () => (
    <div className="grid md:grid-cols-3 gap-8 mb-16">
      {features.map((feature, index) => (
        <div 
          key={index} 
          className="group relative rounded-2xl overflow-hidden cursor-pointer h-64"
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} 
            transform transition-transform group-hover:scale-105 duration-500`} />
          <div className="relative p-8 h-full flex flex-col justify-between">
            <div className="flex items-center">
              {React.cloneElement(feature.icon, {
                className: 'text-white group-hover:rotate-12 transition-transform duration-500'
              })}
              <h3 className="ml-4 text-2xl font-bold text-white">{feature.title}</h3>
            </div>
            <p className="text-white/90 text-lg leading-relaxed mt-4">
              {feature.description}
            </p>
            <div className="absolute bottom-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <BarChart className="text-white/80" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderPremiumBenefits = () => (
    <div className="grid md:grid-cols-3 gap-8 mb-16">
      {premiumBenefits.map((benefit, index) => (
        <div 
          key={index} 
          className="group relative rounded-2xl overflow-hidden cursor-pointer h-64"
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} 
            transform transition-transform group-hover:scale-105 duration-500`} />
          <div className="relative p-8 h-full flex flex-col justify-between">
            <div className="flex items-center">
              {React.cloneElement(benefit.icon, {
                className: 'text-white group-hover:rotate-12 transition-transform duration-500'
              })}
              <h3 className="ml-4 text-2xl font-bold text-white">{benefit.title}</h3>
            </div>
            <p className="text-white/90 text-lg leading-relaxed mt-4">
              {benefit.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );

  const renderInnovationHighlights = () => (
    <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-12 mt-8">
      <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 
        bg-clip-text text-transparent mb-12 text-center">
        Technological Innovation
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {innovationHighlights.map((highlight, index) => (
          <div 
            key={index} 
            className="group relative rounded-2xl overflow-hidden cursor-pointer h-72"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${highlight.gradient} 
              transform transition-transform group-hover:scale-105 duration-500`} />
            <div className="relative p-8 h-full flex flex-col">
              <div className="flex items-center mb-6">
                {React.cloneElement(highlight.icon, {
                  className: 'text-white group-hover:rotate-12 transition-transform duration-500'
                })}
                <h3 className="ml-4 text-2xl font-bold text-white">{highlight.title}</h3>
              </div>
              <p className="text-white/90 text-lg leading-relaxed">
                {highlight.description}
              </p>
              <div className="mt-auto flex justify-end">
                <div className="text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <DollarSign size={24} className="animate-bounce" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <Navigation />
      <div className="pt-24 p-8 flex flex-col items-center justify-center">
        <div className="w-full max-w-6xl space-y-8">
          {activeSection === 'overview' ? (
            <>
              <div className="text-center mb-16">
                <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 
                  bg-clip-text text-transparent mb-6">
                  Next-Generation Insurance Solutions
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Experience the future of protection with AI-driven risk assessment.
                </p>
              </div>
              {renderStats()}
              {renderFeatures()}
              {renderInnovationHighlights()}
            </>
          ) : (
            <>
              <div className="text-center mb-16">
                <h1 className="text-5xl font-bold bg-gradient-to-r from-amber-500 to-yellow-600 
                  bg-clip-text text-transparent mb-6">
                  Premium Member Benefits
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Unlock exclusive features and privileges with our premium membership.
                </p>
              </div>
              {renderPremiumBenefits()}
              {renderInnovationHighlights()}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default InsuranceServicesPremium;