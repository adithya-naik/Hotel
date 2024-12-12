import React from 'react';
import { useParams } from 'react-router-dom';

const TestimonialCard = () => {
  const { testimonialId } = useParams();
  const testimonial = TestimonialPage.find(testimonial => testimonial.id === testimonialId);

  return (
    <div>
      <h2>{testimonial.name}</h2>
      <p>{testimonial.description}</p>
    </div>
  );
};

export default TestimonialCard;

