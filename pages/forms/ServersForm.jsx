import { useState, useEffect } from 'react';
import { ServersContactForm } from '../../lib/api'; // Adjust the import path accordingly
import { useRouter } from 'next/router'; // Add this import

const initState = { values: {}, isLoading: false }; // Initialize values properly

const ServersForm = () => {
  const router = useRouter(); // Add this hook
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    companySize: '',
    ram: '',
    os: '',
    storage: '',
    core: '',
    sla: 'fully managed',
    controlpanel: 'CPanel',
    checkbox: false,
    pageUrl: '', // Add this field
  });
  
  const [state, setState] = useState(initState); // Initialize the state

  // Add useEffect to set the page URL when component mounts
  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      pageUrl: window.location.href
    }));
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));

    try {
      await ServersContactForm(formData);
      alert('Form submitted successfully!');
      // Reset both formData and state
      setFormData({
        name: '',
        phone: '',
        email: '',
        company: '',
        companySize: '',
        ram: '',
        os: '',
        storage: '',
        core: '',
        sla: 'fully managed',
        controlpanel: 'CPanel',
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
      <form onSubmit={onSubmit}> {/* Changed to onSubmit */}
        <div className="formField">
          <div className="row">
            <div className="col"><label htmlFor="name">
            Name
          </label>
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
          /></div>
          <div className="col"><label htmlFor='phone'>
            Phone
          </label>
          <br/>
          <input
          id='phone'
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          /></div>
          </div>
          
        </div>

        <div className="formField">
          <div className="row">
            <div className="col">
            <label htmlFor="email">
            Company Email
          </label>
          <br/>
          <input
            type="email"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your company email"
            required
          />
            </div>
            <div className="col">
            <label htmlFor="company">
            Company Name
          </label>
          <br/>
          <input
            type="text"
            name="company"
            id="company"
            placeholder="Enter your company name"
            value={formData.company}
            onChange={handleChange}
            required
          />
            </div>
          </div>
          
        </div>


        <div className="formField">
          <div className="row">
            <div className="col">
            <label htmlFor="companySize">
            Company size
          </label>
          <br/>
          <select
            name="companySize"
            id="companySize"
            value={formData.companySize}
            onChange={handleChange}
            required
          >
            <option value="">Select company size</option>
            <option value="50-100">50-100</option>
            <option value="101-200">101-200</option>
            <option value="201-500">201-500</option>
            <option value="500+">500+</option>
          </select>
            </div>
            <div className="col">
            <label htmlFor="ram-select">
            Ram
          </label>
          <br/>
          <select
            name="ram"
            id="ram-select"
            value={formData.ram}
            onChange={handleChange}
            required
          >
            <option value="">Select RAM</option>
            {/* List of countries */}
            <option value="8">8</option>
            <option value="16">16</option>
            <option value="32">32</option>
            <option value="64">64</option>
            <option value="128">128</option>
            <option value="flexible">flexible</option>
            {/* Add other countries here */}
          </select>
            </div>
          </div>
          
        </div>
        <div className="formField">
          <div className="row">
            <div className="col">
            <label htmlFor="os">
            Os
          </label>
          <br/>
          <select
            name="os"
            id="os"
            value={formData.os}
            onChange={handleChange}
            required
          >
            {/* List of os */}
            <option value="">Select OS</option>
            <option value="linux">Linux</option>
            <option value="windows">Windows</option>
            
          </select>
            </div>
            <div className="col">
            <label htmlFor="storage">
            Storage ( TB)
          </label>
          <br/>
          <select
            name="storage"
            id="storage"
            value={formData.storage}
            onChange={handleChange}
            required
          >
            <option value="">Select Storage</option>
            {/* List of storage */}
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="4">4</option>
            <option value="flexible">flexible</option>
           
          </select>
            </div>
          </div>
          
        </div>
        <div className="formField">
          <div className="row">
            <div className="col">
            <label htmlFor="core">
            Core
          </label>
          <br/>
          <select
            name="core"
            id="core"
            value={formData.core}
            onChange={handleChange}
            required
          >
            <option value="">Select core</option>
            {/* List of core */}
            <option value="2">2</option>
            <option value="4">4</option>
            <option value="8">8</option>
            <option value="16">16</option>
            <option value="flexible">flexible</option>
            
          </select>
            </div>
            <div className="col">
            <label htmlFor="sla">
            SLA
          </label>
          <br/>
          <select
            name="sla"
            id="sla"
            value={formData.sla}
            onChange={handleChange}
            required
          >
            {/* List of storage */}
            <option value="fully managed">fully managed</option>
            <option value="Self Managed">Self Managed</option>
          </select>
            </div>
          </div>
          
        </div>
        <div className="formField">
        <label htmlFor="controlpanel">
        Control Panel
          </label>
          <br/>
          <select
            name="controlpanel"
            id="controlpanel"
            value={formData.controlpanel}
            onChange={handleChange}
            required
          >
            {/* List of core */}
            <option value="CPanel">CPanel</option>
            <option value="WHM">WHM</option>
            <option value="CWP">CWP</option>
            <option value="Plesk">Plesk</option>
            
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
          {state.isLoading ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  );
};

export default ServersForm;
