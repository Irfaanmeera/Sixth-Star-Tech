import { useState, useEffect } from 'react';
import {  crmContactForm  } from '../../lib/api';

const initState = { values: {}, isLoading: false };

const CrmForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    companyname: '',
    companyurl: '',
    companyemail: '',
    users: '',
    type: '',
    typeother: '',
    requirement: '',
    deployment: '',
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
      await crmContactForm(formData);
      alert('Form submitted successfully!')
      // Reset all form fields to their initial values
      setFormData({
        name: '',
        phone: '',
        companyname: '',
        companyurl: '',
        companyemail: '',
        users: '',
        type: '',
        typeother: '',
        requirement: '',
        deployment: '',
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
              <label htmlFor="users">Number of Users</label>
              <br/>
              <select
                name="users"
                id="users"
                value={formData.service}
                onChange={handleChange}
                placeholder='How many users will depend on this setup?'
                required
              >
                <option value="">Select number of users</option>
                <option value="1-100 users">1-100 users</option>
                <option value="101-500 users">101-500 users</option>
                <option value="501-1,000 users">501-1,000 users</option>
                <option value="1,000+ users">1,000+ users</option>
              </select>
            </div>
            
          </div>
        </div>
        <div className="formField">
          <div className="row">
          <div className="col">
          <label htmlFor='type'>Industry Type</label>
              <br/>
              <select
                name="type"
                id="type"
                value={formData.type}
                onChange={handleChange}
                placeholder=''
                required
              >
                <option value="">Select Industry Type</option>
                <option value="E-commerce">E-commerce</option>
                <option value="Education">Education</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Real Estate">Real Estate</option>
                <option value="Finance">Finance</option>
                <option value="Other">Other</option>
              </select>
              {formData.type === 'Other' && (
                 <input
                  type="text" 
                  name="typeother"
                  placeholder="Please specify"
                  value={formData.typeother}
                  onChange={handleChange}
                  required={formData.type === 'Other'}
                />
              )}
            </div>
            <div className="col">
              <label htmlFor="requirement">CRM Requirements</label>
              <br/>
              <select
                name="requirement"
                id="requirement"
                value={formData.requirement}
                onChange={handleChange}
                placeholder=''
                required
              >
                <option value="">Select CRM Requirements</option>
                <option value="Contact Management">Contact Management</option>
                <option value="Sales Tracking">Sales Tracking</option>
                <option value="Marketing Automation">Marketing Automation</option>
                <option value="Lead Management">Lead Management</option>
                <option value="Customer Support Management">Customer Support Management</option>
                <option value="Reporting and Analytics">Reporting and Analytics</option>
              </select>
            </div>
            
          </div>
        </div>
            <div className="formField">
                <div className="row">
                    <div className="col">
                    <label htmlFor="deployment">Preferred Deployment</label>
              <br/>
              <select
                name="deployment"
                id="deployment"
                value={formData.deployment}
                onChange={handleChange}
                placeholder=''
                required
              >
                <option value="">Select Preferred Deployment</option>
                <option value="Cloud-based CRM">Cloud-based CRM</option>
                <option value="On-premise CRM">On-premise CRM</option>
                <option value="Hybrid CRM">Hybrid CRM</option>
                <option value="Not sure, need guidance">Not sure, need guidance</option>
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
                <option value="Not sure, need guidance">Not sure, need guidance</option>
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
          {state.isLoading ? 'Sending...' : 'Request CRM Consultation'}
        </button>
      </form>
    </div>
  );
};

export default CrmForm;
