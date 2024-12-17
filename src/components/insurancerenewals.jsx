import React, { useState } from "react";
import { 
  Heart, Car, Bike, User, Plane, Building2, Smartphone, 
  CreditCard, Clock, Calendar, Tag, ArrowRight, Check 
} from "lucide-react";

const InsuranceRenewalPage = () => {
  const [showPayment, setShowPayment] = useState(false);
  const [selectedPolicy, setSelectedPolicy] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [paymentStep, setPaymentStep] = useState(1);
  
  // Define categoryColors before using it
  const categoryColors = {
    Personal: "bg-blue-100 text-blue-800",
    Vehicle: "bg-green-100 text-green-800",
    Business: "bg-purple-100 text-purple-800",
    Lifestyle: "bg-yellow-100 text-yellow-800"
  };

  const [policies, setPolicies] = useState([
    {
      type: "Health",
      description: "Comprehensive health coverage with global support.",
      expiry: "2024-11-30",
      status: "Active",
      icon: Heart,
      category: "Personal",
      price: 1200,
      features: [
        "Worldwide medical coverage",
        "Emergency evacuation",
        "Family protection plan"
      ],
      plans: [
        { duration: 3, discount: 5, highlights: "Quick Coverage" },
        { duration: 6, discount: 10, highlights: "Best Value" },
        { duration: 12, discount: 15, highlights: "Maximum Savings" }
      ]
    },
    {
      type: "Vehicle",
      description: "Comprehensive auto insurance with roadside assistance.",
      expiry: "2024-12-15",
      status: "Active",
      icon: Car,
      category: "Vehicle",
      price: 800,
      features: [
        "Accident coverage",
        "Damage protection",
        "Breakdown support"
      ],
      plans: [
        { duration: 3, discount: 5, highlights: "Quick Coverage" },
        { duration: 6, discount: 10, highlights: "Best Value" },
        { duration: 12, discount: 15, highlights: "Maximum Savings" }
      ]
    },
    {
      type: "Bike",
      description: "Specialized insurance for two-wheeled vehicles.",
      expiry: "2024-12-01",
      status: "Active",
      icon: Bike,
      category: "Vehicle",
      price: 500,
      features: [
        "Theft protection",
        "Accident coverage",
        "Accessory protection"
      ],
      plans: [
        { duration: 3, discount: 5, highlights: "Quick Coverage" },
        { duration: 6, discount: 10, highlights: "Best Value" },
        { duration: 12, discount: 15, highlights: "Maximum Savings" }
      ]
    },
    {
      type: "Corporate",
      description: "Comprehensive corporate insurance solutions.",
      expiry: "2025-01-15",
      status: "Active",
      icon: Building2,
      category: "Business",
      price: 5000,
      features: [
        "Liability coverage",
        "Property protection",
        "Business interruption"
      ],
      plans: [
        { duration: 3, discount: 5, highlights: "Quick Coverage" },
        { duration: 6, discount: 10, highlights: "Best Value" },
        { duration: 12, discount: 15, highlights: "Maximum Savings" }
      ]
    },
    {
      type: "Travel",
      description: "Worldwide travel protection for global adventurers.",
      expiry: "2024-12-20",
      status: "Active",
      icon: Plane,
      category: "Lifestyle",
      price: 300,
      features: [
        "Medical emergency",
        "Trip cancellation",
        "Lost luggage"
      ],
      plans: [
        { duration: 3, discount: 5, highlights: "Quick Coverage" },
        { duration: 6, discount: 10, highlights: "Best Value" },
        { duration: 12, discount: 15, highlights: "Maximum Savings" }
      ]
    },
    {
      type: "Gadget",
      description: "Comprehensive protection for your digital devices.",
      expiry: "2024-11-25",
      status: "Active",
      icon: Smartphone,
      category: "Lifestyle",
      price: 200,
      features: [
        "Accidental damage",
        "Theft protection",
        "Screen replacement"
      ],
      plans: [
        { duration: 3, discount: 5, highlights: "Quick Coverage" },
        { duration: 6, discount: 10, highlights: "Best Value" },
        { duration: 12, discount: 15, highlights: "Maximum Savings" }
      ]
    }
  ]);

  const handleRenew = (policy) => {
    setSelectedPolicy(policy);
    setShowPayment(true);
    setPaymentStep(1);
    setSelectedPlan(null);
  };

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    setPaymentStep(2);
  };

  const handlePayment = (method) => {
    const updatedPolicies = policies.map(p => 
      p.type === selectedPolicy.type 
        ? { ...p, status: "Renewed", renewedOn: new Date().toISOString() } 
        : p
    );
    setPolicies(updatedPolicies);
    setShowPayment(false);
  };

  const PaymentModal = () => {
    const paymentMethods = [
      { 
        id: 'credit', 
        name: 'Credit Card', 
        icon: CreditCard, 
        description: 'Instant processing' 
      },
      { 
        id: 'paypal', 
        name: 'PayPal', 
        icon: CreditCard, 
        description: 'Secure online payment' 
      },
      { 
        id: 'bank', 
        name: 'Bank Transfer', 
        icon: CreditCard, 
        description: 'Direct bank payment' 
      }
    ];

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full">
          {paymentStep === 1 && (
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Tag className="mr-3 text-blue-600" />
                Select Renewal Plan
              </h2>
              <div className="space-y-4">
                {selectedPolicy.plans.map((plan, index) => (
                  <div
                    key={index}
                    onClick={() => handlePlanSelect(plan)}
                    className={`border-2 rounded-lg p-4 cursor-pointer transition-all hover:border-blue-500 ${
                      selectedPlan === plan ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-bold text-lg">{plan.duration} Months Plan</h4>
                        <p className="text-sm text-gray-600">{plan.highlights}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-blue-600 font-bold">
                          {plan.discount}% Off
                        </p>
                        <p className="text-sm text-gray-500">
                          ${((selectedPolicy.price * plan.duration) * (1 - plan.discount/100) / 12).toFixed(2)}/month
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setShowPayment(false)}
                className="mt-4 w-full px-6 py-2 bg-gray-200 rounded-lg"
              >
                Cancel
              </button>
            </div>
          )}

          {paymentStep === 2 && (
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <CreditCard className="mr-3 text-blue-600" />
                Select Payment Method
              </h2>
              <div className="space-y-4">
                {paymentMethods.map((method) => (
                  <div
                    key={method.id}
                    onClick={() => handlePayment(method)}
                    className="border-2 border-gray-200 rounded-lg p-4 flex items-center justify-between cursor-pointer hover:border-blue-500 transition-all"
                  >
                    <div className="flex items-center">
                      <method.icon className="mr-4 text-blue-600" />
                      <div>
                        <h4 className="font-bold">{method.name}</h4>
                        <p className="text-sm text-gray-600">{method.description}</p>
                      </div>
                    </div>
                    <ArrowRight className="text-gray-400" />
                  </div>
                ))}
              </div>
              <button
                onClick={() => setPaymentStep(1)}
                className="mt-4 w-full px-6 py-2 bg-gray-200 rounded-lg"
              >
                Back
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <header className="bg-blue-600 text-white py-6 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Insurance Renewals</h1>
            <p className="text-sm opacity-80">Seamless policy management</p>
          </div>
          <div className="flex items-center space-x-4">
            <Clock className="w-6 h-6" />
            <Calendar className="w-6 h-6" />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6">
        {Object.keys(categoryColors).map(category => (
          <section key={category} className="mb-10">
            <h2 className="text-2xl font-bold mb-6 text-blue-800 flex items-center">
              <span className={`mr-3 p-2 rounded-full ${categoryColors[category]}`}>
                <User className="w-5 h-5" />
              </span>
              {category} Insurance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {policies
                .filter(policy => policy.category === category)
                .map((policy, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transition-all hover:shadow-2xl"
                  >
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center space-x-4">
                          <policy.icon className="w-10 h-10 text-blue-600" />
                          <h3 className="text-xl font-bold text-blue-800">{policy.type}</h3>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs ${categoryColors[policy.category]}`}>
                          {policy.category}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{policy.description}</p>
                      
                      <div className="space-y-2 mb-4">
                        {policy.features.slice(0,2).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-700">
                            <Check className="w-4 h-4 mr-2 text-green-500" />
                            {feature}
                          </div>
                        ))}
                      </div>

                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm text-gray-500">Expires: {policy.expiry}</p>
                          <p className="text-lg font-bold text-blue-600">${policy.price}/year</p>
                        </div>
                        <button
                          onClick={() => handleRenew(policy)}
                          className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                            policy.status === "Expired"
                              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                              : policy.status === "Renewed"
                              ? "bg-green-500 text-white cursor-not-allowed"
                              : "bg-blue-600 text-white hover:bg-blue-700"
                          }`}
                          disabled={policy.status === "Expired" || policy.status === "Renewed"}
                        >
                          {policy.status === "Expired"
                            ? "Policy Expired"
                            : policy.status === "Renewed"
                            ? "Policy Renewed"
                            : "Renew Now"}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </section>
        ))}
      </main>

      {showPayment && <PaymentModal />}

      <footer className="bg-blue-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <p>&copy; 2024 Insurance Inc. All Rights Reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-200">Privacy Policy</a>
            <a href="#" className="hover:text-blue-200">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default InsuranceRenewalPage;