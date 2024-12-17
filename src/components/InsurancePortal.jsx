import React, { useState } from 'react';
import { 
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { 
  Shield, 
  Heart, 
  Car, 
  Home,
  Umbrella,
  Plane,
  Building2,
  Bike,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  DollarSign,
  Clock,
  Award
} from 'lucide-react';

const InsurancePortal = () => {
  const [step, setStep] = useState(1);
  const [selectedType, setSelectedType] = useState(null);
  const [answers, setAnswers] = useState({});
  const [hovered, setHovered] = useState(null);
  const [animateCard, setAnimateCard] = useState(false);

  const insuranceTypes = [
    {
      id: 'health',
      icon: Heart,
      title: 'Health Insurance',
      description: 'Comprehensive medical coverage for you and your family',
      benefits: ['24/7 Doctor Access', 'Global Coverage', 'Dental & Vision'],
      popularFor: ['Families', 'Individuals', 'Seniors'],
      startingPrice: "$299"
    },
    {
      id: 'auto',
      icon: Car,
      title: 'Auto Insurance',
      description: 'Complete protection for your vehicle with roadside assistance',
      benefits: ['Accident Coverage', 'Roadside Help', 'Rental Car'],
      popularFor: ['New Cars', 'Multiple Vehicles', 'Teen Drivers'],
      startingPrice: "$199"
    },
    {
      id: 'home',
      icon: Home,
      title: 'Home Insurance',
      description: 'Protect your home and belongings with comprehensive coverage',
      benefits: ['Natural Disasters', 'Theft Protection', 'Liability'],
      popularFor: ['Homeowners', 'Renters', 'Landlords'],
      startingPrice: "$399"
    },
    {
      id: 'life',
      icon: Shield,
      title: 'Life Insurance',
      description: "Secure your family's future with our life insurance plans",
      benefits: ['Term Life', 'Whole Life', 'Investment Options'],
      popularFor: ['Parents', 'Business Owners', 'Retirees'],
      startingPrice: "$499"
    },
    {
      id: 'travel',
      icon: Plane,
      title: 'Travel Insurance',
      description: 'Travel worry-free with comprehensive coverage worldwide',
      benefits: ['Trip Cancellation', 'Medical Emergency', 'Lost Baggage'],
      popularFor: ['Travelers', 'Students Abroad', 'Business Trips'],
      startingPrice: "$99"
    },
    {
      id: 'business',
      icon: Building2,
      title: 'Business Insurance',
      description: 'Protect your business with tailored coverage solutions',
      benefits: ['Liability Coverage', 'Property Protection', 'Employee Benefits'],
      popularFor: ['Small Business', 'Startups', 'Corporations'],
      startingPrice: "$599"
    }
  ];

  const questions = {
    health: [
      { id: 'age', text: 'What is your age group?', options: ['18-25', '26-35', '36-50', '51+'] },
      { id: 'members', text: 'How many family members need coverage?', options: ['Just me', '2-3', '4-5', '6+'] },
      { id: 'preExisting', text: 'Any pre-existing conditions?', options: ['None', 'Minor', 'Major'] }
    ],
    auto: [
      { id: 'vehicles', text: 'How many vehicles do you need to insure?', options: ['1', '2', '3+'] },
      { id: 'usage', text: 'Primary vehicle usage?', options: ['Personal', 'Business', 'Both'] },
      { id: 'history', text: 'Driving history in last 5 years?', options: ['Clean', 'Minor incidents', 'Major incidents'] }
    ]
  };

  const features = [
    { icon: Clock, title: '24/7 Support', description: 'Round-the-clock customer service' },
    { icon: DollarSign, title: 'Flexible Payments', description: 'Monthly or annual payment options' },
    { icon: Award, title: 'Best Coverage', description: 'Comprehensive protection plans' }
  ];

  const handleNext = () => {
    setAnimateCard(true);
    setTimeout(() => {
      setStep(step + 1);
      setAnimateCard(false);
    }, 300);
  };

  const handleBack = () => {
    setAnimateCard(true);
    setTimeout(() => {
      setStep(step - 1);
      setAnimateCard(false);
    }, 300);
  };

  const renderQuestions = () => {
    if (!selectedType || !questions[selectedType]) return null;
    const currentQuestions = questions[selectedType];
    
    return (
      <div className="space-y-6">
        {currentQuestions.map((q) => (
          <div key={q.id} className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4">{q.text}</h3>
            <div className="grid grid-cols-2 gap-4">
              {q.options.map((option) => (
                <button
                  key={option}
                  className={`p-4 rounded-lg border-2 transition-all duration-300
                    ${answers[q.id] === option 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-gray-200 hover:border-blue-300'}`}
                  onClick={() => setAnswers({ ...answers, [q.id]: option })}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 
            ${animateCard ? 'opacity-0 transform translate-x-10' : 'opacity-100 transform translate-x-0'}
            transition-all duration-300`}>
            {insuranceTypes.map((type) => {
              const Icon = type.icon;
              return (
                <div
                  key={type.id}
                  className={`relative p-6 rounded-xl cursor-pointer transition-all duration-300
                    ${selectedType === type.id ? 'bg-blue-50 border-2 border-blue-500 transform scale-105' 
                      : 'bg-white hover:bg-gray-50 border-2 border-transparent hover:shadow-lg'}
                    ${hovered === type.id ? 'transform -translate-y-2' : ''}`}
                  onClick={() => setSelectedType(type.id)}
                  onMouseEnter={() => setHovered(type.id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`p-3 rounded-lg ${selectedType === type.id ? 'bg-blue-500 text-white' : 'bg-blue-100'}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-lg font-bold text-blue-600">{type.startingPrice}/mo</span>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
                      <p className="text-gray-600 text-sm">{type.description}</p>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700">Key Benefits:</h4>
                        <ul className="mt-1 space-y-1">
                          {type.benefits.map((benefit) => (
                            <li key={benefit} className="text-sm text-gray-600 flex items-center">
                              <CheckCircle2 className="w-4 h-4 mr-2 text-green-500" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700">Popular For:</h4>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {type.popularFor.map((item) => (
                            <span key={item} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      
      case 2:
        return (
          <div className={`${animateCard ? 'opacity-0 transform translate-x-10' : 'opacity-100 transform translate-x-0'}
            transition-all duration-300`}>
            {renderQuestions()}
          </div>
        );
      
      case 3:
        return (
          <div className={`${animateCard ? 'opacity-0 transform translate-x-10' : 'opacity-100 transform translate-x-0'}
            transition-all duration-300`}>
            <div className="text-center p-8">
              <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Great! We're calculating your personalized quote</h2>
              <p className="text-gray-600">Our experts are reviewing your information to provide the best coverage options.</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
      <div className="max-w-6xl mx-auto mb-12">
        <div className="flex justify-between items-center">
          {['Choose Plan', 'Quick Questions', 'Get Quote'].map((title, index) => (
            <div key={index} className="flex-1 relative">
              <div className={`flex flex-col items-center ${step > index + 1 ? 'text-green-600' : step === index + 1 ? 'text-blue-600' : 'text-gray-400'}`}>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-colors duration-300
                  ${step > index + 1 ? 'border-green-600 bg-green-50' : 
                    step === index + 1 ? 'border-blue-600 bg-blue-50' : 'border-gray-300'}`}>
                  {step > index + 1 ? (
                    <CheckCircle2 className="w-6 h-6" />
                  ) : (
                    <span className="font-semibold">{index + 1}</span>
                  )}
                </div>
                <span className="mt-2 text-sm font-medium">{title}</span>
              </div>
              {index < 2 && (
                <div className={`absolute top-6 w-full h-0.5 transition-colors duration-300
                  ${step > index + 1 ? 'bg-green-600' : 'bg-gray-300'}`} />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <Card className="bg-white shadow-xl">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center text-gray-800">
              {step === 1 ? 'Choose Your Perfect Insurance Plan' :
               step === 2 ? 'Tell Us A Little More' :
               'Preparing Your Personalized Quote'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {renderStep()}

            <div className="mt-8 flex justify-between">
              {step > 1 && (
                <button
                  className="flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold text-blue-600 hover:bg-blue-50"
                  onClick={handleBack}
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span>Back</span>
                </button>
              )}
              
              {step < 3 && (
                <button
                  className={`flex items-center space-x-2 px-8 py-3 rounded-lg font-semibold text-white ml-auto
                    ${(step === 1 && selectedType) || (step === 2 && Object.keys(answers).length >= 3)
                      ? 'bg-blue-600 hover:bg-blue-700' 
                      : 'bg-gray-400 cursor-not-allowed'}`}
                  onClick={handleNext}
                  disabled={!((step === 1 && selectedType) || (step === 2 && Object.keys(answers).length >= 3))}
                >
                  <span>Continue</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {features.map((feature) => {
            const FeatureIcon = feature.icon;
            return (
              <div key={feature.title} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-blue-100">
                    <FeatureIcon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InsurancePortal;