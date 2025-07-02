import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'; // Add this import
import { SpamFIlterContactForm } from '../../lib/api'; // Adjust the import path accordingly

const initState = { values: {}, isLoading: false }; // Initialize values properly

const SpamFIlterForm = () => {
  const router = useRouter(); // Add this hook
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    url: '',
    currentEmail: '',
    othercurrentEmail: '',
    spamfilter: '',
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
    const { name, type, checked, value } = e.target;
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
      await SpamFIlterContactForm(formData);
      alert('Form submitted successfully!');
      // Reset form data first
      setFormData({
        name: '',
        phone: '',
        email: '',
        company: '',
        url: '',
        currentEmail: '',
        othercurrentEmail: '',
        spamfilter: '',
        checkbox: false,
        pageUrl: window.location.href
      });
      // Reset state after a small delay
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
            placeholder="Enter your name"
            required
          /></div>
          <div className="col"><label htmlFor='phone'>
            Phone
          </label>
          <br/>
          <input
            id="phone"
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
            id="email"
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
            placeholder="Company Name"
            value={formData.company}
            onChange={handleChange}
          />
            </div>
          </div>
          
        </div>


        <div className="formField">
          <div className="row">
            <div className="col">
            <label htmlFor="url">
            Company url
          </label>
          <br/>
          <input
            type="text"
            name="url"
            id="url"
            placeholder="Enter your company url"
            value={formData.url}
            onChange={handleChange}
          />
            </div>
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
              {formData.currentEmail.toLowerCase() === 'other' && (
                <input
                  type="text" 
                  name="othercurrentEmail"
                  placeholder="Please specify"
                  value={formData.othercurrentEmail}
                  onChange={handleChange}
                  required
                />
              )}
            </div>
          </div>
          
        </div>
        <div className="formField">
            <label htmlFor="spamfilter">Currently using Spam filter</label>
            <input type="text"
            id="spamfilter"
            name="spamfilter"
            placeholder="spamfilter"
            value={formData.spamfilter}
            onChange={handleChange}
            required  />
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

export default SpamFIlterForm;
