import { useState, useEffect } from 'react';
import { haContactForm } from '../../lib/api';

const initState = { values: {}, isLoading: false };

const HaForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    companyname: '',
    companyurl: '',
    companyemail: '',
    users: '',
    desg: '',
    service: '',
    envr: 'Single Server Setup',
    otherenvr: '',
    otherdesg: '',
    otherservice: '',
    pageUrl: '',
    checkbox: false,
  });

  const [state, setState] = useState(initState);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      pageUrl: window.location.href
    }));
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    setState((prev) => ({ ...prev, isLoading: true }));

    try {
      await haContactForm(formData);
      alert('Form submitted successfully!');
      setFormData({
        name: '',
        phone: '',
        companyname: '',
        companyurl: '',
        companyemail: '',
        users: '',
        desg: '',
        service: '',
        envr: 'Single Server Setup',
        otherenvr: '',
        otherdesg: '',
        otherservice: '',
        pageUrl: window.location.href,
        checkbox: false,
      });
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Failed to submit form. Please try again later.');
    } finally {
      setState((prev) => ({ ...prev, isLoading: false }));
    }
  };

  return (
    <div className="serverForm">
      <form onSubmit={onSubmit}>
        {/* NAME & PHONE */}
        <div className="formField">
          <div className="row">
            <div className="col">
              <label htmlFor='name'>Name</label><br />
              <input
                id='name'
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder='Enter your name'
                required
              />
            </div>
            <div className="col">
              <label htmlFor='phone'>Phone</label><br />
              <input
                id='phone'
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder='Enter your phone number'
                required
              />
            </div>
          </div>
        </div>

        {/* COMPANY INFO */}
        <div className="formField">
          <div className="row">
            <div className="col">
              <label htmlFor='companyname'>Company Name</label><br />
              <input
                id='companyname'
                type="text"
                name="companyname"
                value={formData.companyname}
                onChange={handleChange}
                placeholder='Company name'
                required
              />
            </div>
            <div className="col">
              <label htmlFor='companyemail'>Company Email</label><br />
              <input
                id='companyemail'
                type="email"
                name="companyemail"
                value={formData.companyemail}
                onChange={handleChange}
                placeholder='Email'
                required
              />
            </div>
          </div>
        </div>

        {/* COMPANY URL & USERS */}
        <div className="formField">
          <div className="row">
            <div className="col">
              <label htmlFor='companyurl'>Company URL</label><br />
              <input
                id='companyurl'
                type="url"
                name="companyurl"
                value={formData.companyurl}
                onChange={handleChange}
                placeholder='https://example.com'
                required
              />
            </div>
            <div className="col">
              <label htmlFor='users'>Number of Users</label><br />
              <select
                id='users'
                name="users"
                value={formData.users}
                onChange={handleChange}
                required
              >
                <option value="">Select Users</option>
                <option value="1-100 users">1-100 users</option>
                <option value="101-500 users">101-500 users</option>
                <option value="501-1,000 users">501-1,000 users</option>
                <option value="1,000+ users">1,000+ users</option>
              </select>
            </div>
          </div>
        </div>

        {/* DESIGNATION & SERVICE */}
        <div className="formField">
          <div className="row">
            <div className="col">
              <label htmlFor='desg'>Designation</label><br />
              <select
                id='desg'
                name="desg"
                value={formData.desg}
                onChange={handleChange}
                required
              >
                <option value="">Select Designation</option>
                <option value="Business Owner">Business Owner</option>
                <option value="IT Manager">IT Manager</option>
                <option value="System Administrator">System Administrator</option>
                <option value="DevOps Engineer">DevOps Engineer</option>
                <option value="Other">Other</option>
              </select>
              {formData.desg === 'Other' && (
                <input
                  type="text"
                  name="otherdesg"
                  placeholder="Please specify"
                  value={formData.otherdesg}
                  onChange={handleChange}
                  required
                />
              )}
            </div>
            <div className="col">
              <label htmlFor='service'>Service Requirement</label><br />
              <select
                id='service'
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Select Requirement</option>
                <option value="Cloud Infrastructure">Cloud Infrastructure</option>
                <option value="Hybrid Cloud">Hybrid Cloud</option>
                <option value="On-Premise">On-Premise</option>
                <option value="Database High Availability">Database High Availability</option>
                <option value="Application High Availability">Application High Availability</option>
                <option value="Disaster Recovery Planning">Disaster Recovery Planning</option>
                <option value="Other">Other</option>
              </select>
              {formData.service === 'Other' && (
                <input
                  type="text"
                  name="otherservice"
                  placeholder="Please specify"
                  value={formData.otherservice}
                  onChange={handleChange}
                  required
                />
              )}
            </div>
          </div>
        </div>

        {/* ENVIRONMENT */}
        <div className="formField">
          <label htmlFor='envr'>Current IT Environment</label><br />
          <select
            id='envr'
            name="envr"
            value={formData.envr}
            onChange={handleChange}
            required
          >
            <option value="Single Server Setup">Single Server Setup</option>
            <option value="Clustered Servers">Clustered Servers</option>
            <option value="Virtual Machines">Virtual Machines</option>
            <option value="Cloud-native Environment">Cloud-native Environment</option>
            <option value="Other">Other</option>
          </select>
          {formData.envr === 'Other' && (
            <input
              type="text"
              name="otherenvr"
              placeholder="Please specify"
              value={formData.otherenvr}
              onChange={handleChange}
              required
            />
          )}
        </div>

        {/* PRIVACY CHECKBOX */}
        <div className="checkbox">
          <input
            id="checkbox"
            type="checkbox"
            name="checkbox"
            checked={formData.checkbox}
            onChange={handleChange}
            required
          />
          <label htmlFor="checkbox">  
            I consent to the collection and processing of my personal data for the purpose of responding to my inquiry. I acknowledge that my data will be handled in accordance with your <a href="/about/privacypolicy" target="_blank">Privacy Policy</a>.
          </label>
        </div>

        <button type="submit" disabled={state.isLoading}>
          {state.isLoading ? 'Sending...' : 'Request HA Services'}
        </button>
      </form>
    </div>
  );
};

export default HaForm;
