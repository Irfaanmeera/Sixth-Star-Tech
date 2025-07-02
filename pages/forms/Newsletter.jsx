import { useState } from 'react';
import { NewsletterForm } from '../../lib/api'; // Adjust the import path accordingly

const initState = { values: {}, isLoading: false };

const Newsletter = () => {
  const [formData, setFormData] = useState({
    email: '',
  });

  const [state, setState] = useState(initState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
  
    try {
      const response = await NewsletterForm(formData);
  
      if (!response.success) {
        alert(response.message);
        return; // Stop execution if subscription failed
      }
  
      alert('Form submitted successfully!');
      setFormData({ email: '' });
      setState(initState);
    } finally {
      setState((prev) => ({
        ...prev,
        isLoading: false,
      }));
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="formField">
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            className="px-4 py-2 border rounded-md"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ color: 'white' }}
          />
        </div>

        <button
          className="btn submitbtn ml-2 py-2 bg-blue-600 text-white rounded-md"
          type="submit"
          disabled={state.isLoading}
        >
          {state.isLoading ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
    </div>
  );
};

export default Newsletter;