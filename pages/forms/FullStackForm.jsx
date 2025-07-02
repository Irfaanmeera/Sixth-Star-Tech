// components/FullStackForm.jsx
'use client'

import { useState } from "react";
import { fullstackForm } from "../../lib/api";

const FullStackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    services: [],
  });

  const [state, setState] = useState({
    isLoading: false,
    error: null,
    success: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        services: checked
          ? [...prev.services, value]
          : prev.services.filter((s) => s !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState({ isLoading: true, error: null, success: false });
    
    try {
      await fullstackForm(formData);
      setState({ isLoading: false, error: null, success: true });
      setFormData({
        name: "",
        email: "",
        phone: "",
        services: [],
      });
    } catch (error) {
      setState({ isLoading: false, error: error.message, success: false });
    }
  };

  const serviceOptions = [
    "Full Stack", "PHP", "Node JS", 
    "MongoDB", "Python", "Laravel", 
    "Lamp Tech", "angular", "ionic", 
    "react", "Wordpress", "Custom API"
  ];

  return (
    <form
  onSubmit={handleSubmit}
  className="w-full full-stack-form mx-auto p-6 bg-white rounded-lg shadow-lg"
>
  
      <h2 className="text-2xl font-semibold mb-2">Let's level up your brand, together</h2>

      {state.error && (
        <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">
          {state.error}
        </div>
      )}

      <div className="mb-1 text-left">
        <label className="block font-medium text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-2 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Your Name"
        />
      </div>

      <div className="mb-1 text-left">
        <label className="block font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-2 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Your@email.com"
        />
      </div>

      <div className="mb-1 text-left">
        <label className="block font-medium text-gray-700">Phone</label>
        <input
          type="tel"
          name="phone"
          placeholder="+91"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-2 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-1 text-left">
        <label className="block font-medium text-gray-700">Services</label>
        <div className="grid grid-cols-3 ">
          {serviceOptions.map((service) => (
            <label key={service} className="flex items-center text-gray-800 text-sm">
              <input
                type="checkbox"
                name="services"
                value={service}
                checked={formData.services.includes(service)}
                onChange={handleChange}
                className="h-3 w-3 checkbox text-blue-600"
              />
              <span className="ml-2 service">{service}</span>
            </label>
          ))}
        </div>
      </div>

      <button
        type="submit"
        disabled={state.isLoading}
        className="w-full text-sm bg-blue-600 mt-3 text-white py-2 rounded hover:bg-blue-700 transition duration-300 disabled:bg-blue-400"
      >
        {state.isLoading ? 'Submitting...' : 'Get Started'}
      </button>

      {state.success && (
        <div className="m-4 p-4 bg-green-100 text-green-700 rounded">
          Thank you! Your request has been submitted successfully.
        </div>
      )}
    </form>
  );
};

export default FullStackForm;