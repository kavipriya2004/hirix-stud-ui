// SignInPage.jsx
import React, { useEffect, useState } from 'react';
import groupImage from '../assets/Group.png';
import './SignIn.css';

const SignIn = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const remembered = localStorage.getItem('rememberMe');
    if (remembered === 'true') {
      setRememberMe(true);
      const savedEmail = localStorage.getItem('userEmail');
      if (savedEmail) setEmail(savedEmail);
    }
  }, []);

  const handleTogglePassword = () => {
    setPasswordVisible((prev) => !prev);
  };

  const handleRememberChange = (e) => {
    const checked = e.target.checked;
    setRememberMe(checked);
    if (checked) {
      localStorage.setItem('rememberMe', 'true');
      localStorage.setItem('userEmail', email);
    } else {
      localStorage.removeItem('rememberMe');
      localStorage.removeItem('userEmail');
    }
  };

  return (
    <div className="container">
      <div className="left-column">
        <div className="logo">Hirix</div>
        <img
          src={groupImage}
          alt="Login Illustration"
          className="illustration"
        />
      </div>
      <div className="right-column">
        <div className="sign-in-form">
          <h5>Sign in</h5>
          <div className="form-group">
            <label htmlFor="email">Email or phone number</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-field">
              <input
                type={passwordVisible ? 'text' : 'password'}
                id="password"
                name="password"
              />
              <button
                type="button"
                className="password-toggle"
                onClick={handleTogglePassword}
              >
                {passwordVisible ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
          <div className="remember-me">
            <div>
              <input
                type="checkbox"
                id="remember"
                name="remember"
                checked={rememberMe}
                onChange={handleRememberChange}
              />
              <label htmlFor="remember">Remember me</label>
            </div>
            <a href="#" className="help-link">Need help?</a>
          </div>
          <button className="sign-in-button">Sign in</button>
          <div className="recaptcha-notice">
            This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#">Learn more.</a>
          </div>
          <div className="footer">
            <span className="footer-left">All Rights Reserved.</span>
            <span className="footer-right">
              Powered by <span className="footer-highlight">SmartSide</span>
            </span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SignIn;
