import React from 'react';
import security from './images/security.jpg'; // Adjust the path to your image

const SecurityPage = () => {
  return (
    <section className="container-fluid py-5" id="security">
      <h2 className="text-center mb-5">Security You Can Trust</h2>
      <div className="row align-items-center se">
        <div className="col-lg-6">
          <img src={security} alt="Security" className="img-fluid" />
        </div>
        <div className="col-lg-6 se">
          <h3 className="fw-bold">Your Data, Our Priority</h3>
          <p>
            We take your privacy and data security seriously. Our system is built with top-tier security measures
            to ensure your information is always safe and protected. With encrypted data storage, secure login
            mechanisms, and continuous monitoring, your sensitive information is in good hands.
          </p>
          <p>
            Whether you’re storing customer details, financial data, or other business-critical information, we’ve
            got you covered. Trust in our state-of-the-art security systems to keep everything secure 24/7.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SecurityPage;
