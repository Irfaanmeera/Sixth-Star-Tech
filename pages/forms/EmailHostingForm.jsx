import { useState } from 'react';
import { EmailHostingContactForm } from '../../lib/api'; // Adjust the import path accordingly

const initState = { values: {}, isLoading: false }; // Initialize values properly

const EmailHostingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
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
      await EmailHostingContactForm(formData);
      alert('Form submitted successfully!')
      // Reset both formData and state
      setFormData({
        name: '',
        phone: '',
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
    <div className="emailhostingform">
      <form onSubmit={onSubmit}> {/* Changed to onSubmit */}
        <div className="formField">
          <input
            type="text"
            name="name"
            autoComplete="name"
            id="dedicated-form-start"
            placeholder='Name'
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="formField">
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formField">
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="formField">
          <input
            type="text"
            name="company"
            id="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleChange}
          />
        </div>

        <div className="formField">
          <textarea
            name="message"
            value={formData.message}
            placeholder='Your Message'
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

export default EmailHostingForm;
