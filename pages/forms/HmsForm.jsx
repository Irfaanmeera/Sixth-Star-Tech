import { useState, useEffect } from 'react';
import {  hmsContactForm  } from '../../lib/api';

const initState = { values: {}, isLoading: false };

const HmsForm = () => {
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
    feature: '',
    otherfeature: '',
    users: '',
    currentsystem: 'Yes, looking for an upgrade',
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
      await hmsContactForm(formData);
      alert('Form submitted successfully!')
      // Reset all form fields to their initial values
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
        feature: '',
        otherfeature: '',
        users: '',
        currentsystem: 'Yes, looking for an upgrade',
        pageUrl: window.location.href,
        checkbox: false,
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
    <div className="fleetForm">
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
              <label htmlFor="desg">Designation</label>
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
                <option value="Hospital Administrator">Hospital Administrator</option>
                <option value="IT Manager">IT Manager</option>
                <option value="Medical Director">Medical Director</option>
                <option value="Chief of Operations">Chief of Operations</option>
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
          <label htmlFor='type'>Hospital Type</label>
              <br/>
              <select
                name="type"
                id="type"
                value={formData.type}
                onChange={handleChange}
                placeholder=''
                required
              >
                <option value="">Select Hospital Type</option>
                <option value="Private Hospital">Private Hospital</option>
                <option value="Public Hospital">Public Hospital</option>
                <option value="Clinic">Clinic</option>
                <option value="Specialized Medical Center">Specialized Medical Center</option>
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
              <label htmlFor="feature">HMS Features Required</label>
              <br/>
              <select
                name="feature"
                id="feature"
                value={formData.feature}
                onChange={handleChange}
                placeholder=''
                required
              >
                <option value="">Select Feature</option>
                <option value="Electronic Medical Records (EMR)">Electronic Medical Records (EMR)</option>
                <option value="Appointment Scheduling">Appointment Scheduling</option>
                <option value="Staff Management">Staff Management</option>
                <option value="Laboratory Management">Laboratory Management</option>
                <option value="Pharmacy Management">Pharmacy Management</option>
                <option value="Billing & Invoicing">Billing & Invoicing</option>
                <option value="Inventory Management">Inventory Management</option>
                <option value="Hospital Workflow Automation">Hospital Workflow Automation</option>
                <option value="Integration with other Healthcare Systems">Integration with other Healthcare Systems</option>
                <option value="Reporting and Analytics">Reporting and Analytics</option>
                <option value="Other">Other</option>
              </select>
              {formData.feature === 'Other' && (
                <input
                  type="text" 
                  name="otherfeature"
                  placeholder="Please specify"
                  value={formData.otherfeature}
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
                    <label htmlFor="users">Number of Users</label>
              <br/>
              <select
                name="users"
                id="users"
                value={formData.users}
                onChange={handleChange}
                placeholder=''
                required
              >
                <option value="">Select Number of Users</option>
                <option value="1-10 users">1-10 users</option>
                <option value="11-50 users">11-50 users</option>
                <option value="51-100 users">51-100 users</option>
                <option value="100+ users">100+ users</option>
              </select>
                    </div>
                    <div className="col">
                    <label htmlFor="currentsystem">Current System (if any)</label>
              <br/>
              <select
                name="currentsystem"
                id="currentsystem"
                value={formData.currentsystem}
                onChange={handleChange}
                placeholder=''
                required
              >
                <option value="Yes, looking for an upgrade">Yes, looking for an upgrade</option>
                <option value="No, starting fresh">No, starting fresh</option>
                <option value="Not sure, need advice">Not sure, need guidance</option>
              </select>
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
          {state.isLoading ? 'Sending...' : 'Request HMS Software'}
        </button>
      </form>
    </div>
  );
};

export default HmsForm;
