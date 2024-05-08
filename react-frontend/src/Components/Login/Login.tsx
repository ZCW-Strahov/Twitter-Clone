import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (email && password) {
      navigate('home');
    } else {
      alert('Please fill in both email and password fields.');
    }
  };

  return (
    <div className="login template d-flex justify-content-center align-items-center 100-w 100-vh bg-primary">
      <div className="40-w p-5 rounded bg-white">
        <form>
          <h3 className="text-center">Login in to Echo</h3>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control"
              value={email}
              onChange={handleEmailChange}
              required={true}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control"
              value={password}
              onChange={handlePasswordChange}
              required={true}
            />
          </div>
          <div>
            <input type="checkbox" className="custom-control custom-checkbox" id="check" />
            <label htmlFor="check" className="custom-input-label">
              Remember me
            </label>
          </div>
          <div className="d-grid">
            <button className="btn btn-primary" onClick={handleLogin} disabled={!email || !password}>
              Log in
            </button>
          </div>
          <p className="text-right">
            Forgot <a href="/">Password?</a>
            <Link to="/signup" className="ms-2">
              Sign up to Echo
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
