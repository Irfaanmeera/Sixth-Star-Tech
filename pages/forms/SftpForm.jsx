import { useState, useEffect } from 'react';
import {  sftpContactForm  } from '../../lib/api';

const initState = { values: {}, isLoading: false };

const SftpForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    companyname: '',
    companyurl: '',
    companyemail: '',
    desg: '',
    otherdesg: '',
    type: '',
    othertype: '',
    storage: '',
    otherstorage: '', 
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
      await sftpContactForm(formData);
      alert('Form submitted successfully!');
      // Reset both formData and state
      setFormData({
        name: '',
        phone: '',
        companyname: '',
        companyurl: '',
        companyemail: '',
        desg: '',
        otherdesg: '',
        type: '',
        othertype: '',
        storage: '',
        otherstorage: '',
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
    <div className="sftpForm">
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
                id='phone'
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
              <label htmlFor='companyname'>Company name</label>
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
                placeholder='Enter your company email'
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
            <label htmlFor='desg'>Your Designation</label>
              <br/>
              <select
                name="desg"
                id="desg"
                value={formData.desg}
                onChange={handleChange}
                placeholder=''
                required
              >
                <option value="">Select Designation</option>
                <option value="IT Administrator">IT Administrator</option>
                <option value="Network Engineer">Network Engineer</option>
                <option value="Email Marketing Manager">Email Marketing Manager</option>
                <option value="Business Owner">Business Owner</option>
                <option value="Other">Other</option>
              </select>
              {formData.desg === 'Other' && (
                <input
                  type="text" 
                  name="otherdesg"
                  placeholder="Please specify"
                  value={formData.otherdesg}
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
          <label htmlFor="type">SFTP Type</label>
              <br/>
              <select
                name="type"
                id="type"
                value={formData.type}
                onChange={handleChange}
                placeholder=''
                required
              >
                <option value="">Select SFTP Type</option>
                <option value="Cloud SFTP">Cloud SFTP</option>
                <option value="Dedicated SFTP">Dedicated SFTP</option>
                <option value="Hybrid SFTP">Hybrid SFTP</option>
                <option value="Other">Other</option>
              </select>
              {formData.type === 'Other' && (
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
            <label htmlFor="storage">Required Storage</label>
              <br/>
              <select
                name="storage"
                id="storage"
                value={formData.storage}
                onChange={handleChange}
                placeholder=''
                required
              >
                <option value="">Select Storage</option>
                <option value="10 GB">10 GB</option>
                <option value="50 GB">50 GB</option>
                <option value="100 GB">100 GB</option>
                <option value="500 GB">500 GB</option>
                <option value="1TB">1TB</option>
                <option value="custom">Custom</option>
              </select>
              {formData.storage === 'custom' && (
                <input
                  type="text" 
                  name="otherstorage"
                  placeholder="Please specify"
                  value={formData.otherstorage}
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
          {state.isLoading ? 'Sending...' : 'Request SfTP Server Solution'}
        </button>
      </form>
    </div>
  );
};

export default SftpForm;
