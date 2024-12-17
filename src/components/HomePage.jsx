import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Building2, PiggyBank, HeartHandshake } from 'lucide-react';
import { Users, Heart, AlertTriangle, Play, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Header, MobileMenu } from './Header';
import Footer from './Footer'; // Ensure you're importing Footer correctly

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "./src/components/health-insurance.png",
    "./src/components/life-insurance.png",
    "./src/components/car-insurance.png",
    "./src/components/la-1.png",
    "./src/components/la-2.png",    
    "./src/components/la-3.png",    

  ];

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-700 to-blue-500 text-white">
      {/* Parallax Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400 via-red-400 to-blue-500 opacity-30 animate-gradient-move"></div>

      {/* Content Section */}
      <div className="relative max-w-7xl mx-auto px-8 py-16 flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="md:w-2/5 space-y-6">
          <h1 className="text-5xl font-extrabold leading-tight tracking-wide text-yellow-400">
            Insure Your Tomorrow with{" "}
            <span className="text-white">LifeAssure</span>
          </h1>
          <p className="text-lg text-white opacity-80">
            Trusted by thousands, LifeAssure provides cutting-edge insurance
            solutions tailored to your needs. Secure health, assets, and your
            peace of mind with us.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-yellow-400 text-blue-700 flex items-center px-6 py-3 rounded-full shadow-lg font-bold hover:bg-yellow-300 transition-all transform hover:scale-105">
              Get Started <ArrowRight className="ml-3 w-5 h-5" />
            </button>
            <Link to="/lm" className="bg-white text-blue-700 flex items-center px-6 py-3 rounded-full shadow-lg font-bold hover:bg-yellow-400 transition-all transform hover:scale-105">
  <Play className="mr-2 w-5 h-5" />
  Learn More
