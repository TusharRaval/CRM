import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import sec from './images/sec.jpg';
import FormPage from './FormPage'; // Import the FormPage component

const HomePage = () => {
  const [showModal, setShowModal] = useState(false); // State for modal visibility
  const navigate = useNavigate(); // Hook for navigation

  // Toggle modal visibility
  const toggleModal = () => setShowModal(!showModal);

  // Handle free trial click
  const handleFreeTrial = () => {
    // Close the modal
    setShowModal(false);
    // Navigate to the Welcome page
    navigate('/well');
  };

  return (
    <div className="container-fluid hom text-center full-height" id="home">
      <div className="row">
        <div className="col-lg-6 ho">
          <h1 className="display-4 fw-bold text-dark">
            Take your business to the next level—start your free CRM trial today.
          </h1>
          {/* Trigger Modal Button */}
          <button 
            type="button" 
            className="btn btn-primary btn-lg m-2 bt" 
            onClick={toggleModal}
          >
            <i className="fab fa-apple"></i> Try Me
          </button>
        </div>
        <div className="col-lg-6">
          <img className="img-fluid" src={sec} alt="iphone-mockup" />
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal show" tabIndex="-1" style={{ display: 'block' }} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Sign Up</h5>
                <button type="button" className="btn-close" onClick={toggleModal}></button>
              </div>
              <div className="modal-body">
                {/* Include FormPage component inside the modal */}
                <FormPage />
              </div>
              <div className="modal-footer">
                <button 
                  type="button" 
                  className="btn btn-success" 
                  onClick={handleFreeTrial} // Call handleFreeTrial when clicking "Free Trial"
                >
                  Free Trial
                </button>
                <button type="button" className="btn btn-secondary" onClick={toggleModal}>Close</button>
                {/* You can add additional modal actions here */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
