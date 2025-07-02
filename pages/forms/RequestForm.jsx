import { useState } from 'react';
import { RequestContactForm } from '../../lib/api'; // Adjust the import path accordingly

// Initial form data state
const initialFormData = {
  name: '',
  phone: '',
  email: '',
  processer: 'Intel Quad Core Xeon E3',
  memory: '8 GB',
  storage: '1 TB SAS',
  os: 'Linux',
  sla: 'Unmanaged Service',
  units: '1 Unit',
  website: '',
  message: ''
};

// Initial state for loading and form data
const initState = { values: {}, isLoading: false };

const RequestForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [state, setState] = useState(initState);

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
      await RequestContactForm(formData);
      alert('Form submitted successfully!');
      // Reset both formData and state
      setFormData(initialFormData);
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
    <div className="reqForm">
      <form onSubmit={onSubmit}>
        <div className="formField">
          <label htmlFor="name">
            Name
          </label>
          <br />
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

        <div className='row'>
          <div className="col-md-6">
            <div className="formField">
              <label htmlFor="phone">
                Phone
              </label>
              <br />
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="formField">
              <label htmlFor="email">
                Your Email
              </label>
              <br />
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
          </div>
        </div>

        <div className='row'>
          <div className="col-md-6">
            <div className="formField">
              <label htmlFor="processer">
                Processor
              </label>
              <br />
              <select
                name="processer"
                id="Processer"
                value={formData.processer}
                onChange={handleChange}
                required
              >
                <option value="Intel Quad Core Xeon E3">Intel Quad Core Xeon E3</option>
                <option value="Intel Xeon Hexa Core E5">Intel Xeon Hexa Core E5</option>
                <option value="Intel Xeon Silver 8 Cores">Intel Xeon Silver 8 Cores</option>
                <option value="Intel Xeon Silver 10 Cores">Intel Xeon Silver 10 Cores</option>
                <option value="Intel Xeon Silver 12 Cores">Intel Xeon Silver 12 Cores</option>
              </select>
            </div>
          </div>

          <div className="col-md-6">
            <div className="formField">
              <label htmlFor="memory">
                Memory
              </label>
              <br />
              <select
                name="memory"
                id="memory"
                value={formData.memory}
                onChange={handleChange}
                required
              >
                <option value="8 GB">8 GB</option>
                <option value="16 GB">16 GB</option>
                <option value="32 GB">32 GB</option>
                <option value="64 GB">64 GB</option>
              </select>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className="col-md-6">
            <div className="formField">
              <label htmlFor="storage">
                Storage
              </label>
              <br />
              <select
                name="storage"
                id="storage"
                value={formData.storage}
                onChange={handleChange}
                required
              >
                <option value="1 TB SAS">1 TB SAS</option>
                <option value="2 TB SAS">2 TB SAS</option>
                <option value="4 TB SAS">4 TB SAS</option>
                <option value="480 GB SSD">480 GB SSD</option>
                <option value="960 GB SSD">960 GB SSD</option>
              </select>
            </div>
          </div>

          <div className="col-md-6">
            <div className="formField">
              <label htmlFor="os">
                Operating System
              </label>
              <br />
              <select
                name="os"
                id="os"
                value={formData.os}
                onChange={handleChange}
                required
              >
                <option value="Linux">Linux</option>
                <option value="Windows">Windows</option>
              </select>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className="col-md-6">
            <div className="formField">
              <label htmlFor="sla">
                Service Level Agreement
              </label>
              <br />
              <select
                name="sla"
                id="sla"
                value={formData.sla}
                onChange={handleChange}
                required
              >
                <option value="Unmanaged Service">Unmanaged Service</option>
                <option value="Managed Service">Managed Service</option>
              </select>
            </div>
          </div>

          <div className="col-md-6">
            <div className="formField">
              <label htmlFor="units">
                Unit of Server
              </label>
              <br />
              <select
                name="units"
                id="units"
                value={formData.units}
                onChange={handleChange}
                required
              >
                <option value="1 Unit">1 Unit</option>
                <option value="2 Unit">2 Unit</option>
                <option value="3 Unit">3 Unit</option>
                <option value="4 Unit">4 Unit</option>
                <option value="5 Unit">5 Unit</option>
              </select>
            </div>
          </div>
        </div>

        <div className="formField">
          <label htmlFor="website">
            Website/URL
          </label>
          <br />
          <input
            type="url"
            name="website"
            id="website"
            value={formData.website}
            onChange={handleChange}
          />
        </div>

        <div className="formField">
          <label htmlFor='message'>
            Your Message
          </label>
          <br />
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

export default RequestForm;
