import React from 'react';
import { Carousel } from 'react-bootstrap';
import a from './images/a.png';
import b from './images/b.png';
import fg from './images/fg.png';

// Sample testimonials data
const testimonials = [{ quote: "This is an amazing product! It has changed my life for the better.", name: "John Doe", designation: "CEO, Company A", image: a }, { quote: "Fantastic service and support. I couldn't be happier.", name: "Jane Smith", designation: "CTO, Company B", image: b , }, { quote: "Highly recommend this to everyone. Absolutely wonderful!", name: "Emily Johnson", designation: "COO, Company C", image: fg, },];

const TestimonialsPage = () => {
  return (
    <section id="testimonials">
      <h2 className="text-center text-dark mb-5 py-5">Testimonial</h2>
      <Carousel interval={5000}>
        {testimonials.map((testimonial, index) => (
          <Carousel.Item key={index}>
            <div className="text-center p-5">
              <img
                className="rounded-circle mb-4"
                src={testimonial.image}
                alt={testimonial.name}
                width="150"
                height="150"
              />
              <blockquote className="blockquote">
                <p>{testimonial.quote}</p>
                <footer className="blockquote-footer">
                  {testimonial.name}, <cite title="Source Title">{testimonial.designation}</cite>
                </footer>
              </blockquote>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default TestimonialsPage;
