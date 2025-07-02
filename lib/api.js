import Newsletter from "../pages/forms/Newsletter";



// zimbra contact form
export const zimbraContactForm = async (data) => {
  const response = await fetch('/api/zimbraform', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({
      message: 'An unknown error occurred',
    }));
    throw new Error(errorData.message || 'Something went wrong');
  }

  return response.json();
};


// carbonio contact form
export const carbonioContactForm = async (data) => {
  const response = await fetch('/api/carbonioform', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({
      message: 'An unknown error occurred',
    }));
    throw new Error(errorData.message || 'Something went wrong');
  }

  return response.json();
};

// gsuite contact form
export const gsiteContactForm = async (data) => {
  const response = await fetch('/api/forms/gsuiteform', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({
      message: 'An unknown error occurred',
    }));
    throw new Error(errorData.message || 'Something went wrong');
  }

  return response.json();
};


// office 365 contact form
export const officeContactForm = async (data) => {
  const response = await fetch('/api/forms/office365', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({
      message: 'An unknown error occurred',
    }));
    throw new Error(errorData.message || 'Something went wrong');
  }

  return response.json();
};

// ssl in spam filter
export const sslContactForm = async (data) => {
  const response = await fetch('/api/forms/sslform', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({
      message: 'An unknown error occurred',
    }));
    throw new Error(errorData.message || 'Something went wrong');
  }

  return response.json();
};

// web development 
export const webdevContactForm = async (data) => {
  const response = await fetch('/api/forms/webdevform', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({
      message: 'An unknown error occurred',
    }));
    throw new Error(errorData.message || 'Something went wrong');
  }

  return response.json();
};

// app development 
export const appdevContactForm = async (data) => {
  const response = await fetch('/api/forms/appdevform', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({
      message: 'An unknown error occurred',
    }));
    throw new Error(errorData.message || 'Something went wrong');
  }

  return response.json();
};

// seo form
export const seoContactForm = async (data) => {
  const response = await fetch('/api/forms/seoform', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({
      message: 'An unknown error occurred',
    }));
    throw new Error(errorData.message || 'Something went wrong');
  }

  return response.json();
};

// ha form 
export const haContactForm = async (data) => {
  const response = await fetch('/api/forms/haform', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({
      message: 'An unknown error occurred',
    }));
    throw new Error(errorData.message || 'Something went wrong');
  }

  return response.json();
};

// crm form 
export const crmContactForm = async (data) => {
  const response = await fetch('/api/forms/crmform', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({
      message: 'An unknown error occurred',
    }));
    throw new Error(errorData.message || 'Something went wrong');
  }

  return response.json();
};

// fleet form 
export const fleetContactForm = async (data) => {
  const response = await fetch('/api/forms/fleetform', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({
      message: 'An unknown error occurred',
    }));
    throw new Error(errorData.message || 'Something went wrong');
  }

  return response.json();
};

// fleet form 
export const hmsContactForm = async (data) => {
  const response = await fetch('/api/forms/hmsform', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({
      message: 'An unknown error occurred',
    }));
    throw new Error(errorData.message || 'Something went wrong');
  }

  return response.json();
};


// sftp form
export const sftpContactForm = async (data) => {
  const response = await fetch('/api/forms/sftpform', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({
      message: 'An unknown error occurred',
    }));
    throw new Error(errorData.message || 'Something went wrong');
  }

  return response.json();
};

// payroll form
export const payrollContactForm = async (data) => {
  const response = await fetch('/api/forms/payrollform', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({
      message: 'An unknown error occurred',
    }));
    throw new Error(errorData.message || 'Something went wrong');
  }

  return response.json();
};

// contact us form
export const contactusForm = async (data) => {
  const response = await fetch('/api/forms/contactus', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({
      message: 'An unknown error occurred',
    }));
    throw new Error(errorData.message || 'Something went wrong');
  }

  return response.json();
};


// gsuite alt us form
export const GsuiteAltContactForm = async (data) => {
  const response = await fetch('/api/forms/gsuitealt', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({
      message: 'An unknown error occurred',
    }));
    throw new Error(errorData.message || 'Something went wrong');
  }

  return response.json();
};

// rainmail alt us form
export const rainmailAltContactForm = async (data) => {
  const response = await fetch('/api/forms/rainmail', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({
      message: 'An unknown error occurred',
    }));
    throw new Error(errorData.message || 'Something went wrong');
  }

  return response.json();
};


// zimbra alt us form
export const zimbraAltContactForm = async (data) => {
  const response = await fetch('/api/forms/zimbraalt', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({
      message: 'An unknown error occurred',
    }));
    throw new Error(errorData.message || 'Something went wrong');
  }

  return response.json();
};

// office alt us form
export const officeAltContactForm = async (data) => {
  const response = await fetch('/api/forms/officealt', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({
      message: 'An unknown error occurred',
    }));
    throw new Error(errorData.message || 'Something went wrong');
  }

  return response.json();
};


