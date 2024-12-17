import React, { useState } from 'react';
import { Car, Home, Heart, ChevronRight, CheckCircle, Upload, Clock, Bike, Plane, Laptop, CreditCard, Shield } from 'lucide-react';

const ClaimsPage = () => {
  const [step, setStep] = useState(1);
  const [claimType, setClaimType] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [recentClaims] = useState([
    {
      id: 'CLM-2024-001',
      type: 'Auto',
      status: 'In Review',
      date: '2024-11-20',
      description: 'Front bumper damage from parking incident',
      amount: 2800,
      priority: 'High'
    },
    {
      id: 'CLM-2024-002',
      type: 'Travel',
      status: 'Approved',
      date: '2024-11-15',
      description: 'Flight cancellation compensation',
      amount: 1200,
      priority: 'Medium'
    },
    {
      id: 'CLM-2024-003',
      type: 'Electronics',
      status: 'Completed',
      date: '2024-11-10',
      description: 'Laptop water damage',
      amount: 1800,
      priority: 'Low'
    }
  ]);

  const claimTypes = [
    { id: 'auto', icon: Car, title: 'Auto Claim', description: 'Vehicle damage or accident claims', color: 'blue' },
    { id: 'home', icon: Home, title: 'Home Claim', description: 'Property damage or theft claims', color: 'green' },
    { id: 'health', icon: Heart, title: 'Health Claim', description: 'Medical expenses and treatments', color: 'red' },
    { id: 'bike', icon: Bike, title: 'Bike Claim', description: 'Bicycle damage or theft claims', color: 'purple' },
    { id: 'travel', icon: Plane, title: 'Travel Claim', description: 'Trip cancellation or lost luggage', color: 'yellow' },
    { id: 'electronics', icon: Laptop, title: 'Electronics Claim', description: 'Device damage or theft', color: 'indigo' }
  ];

  const paymentMethods = [
    { id: 'bank', title: 'Bank Transfer', description: 'Direct deposit to your account', icon: CreditCard },
    { id: 'card', title: 'Credit Card', description: 'Refund to your card', icon: CreditCard },
    { id: 'paypal', title: 'PayPal', description: 'Transfer to PayPal account', icon: CreditCard }
  ];

  const getStatusColor = (status) => {
    const colors = {
      'Completed': 'bg-green-500',
      'In Review': 'bg-yellow-500',
      'Approved': 'bg-blue-500',
      'Pending': 'bg-orange-500'
    };
    return `${colors[status] || 'bg-gray-500'} text-white`;
  };

  const getPriorityBadge = (priority) => {
    const colors = {
      'High': 'bg-red-100 text-red-800',
      'Medium': 'bg-yellow-100 text-yellow-800',
      'Low': 'bg-green-100 text-green-800'
    };
    return `${colors[priority]} px-2 py-1 rounded-full text-xs font-medium`;
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-center text-blue-600">Select Claim Type</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {claimTypes.map(({ id, icon: Icon, title, description, color }) => (
                <div
                  key={id}
                  onClick={() => setClaimType(id)}
                  className={`cursor-pointer transition-all duration-300 transform hover:scale-105 border-2 p-6 rounded-xl shadow-lg hover:shadow-2xl ${
                    claimType === id ? `border-${color}-500 bg-${color}-50` : 'border-gray-300'
                  }`}
                >
                  <div className="flex flex-col items-center justify-between h-full">
                    <Icon className={`h-12 w-12 text-${color}-600 mb-4`} />
                    <h3 className={`font-semibold text-xl text-center text-${color}-700`}>{title}</h3>
                    <p className="text-center text-gray-600 mt-2">{description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-end mt-8">
              <button
                className={`px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all flex items-center ${
                  !claimType ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                onClick={() => setStep(2)}
                disabled={!claimType}
              >
                Continue
                <ChevronRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-center text-blue-600">Select Payment Method</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {paymentMethods.map(({ id, icon: Icon, title, description }) => (
                <div
                  key={id}
                  onClick={() => setPaymentMethod(id)}
                  className={`cursor-pointer transition-all duration-300 transform hover:scale-105 border-2 p-6 rounded-xl shadow-lg hover:shadow-2xl ${
                    paymentMethod === id ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                  }`}
                >
                  <div className="flex flex-col items-center justify-between h-full">
                    <Icon className="h-12 w-12 text-blue-600 mb-4" />
                    <h3 className="font-semibold text-xl text-center text-blue-700">{title}</h3>
                    <p className="text-center text-gray-600 mt-2">{description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-8">
              <button
                className="px-8 py-3 bg-gray-300 text-gray-700 rounded-full font-semibold hover:bg-gray-400 transition-all"
                onClick={() => setStep(1)}
              >
                Back
              </button>
              <button
                className={`px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all flex items-center ${
                  !paymentMethod ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                onClick={() => setStep(3)}
                disabled={!paymentMethod}
              >
                Continue
                <ChevronRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="text-center space-y-6">
            <div className="bg-blue-100 rounded-full p-4 w-20 h-20 mx-auto">
              <Upload className="h-12 w-12 text-blue-600" />
            </div>
            <h2 className="text-3xl font-semibold text-blue-600">Submit Claim Details</h2>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-800">Claim Type:</p>
                  <p className="text-gray-600">{claimTypes.find(t => t.id === claimType)?.title}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Payment Method:</p>
                  <p className="text-gray-600">{paymentMethods.find(p => p.id === paymentMethod)?.title}</p>
                </div>
                <textarea 
                  className="w-full p-3 border rounded-lg"
                  placeholder="Provide additional claim details..."
                  rows="4"
                />
              </div>
            </div>
            <div className="flex justify-between">
              <button
                className="px-8 py-3 bg-gray-300 text-gray-700 rounded-full font-semibold hover:bg-gray-400 transition-all"
                onClick={() => setStep(2)}
              >
                Back
              </button>
              <button
                className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all"
                onClick={() => setStep(4)}
              >
                Submit Claim
              </button>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="text-center space-y-6">
            <div className="bg-green-100 rounded-full p-4 w-20 h-20 mx-auto">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <h2 className="text-3xl font-semibold text-green-600">Claim Submitted Successfully</h2>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
              <p className="text-lg text-gray-600 mb-4">
                Your claim has been submitted and will be reviewed by our team.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-800">Claim number: CLM-2024-004</p>
                <p className="text-sm text-gray-600">Expected processing time: 2-3 business days</p>
                <p className="text-sm text-gray-600 mt-2">Payment Method: {paymentMethods.find(p => p.id === paymentMethod)?.title}</p>
              </div>
            </div>
            <button
              className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all"
              onClick={() => setStep(1)}
            >
              Submit Another Claim
            </button>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 text-center">
          <div className="flex items-center justify-center mb-4">
            <Shield className="h-12 w-12 text-blue-600 mr-2" />
            <h1 className="text-4xl font-bold text-blue-600">Insurance Claims</h1>
          </div>
          <p className="text-gray-600">Submit and track your insurance claims</p>
        </header>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-8 p-6 border-2 rounded-lg shadow-lg bg-white">
              <div className="flex justify-between items-center mb-8">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        step >= i ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
                      }`}
                    >
                      {i}
                    </div>
                    {i !== 4 && (
                      <div
                        className={`w-8 h-0.5 ml-4 ${
                          step > i ? 'bg-blue-600' : 'bg-gray-300'
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
              {renderStep()}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="p-6 border-2 rounded-lg shadow-lg bg-white">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-blue-600 flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Recent Claims
                </h3>
                <span className="text-sm text-gray-500">Last 30 days</span>
              </div>
              <div className="space-y-4">
                {recentClaims.map((claim) => (
                  <div
                    key={claim.id}
                    className="p-4 rounded-lg border hover:shadow-lg transition-all"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <span className="font-semibold">{claim.type} Claim</span>
                        <span className={`ml-2 px-2 py-1 rounded-full text-xs ${getStatusColor(claim.status)}`}>
                          {claim.status}
                        </span>
                      </div>
                      <span className={`${getPriorityBadge(claim.priority)}`}>
                        {claim.priority} Priority
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">
                      <p>{claim.description}</p>
                      <div className="flex justify-between mt-2">
                        <span>Date: {claim.date}</span>
                        <span className="font-semibold">${claim.amount}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClaimsPage;