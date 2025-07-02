import { useState, useEffect } from 'react';
import {  payrollContactForm  } from '../../lib/api';

const initState = { values: {}, isLoading: false };

const PayrollForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    companyname: '',
    companyurl: '',
    companyemail: '',
    desg: '',
    otherdesg: '',
    employees: '',
    feature: '',
    otherfeature: '',
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

  // Add useEffect to set the page URL when component mounts
  useEffect(() => {
    setFormData(prev => ({
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
      await payrollContactForm(formData);
      alert('Form submitted successfully!');
      // Reset all form data to initial values
      setFormData({
        name: '',
        phone: '',
        companyname: '',
        companyurl: '',
        companyemail: '',
        desg: '',
        otherdesg: '',
        employees: '',
        feature: '',
        otherfeature: '',
        pageUrl: window.location.href,
        checkbox: false
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
    <div className="">
      <form onSubmit={onSubmit}>
      <div className="formField">
          <div className="row">
            <div className="col">
              <label htmlFor="name">Name</label>
              <br/>
              <input

                type="text"
                name="name"
                autoComplete="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder='Enter your name'
                required
              />
            </div>
            <div className="col">
              <label htmlFor='phone'>Phone</label>
              <br/>
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
        <div className="formField">
          <div className="row">
            <div className="col">
              <label htmlFor='companyname'>Company name</label>
              <br/>
              <input
              id='companyname'
                type="text"
                name="companyname"
                autoComplete="name"
                value={formData.companyname}
                onChange={handleChange}
                placeholder='Enter your company name'
                required
              />
            </div>
            <div className="col">
              <label htmlFor='companyemail'>Company Email</label>
              <br/>
              <input
                id='companyemail'
                type="email"
                name="companyemail"
                value={formData.companyemail}
                onChange={handleChange}
                placeholder="Enter your company email"
                required
              />
            </div>
          </div>
        </div>

        <div className="formField">
          <div className="row">
          <div className="col">
          <label htmlFor='companyurl'>Company Url</label>
              <br/>
              <input
                id='companyurl'
                type="url"
                name="companyurl"
                value={formData.companyurl}
                onChange={handleChange}
                placeholder='https://www.example.com'
                required
              />
            </div>
            <div className="col">
              <label htmlFor="desg">Designation</label>
              <br/>
              <select
                name="desg"
                id="desg"
                value={formData.desg}
                onChange={handleChange}
                placeholder=''
                required
              >
                <option value="HR Manager">HR Manager</option>
                <option value="Payroll Manager">Payroll Manager</option>
                <option value="Finance Manager">Finance Manager</option>
                <option value="Business Owner">Business Owner</option>
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
            
          </div>
        </div>
        <div className="formField">
          <div className="row">
          <div className="col">
          <label htmlFor='employees'>Number of Employees</label>
              <br/>
              <select
                name="employees"
                id="employees"
                value={formData.employees}
                onChange={handleChange}
                placeholder=''
                required
              >
                <option value="">Select</option>
                <option value="1-50 employees">1-50 employees</option>
                <option value="51-200 employees">51-200 employees</option>
                <option value="201-500 employees">201-500 employees</option>
                <option value="500+ employees">500+ employees</option>
              </select>
            </div>
            <div className="col">
              <label htmlFor="feature">Payroll Software Features Needed</label>
              <br/>
              <select
                name="feature"
                id="feature"
                value={formData.feature}
                onChange={handleChange}
                placeholder=''
                required
              >
                <option value="">Select a feature</option>
                <option value="Employee Salary Management">Employee Salary Management</option>
                <option value="Tax Calculation & Filing">Tax Calculation & Filing</option>
                <option value="Leave & Attendance Management">Leave & Attendance Management</option>
                <option value="Pay Slip Generation">Pay Slip Generation</option>
                <option value="Bonus & Incentive Management">Bonus & Incentive Management</option>
                <option value="Payroll Compliance Management">Payroll Compliance Management</option>
                <option value="Direct Deposit Management">Direct Deposit Management</option>
                <option value="Reports & Analytics">Reports & Analytics</option>
                <option value="Integration with Accounting Software">Integration with Accounting Software</option>
                <option value="Mobile Access for Employees">Mobile Access for Employees</option>
                <option value="Other">Other</option>
              </select>
              {formData.feature === 'Other' && (
                <input
                  type="text" 
                  name="otherfeature"
                  placeholder="Please specify"
                  value={formData.otherfeature}
                  onChange={handleChange}
                  required
                />
              )}
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
          {state.isLoading ? 'Sending...' : 'Contact Us for Payroll Solutions'}
        </button>
      </form>
    </div>
  );
};

export default PayrollForm;
