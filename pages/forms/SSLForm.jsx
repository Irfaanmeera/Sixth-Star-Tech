import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'; // Add this import
import {  sslContactForm  } from '../../lib/api';

const initState = { values: {}, isLoading: false };

const SSLForm = () => {
  const router = useRouter(); // Add this hook
  const [formData, setFormData] = useState({
    companyname: '',
    companyurl: '',
    domainname: '',
    desg: '',
    otherDesg: '',
    currentssl: '',
    othercurrentssl: '',
    sslopt: '',
    othersslopt: '',
    preferredContact: '',
    checkbox: false,
    pageUrl: '', // Add this field
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
      await sslContactForm(formData);
      alert('Form submitted successfully!');
      // Reset both formData and state
      setFormData({
        companyname: '',
        companyurl: '',
        domainname: '',
        desg: '',
        otherDesg: '',
        currentssl: '',
        othercurrentssl: '',
        sslopt: '',
        othersslopt: '',
        preferredContact: '',
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
              <label htmlFor="companyname">Company name</label>
              <br/>
              <input
                type="text"
                name="companyname"
                autoComplete="name"
                id="companyname"
                value={formData.companyname}
                placeholder="Enter your company name"
                onChange={handleChange}
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
              <label htmlFor="domainname">Domain name</label>
              <br/>
              <input
                id='domainname'
                type="url"
                name="domainname"
                autoComplete="domainname"
                value={formData.domainname}
                onChange={handleChange}
                placeholder='https://www.example.com'
                required
              />
            </div>
            <div className="col">
            <label htmlFor="desg">Designation</label>
              <br/>
              <select
                name="desg"
                id="desg"
                value={formData.desg}
                onChange={handleChange}
                required
              >
                <option value="">Select Designation</option>
                <option value="CEO/Founder">CEO/Founder</option>
                <option value="Manager">Manager</option>
                <option value="Executive">Executive</option>
                <option value="Team Lead">Team Lead</option>
                <option value="It admin">It admin</option>
                <option value="other">Other</option>
              </select>
              {formData.desg === 'other' && (
                <input
                  type="text" 
                  name="otherDesg"
                  placeholder="Please specify"
                  value={formData.otherDesg}
                  onChange={handleChange}
                  required
                />
              )}
            </div>
          </div>
        </div>

        <div className="formField">
          <div className="row">
            <div className="col">
              <label htmlFor="currentssl">Current SSL Provider</label>
              <br/>
              <select
                name="currentssl"
                id="currentssl"
                value={formData.currentssl}
                onChange={handleChange}
                required
              >
                <option value="">Select Your Current SSL Provider</option>
                <option value="DigiCert">DigiCert</option>
                <option value="GoDaddy">GoDaddy</option>
                <option value="GlobalSign">GlobalSign</option>
                <option value="Sectigo">Sectigo</option>
                <option value="RapidSSL">Let's Encrypt</option>
                <option value="Other">Other</option>
              </select>
              {formData.currentssl === 'other' && (
                <input
                  type="text" 
                  name="othercurrentssl"
                  placeholder="Please specify"
                  value={formData.othercurrentssl}
                  onChange={handleChange}
                  required
                />
              )}
            </div>
            <div className="col">
              <label htmlFor="sslopt">Purpose of SSL Certificate</label>
              <br/>
              <select
                name="sslopt"
                id="sslopt"
                value={formData.sslopt}
                onChange={handleChange}
                required
              >
                <option value="">Select Purpose</option>
                <option value="Website Security">Website Security</option>
                <option value="Data Encryption">Data Encryption</option>
                <option value="E-commerce Transactions">E-commerce Transactions</option>
                <option value="Authentication">Authentication</option>
                <option value="SEO/Google Ranking">SEO/Google Ranking</option>
                <option value="Other">Other</option>
              </select>
              {formData.sslopt === 'other' && (
                <input
                  type="text" 
                  name="othersslopt"
                  placeholder="Please specify"
                  value={formData.othersslopt}
                  onChange={handleChange}
                  required
                />
              )}
            </div>
          </div>
        </div>


        <div className="formField">
          <label htmlFor='preferredContact'>Preferred Contact Method</label>
          <div className="radio-group">
            <div className="radio-group-item">
            <label htmlFor="email-contact">Email</label>
            <input
              type="radio"
              id="email-contact"
              name="preferredContact"
              value="Email"
              checked={formData.preferredContact === 'Email'}
              onChange={handleChange}
              required
            />
            </div>
            <div className="radio-group-item"> 
            <label htmlFor="phone-contact">Phone</label>
                <input
              type="radio"
              id="phone-contact"
              name="preferredContact"
              value="Phone"
              checked={formData.preferredContact === 'Phone'}
              onChange={handleChange}
              required
            />
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
          {state.isLoading ? 'Sending...' : 'Get SSL Assistance'}
        </button>
      </form>
    </div>
  );
};

export default SSLForm;
