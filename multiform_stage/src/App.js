import React, { useState } from 'react';

const Step1 = ({ formData, setFormData, nextStep }) => {
  const [errors, setErrors] = useState({});

  const validateAndProceed = () => {
    let newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Full name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone) newErrors.phone = 'Phone number is required';

    if (Object.keys(newErrors).length === 0) {
      nextStep();
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div>
      <h2>Step 1: Personal Information</h2>
      <div>
        <label>Full Name:</label>
        <input
          type="text"
          value={formData.fullName || ''}
          onChange={(e) =>
            setFormData({ ...formData, fullName: e.target.value })
          }
        />
        {errors.fullName && <p style={{ color: 'red' }}>{errors.fullName}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={formData.email || ''}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </div>
      <div>
        <label>Phone Number:</label>
        <input
          type="text"
          value={formData.phone || ''}
          onChange={(e) =>
            setFormData({ ...formData, phone: e.target.value })
          }
        />
        {errors.phone && <p style={{ color: 'red' }}>{errors.phone}</p>}
      </div>
      <button onClick={validateAndProceed}>Next</button>
    </div>
  );
};

const Step2 = ({ formData, setFormData, nextStep, prevStep }) => {
  const [errors, setErrors] = useState({});

  const validateAndProceed = () => {
    let newErrors = {};
    if (!formData.address) newErrors.address = 'Street Address is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.state) newErrors.state = 'State is required';
    if (!formData.zip) newErrors.zip = 'Zip Code is required';

    if (Object.keys(newErrors).length === 0) {
      nextStep();
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div>
      <h2>Step 2: Address Details</h2>
      <div>
        <label>Street Address:</label>
        <input
          type="text"
          value={formData.address || ''}
          onChange={(e) =>
            setFormData({ ...formData, address: e.target.value })
          }
        />
        {errors.address && <p style={{ color: 'red' }}>{errors.address}</p>}
      </div>
      <div>
        <label>City:</label>
        <input
          type="text"
          value={formData.city || ''}
          onChange={(e) =>
            setFormData({ ...formData, city: e.target.value })
          }
        />
        {errors.city && <p style={{ color: 'red' }}>{errors.city}</p>}
      </div>
      <div>
        <label>State:</label>
        <input
          type="text"
          value={formData.state || ''}
          onChange={(e) =>
            setFormData({ ...formData, state: e.target.value })
          }
        />
        {errors.state && <p style={{ color: 'red' }}>{errors.state}</p>}
      </div>
      <div>
        <label>Zip Code:</label>
        <input
          type="text"
          value={formData.zip || ''}
          onChange={(e) =>
            setFormData({ ...formData, zip: e.target.value })
          }
        />
        {errors.zip && <p style={{ color: 'red' }}>{errors.zip}</p>}
      </div>
      <button onClick={prevStep}>Back</button>{' '}
      <button onClick={validateAndProceed}>Next</button>
    </div>
  );
};

const Step3 = ({ formData, setFormData, nextStep, prevStep }) => {
  const [errors, setErrors] = useState({});

  const validateAndProceed = () => {
    let newErrors = {};
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (Object.keys(newErrors).length === 0) {
      nextStep();
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div>
      <h2>Step 3: Account Setup</h2>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={formData.username || ''}
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
        />
        {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={formData.password || ''}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
      </div>
      <button onClick={prevStep}>Back</button>{' '}
      <button onClick={validateAndProceed}>Next</button>
    </div>
  );
};

const Summary = ({ formData, prevStep, submitForm }) => {
  return (
    <div>
      <h2>Summary</h2>
      <ul>
        <li>
          <strong>Full Name:</strong> {formData.fullName}
        </li>
        <li>
          <strong>Email:</strong> {formData.email}
        </li>
        <li>
          <strong>Phone:</strong> {formData.phone}
        </li>
        <li>
          <strong>Address:</strong> {formData.address}, {formData.city},{' '}
          {formData.state} - {formData.zip}
        </li>
        <li>
          <strong>Username:</strong> {formData.username}
        </li>
      </ul>
      <button onClick={prevStep}>Back</button>{' '}
      <button onClick={submitForm}>Submit</button>
    </div>
  );
};

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const submitForm = () => {
    // Simulate API call
    setTimeout(() => {
      alert('Form submitted successfully!');
      console.log('Submitted Data:', formData);
      // Optionally, reset form or navigate away
    }, 500);
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto' }}>
      <h1>Multi-Step Form</h1>
      <div style={{ marginBottom: '20px' }}>
        Step {step} of 4
      </div>
      {step === 1 && (
        <Step1
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
        />
      )}
      {step === 2 && (
        <Step2
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 3 && (
        <Step3
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 4 && (
        <Summary formData={formData} prevStep={prevStep} submitForm={submitForm} />
      )}
    </div>
  );
};

export default MultiStepForm;
