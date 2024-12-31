import React from 'react';
import { SiActivitypub } from 'react-icons/si';
import { GiBullseye } from 'react-icons/gi';
import { Ri24HoursLine } from 'react-icons/ri';
import { FcFolder, FcPositiveDynamic, FcSmartphoneTablet } from 'react-icons/fc';

const FeaturesPage = () => {
  return (
    <section className="container-fluid py-5" id="features">
      <h2 className="text-center mb-5">Why Choose Our CRM?</h2>
      <div className="row text-center">
        <div className="col-lg-4 mb-4">
          <div className="feature-box shadow p-4 rounded">
            <SiActivitypub size={80} className="text-primary mb-3" />
            <h3 className="feature-title">User-Friendly Interface</h3>
            <p>
              A seamless and intuitive dashboard designed for all skill levels, enabling easy navigation and efficient workflow.
            </p>
          </div>
        </div>
        <div className="col-lg-4 mb-4">
          <div className="feature-box shadow p-4 rounded">
            <GiBullseye size={80} className="text-success mb-3" />
            <h3 className="feature-title">Actionable Insights</h3>
            <p>
              Analyze customer data and trends effortlessly to make data-driven decisions that boost your business.
            </p>
          </div>
        </div>
        <div className="col-lg-4 mb-4">
          <div className="feature-box shadow p-4 rounded">
            <Ri24HoursLine size={80} className="text-danger mb-3" />
            <h3 className="feature-title">24/7 Support</h3>
            <p>
              Get round-the-clock support from our team to resolve your issues and ensure uninterrupted operations.
            </p>
          </div>
        </div>
        <div className="col-lg-4 mb-4">
          <div className="feature-box shadow p-4 rounded">
            <FcFolder size={80} />
            <h3 className="feature-title">Data Security</h3>
            <p>
              Your data is encrypted and securely stored, ensuring compliance with the highest industry standards.
            </p>
          </div>
        </div>
        <div className="col-lg-4 mb-4">
          <div className="feature-box shadow p-4 rounded">
            <FcPositiveDynamic size={80} />
            <h3 className="feature-title">Scalable Solutions</h3>
            <p>
              Our CRM grows with your business, offering features and integrations tailored to your evolving needs.
            </p>
          </div>
        </div>
        <div className="col-lg-4 mb-4">
          <div className="feature-box shadow p-4 rounded">
            <FcSmartphoneTablet size={80} />
            <h3 className="feature-title">Easy Integrations</h3>
            <p>
              Connect with your favorite tools and platforms seamlessly to streamline your workflows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesPage;
