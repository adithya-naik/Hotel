import React, { useState } from 'react';
import { Mail, MessageSquare, User, Phone, Home, MapPin } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[\d\s-]{10,}$/;

    if (!formData.name.trim()) newErrors.name = 'Name required';
    if (!formData.email.trim()) newErrors.email = 'Email required';
    if (!emailRegex.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.phone.trim()) newErrors.phone = 'Phone required';
    if (!phoneRegex.test(formData.phone)) newErrors.phone = 'Invalid phone';
    if (!formData.message.trim()) newErrors.message = 'Message required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        subject: '',
        message: ''
      });
      alert('Thank you for your message! We will contact you soon.');
    }
  };

  const InputField = ({ icon: Icon, ...props }) => (
    <div className="relative flex flex-col">
      <div className="relative">
        <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10" size={18} />
        <input
          {...props}
          className={`w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500
            ${errors[props.name] ? 'border-red-500' : 'border-gray-300'}`}
          value={formData[props.name]}
          onChange={(e) => setFormData({ ...formData, [props.name]: e.target.value })}
        />
      </div>
      {errors[props.name] && (
        <p className="text-red-500 text-sm mt-1 absolute top-full left-0">{errors[props.name]}</p>
      )}
    </div>
  );

  return (
    <div className="max-w-xl mx-auto my-8 p-6 bg-white shadow-xl rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Contact Us</h2>
      <p className="text-center text-gray-600 mb-8">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label className="block text-gray-700 mb-2">Name</label>
          <InputField icon={User} type="text" name="name" placeholder="Your Name" />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Email</label>
          <InputField icon={Mail} type="email" name="email" placeholder="your@email.com" />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Phone</label>
          <InputField icon={Phone} type="tel" name="phone" placeholder="+91 98765 43210" />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Address</label>
          <InputField icon={Home} type="text" name="address" placeholder="Your Address" />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Subject</label>
          <InputField icon={MapPin} type="text" name="subject" placeholder="Subject of your message" />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Message</label>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 text-gray-400 z-10" size={18} />
            <textarea
              name="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows="4"
              className={`w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none
                ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Your message..."
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1 absolute">{errors.message}</p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300 font-medium"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;