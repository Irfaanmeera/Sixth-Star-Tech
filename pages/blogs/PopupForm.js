import React, { useState } from "react";
import { PopupcontactForm } from '../../lib/api'; // Adjust the import path accordingly

const initState = { values: {}, isLoading: false };

const PopupForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [state, setState] = useState(initState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));

    try {
      await PopupcontactForm(formData);
      alert('Form submitted successfully!');
      // Reset both formData and state
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setState(initState);
      onClose(); // Close the popup after successful submission
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Failed to submit form. Please try again later.');
    } finally {
      setState((prev) => ({
        ...prev,
        isLoading: false,
      }));
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center blog-popup">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-600 hover:text-red-500 text-lg"
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full mb-3 px-4 py-2 border border-gray-300 rounded"
            name="name"
            id="form-starts"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full mb-3 px-4 py-2 border border-gray-300 rounded"
            name="email"
            id="form-starts"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            placeholder="Your Message"
            className="w-full mb-3 px-4 py-2 border border-gray-300 rounded"
            name="message"
            id="form-starts"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            disabled={state.isLoading}
          >
            {state.isLoading ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
