import { useState } from 'react';

const DomainForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    country: 'India', // Default value set to India
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form Data:', formData);
    // Reset form data to initial values
    setFormData({
      name: '',
      phone: '',
      country: 'India',
      email: '',
      company: '',
      message: ''
    });
    // You can add your form submission logic here (e.g., sending data to server)
  };

  return (
    <div className="DomainForm">
    <form onSubmit={handleSubmit}>
        <div className='row'>
        <div className="col-md-6">
        <div className="formField">
      <label htmlFor="dedicated-form-start">
        Name
      </label>
      <br/>
      <input
          type="text"
          name="name"
          autoComplete="name"
          id="dedicated-form-start"
          value={formData.name}
          onChange={handleChange}
          required
        />
        </div>

        <div className="formField" htmlFor="phone">
      <label htmlFor="phone">
        Phone
      </label>
      <br/>
      <input
          id="phone"
          type="tel"
          name="phone"
          placeholder=""
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
          placeholder=""
          value={formData.company}
          onChange={handleChange}
        />
      </div>

      <div className="formField" >
      <label htmlFor="message">
        Your Message
      </label>
      <br/>
      <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
        </div>
        </div>
        
      

      
      <button type="submit">send</button>
    </form>
    </div>
  );
};

export default DomainForm;
