import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'; // Add this import
import { appdevContactForm } from '../../lib/api'; // Import your API helper

const initState = { values: {}, isLoading: false };

const AppdevForm = () => {
  const router = useRouter(); // Add this hook
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    companyname: '',
    companyurl: '',
    desg: '',
    otherdesg: '',
    type: '',
    othertype: '',
    preferredplatform: 'Android',
    currentapp: '',
    pageUrl: '',
    checkbox: false, // Added checkbox reset state
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
    setFormData((prev) => ({
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
      await appdevContactForm(formData);
      alert('Form submitted successfully!');

      // Reset the entire form to its initial state
      setFormData({
        name: '',
        phone: '',
        companyname: '',
        companyurl: '',
        desg: '',
        otherdesg: '',
        type: '',
        othertype: '',
        preferredplatform: 'Android', // Default value
        currentapp: '',
        pageUrl: window.location.href, // Preserve current page URL
        checkbox: false, // Reset checkbox
      });
      setState(initState); // Reset state
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
              <br />
              <input
                type="text"
                name="name"
                autoComplete="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="col">
              <label htmlFor='phone'>Phone</label>
              <br />
              <input
              id='phone'
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />
            </div>
          </div>
        </div>
        <div className="formField">
          <div className="row">
            <div className="col">
              <label htmlFor="companyname">Company name</label>
              <br />
              <input
                type="text"
                name="companyname"
                autoComplete="name"
                id="companyname"
                value={formData.companyname}
                placeholder="Enter your company name"
                onChange={handleChange}
                required
              />
            </div>
            <div className="col">
              <label htmlFor='companyurl'>Company Url</label>
              <br />
              <input
                id='companyurl'
                type="url"
                name="companyurl"
                value={formData.companyurl}
                onChange={handleChange}
                placeholder="https://www.example.com"
                required
              />
            </div>
          </div>
        </div>

        <div className="formField">
          <div className="row">
            <div className="col">
              <label htmlFor="desg">Designation</label>
              <br />
              <select
                name="desg"
                id="desg"
                value={formData.desg}
                onChange={handleChange}
                required
              >
                <option value="">Select Designation</option>
                <option value="Business Owner">Business Owner</option>
                <option value="Product Manager">Product Manager</option>
                <option value="Marketing Manager">Marketing Manager</option>
                <option value="IT Manager">IT Manager</option>
                <option value="Other">Other</option>
              </select>
              {formData.desg === 'Other' && (
                <input
                  type="text"
                  name="otherdesg"
                  placeholder="Please specify"
                  value={formData.otherdesg}
                  onChange={handleChange}
                  required={formData.desg === 'Other'}
                />
              )}
            </div>
            <div className="col">
              <label htmlFor="type">Type of Mobile App Needed</label>
              <br />
              <select
                name="type"
                id="type"
                value={formData.type}
                onChange={handleChange}
                required
              >
                <option value="">Select Type of Mobile App</option>
                <option value="Business App">Business App</option>
                <option value="E-commerce App">E-commerce App</option>
                <option value="Social Media App">Social Media App</option>
                <option value="Education App">Education App</option>
                <option value="Healthcare App">Healthcare App</option>
                <option value="Entertainment/Streaming App">Entertainment/Streaming App</option>
                <option value="Custom App for Internal Use">Custom App for Internal Use</option>
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
              <label htmlFor="preferredplatform">Preferred Platform</label>
              <br />
              <select
                name="preferredplatform"
                id="preferredplatform"
                value={formData.preferredplatform}
                onChange={handleChange}
                required
              >
                <option value="Android">Android</option>
                <option value="IOS">IOS</option>
                <option value="Both">Both</option>
                <option value="Cross-platform">Cross-platform</option>
                <option value="Not Sure">Not Sure</option>
              </select>
            </div>
            <div className="col">
              <label htmlFor="currentapp">Current App (if applicable):</label>
              <div className="radio-group app-radio-group">
                <div className="radio-group-item">
                  <input
                    type="radio"
                    id="yes"
                    name="currentapp"
                    value="Yes, I need a redesign or update"
                    checked={formData.currentapp === 'Yes, I need a redesign or update'}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="yes">Yes, I need a redesign or update</label>
                </div>
                <div className="radio-group-item">
                  <input
                    type="radio"
                    id="no"
                    name="currentapp"
                    value="No, I need a new app"
                    checked={formData.currentapp === 'No, I need a new app'}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="no">No, I need a new app</label>
                </div>
              </div>
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
            I consent to the collection and processing of my personal data for the purpose of responding to my inquiry. I acknowledge that my data will be handled in accordance with your <a href="/about/privacypolicy" target="_blank">Privacy Policy</a>.
          </label>
        </div>

        <button className="btn" type="submit" disabled={state.isLoading}>
          {state.isLoading ? 'Sending...' : 'Request a Quote'}
        </button>
      </form>
    </div>
  );
};

export default AppdevForm;