</Link>
          </div>
        </div>

        {/* Right Content (Slider) */}
        <div className="mt-10 md:mt-0 md:w-1/2 relative group perspective-1000 md:ml-16">
          <div className="relative w-full h-[400px] overflow-hidden rounded-lg shadow-2xl">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-500 transform ${
                  index === currentSlide
                    ? "translate-x-0 opacity-100"
                    : "translate-x-full opacity-0"
                }`}
              >
                <img
                  src={slide}
                  alt={`Insurance Slide ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}

            

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide
                      ? "bg-white scale-125"
                      : "bg-white bg-opacity-50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="relative max-w-6xl mx-auto -mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 px-6 mb-16">
        {[
          {
            stat: "150,000+",
            label: "Happy Clients",
            detail: "Our clients trust us for reliable insurance services.",
          },
          {
            stat: "75,000+",
            label: "Claims Resolved",
            detail: "We resolve claims swiftly, ensuring customer satisfaction.",
          },
          {
            stat: "35+ Years",
            label: "Industry Experience",
            detail: "Decades of expertise in providing comprehensive coverage.",
          },
        ].map(({ stat, label, detail }, index) => (
          <div key={index} className="relative group">
            {/* Stat Card */}
            <div className="bg-white text-blue-700 p-6 rounded-xl shadow-xl flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
              <h3 className="text-4xl font-bold text-yellow-400 animate-pulse">
                {stat}
              </h3>
              <p className="text-lg mt-2">{label}</p>
            </div>

            {/* Vertical Divider */}
            {index < 2 && (
              <div className="hidden sm:block absolute top-1/2 -right-3 transform -translate-y-1/2 h-12 w-px bg-white/30" />
            )}

            {/* Tooltip */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bg-blue-700 text-white p-4 rounded-lg shadow-lg text-sm max-w-xs">
                {detail}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      
    </div>
  );
};
// Insurance Features Section
// Insurance Features Section
const InsuranceFeatures = () => {
  const features = [
    {
      title: 'Life Insurance',
      desc: "Protect your family's future.",
      img: './src/components/life-insurance.png',
      Icon: Users,
      link: '#', // Add a link for more details
    },
    {
      title: 'Health Insurance',
      desc: 'Comprehensive medical coverage.',
      img: './src/components/health-insurance.png',
      Icon: Heart,
      link: '#', // Add a link for more details
    },
    {
      title: 'Accident Insurance',
      desc: 'Financial security for unexpected events.',
      img: './src/components/car-insurance.png',
      Icon: AlertTriangle,
      link: '#', // Add a link for more details
    },
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-blue-200 via-blue-300 to-blue-400">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Insurance Plans
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-blue-50"
            >
              <div className="w-16 h-16 mx-auto mb-4 text-blue-600">
                <feature.Icon size={48} strokeWidth={1.5} />
              </div>
              <img
                src={feature.img}
                alt={feature.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-blue-700">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4">{feature.desc}</p>
              <a
                href={feature.link}
                className="text-indigo-600 hover:underline"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
// Testimonials Section
const Testimonials = () => (
  <div className="bg-gradient-to-r from-blue-500 via-teal-400 to-blue-600 text-white py-16">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[ 
          {
            name: 'John Doe',
            feedback: 'LifeAssure provided me with exceptional service and great coverage.',
            img: '/src/components/c1.png',
          },
          {
            name: 'Jane Smith',
            feedback: 'The team was so helpful in finding the perfect plan for my needs.',
            img: '/src/components/c2.png',
          },
          {
            name: 'Chris Lee',
            feedback: 'I feel secure knowing my family is protected with LifeAssure.',
            img: '/src/components/c3.png',
          },
        ].map((testimonial, index) => (
          <div key={index} className="p-6 bg-white text-gray-800 rounded-lg shadow-lg text-center">
            <img
              src={testimonial.img}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <p className="italic text-gray-600">"{testimonial.feedback}"</p>
            <h4 className="text-lg font-semibold mt-4">{testimonial.name}</h4>
          </div>
        ))}
      </div>
    </div>
  </div>
);
const PolicyStats = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-8 text-blue-900">
        Why India Trusts LIFEASSURE
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-lg border-2 border-blue-100 bg-blue-50 hover:shadow-lg transition-shadow">
          <div className="flex flex-col items-center text-center">
            <Users className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="font-bold text-xl text-blue-900 mb-2">Over 9 Million</h3>
            <p className="text-gray-600">Customers trust us & have bought their insurance on PolicyBazaar</p>
          </div>
        </div>

        <div className="p-6 rounded-lg border-2 border-blue-100 bg-blue-50 hover:shadow-lg transition-shadow">
          <div className="flex flex-col items-center text-center">
            <Building2 className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="font-bold text-xl text-blue-900 mb-2">50 Insurers</h3>
            <p className="text-gray-600">Partnered with us for easy & transparent comparison</p>
          </div>
        </div>

        <div className="p-6 rounded-lg border-2 border-blue-100 bg-blue-50 hover:shadow-lg transition-shadow">
          <div className="flex flex-col items-center text-center">
            <PiggyBank className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="font-bold text-xl text-blue-900 mb-2">Great Price</h3>
            <p className="text-gray-600">For all kinds of insurance plans available online</p>
          </div>
        </div>

        <div className="p-6 rounded-lg border-2 border-blue-100 bg-blue-50 hover:shadow-lg transition-shadow">
          <div className="flex flex-col items-center text-center">
            <HeartHandshake className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="font-bold text-xl text-blue-900 mb-2">Claims Support</h3>
            <p className="text-gray-600">Built-in with every policy for help when you need it most</p>
          </div>
        </div>
      </div>
    </div>
  );
};
// Blog Preview Section
// Blog Preview Section
const BlogPreview = () => (
  <div className="py-16 bg-gradient-to-b from-blue-200 via-blue-300 to-blue-400">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Latest Articles</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[ 
          {
            title: '5 Tips for Choosing the Right Insurance Plan',
            desc: 'Learn how to select the best insurance plan for your needs.',
            img: './src/components/la-1.png',
            link: '#',
          },
          {
            title: 'How Life Insurance Can Secure Your Family’s Future',
            desc: 'Discover the importance of life insurance in uncertain times.',
            img: './src/components/la-2.png',
            link: '#',
          },
          {
            title: 'Understanding Health Insurance Coverage',
            desc: 'A guide to understanding the basics of health insurance.',
            img: './src/components/la-3.png',
            link: '#',
          },
        ].map((blog, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all">
            <img
              src={blog.img}
              alt={blog.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-6">
              <h4 className="text-xl font-semibold text-blue-700">{blog.title}</h4>
              <p className="text-gray-600 mt-2 mb-4">{blog.desc}</p>
              <a
                href={blog.link}
                className="text-indigo-600 hover:underline"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Home Page
const HomePage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div>
      <Header onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
      {isMobileMenuOpen && <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />}
      <HeroSection />
      <InsuranceFeatures />
      <Testimonials />
      <div className="py-16 bg-gray-100">
        <PolicyStats />
      </div>
      <BlogPreview />
      <Footer />
    </div>
  );
};

export default HomePage;
