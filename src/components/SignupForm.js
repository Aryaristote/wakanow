import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { submitUser } from '../api/api';
import { useNavigate } from 'react-router-dom';

// ... (imports)

const SignupForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validations
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (formData.password.length < 6) {
      setErrorMessage('Password must have at least 6 characters.');
      return;
    }

    try {
      const newUser = await submitUser(formData);
      if (newUser.token && newUser.token === 'QpwL5tke4Pnpja7X4') {
        navigate('/admin');
      } else {
        console.log('Thanks');
      }
      setSuccessMsg("User submitted successfully");
    } catch (error) {
      setErrorMessage(error.message || 'An error occurred');
    }
  };

  const handleClick = () => {
    navigate('/admin');
  }

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <div className="imgcontainer">
          <img
            src="https://img1.freepng.fr/20180331/ffe/kisspng-computer-icons-user-clip-art-user-5abf13dad7aed4.5909364715224718988835.jpg"
            alt="Avatar"
            className="avatar"
          />
        </div>

        <div className="form-group">
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        </div>

        <div className="form-group">
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} /><br /><br />
          {errorMessage && <small className="errorMsg">{errorMessage}</small>}
          {successMsg && <small className="sucessMsg">{successMsg}</small>}
        </div>

        <button className="login-btn" type="submit">
          Sign up
        </button>
        <div className="seperator">
          <b>or</b>
        </div>
        <p>Sign in with your social media account</p>
        <div className="social-icon">
          <button type="button">
            <FaFacebookF />
          </button>
          <button type="button">
            <FaInstagram />
          </button>
          <button type="button">
            <FaLinkedinIn />
          </button>
          <button type="button">
            <FaTwitter />
          </button>
        </div>
        <div className="link">
          <p onClick={handleClick} >See User</p>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;