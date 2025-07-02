import { useState, useEffect } from 'react';
import {  seoContactForm  } from '../../lib/api';

const initState = { values: {}, isLoading: false };

const SeoForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    companyname: '',
    companyurl: '',
    companyemail: '',
    service: 'Full Package',
    otherservice: '',
    pageUrl: '',
    checkbox: false,
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
      await seoContactForm(formData);
      alert('Form submitted successfully!');
      // Reset both formData and state
      setFormData({
        name: '',
        phone: '',
        companyname: '',
        companyurl: '',
        companyemail: '',
        service: 'Full Package',
        otherservice: '',
        pageUrl: window.location.href,
        checkbox: false
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
                id='companyname'
                type="text"
                name="companyname"
                autoComplete="name"
                value={formData.companyname}
                onChange={handleChange}
                placeholder='Enter your company name'
                required
              />
            </div>
            <div className="col">
              <label htmlFor='companyemail'>Company Email</label>
              <br/>
              <input
              id='companyemail'
                type="email"
                name="companyemail"
                value={formData.companyemail}
                onChange={handleChange}
                placeholder="Enter your company email"
                required
              />
            </div>
          </div>
        </div>

        <div className="formField">
          <div className="row">
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
            <div className="col">
              <label htmlFor="service">Services</label>
              <br/>
              <select
                name="service"
                id="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="Full Package">Full Package</option>
                <option value="Keyword Research">Keyword Research</option>
                <option value="On-Page SEO">On-Page SEO</option>
                <option value="Off-Page SEO">Off-Page SEO</option>
                <option value="Local SEO">Local SEO</option>
                <option value="E-commerce SEO">E-commerce SEO</option>
                <option value="Technical SEO">Technical SEO</option>
                <option value="SEO Audit">SEO Audit</option>
                <option value="Content Marketing">Content Marketing</option>
                <option value="Reporting & Analytics">Reporting & Analytics</option>
                <option value="Other">Other</option>
              </select>
              {formData.service === 'Other' && (
                <input
                  type="text" 
                  name="otherservice"
                  placeholder="Please specify"
                  value={formData.otherservice}
                  onChange={handleChange}
                  required
                />
              )}
            </div>
            
          </div>
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
          {state.isLoading ? 'Sending...' : 'Request SEO Services'}
        </button>
      </form>
    </div>
  );
};

export default SeoForm;
