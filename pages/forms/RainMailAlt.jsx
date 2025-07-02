import { useState } from 'react';
import { rainmailAltContactForm } from '../../lib/api'; // Adjust the import path accordingly

const initState = { values: {}, isLoading: false }; // Initialize values properly

const RainMailAlt = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    country: 'India', // Default value set to India
    email: '',
    company: '',
    message: ''
  });
  
  const [state, setState] = useState(initState); // Initialize the state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));

    try {
      await rainmailAltContactForm(formData);
      alert('Form submitted successfully!');
      // Reset both formData and state
      setFormData({
        name: '',
        phone: '',
        country: 'India',
        email: '',
        company: '',
        message: ''
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
    <div className="rainmail-alt-form">
      <form onSubmit={onSubmit}> {/* Changed to onSubmit */}
        <div className="formField">
          <label htmlFor="name">
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
            required
          />
        </div>

        <div className="formField">
          <label htmlFor='phone'>
            Phone
          </label>
          <br/>
          <input
            id='phone'
            type="tel"
            name="phone"
            placeholder=""
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="formField">
          <label htmlFor="cont">
            Choose Your Country
          </label>
          <br/>
          <select
            name="country"
            id="cont"
            value={formData.country}
            onChange={handleChange}
            required
          >
            {/* List of countries */}
            <option value="India">India</option>
            <option value="Argentina">Argentina</option>
            <option value="Australia">Australia</option>
            {/* Add other countries here */}
          </select>
        </div>

        <div className="formField">
          <label htmlFor="email">
            Your Email
          </label>
          <br/>
          <input
            id="email"
            type="email"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="formField">
          <label htmlFor="company">
            Company Name
          </label>
          <br/>
          <input
            type="text"
            name="company"
            id="company"
            placeholder=""
            value={formData.company}
            onChange={handleChange}
          />
        </div>

        <div className="formField">
          <label htmlFor="message">
            Your Message
          </label>
          <br/>
          <textarea
            id='message'
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button className="btn" type="submit" disabled={state.isLoading}>
          {state.isLoading ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  );
};

export default RainMailAlt;
