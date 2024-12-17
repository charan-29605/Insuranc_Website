import React, { useState } from 'react';
import { 
  Heart, 
  Truck, 
  Shield, 
  Plane, 
  Briefcase,
  CheckCircle,
  DollarSign,
  Clock,
  Star
} from 'lucide-react';

const InsuranceDropdown = () => {
  const [selectedInsurance, setSelectedInsurance] = useState(null);

  const insuranceTypes = [
    {
      id: 'health',
      icon: Heart,
      title: 'Health Insurance',
      description: 'Comprehensive medical protection for individuals and families.',
      coverageLimit: '$500,000 Annual Limit',
      premiumRange: '$50 - $500/month',
      benefits: [
        'Complete hospitalization expenses',
        'Cashless treatment at network hospitals',
        'Pre and post-hospitalization coverage',
        'Preventive health check-ups',
        'Critical illness support'
      ],
      additionalFeatures: [
        'Family floater options',
        'No-claim bonus',
        'Pandemic and epidemic coverage',
        'Emergency medical evacuation'
      ],
      bestFor: [
        'Families with dependent members',
        'Individuals with chronic conditions',
        'People seeking comprehensive medical protection'
      ]
    },
    {
      id: 'auto',
      icon: Truck,
      title: 'Auto Insurance',
      description: 'Complete protection for your vehicle against all potential risks.',
      coverageLimit: '$50,000 Comprehensive Cover',
      premiumRange: '$200 - $1,500/year',
      benefits: [
        'Accident damage coverage',
        'Theft protection',
        'Third-party liability',
        'Natural disaster coverage',
        'Personal accident cover'
      ],
      additionalFeatures: [
        'Roadside assistance',
        'Zero depreciation cover',
        'Engine protection',
        'No-claim bonus'
      ],
      bestFor: [
        'New car owners',
        'Frequent drivers',
        'Individuals living in high-risk areas'
      ]
    },
    {
      id: 'life',
      icon: Shield,
      title: 'Life Insurance',
      description: 'Financial security and future planning for your loved ones.',
      coverageLimit: '$1,000,000 Death Benefit',
      premiumRange: '$100 - $1,000/month',
      benefits: [
        'Death benefit protection',
        'Critical illness coverage',
        'Retirement income planning',
        'Tax benefits',
        'Permanent disability support'
      ],
      additionalFeatures: [
        'Flexible policy terms',
        'Investment-linked options',
        'Loan against policy',
        'Partial withdrawal facility'
      ],
      bestFor: [
        'Primary earning members of family',
        'Individuals with financial dependents',
        'Long-term financial planners'
      ]
    },
    {
      id: 'travel',
      icon: Plane,
      title: 'Travel Insurance',
      description: 'Comprehensive worldwide protection for your journeys.',
      coverageLimit: '$100,000 Total Coverage',
      premiumRange: '$30 - $200/trip',
      benefits: [
        'Medical emergency expenses',
        'Trip cancellation protection',
        'Lost luggage compensation',
        'Emergency medical evacuation',
        'Personal accident coverage'
      ],
      additionalFeatures: [
        '24/7 global assistance',
        'COVID-19 coverage',
        'Adventure sport protection',
        'Rental car damage cover'
      ],
      bestFor: [
        'International travelers',
        'Business professionals',
        'Adventure enthusiasts'
      ]
    },
    {
      id: 'business',
      icon: Briefcase,
      title: 'Business Insurance',
      description: 'Comprehensive protection for your business operations.',
      coverageLimit: '$2,000,000 Total Protection',
      premiumRange: '$1,000 - $5,000/year',
      benefits: [
        'Property damage coverage',
        'Liability protection',
        'Business interruption support',
        'Employee compensation',
        'Cyber risk protection'
      ],
      additionalFeatures: [
        'Customizable packages',
        'Industry-specific solutions',
        'Risk management consulting',
        'Quick claim settlement'
      ],
      bestFor: [
        'Small and medium enterprises',
        'Startup founders',
        'Business owners seeking comprehensive protection'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-blue-800">
          Insurance Product Explorer
        </h1>
        
        <div className="grid md:grid-cols-5 gap-4 mb-8">
          {insuranceTypes.map((insurance) => (
            <button
              key={insurance.id}
              onClick={() => setSelectedInsurance(insurance)}
              className={`p-4 rounded-lg transition-all flex flex-col items-center 
                ${selectedInsurance?.id === insurance.id 
                  ? 'bg-blue-600 text-white scale-105' 
                  : 'bg-white text-blue-600 hover:bg-blue-100'}`}
            >
              <insurance.icon className="mb-2" size={32} />
              {insurance.title}
            </button>
          ))}
        </div>

        {selectedInsurance && (
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-blue-600 text-white p-6 flex items-center">
              <selectedInsurance.icon className="mr-4" size={48} />
              <div>
                <h2 className="text-3xl font-bold">{selectedInsurance.title}</h2>
                <p className="text-blue-100">{selectedInsurance.description}</p>
              </div>
            </div>

            <div className="p-8 grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Star className="mr-2 text-yellow-500" /> Key Benefits
                </h3>
                {selectedInsurance.benefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className="flex items-center mb-2 bg-blue-50 p-2 rounded-lg"
                  >
                    <CheckCircle className="mr-2 text-green-500" size={20} />
                    {benefit}
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <DollarSign className="mr-2 text-green-500" /> Additional Features
                </h3>
                {selectedInsurance.additionalFeatures.map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex items-center mb-2 bg-green-50 p-2 rounded-lg"
                  >
                    <Shield className="mr-2 text-blue-500" size={20} />
                    {feature}
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Clock className="mr-2 text-purple-500" /> Best Suited For
                </h3>
                {selectedInsurance.bestFor.map((target, index) => (
                  <div 
                    key={index} 
                    className="flex items-center mb-2 bg-purple-50 p-2 rounded-lg"
                  >
                    <CheckCircle className="mr-2 text-purple-500" size={20} />
                    {target}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 p-6 flex justify-between items-center">
              <div>
                <h4 className="font-semibold text-blue-800">Coverage Limit</h4>
                <p className="text-2xl font-bold text-blue-600">
                  {selectedInsurance.coverageLimit}
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-green-800">Premium Range</h4>
                <p className="text-2xl font-bold text-green-600">
                  {selectedInsurance.premiumRange}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InsuranceDropdown;