import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

import PricingPage from './PricingPage';
import FeaturesPage from './FeaturesPage';
import HomePage from './HomePage';
import SecurityPage from './SecurityPage';
import ContactForm from './ContactForm';
import SubscribeSection from './SubscribeSection';
import Footer from './Footer';

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Ensure Bootstrap JS is imported

const Navbar = () => {
  return (
    <><nav className="navbar navbar-expand-lg navbar-light bg-dark shadow-sm">
      <div className="container">
        <Link className="navbar-brand text-light" to="/">
          Bansi CRM
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link text-light">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <ScrollLink
                to="features"
                smooth={true}
                duration={500}
                className="nav-link text-light"
                activeClass="active"
              >
                Features
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                to="pricing"
                smooth={true}
                duration={500}
                className="nav-link text-light"
                activeClass="active"
              >
                Pricing
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                to="security"
                smooth={true}
                duration={500}
                className="nav-link text-light"
                activeClass="active"
              >
                Security
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                className="nav-link text-light"
                activeClass="active"
              >
                Contact
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                to="subscribe"
                smooth={true}
                duration={500}
                className="nav-link text-light"
                activeClass="active"
              >
                Subscribe
              </ScrollLink>
            </li>
          </ul>
        </div>

      </div>

    </nav>
    <HomePage />
    <FeaturesPage />
    <PricingPage />
    <SecurityPage />
    <ContactForm />
    <SubscribeSection />
    <Footer />
    </>
  );
  
};

export default Navbar;