// office 365 talk form
export const officetalkContactForm = async (data) => {
  const response = await fetch('/api/forms/officetalk', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({
      message: 'An unknown error occurred',
    }));
    throw new Error(errorData.message || 'Something went wrong');
  }

  return response.json();
};

// gsuite 365 talk form
export const gsuitetalkContactForm = async (data) => {
  const response = await fetch('/api/forms/gsuitetalk', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({
      message: 'An unknown error occurred',
    }));
    throw new Error(errorData.message || 'Something went wrong');
  }

  return response.json();
};


// dedicated server in bangalore
export const domainContactForm = async (data) => {
  const response = await fetch('/api/forms/domain', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({
      message: 'An unknown error occurred',
    }));
    throw new Error(errorData.message || 'Something went wrong');
  }

  return response.json();
};







// server in carrer
export const carrerContactForm = async (data) => {
  const response = await fetch('/api/forms/carrerform', {
    method: 'POST',
    body: data, 
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({
      message: 'An unknown error occurred',
    }));
    
    // Return a rejected promise with the error data
    return Promise.reject({
      message: errorData.message || 'Something went wrong',
      status: response.status
    });
  }

  return response.json();
};


// Request quote form
export const RequestContactForm = async (data) => {
  const response = await fetch('/api/forms/requestform', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // Set the content type to JSON
    },
    body: JSON.stringify(data), // Stringify the data before sending it to the server
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({
      message: 'An unknown error occurred',
    }));
    throw new Error(errorData.message || 'Something went wrong');
  }

  return response.json();
};

// popup quote form
export const floatContactForm = async (data) => {
  const response = await fetch('/api/forms/floatform', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // Set the content type to JSON
    },
    body: JSON.stringify(data), // Stringify the data before sending it to the server
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({
      message: 'An unknown error occurred',
    }));
    throw new Error(errorData.message || 'Something went wrong');
  }

  return response.json();
};

// carrer server in EmailHostingContactForm
export const EmailHostingContactForm = async (data) => {
  const response = await fetch('/api/forms/emailhosting', {
    method: 'POST',
    body: data, 
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({
      message: 'An unknown error occurred',
    }));
    throw new Error(errorData.message || 'Something went wrong');
  }

  return response.json();
};

// carrer server in emailarchContactForm
export const emailarchContactForm = async (data) => {
  const response = await fetch('/api/emailarch', {
    method: 'POST',
    body: data, 
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({
      message: 'An unknown error occurred',
    }));
    throw new Error(errorData.message || 'Something went wrong');
  }

  return response.json();
};

// server in ServersContactForm
export const ServersContactForm = async (data) => {
  const response = await fetch('/api/forms/serversform', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({
      message: 'An unknown error occurred',
    }));
    throw new Error(errorData.message || 'Something went wrong');
  }

  return response.json();
};

// server in mailservices 
export const MailServicesContactForm = async (data) => {
  const response = await fetch('/api/forms/mailservicesform', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({
      message: 'An unknown error occurred',
    }));
    throw new Error(errorData.message || 'Something went wrong');
  }

  return response.json();
};

// server in spam filter
export const SpamFIlterContactForm = async (data) => {
  const response = await fetch('/api/forms/spamfilterform', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({
      message: 'An unknown error occurred',
    }));
    throw new Error(errorData.message || 'Something went wrong');
  }

  return response.json();
};

// Newsletter 

export const NewsletterForm = async (formData) => {
  try {
    const response = await fetch('/api/forms/newsletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return { success: false, message: errorData.message || 'Something went wrong' };
    }

    return { success: true, data: await response.json() };
  } catch (error) {
    return { success: false, message: 'Network error. Please try again later.' };
  }
};

export const PopupcontactForm = async (data) => {
  const response = await fetch('/api/forms/popupform', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({
      message: 'An unknown error occurred',
    }));
    throw new Error(errorData.message || 'Something went wrong');
  }

  return response.json();
};

// lib/api.js
export const fullstackForm = async (data) => {
  const response = await fetch('/api/forms/fullstack', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({
      message: 'Failed to submit form. Please try again later.',
    }));
    throw new Error(errorData.message || 'Something went wrong');
  }

  return response.json();
};

// Add this to your existing lib/api.js
export const fullstackHireForm = async (data) => {
  const response = await fetch('/api/forms/fullstack-hire', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({
      message: 'Failed to submit form. Please try again later.',
    }));
    throw new Error(errorData.message || 'Something went wrong');
  }

  return response.json();
};

export const HomeContactForm = async (data) => {
  const response = await fetch('/api/forms/homeform', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({
      message: 'An unknown error occurred',
    }));
    throw new Error(errorData.message || 'Something went wrong');
  }

  return response.json();
};