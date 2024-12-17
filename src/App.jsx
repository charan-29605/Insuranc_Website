import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage"; // Correct path to HomePage
import AuthPage from "./components/AuthPage"; // Import AuthPage component
import LearnMore from "./components/LearnMore";
import InsuranceProducts from "./components/InsuranceProducts";
//import AdvancedInsuranceDashboard from "./components/AdvancedInsuranceDashboard";
import InsuranceRenewals from "./components/InsuranceRenewals";
import ClaimsPage from "./components/ClaimsPage";
import SupportPage from "./components/SupportPage";
import AboutUs from "./components/AboutUs";
import InsuranceGuides from "./components/InsuranceGuides";
import ArticlesPage from "./components/ArticlesPage";
import FAQsPage from "./components/FAQsPage";
import EbooksPage from "./components/EbooksPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/lm" element={<LearnMore />} />
        <Route path="/In" element={<InsuranceProducts />} />
        <Route path="/renewals" element={<InsuranceRenewals />} />
        <Route path="/claims" element={<ClaimsPage />} />
        <Route path="/Support" element={<SupportPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/guides" element={<InsuranceGuides />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/faqs" element={<FAQsPage />} />
        <Route path="/ebooks" element={<EbooksPage />} />
        
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
