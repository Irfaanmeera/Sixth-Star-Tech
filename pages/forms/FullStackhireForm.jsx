// components/FullStackhireForm.jsx
'use client'

import { useState } from 'react';
import { fullstackHireForm } from '../../lib/api';

const FullStackhireForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectDescription: ''
  });
  
  const [state, setState] = useState({
    isLoading: false,
    error: null,
    success: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setState({
      isLoading: true,
      error: null,
      success: false
    });

    try {
      await fullstackHireForm(formData);
      setState({
        isLoading: false,
        error: null,
        success: true
      });
      setFormData({
        name: '',
        phone: '',
        email: '',
        projectDescription: ''
      });
    } catch (error) {
      setState({
        isLoading: false,
        error: error.message,
        success: false
      });
    }
  };

  return (
    <div className="fullstackhireform">
      <div className='head'>
        <h4>Hire Our Full-stack Developers</h4>
      </div>

      {state.error && (
        <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">
          {state.error}
        </div>
      )}

      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="col">
            <div className="formField">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                autoComplete="name"
                id="name"
                placeholder="Your Name"
                value={formData.name}
                className="border border-gray-300 rounded-4xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col">
            <div className="formField">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Your Phone"
                value={formData.phone}
                className="border border-gray-300 rounded-4xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        <div className="formField">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            placeholder="Your Email"
            value={formData.email}
            className="border border-gray-300 rounded-4xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
            required
          />
        </div>

        <div className="formField">
          <label htmlFor="projectDescription">Project Description</label>
          <textarea
            name="projectDescription"
            id="projectDescription"
            value={formData.projectDescription}
            className="border border-gray-300 rounded-4xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Project Description"
            onChange={handleChange}
          />
        </div>

        <button 
          className="btn submitbtn" 
          type="submit" 
          disabled={state.isLoading}
        >
          {state.isLoading ? 'Sending...' : 'Send'}
        </button>
        {state.success && (
        <div className="mb-4 p-4 bg-green-100 text-green-700 rounded">
          Thank you! Your request has been submitted successfully.
        </div>
      )}
      </form>
    </div>
  );
};

export default FullStackhireForm;