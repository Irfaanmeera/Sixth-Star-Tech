import React from "react";
import { useState, useEffect } from 'react';
import { HomeContactForm } from "../../lib/api";

const initState = {
  isLoading: false
};

export default function SixthstarContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pageUrl: '',
    service: '',
    consent: false
  });
    
  const [state, setState] = useState(initState);
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };
  
  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      pageUrl: window.location.href
    }));
  }, []);
  
  const onSubmit = async (event) => {
    event.preventDefault();
    setState({ isLoading: true });

    try {
      await HomeContactForm(formData);
      alert('Form submitted successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        pageUrl: window.location.href,
        service: '',
        consent: false
      });
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Failed to submit form. Please try again later.');
    } finally {
      setState({ isLoading: false });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-6 py-12">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            It's time to build <br /> something exciting!
          </h1>
          <p className="text-gray-300 mb-8 max-w-md">
            We never fail to hear your queries at any cause. You can call us or email and can fix meetings to get your things done very quickly.
          </p>

          <div className="mt-10">
            <div className="flex items-center mb-4">
              <span className="text-yellow-400 text-xl">★★★★★</span>
            </div>
            <p className="text-gray-200 mb-4 max-w-md">
              They process in a unique way to create the ideal. Easily adaptable and innovative development team makes them the best.
            </p>
            <div className="flex items-center mt-4">
              <img
                src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1747310481/Untitled_design_16_c7mbjt.png"
                alt="Naveen"
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <p className="font-semibold">Naveen</p>
                <p className="text-sm text-gray-400">Schwing Stetter India</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white text-black p-8 rounded-3xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">Get a quote</h2>
          <p className="text-gray-600 mb-6">
            Though we branch out at various geographical regions we never break down in providing our vast IT services.
          </p>

          <form className="space-y-4" onSubmit={onSubmit}>
            <div>
              <label className="block text-sm font-medium mb-1">Your name</label>
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}             
                placeholder="Enter your full name"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email address</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                required
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone number</label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                type="tel"
                placeholder="Enter your phone number"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Select service</label>
              <select 
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full border bg-white border-gray-300 rounded-md px-4 py-2 text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="" className="text-gray-800">Choose a service</option>
                <option value="Domains" className="text-gray-800">Domains</option>
                <option value="Servers" className="text-gray-800">Servers</option>
                <option value="Mail Services" className="text-gray-800">Mail Services</option>
                <option value="SSL Certificate" className="text-gray-800">SSL Certificate</option>
                <option value="Spam Filters" className="text-gray-800">Spam Filters</option>
                <option value="SFTP" className="text-gray-800">SFTP</option>
                <option value="Data Center" className="text-gray-800">Data Center</option>
                <option value="Web Development" className="text-gray-800">Web Development</option>
                <option value="Mobile App Development" className="text-gray-800">Mobile App Development</option>
                <option value="SEO" className="text-gray-800">SEO</option>
                <option value="High Availability" className="text-gray-800">High Availability</option>
              </select>
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="consent-checkbox"
                  name="consent"
                  type="checkbox"
                  checked={formData.consent}
                  onChange={handleChange}
                  required
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-orange-300"
                />
              </div>
              <label htmlFor="consent-checkbox" className="ml-2 text-sm text-gray-600">
                I consent to the collection and processing of my personal data for the purpose of responding to my inquiry. I acknowledge that my data will be handled in accordance with your <a href="/about/privacypolicy" target="_blank" className="text-orange-500 hover:underline">Privacy Policy</a>
              </label>
            </div>
            <button
              type="submit" 
              disabled={state.isLoading || !formData.consent}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {state.isLoading ? 'Sending...' : 'Get a Quote'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}