import { Suspense, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AOS from 'aos';

import { Navbar, Footer, Loader } from "./components";
import { LandingPage, AboutUsPage, ContactUsPage, TnC, PrivacyPolicy, Services } from './pages'

import './App.css';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, [])
  
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/terms" element={<TnC />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/services" element={<Services />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;