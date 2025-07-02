import { useState } from 'react';
import { carrerContactForm } from '../../lib/api'; // Adjust the import path accordingly

const initState = { values: {}, isLoading: false }; // Initialize values properly

const CarrerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    position: '—Please choose an option—', // Default value
    email: '',
    message: '',
    cv: null
  });

  const [state, setState] = useState(initState); // Initialize the state

  // Handle changes for text inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      cv: file // Update the state with the selected file
    });
  };

  // Handle form submission
  const onSubmit = async (event) => {
    event.preventDefault();
    
    // Early validation
    if (state.isLoading) return;
    
    setState((prev) => ({
      ...prev,
      isLoading: true,
      error: null
    }));
  
    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach((key) => {
        if (formData[key]) {
          formDataToSend.append(key, formData[key]);
        }
      });
  
      const result = await carrerContactForm(formDataToSend);
      
      if (result && result.message) {
        alert(result.message);
      } else {
        alert("Form submitted successfully!");
      }
      
      // Reset form on success
      setFormData({
        name: '',
        phone: '',
        position: '—Please choose an option—',
        email: '',
        message: '',
        cv: null
      });
    } catch (error) {
      // Handle known error cases
      if (error.message) {
        alert(error.message);
      } else {
        alert('An unexpected error occurred. Please try again.');
      }
      
      // For duplicate applications, keep the form data except the file
      if (error.status !== 400) {
        setFormData(prev => ({
          ...prev,
          cv: null
        }));
      }
    } finally {
      setState((prev) => ({
        ...prev,
        isLoading: false
      }));
    }
  };

  return (
    <div className="serverForm">
      <form onSubmit={onSubmit}>
        <div className="formField">
          <label htmlFor="name">Name</label>
          <br/>
          <input
            type="text"
            name="name"
            autoComplete="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Your Name"
            required
          />
        </div>

        <div className="formField">
          <label htmlFor='phone'>Phone</label>
          <br/>
          <input
            id='phone'
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter Your Phone Number"
            required
          />
        </div>

        <div className="formField">
          <label htmlFor="email">Your Email</label>
          <br/>
          <input
            id="email"
            type="email"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Your Email"
            required
          />
        </div>

        <div className="formField">
          <label htmlFor="position">Applying Position</label>
          <br/>
          <select
            name="position"
            id="position"
            value={formData.position}
            onChange={handleChange}
            required
          >
            <option value="">—Please choose an option—</option>
            <option value="Graphics Designers internship">Graphics Designers internship</option>
            <option value="Linux Server administrator internship">Linux Server administrator internship</option>
            <option value="SEO Intern – Content Specialist">SEO Intern – Content Specialist</option>
            <option value="Senior SEO Executive">Senior SEO Executive</option>
            <option value="Junior Full Stack Web Developer">Junior Full Stack Web Developer</option>
            <option value="Junior SEO Executive">Junior SEO Executive</option>
            <option value="Video Editor">Video Editor</option>
          </select>
        </div>

        <div className="formField">
          <label htmlFor='message'>Your Message</label>
          <br/>
          <textarea
            id='message'
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <div className="formField">
          <label htmlFor="cv">Upload Your CV (PDF or Word Format)</label>
          <br/>
          <input
            type="file"
            name="cv"
            id="cv"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            required
          />
        </div>

        <button className="btn" type="submit" disabled={state.isLoading}>
          {state.isLoading ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  );
};

export default CarrerForm;
