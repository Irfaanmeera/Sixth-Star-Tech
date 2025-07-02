import { useState } from 'react';
import { contactusForm } from '../../lib/api'; // Adjust the import path accordingly

const initState = { isLoading: false }; // Simplified initialization state

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    country: 'India', // Default country value
    subject: '',
    email: '',
    company: '',
    message: '',
    checkbox: false, // Consent checkbox
  });
  
  const [state, setState] = useState(initState); // Managing loading state

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value, // Handle checkbox separately
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setState({ isLoading: true }); // Set loading state

    try {
      await contactusForm(formData); // Submit form data
      alert('Form submitted successfully!');

      // Reset form fields after successful submission
      setFormData({
        name: '',
        phone: '',
        country: 'India', // Retain default country value
        subject: '',
        email: '',
        company: '',
        message: '',
        checkbox: false, // Reset checkbox state
      });

      setState(initState); // Reset loading state
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Failed to submit form. Please try again later.');
    } finally {
      setState({ isLoading: false }); // Stop loading state
    }
  };

  return (
    <div className="contactusform">
    <form onSubmit={onSubmit}>
        <div className='row'>
        <div className="col-md-6">
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
          placeholder="Enter your name"
          required
        />
        </div>

        <div className="formField">
      <label htmlFor="email">
        Your Email </label>
        <br/>
      <input
          id="email"
          type="email"
          name="email"
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
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
          placeholder="Enter your phone number"
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
          <option value="India">India</option>
          <option value="Argentina">Argentina</option>
          <option value="Australia">Australia</option>
          <option value="Austria">Austria</option>
          <option value="Bahrain">Bahrain</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="Barbados">Barbados</option>
          <option value="Belarus">Belarus</option>
          <option value="Belgium">Belgium</option>
          <option value="Bermuda">Bermuda</option>
          <option value="Bhutan">Bhutan</option>
          <option value="Botswana">Botswana</option>
          <option value="Brazil">Brazil</option>
          <option value="Brunei Darussalam">Brunei Darussalam</option>
          <option value="Bulgaria">Bulgaria</option>
          <option value="Cambodia">Cambodia</option>
          <option value="Canada">Canada</option>
          <option value="Cape Verde">Cape Verde</option>
          <option value="Cayman Islands">Cayman Islands</option>
          <option value="China">China</option>
          <option value="Cuba">Cuba</option>
          <option value="Cyprus">Cyprus</option>
          <option value="Denmark">Denmark</option>
          <option value="Egypt">Egypt</option>
          <option value="El Salvador">El Salvador</option>
          <option value="Eritrea">Eritrea</option>
          <option value="Estonia">Estonia</option>
          <option value="Ethiopia">Ethiopia</option>
          <option value="Fiji">Fiji</option>
          <option value="Finland">Finland</option>
          <option value="France">France</option>
          <option value="Georgia">Georgia</option>
          <option value="Germany">Germany</option>
          <option value="Ghana">Ghana</option>
          <option value="Greece">Greece</option>
          <option value="Guyana">Guyana</option>
          <option value="HongKong">HongKong</option>
          <option value="Hungary">Hungary</option>
          <option value="Iceland">Iceland</option>
          <option value="Indonesia">Indonesia</option>
          <option value="Iran">Iran</option>
          <option value="Ireland">Ireland</option>
          <option value="Israel">Israel</option>
          <option value="Italy">Italy</option>
          <option value="Japan">Japan</option>
          <option value="Jordan">Jordan</option>
          <option value="Kenya">Kenya</option>
          <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
          <option value="Korea, Republic of">Korea, Republic of</option>
          <option value="Kuwait">Kuwait</option>
          <option value="Latvia">Latvia</option>
          <option value="Luxembourg">Luxembourg</option>
          <option value="Macao">Macao</option>
          <option value="Malawi">Malawi</option>
          <option value="Malaysia">Malaysia</option>
          <option value="Maldives">Maldives</option>
          <option value="Mauritius">Mauritius</option>
          <option value="Mexico">Mexico</option>
          <option value="Mongolia">Mongolia</option>
          <option value="Morocco">Morocco</option>
          <option value="Namibia">Namibia</option>
          <option value="Nauru">Nauru</option>
          <option value="Nepal">Nepal</option>
          <option value="Netherlands">Netherlands</option>
          <option value="New Zealand">New Zealand</option>
          <option value="Niger">Niger</option>
          <option value="Nigeria">Nigeria</option>
          <option value="Norway">Norway</option>
          <option value="Oman">Oman</option>
          <option value="Pakistan">Pakistan</option>
          <option value="Panama">Panama</option>
          <option value="Papua New Guinea">Papua New Guinea</option>
          <option value="Philippines">Philippines</option>
          <option value="Poland">Poland</option>
          <option value="Portugal">Portugal</option>
          <option value="Qatar">Qatar</option>
          <option value="Romania">Romania</option>
          <option value="Russian Federation">Russian Federation</option>
          <option value="Rwanda">Rwanda</option>
          <option value="Samoa">Samoa</option>
          <option value="Saudi Arabia">Saudi Arabia</option>
          <option value="Senegal">Senegal</option>
          <option value="Singapore">Singapore</option>
          <option value="South Africa">South Africa</option>
          <option value="Spain">Spain</option>
          <option value="Sri Lanka">Sri Lanka</option>
          <option value="Sudan">Sudan</option>
          <option value="Sweden">Sweden</option>
          <option value="Switzerland">Switzerland</option>
          <option value="Taiwan">Taiwan</option>
          <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
          <option value="Thailand">Thailand</option>
          <option value="Tunisia">Tunisia</option>
          <option value="Turkey">Turkey</option>
          <option value="Uganda">Uganda</option>
          <option value="Ukraine">Ukraine</option>
          <option value="United Arab Emirates">United Arab Emirates</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="United States of America">United States of America</option>
          <option value="Uruguay">Uruguay</option>
          <option value="Viet Nam">Viet Nam</option>
          <option value="Yemen">Yemen</option>
          <option value="Zair">Zair</option>
          <option value="Zambia">Zambia</option>
          <option value="Zimbabwe">Zimbabwe</option>
        </select>
      </div>
        </div>
        <div className="col-md-6">
        <div className="formField">
      <label htmlFor="subject">
        Subject </label>
        <br/>
      <input
          id="subject"
          type="text"
          name="subject"
          autoComplete="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Enter your subject"
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
          placeholder="Enter your company name"
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
          id="message"
          name="message"
          value={formData.message}
          placeholder="Enter your message"
          onChange={handleChange}
        />
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
          I consent to the collection and processing of my personal data for the purpose of responding to my inquiry. I acknowledge that my data will be handled in accordance with your <a href="/about/privacypolicy" target="_blank">Privacy Policy</a>
          </label>
        </div>
        <button className="btn" type="submit" disabled={state.isLoading}>
          {state.isLoading ? 'Sending...' : 'Send'}
        </button>
    </form>
    </div>
  );
};

export default ContactUsForm;
