import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Users,
  CreditCard,
  AlertCircle,
  CheckCircle2,
  Calendar,
  TrendingUp,
  Search,
  Filter,
  MoreVertical,
  Bell,
  FileText,
  Settings,
  LogOut
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const AdminDashboard = () => {
  const [selectedTab, setSelectedTab] = useState('overview');

  // Sample data
  const revenueData = [
    { name: 'Jan', value: 4000 },
    { name: 'Feb', value: 3000 },
    { name: 'Mar', value: 5000 },
    { name: 'Apr', value: 4500 },
    { name: 'May', value: 6000 },
    { name: 'Jun', value: 5500 }
  ];

  const customers = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      plan: "Health Insurance",
      status: "Active",
      dueDate: "2024-12-15",
      amount: "$299",
      paymentStatus: "Paid"
    },
    {
      id: 2,
      name: "Sarah Smith",
      email: "sarah@example.com",
      plan: "Auto Insurance",
      status: "Active",
      dueDate: "2024-12-10",
      amount: "$199",
      paymentStatus: "Due"
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike@example.com",
      plan: "Home Insurance",
      status: "Pending",
      dueDate: "2024-12-20",
      amount: "$399",
      paymentStatus: "Overdue"
    }
  ];

  const stats = [
    { title: "Total Customers", value: "1,234", icon: Users, trend: "+12%" },
    { title: "Active Plans", value: "892", icon: CheckCircle2, trend: "+5%" },
    { title: "Monthly Revenue", value: "$45,678", icon: CreditCard, trend: "+8%" },
    { title: "Due Payments", value: "23", icon: AlertCircle, trend: "-3%" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Insurance Admin</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-500">
                <Bell className="w-6 h-6" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-500">
                <Settings className="w-6 h-6" />
              </button>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                  A
                </div>
                <span className="text-gray-700">Admin</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">{stat.title}</p>
                      <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                      <span className={`text-sm ${stat.trend.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                        {stat.trend} this month
                      </span>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <Icon className="w-6 h-6 text-blue-500" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Revenue Chart */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Revenue Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" stroke="#3B82F6" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Customer Table */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Recent Customers</CardTitle>
              <div className="flex space-x-4">
                <div className="relative">
                  <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search customers..."
                    className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button className="flex items-center space-x-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
                  <Filter className="w-5 h-5" />
                  <span>Filter</span>
                </button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-sm text-gray-500 border-b">
                    <th className="pb-3 px-6">Customer</th>
                    <th className="pb-3 px-6">Plan</th>
                    <th className="pb-3 px-6">Status</th>
                    <th className="pb-3 px-6">Due Date</th>
                    <th className="pb-3 px-6">Amount</th>
                    <th className="pb-3 px-6">Payment</th>
                    <th className="pb-3 px-6">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((customer) => (
                    <tr key={customer.id} className="border-b">
                      <td className="py-4 px-6">
                        <div>
                          <div className="font-medium text-gray-900">{customer.name}</div>
                          <div className="text-sm text-gray-500">{customer.email}</div>
                        </div>
                      </td>
                      <td className="py-4 px-6">{customer.plan}</td>
                      <td className="py-4 px-6">
                        <span className={`px-3 py-1 rounded-full text-xs
                          ${customer.status === 'Active' ? 'bg-green-100 text-green-800' :
                            customer.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'}`}>
                          {customer.status}
                        </span>
                      </td>
                      <td className="py-4 px-6">{customer.dueDate}</td>
                      <td className="py-4 px-6">{customer.amount}</td>
                      <td className="py-4 px-6">
                        <span className={`px-3 py-1 rounded-full text-xs
                          ${customer.paymentStatus === 'Paid' ? 'bg-green-100 text-green-800' :
                            customer.paymentStatus === 'Due' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'}`}>
                          {customer.paymentStatus}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <button className="text-gray-400 hover:text-gray-500">
                          <MoreVertical className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;