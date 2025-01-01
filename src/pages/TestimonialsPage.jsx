import React from 'react';
import TestimonialCard from '../components/TestimonialCard';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    description: 'This is a great hotel! The staff is friendly and the rooms are clean.'
  },
  {
    id: 2,
    name: 'Jane Doe',
    description: 'I had a wonderful stay at this hotel. The location is perfect and the amenities are top-notch.'
  },
  {
    id: 3,
    name: 'Bob Smith',
    description: 'I was impressed by the hotel\'s attention to detail and the excellent customer service.'
  },
  {
    id: 11,
    name: 'John Doe',
    description: 'This is a great hotel! The staff is friendly and the rooms are clean.'
  },
  {
    id: 12,
    name: 'Jane Doe',
    description: 'I had a wonderful stay at this hotel. The location is perfect and the amenities are top-notch.'
  },
  {
    id: 13,
    name: 'Bob Smith',
    description: 'I was impressed by the hotel\'s attention to detail and the excellent customer service.'
  },
  {
    id: 123,
    name: 'John Doe',
    description: 'This is a great hotel! The staff is friendly and the rooms are clean.'
  },
  {
    id: 233,
    name: 'Jane Doe',
    description: 'I had a wonderful stay at this hotel. The location is perfect and the amenities are top-notch.'
  },
  {
    id: 32,
    name: 'Bob Smith',
    description: 'I was impressed by the hotel\'s attention to detail and the excellent customer service.'
  }
];

const TestimonialsPage = () => {
  return (
    <div>
      <h2>Testimonials</h2>
      {testimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
      ))}
    </div>
  );
};

export default TestimonialsPage;

