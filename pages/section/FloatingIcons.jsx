import React, { useState, useEffect } from 'react';
import { floatContactForm } from '../../lib/api';

const initState = { values: {}, isLoading: false };

export default function FloatingIcons() {
  const [showModal, setShowModal] = useState(false);
  const [showIcons, setShowIcons] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    req: '',
    others: '' 

  });
  const [state, setState] = useState(initState);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIcons(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));

    try {
      // Ensure reCAPTCHA script is loaded
      if (!window.grecaptcha) {
        throw new Error('reCAPTCHA script not loaded');
      }

      // Execute reCAPTCHA
      const token = await window.grecaptcha.execute(
        '6LeF84YqAAAAAHynnp-VDBijRjb0b7cqrrbgGfoR',
        { action: 'submit' }
      );

      const formWithToken = { ...formData, recaptchaToken: token };

      await floatContactForm(formWithToken);
      alert('Form submitted successfully!');
      // Reset all form fields
      setFormData({
        name: '',
        phone: '',
        req: '',
        others: ''
      });
      setState(initState);
      toggleModal(); // Close the modal after successful submission
    } catch (error) {
      console.error('Form submission error:', error);
      alert(error.message || 'Failed to submit form. Please try again.');
    } finally {
      setState((prev) => ({
        ...prev,
        isLoading: false,
      }));
    }
  };

  return (
    <div>
      {showIcons && (
        <>
          <div className="float-icon-left">
            <div className="con" style={{ backgroundColor: '#2b69ef' }}>
            <a
              href="tel:+91 9176627399"
              
              target="_blank"
              rel="noopener noreferrer"
              aria-label="phone"
            >
              <i className="fa-solid fa-phone" style={{ color: 'white' }}></i>
            </a>
            </div>
            <div className="con" style={{ backgroundColor: '#25D366' }}>
            <a
              href="https://wa.me/9176627399"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="whatsapp"
            >
              <i className="fa-brands fa-whatsapp" style={{ color: 'white' }}></i>
            </a>
            </div>
          </div>

          <div className="floatingContainerStyle">
            <button className="contactStyle" onClick={toggleModal}>
              <span className="textStyle">Connect With Us</span>
              <i className="fa-solid fa-envelope"></i>
            </button>

            {showModal && (
              <div className="modalOverlay" onClick={toggleModal}>
                <div
                  className="modalContent"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="model-but">
                    <h2>Contact Us</h2>
                    <button
                      type="button"
                      onClick={toggleModal}
                      className="but-2"
                    >
                      <i className="fa-regular fa-circle-xmark"></i>
                    </button>
                  </div>

                  <form onSubmit={onSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      name="name"
                      autoComplete="name"
                      id="float-form"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />

                    <label htmlFor="phone">Phone:</label>
                    <input
                      type="tel"
                      id='phone'
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                    <div className="formField">
                  <select
            name="req"
            
            id="req"
            value={formData.req}
            onChange={handleChange}
            required
          >
            {/* List of req */}
            <option value="">Select Requirement</option>
            <option value="servers">Servers</option>
            <option value="Email">Emails</option>
            <option value="Domain">Domains</option>
            <option value="SSl">SSl</option>
            <option value="Hosting">Hosting</option>
            <option value="Spam Cloud">Spam Cloud</option>
            <option value="others">Others</option>
          </select>
          {formData.req === "others" && (
            <input
              type="text"
              name="others"
              value={formData.others}
              onChange={handleChange}
              required
            />
          )}

</div>
                    <button
                      className="but-1"
                      type="submit"
                      disabled={state.isLoading}
                    >
                      {state.isLoading ? 'Sending...' : 'Send'}
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
