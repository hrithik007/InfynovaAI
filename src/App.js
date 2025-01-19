// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import './App.css';
import EcommerceApp from './pages/WebApp/EcommerceApp';
import ResponsiveWebApp from './pages/WebApp/ResponsiveWebApp';
import DigitalMarketing from './pages/WebApp/DigitalMarketing';
import SEOOptimization from './pages/WebApp/SEOOptimization';
import DataAnalytics from './pages/DataAnalytics&Ai/DataAnalytics';
import PowerBIReport from './pages/DataAnalytics&Ai/PowerBiReport';
import GenerativeAI from './pages/DataAnalytics&Ai/GenerativeAI';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileExcel, faChartBar, faCogs, faChartLine } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/InfynovaAI" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ecommerce-app" element={<EcommerceApp />} />
        <Route path="/responsive-web-app" element={<ResponsiveWebApp />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/seo-optimization" element={<SEOOptimization />} />
        <Route path="/data-analytics" element={<DataAnalytics />} />
        <Route path="/power-bi-report" element={<PowerBIReport />} />
        <Route path="/generative-ai" element={<GenerativeAI />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
