import { useState } from 'react';
import { officetalkContactForm } from '../../lib/api'; // Adjust the import path accordingly

const initState = { values: {}, isLoading: false }; // Initialize values properly

const Office365TalkForm = () => {
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
      await officetalkContactForm(formData);
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
    <div className="gsuiteForm">
    <form onSubmit={onSubmit}>
      <div className="formField">
      <input
          type="text"
          name="name"
          autoComplete="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder='Name'
        />
        </div>

        <div className="formField">
      <input
          id='phone'
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
          id='email'
          type="email"
          name="email"
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder='Email'
        />
      </div>
      <button className="btn" type="submit" disabled={state.isLoading}>
          {state.isLoading ? 'Sending...' : 'Send'}
        </button>
    </form>
    </div>
  );
};

export default Office365TalkForm;
