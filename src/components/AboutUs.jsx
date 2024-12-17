import React from 'react';
import { Shield, Users, Award, Clock, Building2, HandshakeIcon, Star, Phone, Mail, MapPin, Heart, Target, Lightbulb } from 'lucide-react';

const AboutUs = () => {
  const stats = [
    { number: "30+", label: "Years of Experience", description: "Serving clients since 1993" },
    { number: "50K+", label: "Satisfied Clients", description: "Across 50 states" },
    { number: "98%", label: "Claims Settlement", description: "Industry-leading rate" },
    { number: "24/7", label: "Support", description: "Always here for you" }
  ];

  const values = [
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Trusted Protection",
      description: "We provide comprehensive coverage that you can rely on when it matters most, backed by our strong financial stability."
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: "Client-Centric Approach",
      description: "Your needs come first. We tailor our solutions to match your unique requirements with personalized service."
    },
    {
      icon: <Award className="w-12 h-12 text-blue-600" />,
      title: "Excellence in Service",
      description: "Our commitment to quality has earned us multiple industry awards and the highest customer satisfaction ratings."
    }
  ];

  const milestones = [
    { year: "1993", event: "Founded with a vision to provide accessible insurance" },
    { year: "2000", event: "Expanded operations nationwide" },
    { year: "2010", event: "Launched innovative digital insurance solutions" },
    { year: "2015", event: "Achieved A+ financial strength rating" },
    { year: "2020", event: "Introduced AI-powered claims processing" },
    { year: "2023", event: "Reached 50,000+ satisfied clients milestone" }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO",
      description: "20+ years of insurance industry expertise"
    },
    {
      name: "Michael Chen",
      role: "Chief Claims Officer",
      description: "Leading our customer-first claims process"
    },
    {
      name: "David Miller",
      role: "Head of Innovation",
      description: "Driving digital transformation"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-32">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">Protecting What Matters Most</h1>
          <p className="text-xl md:text-2xl max-w-2xl mb-8">For over three decades, we've been securing futures and providing peace of mind to families and businesses across the nation.</p>
          <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-all transform hover:scale-105">
            Discover Our Solutions
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all">
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-xl font-semibold mb-2">{stat.label}</div>
              <div className="text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Story Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6 text-lg">
                Founded in 1993, we began with a simple mission: to provide accessible, reliable insurance solutions to every American. Today, we've grown into one of the most trusted names in the industry, serving clients nationwide with innovative coverage options and exceptional service.
              </p>
              <p className="text-gray-600 mb-6 text-lg">
                Our success is built on the foundation of trust, transparency, and unwavering commitment to our clients' security and satisfaction. We continuously evolve our services to meet the changing needs of our clients while maintaining our core values.
              </p>
              <div className="flex gap-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Learn More
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Meet Our Team
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-100 p-4 rounded-lg">
                <Building2 className="w-full h-full text-blue-600" />
              </div>
              <div className="bg-blue-200 p-4 rounded-lg mt-8">
                <HandshakeIcon className="w-full h-full text-blue-700" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Our Journey</h2>
        <div className="relative">
          {milestones.map((milestone, index) => (
            <div key={index} className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center mb-8`}>
              <div className="w-1/2 px-8">
                <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                  <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                  <div className="text-gray-700">{milestone.event}</div>
                </div>
              </div>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div className="w-1/2"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Values Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all">
                <div className="flex justify-center mb-6">{value.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-center">{value.title}</h3>
                <p className="text-gray-600 text-center">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Leadership Team Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-32 h-32 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Users className="w-16 h-16 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
              <div className="text-blue-600 font-semibold mb-3">{member.role}</div>
              <p className="text-gray-600">{member.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="mb-8 text-lg">Have questions? Our team is here to help you choose the right coverage for your needs.</p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-4" />
                  <span>1-800-INSURANCE</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 mr-4" />
                  <span>contact@insurancecompany.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 mr-4" />
                  <span>123 Insurance Ave, New York, NY 10001</span>
                </div>
              </div>
            </div>
            <div className="bg-white text-gray-900 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Request a Consultation</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border rounded-lg"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 border rounded-lg"
                />
                <textarea
                  placeholder="Message"
                  className="w-full p-3 border rounded-lg h-32"
                ></textarea>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Accreditations Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Our Accreditations</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="flex items-center justify-center">
              <Star className="w-16 h-16 text-blue-600" />
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Secure Your Future?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Join thousands of satisfied clients who trust us with their insurance needs. Let us help you protect what matters most.</p>
          <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-all transform hover:scale-105">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;