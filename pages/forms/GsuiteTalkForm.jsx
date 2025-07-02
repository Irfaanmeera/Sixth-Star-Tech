import { useState } from 'react';
import { gsuitetalkContactForm } from '../../lib/api'; // Adjust the import path accordingly

const initState = { isLoading: false }; // Simplified initialization state

const GsuiteTalkForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    country: 'India', // Default value set to India
    email: '',
    company: '',
    message: '',
  });

  const [state, setState] = useState(initState); // Manage loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setState({ isLoading: true });

    try {
      await gsuitetalkContactForm(formData); // Submit the form data
      alert('Form submitted successfully!');

      // Reset form after successful submission
      setFormData({
        name: '',
        phone: '',
        country: 'India', // Retain default value
        email: '',
        company: '',
        message: '',
      });

      setState(initState); // Reset loading state
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Failed to submit form. Please try again later.');
    } finally {
      setState({ isLoading: false });
    }
  };

  return (
    <div className='gsuiteForm'>
    <form onSubmit={onSubmit}>
      <div className="formField">
        <input
          id='name'
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />
      </div>

      <div className="formField">
        <input
          id='phone'
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
          required
        />
      </div>

      <div className="formField">
        <input
          id='email'
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />
      </div>

      <button type="submit" disabled={state.isLoading}>
        {state.isLoading ? 'Sending...' : 'Send'}
      </button>
    </form>
    </div>
  );
};

export default GsuiteTalkForm;