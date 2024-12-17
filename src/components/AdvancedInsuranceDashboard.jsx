import React, { useState, useEffect } from 'react';
import { 
  Home, 
  FileText, 
  CreditCard, 
  Shield, 
  Bell, 
  MessageCircle, 
  TrendingUp, 
  FileDown, 
  Clock,
  Check,
  X
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

// Simulated advanced user data
const mockUserData = {
  profile: {
    name: "Emma Rodriguez",
    email: "emma.rodriguez@example.com",
    memberSince: "2020-03-15",
    profileImage: "/api/placeholder/200/200"
  },
  financialOverview: {
    totalCoverage: 750000,
    monthlyPremium: 320,
    savedThisYear: 1200,
    claimHistory: [
      { month: 'Jan', claims: 0 },
      { month: 'Feb', claims: 1 },
      { month: 'Mar', claims: 0 },
      { month: 'Apr', claims: 2 },
      { month: 'May', claims: 0 },
      { month: 'Jun', claims: 1 }
    ]
  },
  policies: [
    { 
      id: "AUTO-2023-001", 
      type: "Auto Insurance", 
      coverage: "$250,000", 
      premium: "$180/month",
      deductible: "$1,000",
      expirationDate: "2024-12-31",
      status: "Active"
    },
    { 
      id: "HOME-2023-002", 
      type: "Home Insurance", 
      coverage: "$500,000", 
      premium: "$140/month",
      deductible: "$2,500",
      expirationDate: "2024-11-15",
      status: "Active"
    }
  ],
  recentClaims: [
    {
      id: "CLAIM-2023-01",
      date: "2023-06-15",
      type: "Auto Collision",
      status: "Processing",
      estimatedSettlement: "$3,500",
      details: "Minor rear-end collision, repair estimate in progress"
    }
  ],
  notifications: [
    {
      id: 1,
      type: "warning",
      message: "Auto policy renewal due in 30 days",
      date: "2023-11-20"
    },
    {
      id: 2,
      type: "promotion",
      message: "Qualify for 15% safe driver discount",
      date: "2023-11-18"
    }
  ]
};

const AdvancedInsuranceDashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [animateNotifications, setAnimateNotifications] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateNotifications(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const renderDashboardContent = () => {
    switch(activeSection) {
      case 'dashboard':
        return (
          <div className="p-6 space-y-6">
            {/* Financial Overview */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-lg p-6 shadow-xl">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">Financial Overview</h3>
                  <TrendingUp size={28} />
                </div>
                <div className="space-y-2">
                  <div>
                    <p className="text-sm opacity-75">Total Coverage</p>
                    <p className="text-2xl font-bold">${mockUserData.financialOverview.totalCoverage.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm opacity-75">Monthly Premium</p>
                    <p className="text-xl">${mockUserData.financialOverview.monthlyPremium}/month</p>
                  </div>
                  <div>
                    <p className="text-sm opacity-75">Saved This Year</p>
                    <p className="text-green-200 font-semibold">+${mockUserData.financialOverview.savedThisYear}</p>
                  </div>
                </div>
              </div>

              {/* Claims Chart */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-4">Claim History</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={mockUserData.financialOverview.claimHistory}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="claims" 
                      stroke="#8884d8" 
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Active Policies & Notifications */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Policies */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">Active Policies</h3>
                  <Shield size={24} className="text-blue-600" />
                </div>
                {mockUserData.policies.map(policy => (
                  <div 
                    key={policy.id} 
                    className="border-b py-3 last:border-b-0 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">{policy.type}</p>
                        <p className="text-sm text-gray-500">
                          Expires: {policy.expirationDate}
                        </p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        policy.status === 'Active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {policy.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Notifications */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">Notifications</h3>
                  <Bell size={24} className="text-yellow-600" />
                </div>
                {mockUserData.notifications.map(notification => (
                  <div 
                    key={notification.id}
                    className={`
                      p-3 rounded-lg mb-2 
                      ${animateNotifications ? 'animate-bounce' : ''}
                      ${
                        notification.type === 'warning' 
                          ? 'bg-yellow-50 border-yellow-200' 
                          : 'bg-blue-50 border-blue-200'
                      }
                    `}
                  >
                    <div className="flex items-center">
                      {notification.type === 'warning' ? (
                        <Clock className="mr-3 text-yellow-600" size={20} />
                      ) : (
                        <Check className="mr-3 text-blue-600" size={20} />
                      )}
                      <div>
                        <p className="text-sm">{notification.message}</p>
                        <p className="text-xs text-gray-500">{notification.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      
      // Other sections would be similarly enhanced
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Sidebar with User Profile */}
      <div className="w-80 bg-white shadow-xl flex flex-col">
        {/* User Profile Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
          <div className="flex items-center space-x-4">
            <img 
              src={mockUserData.profile.profileImage} 
              alt="Profile" 
              className="w-16 h-16 rounded-full border-4 border-white"
            />
            <div>
              <h2 className="text-xl font-semibold">{mockUserData.profile.name}</h2>
              <p className="text-sm opacity-75">{mockUserData.profile.email}</p>
              <p className="text-xs mt-1">
                Member since {new Date(mockUserData.profile.memberSince).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {[
            { icon: Home, label: 'Dashboard', section: 'dashboard' },
            { icon: FileText, label: 'Documents', section: 'documents' },
            { icon: Shield, label: 'Claims', section: 'claims' },
            { icon: CreditCard, label: 'Billing', section: 'billing' }
          ].map(({ icon: Icon, label, section }) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`
                w-full flex items-center p-3 rounded-lg transition-all 
                ${activeSection === section 
                  ? 'bg-blue-100 text-blue-600 font-semibold' 
                  : 'text-gray-600 hover:bg-gray-100'}
              `}
            >
              <Icon className="mr-3" size={20} />
              {label}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto">
        {renderDashboardContent()}
      </div>
    </div>
  );
};

export default AdvancedInsuranceDashboard;