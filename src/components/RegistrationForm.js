import React, { useState } from 'react';
import './RegistrationForm.css'; // Add styling for the form

const RegistrationForm = () => {
  const [hospitalDetails, setHospitalDetails] = useState({
    name: '',
    address: '',
    hospital_id: '',
    password: '',
    confirm_password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHospitalDetails({
      ...hospitalDetails,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation and API call logic here
    if (hospitalDetails.password === hospitalDetails.confirm_password) {
      alert('Hospital Registered Successfully!');
    } else {
      alert('Passwords do not match!');
    }
  };

  return (
    <div className="form-container">
      <h3>Hospital Registration</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Hospital Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={hospitalDetails.name}
            onChange={handleChange}
            placeholder="Enter Hospital Name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Hospital Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={hospitalDetails.address}
            onChange={handleChange}
            placeholder="Enter Address"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="hospital_id">Hospital ID:</label>
          <input
            type="text"
            id="hospital_id"
            name="hospital_id"
            value={hospitalDetails.hospital_id}
            onChange={handleChange}
            placeholder="Enter Hospital ID"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={hospitalDetails.password}
            onChange={handleChange}
            placeholder="Enter Password"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm_password">Confirm Password:</label>
          <input
            type="password"
            id="confirm_password"
            name="confirm_password"
            value={hospitalDetails.confirm_password}
            onChange={handleChange}
            placeholder="Confirm Password"
            required
          />
        </div>
        <div className="form-actions">
          <button type="submit" className="register-btn">Register</button>
          <button type="button" className="cancel-btn" onClick={() => window.history.back()}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;