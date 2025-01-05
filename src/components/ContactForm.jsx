import React, { useRef, useState } from 'react';
import { Mail, MessageSquare, User, Phone, Home, MapPin } from 'lucide-react';

const ContactForm = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const addressRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRef.current.value.trim()) newErrors.name = 'Name required';
    if (!emailRef.current.value.trim()) newErrors.email = 'Email required';
    if (!emailRegex.test(emailRef.current.value)) newErrors.email = 'Invalid email';
    if (!messageRef.current.value.trim()) newErrors.message = 'Message required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const formData = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        phone: phoneRef.current.value,
        address: addressRef.current.value,
        subject: subjectRef.current.value,
        message: messageRef.current.value,
      };

      try {
        const response = await fetch('https://myistay.freewebhostmost.com/add_ToContactForm.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          alert('Thank you for your message! We will contact you soon.');
          
          // Clear form fields
          nameRef.current.value = '';
          emailRef.current.value = '';
          phoneRef.current.value = '';
          addressRef.current.value = '';
          subjectRef.current.value = '';
          messageRef.current.value = '';
          setErrors({});
        } else {
          alert('Failed to submit the form. Please try again later.');
        }
      } catch (error) {
        alert('An error occurred. Please try again.');
      }
    }
  };

  const InputField = ({ icon: Icon, refProp, name, placeholder, type }) => (
    <div className="relative flex flex-col">
      <div className="relative">
        <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10" size={18} />
        <input
          ref={refProp}
          type={type}
          name={name}
          placeholder={placeholder}
          className={`w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500
            ${errors[name] ? 'border-red-500' : 'border-gray-300'}`}
        />
      </div>
      {errors[name] && (
        <p className="text-red-500 text-sm mt-1 absolute top-full left-0">{errors[name]}</p>
      )}
    </div>
  );

  return (
    <div className="max-w-xl mx-auto my-8 p-6 bg-white shadow-xl rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Contact Us</h2>
      <p className="text-center text-gray-600 mb-8">
        We'd love to hear from you. Send us a message and we'll respond as soon as possible.
      </p>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label className="block text-gray-700 mb-2">Name</label>
          <InputField icon={User} refProp={nameRef} name="name" placeholder="Your Name" type="text" />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Email</label>
          <InputField icon={Mail} refProp={emailRef} name="email" placeholder="your@email.com" type="email" />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Phone</label>
          <InputField icon={Phone} refProp={phoneRef} name="phone" placeholder="+91 98765 43210" type="tel" />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Address</label>
          <InputField icon={Home} refProp={addressRef} name="address" placeholder="Your Address" type="text" />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Subject</label>
          <InputField icon={MapPin} refProp={subjectRef} name="subject" placeholder="Subject of your message" type="text" />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Message</label>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 text-gray-400 z-10" size={18} />
            <textarea
              ref={messageRef}
              name="message"
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
