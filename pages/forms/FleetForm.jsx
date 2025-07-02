import { useState, useEffect } from 'react';
import {  fleetContactForm  } from '../../lib/api';

const initState = { values: {}, isLoading: false };

const FleetForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    companyname: '',
    companyurl: '',
    companyemail: '',
    desg: '',
    otherdesg: '',
    size: '',
    type: '',
    othertype: '',
    features: '',
    otherfeatures: '',
    currentfleet: 'Yes, I want an upgrade',
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
      await fleetContactForm(formData);
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
        size: '',
        type: '',
        othertype: '',
        features: '',
        otherfeatures: '',
        currentfleet: 'Yes, I want an upgrade',
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
                type="number"
                id='phone'
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
                <option value="Fleet Manager">Fleet Manager</option>
                <option value="Operations Manager">Operations Manager</option>
                <option value="Logistics Coordinator">Logistics Coordinator</option>
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
          <label htmlFor='size'>Fleet Size</label>
              <br/>
              <select
                name="size"
                id="size"
                value={formData.size}
                onChange={handleChange}
                placeholder=''
                required
              >
                <option value="">Select Fleet Size</option>
                <option value="1-10 vehicles">1-10 vehicles</option>
                <option value="11-50 vehicles">11-50 vehicles</option>
                <option value="51-100 vehicles">51-100 vehicles</option>
                <option value="100+ vehicles">100+ vehicles</option>
              </select>
            </div>
            <div className="col">
              <label htmlFor="type">Type of Fleet</label>
              <br/>
              <select
                name="type"
                id="type"
                value={formData.type}
                onChange={handleChange}
                placeholder=''
                required
              >
                <option value="">Select Fleet Type</option>
                <option value="Light Commercial Vehicles">Light Commercial Vehicles</option>
                <option value="Heavy Trucks">Heavy Trucks</option>
                <option value="Mixed Fleet">Mixed Fleet</option>
                <option value="Passenger Vehicles">Passenger Vehicles</option>
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
            
          </div>
        </div>
            <div className="formField">
                <div className="row">
                    <div className="col">
                    <label htmlFor="features">Features Needed</label>
              <br/>
              <select
                name="features"
                id="features"
                value={formData.features}
                onChange={handleChange}
                placeholder=''
                required
              >
                <option value="">Select Features</option>
                <option value="GPS Tracking">GPS Tracking</option>
                <option value="Vehicle Maintenance Management">Vehicle Maintenance Management</option>
                <option value="Driver Management">Driver Management</option>
                <option value="Fuel Management">Fuel Management</option>
                <option value="Route Optimization">Route Optimization</option>
                <option value="Inventory Management">Inventory Management</option>
                <option value="Real-time Alerts">Real-time Alerts</option>
                <option value="Reporting & Analytics">Reporting & Analytics</option>
                <option value="Integration with other Software">Integration with other Software</option>
                <option value="Other">Other</option>
              </select>
              {formData.features === 'Other' && (
                <input
                  type="text" 
                  name="otherfeatures"
                  placeholder="Please specify"
                  value={formData.otherfeatures}
                  onChange={handleChange}
                  required
                />
              )}
                    </div>
                    <div className="col">
                    <label htmlFor="currentfleet">Current fleet</label>
              <br/>
              <select
                name="currentfleet"
                id="currentfleet"
                value={formData.currentfleet}
                onChange={handleChange}
                placeholder=''
                required
              >
                <option value="Yes, I want an upgrade">Yes, I want an upgrade</option>
                <option value="No, starting fresh">No, starting fresh</option>
                <option value="Not sure, need advice">Not sure, need advice</option>
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
          {state.isLoading ? 'Sending...' : 'Request Fleet Management Solution'}
        </button>
      </form>
    </div>
  );
};

export default FleetForm;
