import React from 'react';

const SubscribeSection = () => {
  return (
    <section className="container sub" id="subscribe" style={{ height: "50vh" }}>
      <div className="row justify-content-center text-center">
        <div className="col-md-8">
          <h2 className="mb-4">Subscribe with Us</h2>
          <p className="text-muted mb-4">
            Never miss an offer! Get exclusive updates, insights, and all the latest information delivered straight to your inbox in real time.
          </p>
          <form className="d-flex justify-content-center">
            <input
              type="email"
              className="form-control me-2"
              placeholder="Enter your email"
              style={{ maxWidth: "400px" }}
            />
            <button type="submit" className="btn btn-primary">
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
