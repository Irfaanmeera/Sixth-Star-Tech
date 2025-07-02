import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'; // Add this import
import {  webdevContactForm  } from '../../lib/api';

const initState = { values: {}, isLoading: false };

const WebdevForm = () => {
  const router = useRouter(); // Add this hook
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    companyname: '',
    companyurl: '',
    type: '',
    tech: '',
    currentwebsite: 'Yes, I need a redesign',
    checkbox: false,
    pageUrl: '',
    
  });
  
  const [state, setState] = useState(initState);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  // Add useEffect to set the page URL when component mounts
  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      pageUrl: window.location.href
    }));
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));

    try {
      await webdevContactForm(formData);
      alert('Form submitted successfully!');
      // Reset both formData and state
      setFormData({
        name: '',
        phone: '',
        companyname: '',
        companyurl: '',
        type: '',
        tech: '',
        currentwebsite: 'Yes, I need a redesign',
        checkbox: false,
        pageUrl: window.location.href
      });
      setState(initState);
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
    <div className="serverForm">
      <form onSubmit={onSubmit}>
      <div className="formField">
          <div className="row">
            <div className="col">
              <label htmlFor="name">Name</label>
              <br/>
              <input
                type="text"
                name="name"
                autoComplete="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder='Enter your name'
                required
              />
            </div>
            <div className="col">
              <label htmlFor='phone'>Phone</label>
              <br/>
              <input
                id="phone"
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder='Enter your phone number'
                required
              />
            </div>
          </div>
        </div>
        <div className="formField">
          <div className="row">
            <div className="col">
              <label htmlFor="companyname">Company name</label>
              <br/>
              <input
                type="text"
                name="companyname"
                autoComplete="name"
                id="companyname"
                value={formData.companyname}
                onChange={handleChange}
                placeholder="Enter your company name"
                required
              />
            </div>
            <div className="col">
              <label htmlFor='companyurl'>Company Url</label>
              <br/>
              <input
                id='companyurl'
                type="url"
                name="companyurl"
                value={formData.companyurl}
                onChange={handleChange}
                placeholder='https://www.example.com'
                required
              />
            </div>
          </div>
        </div>

        <div className="formField">
          <div className="row">
            <div className="col">
              <label htmlFor="type">Type of Website Needed</label>
              <br/>
              <select
                name="type"
                id="type"
                value={formData.type}
                onChange={handleChange}
                required
              >
                <option value="">Select Type of Website</option>
                <option value="Business Website">Business Website</option>
                <option value="E-commerce Website">E-commerce Website</option>
                <option value="Blog or News Website">Blog or News Website</option>
                <option value="Landing Page">Landing Page</option>
                <option value="Portfolio">Portfolio</option>
                <option value="Custom Web Application">Custom Web Application</option>
                <option value="Other">Other</option>
              </select>
              {formData.currentssl === 'other' && (
                <input
                  type="text" 
                  name="othertype"
                  placeholder="Please specify"
                  value={formData.othertype}
                  onChange={handleChange}
                  required
                />
              )}
            </div>
            <div className="col">
              <label htmlFor="tech">Technology Preference</label>
              <br/>
              <select
                name="tech"
                id="tech"
                value={formData.tech}
                onChange={handleChange}
                required
              >
                <option value="">Select Technology Preference</option>
                <option value="Wordpress">Wordpress</option>
                <option value="Shopify">Shopify</option>
                <option value="NExtJS">NExtJS</option>
                <option value="ReactJS">ReactJS</option>
                <option value="Other">Other</option>
              </select>
              {formData.tech === 'other' && (
                <input
                  type="text" 
                  name="othertech"
                  placeholder="Please specify"
                  value={formData.othertech}
                  onChange={handleChange}
                  required
                />
              )}
            </div>
          </div>
        </div>

        <div className="formField">
        <label htmlFor="currentwebsite">Current Website</label>
              <br/>
              <select
                name="currentwebsite"
                id="currentwebsite"
                value={formData.currentwebsite}
                onChange={handleChange}
                required
              >
                <option value="Yes, I need a redesign">Yes, I need a redesign</option>
                <option value="Yes, I need additional features">Yes, I need additional features</option>
                <option value="No, I need a new website">No, I need a new website</option>
              </select>
        </div>
        

        <div className="checkbox">
          <input 
            type="checkbox" 
            name="checkbox" 
            id="checkbox" 
            checked={formData.checkbox}
            onChange={handleChange} 
            required
          />
          <label htmlFor="checkbox">
          I consent to the collection and processing of my personal data for the purpose of responding to my inquiry. I acknowledge that my data will be handled in accordance with your <a href="/about/privacypolicy" target="_blank">Privacy Policy</a>
          </label>
        </div>

        <button className="btn" type="submit" disabled={state.isLoading}>
          {state.isLoading ? 'Sending...' : 'Request a Quote'}
        </button>
      </form>
    </div>
  );
};

export default WebdevForm;
