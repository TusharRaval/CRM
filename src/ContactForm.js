import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Phone: '',
    Email: '',
    Subject: '',
    Message: '',
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value, // Dynamically update state fields
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/api/form', formData);
      if (response.status === 200) {
        alert('Form submitted successfully!');
        setFormData({
          Name: '',
          Phone: '',
          Email: '',
          Subject: '',
          Message: '',
        });
      } else {
        alert('Error submitting form.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting form.');
      setFormData({
        Name: '',
        Phone: '',
        Email: '',
        Subject: '',
        Message: '',
      });
    }
  };

  return (
    <section className="container-fluid py-5" id="contact">
      <h2 className="text-center mb-4">Contact Us</h2>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <form onSubmit={handleSubmit} className="modern-form">
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="Name"
                placeholder="Your Name"
                value={formData.Name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="Email"
                placeholder="Your Email"
                value={formData.Email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Phone" className="form-label">Phone</label>
              <input
                type="text"
                className="form-control"
                id="Phone"
                placeholder="Your Phone"
                value={formData.Phone}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Subject" className="form-label">Subject</label>
              <input
                type="text"
                className="form-control"
                id="Subject"
                placeholder="Subject"
                value={formData.Subject}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Message" className="form-label">Message</label>
              <textarea
                className="form-control"
                id="Message"
                rows="5"
                placeholder="Your Message"
                value={formData.Message}
                onChange={handleChange}
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary btn-block">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
