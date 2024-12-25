import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css'; // Link the CSS file

const LandingPage = () => {
  const navigate = useNavigate(); 
  // State to manage the display of login and registration forms
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);

  // Function to handle showing login form
  const handleHospitalLoginClick = () => {
    setShowLoginForm(true);
    navigate('/alreadydoctor');// Hide the signup form if visible
  };
 
  // Function to handle showing signup form
  const handleDoctorSignup = () => {
    setShowSignupForm(true);
    navigate('/registrationform');
  };
  const handlePatientSignup=()=>{
    setShowLoginForm(true);
    navigate('/patient-data');
  }

  // Function to handle canceling the signup
  const handleCancelClick = () => {
    setShowSignupForm(false);
    setShowLoginForm(false); // Hide both forms if needed
  };

  const handlePatientLoginClick=()=>{
    setShowSignupForm(true);
    navigate('/alreadypatient');
  }
  return (
    <div className="container">
      <header className="navbar">
        <div className="logo">HOPE</div>
        <nav>
          <ul className="nav-links">
            <li onClick={() => navigate('/')}>Home</li>
            <li onClick={handleHospitalLoginClick}>Login</li>
            <li onClick={() => navigate('/about-us')}>About Us</li>
            <li onClick={() => navigate('/contact-us')}>Contact Us</li>
          </ul>
        </nav>
        <button className="login-btn" onClick={handleHospitalLoginClick}>
          Login
        </button>
      </header>
      <main className="content">
        <div className="section hospital">
          <h2>For Hospitals</h2>
          <p>
            Manage patient records, analyze diagnosis trends, and access federated learning insights.
          </p>
          <button className="primary-btn" onClick={handleHospitalLoginClick}>
            Login
          </button>
          <p className="note"> Don't have an account? <a href="#" onClick={handleDoctorSignup}>Sign up here</a>
          </p>
        </div>
        <div className="section patient">
          <h2>For Patients</h2>
          <p>
            Access your reports, monitor your progress, and schedule consultations.
          </p>
          <button className="secondary-btn" onClick={handlePatientLoginClick}>Login</button>
          <p className="note">
            Don't have an account? <a href="#" onClick={handlePatientSignup}>Sign up here</a>
          </p>
        </div>
      </main>
      <footer className="footer">
        © 2024 TeleDR. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
