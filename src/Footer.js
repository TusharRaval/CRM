import React from 'react';

const Footer = () => {
  return (
    <footer className="footer text-light py-5" id='foot'>
      <div className="container">
        <div className="row">
          {/* About Us Section */}
          <div className="col-lg-3 mb-4">
            <h5>About Us</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante mollis quam tristique convallis. Sed euismod, nisl eget consectetur suscipit, libero felis tincidunt urna, eget bibendum arcu leo id nulla.</p>
          </div>
          
          {/* Services Section */}
          <div className="col-lg-3 mb-4">
            <h5>Services</h5>
            <ul className="list-unstyled">
              <li><a href="#web" className="text-light">Web Development</a></li>
              <li><a href="#app" className="text-light">App Development</a></li>
              <li><a href="#design" className="text-light">UI/UX Design</a></li>
              <li><a href="#marketing" className="text-light">Digital Marketing</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-lg-3 mb-4">
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li><a href="mailto:info@company.com" className="text-light">info@company.com</a></li>
              <li><a href="tel:+1234567890" className="text-light">+1 234 567 890</a></li>
              <li><address className="text-light">1234 Street Name, City, Country</address></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="col-lg-3 mb-4">
            <h5>Follow Us</h5>
            <ul className="list-unstyled d-flex">
              <li><a href="https://facebook.com" className="text-light mx-2">Facebook</a></li>
              <li><a href="https://twitter.com" className="text-light mx-2">Twitter</a></li>
              <li><a href="https://linkedin.com" className="text-light mx-2">LinkedIn</a></li>
              <li><a href="https://instagram.com" className="text-light mx-2">Instagram</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="row pt-4 mt-4 border-top">
          <div className="col text-center">
            <p className="mb-0">© {new Date().getFullYear()} Your Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
