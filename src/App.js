import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS

import { BrowserRouter as  Route, Routes } from 'react-router-dom';
import { FormDataProvider } from './context/context';

import Navbar from './Navbar';

import FeaturesPage from './FeaturesPage';
import PricingPage from './PricingPage';
import SecurityPage from './SecurityPage';
import ContactForm from './ContactForm';
import SubscribeSection from './SubscribeSection';

import FormPage from './FormPage';
import WelcomePage from './WelcomePage';

function App() {
  return (
    <FormDataProvider>
    
     
        {/* Navbar is placed outside of <Routes> */}
        

        {/* Routes for different pages */}
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/security" element={<SecurityPage />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/subscribe" element={<SubscribeSection />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/well" element={<WelcomePage />} /> {/* Welcome Page */}
        </Routes>

        {/* Footer is placed outside of <Routes> */}
        
     
    </FormDataProvider>
  );
}

export default App;
