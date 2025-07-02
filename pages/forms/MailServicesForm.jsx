import { useState, useEffect } from 'react';
import { MailServicesContactForm } from '../../lib/api';
import { useRouter } from 'next/router'; // Add this import

const initState = { values: {}, isLoading: false };

const MailServicesForm = () => {
  const router = useRouter(); // Add this hook

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    url: '',
    desg: '',
    otherDesg: '',
    companySize: '',
    ram: '',
    os: '',
    storage: '',
    checkbox: false,
    currentEmail: '',
    othercurrentEmail: '',
    emailopt: '',
    preferredContact: '',
    pageUrl: '', // Add this field
  });
  
  const [state, setState] = useState(initState);
  
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
      await MailServicesContactForm(formData);
      alert('Form submitted successfully!')
      // Reset form data first
      setFormData({
        name: '',
        phone: '',
        email: '',
        company: '',
        url: '',
        desg: '',
        otherDesg: '',
        companySize: '',
        ram: '',
        os: '',
        storage: '',
        checkbox: false,
        currentEmail: '',
        othercurrentEmail: '',
        emailopt: '',
        preferredContact: '',
        pageUrl: window.location.href,
      });
      // Then reset state after a small delay
      setTimeout(() => {
        setState(initState);
      }, 100);
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
                id="name"
                type="text"
                name="name"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                placeholder='Enter your name'
                required
              />
            </div>
            <div className="col">
              <label htmlFor="phone">Phone</label>
              <br/>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder='Enter your phone number'
              />
            </div>
          </div>
        </div>

        <div className="formField">
          <div className="row">
            <div className="col">
              <label htmlFor="email">Company Email</label>
              <br/>
              <input
                id="email"
                type="email"
                name="email"
                autoComplete="email"
                value={formData.email}  
                onChange={handleChange}
                required
                placeholder='Enter your company email'
              />
            </div>
            <div className="col">
              <label htmlFor="company">Company Name</label>
              <br/>
              <input
                type="text"
                name="company"
                id="company"
                value={formData.company}
                onChange={handleChange}
                placeholder='Enter your company name'
              />
            </div>
          </div>
        </div>

        <div className="formField">
          <div className="row">
            <div className="col">
              <label htmlFor="url">Company url</label>
              <br/>
              <input
                id="url"
                type="url"
                name="url"
                autoComplete="url"
                value={formData.url}
                onChange={handleChange}
                placeholder='https://www.example.com'
                required
              />
            </div>
            <div className="col">
              <label htmlFor="cont">Designation</label>
              <br/>
              <select
                name="desg"
                id="cont"
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
              <label htmlFor="currentEmail">Current email Services</label>
              <br/>
              <select
                name="currentEmail"
                id="currentEmail"
                value={formData.currentEmail}
                onChange={handleChange}
                required
              >
                <option value="">Select Your Current Email</option>
                <option value="Gmail">Gmail</option>
                <option value="Yahoo Mail">Yahoo Mail</option>
                <option value="Outlook">Outlook</option>
                <option value="Zoho Mail">Zoho Mail</option>
                <option value="ProtonMail">ProtonMail</option>
                <option value="Rediffmail">Rediffmail</option>
                <option value="Other">Other</option>
              </select>
              {formData.currentEmail === 'other' && (
                <input
                  type="text" 
                  name="othercurrentEmail"
                  placeholder="Please specify"
                  value={formData.othercurrentEmail}
                  onChange={handleChange}
                  maxLength={15}
                  required
                />
              )}
            </div>
            <div className="col">
              <label htmlFor="emailopt">Email services gonna opt</label>
              <br/>
              <select

                name="emailopt"
                id="emailopt"
                value={formData.emailopt}
                onChange={handleChange}
                required
              >
                <option value="">Select Email Service</option>
                <option value="zimbra">Zimbra</option>
                <option value="carbonio">Carbonio</option>
                <option value="google">Google</option>
                <option value="microsoft outlook">Microsoft Outlook</option>
              </select>
            </div>
          </div>
        </div>

        <div className="formField">
          <div className="row">
            <div className="col">
              <label htmlFor="companySize">Company size</label>
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
              <label htmlFor="ram-select">Ram</label>
              <br/>
              <select
                name="ram"
                id="ram-select"
                value={formData.ram}
                onChange={handleChange}
                required
              >
                <option value="">Select Ram</option>
                <option value="8">8</option>
                <option value="16">16</option>
                <option value="32">32</option>
                <option value="64">64</option>
                <option value="128">128</option>
                <option value="flexible">flexible</option>
              </select>
            </div>
          </div>
        </div>

        <div className="formField">
          <div className="row">
            <div className="col">
              <label htmlFor="os">Os</label>
              <br/>
              <select
                name="os"
                id="os"
                value={formData.os}
                onChange={handleChange}
                required
              >
                <option value="">Select OS</option>
                <option value="linux">Linux</option>
                <option value="windows">Windows</option>
              </select>
            </div>
            <div className="col">
              <label htmlFor="storage">Storage ( TB)</label>
              <br/>
              <select
                name="storage"
                id="storage"
                value={formData.storage}
                onChange={handleChange}
                required
              >
                <option value="">Select Storage</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="4">4</option>
                <option value="flexible">flexible</option>
              </select>
            </div>
          </div>
        </div>

        <div className="formField">
          <label htmlFor='preferredContact'>Preferred Contact Method</label>
          <div className="radio-group">
            <div className="radio-group-item">
            <label htmlFor="preferredContact">Email</label>
            <input
              type="radio"
              id="preferredContact"
              name="preferredContact"
              value="Email"
              checked={formData.preferredContact === 'Email'}
              onChange={handleChange}
              required
            />
            </div>
            <div className="radio-group-item"> 
            <label htmlFor="preferredContact">Phone</label>
                <input
              type="radio"
              id="preferredContact"
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
          {state.isLoading ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  );
};

export default MailServicesForm;
