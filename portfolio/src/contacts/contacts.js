import React, { useState } from 'react';
import Swal from 'sweetalert2';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    if (name && email && message) {
      try {
        const response = await fetch('http://127.0.0.1:5000/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            message,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          // Success alert
          Swal.fire({
            title: 'Message Sent!',
            text: data.message || 'Thank you for contacting me, I will get back to you soon.',
            icon: 'success',
            confirmButtonText: 'OK',
          });

          // Clear the form
          setName('');
          setEmail('');
          setMessage('');
        } else {
          // Error alert
          Swal.fire({
            title: 'Error!',
            text: data.error || 'Something went wrong. Please try again later.',
            icon: 'error',
            confirmButtonText: 'OK',
          });
        }
      } catch (error) {
        // Handle network error
        Swal.fire({
          title: 'Error!',
          text: 'There was an issue with the network. Please try again later.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
    } else {
      // Show validation error
      Swal.fire({
        title: 'Error!',
        text: 'Please fill in all fields.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };

  return (
    <div className="contact p-8 max-w-xl mx-auto bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-center">Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-semibold">Your Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg mt-2"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-semibold">Your Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg mt-2"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-lg font-semibold">Your Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg mt-2"
            placeholder="Enter your message"
            rows="4"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 px-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Send Message
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-lg">Or email me directly at:</p>
        <a
          href="mailto:your-email@example.com"
          className="text-blue-500 underline"
        >
          kuriaderek@gmail.com
        </a>
      </div>
    </div>
  );
}

export default Contact;
