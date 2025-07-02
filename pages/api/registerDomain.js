import React, { useState } from "react";
import axios from "axios";

const RegisterDomain = () => {
  const [formData, setFormData] = useState({
    domainName: "",
    years: 1,
    ns1: "ns1.domain.com",
    ns2: "ns2.domain.com",
    customerId: 0,
    regContactId: 0,
    adminContactId: 0,
    techContactId: 0,
    billingContactId: 0,
    invoiceOption: "KeepInvoice",
    discountAmount: 0.0,
    privacyProtection: false,
  });

  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `https://test.httpapi.com/api/domains/register.xml?auth-userid=0&api-key=key&domain-name=${formData.domainName}&years=${formData.years}&ns=${formData.ns1}&ns=${formData.ns2}&customer-id=${formData.customerId}&reg-contact-id=${formData.regContactId}&admin-contact-id=${formData.adminContactId}&tech-contact-id=${formData.techContactId}&billing-contact-id=${formData.billingContactId}&invoice-option=${formData.invoiceOption}&discount-amount=${formData.discountAmount}${formData.privacyProtection ? "&purchase-privacy=true" : ""}`;

    try {
      const res = await axios.post(url);
      setResponse(res.data);
    } catch (error) {
      console.error("Error registering domain:", error);
      setResponse("Error registering domain");
    }
  };

  return (
    <div>
      <h2>Register Domain</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Domain Name:
          <input
            type="text"
            name="domainName"
            value={formData.domainName}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Years:
          <input
            type="number"
            name="years"
            value={formData.years}
            onChange={handleChange}
            min="1"
            required
          />
        </label>
        <br />
        <label>
          Privacy Protection:
          <input
            type="checkbox"
            name="privacyProtection"
            checked={formData.privacyProtection}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
      {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
    </div>
  );
};

export default RegisterDomain;
