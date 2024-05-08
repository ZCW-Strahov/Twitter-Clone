import React, { useState } from 'react';
import './Signup.css';
import { registerUser } from '../Apis/Register';

function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await registerUser(username, firstName, lastName, email, password);
      window.location.href = '/login';
    } catch (error) {
      alert('Failed to register user.');
    }
  };

  return (
    <div className="signup template d-flex justify-content-center align-items-center 100-w 100-vh bg-primary">
      <div className="40-w p-5 rounded bg-white">
        <form onSubmit={handleSignUp}>
          <h3 className="text-center">Sign up to Echo</h3>
          <div className="mb-2">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="Enter username"
              className="form-control"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              placeholder="Enter first name"
              className="form-control"
              value={firstName}
              onChange={handleFirstNameChange}
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              placeholder="Enter last name"
              className="form-control"
              value={lastName}
              onChange={handleLastNameChange}
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input type="text" placeholder="Enter email" className="form-control" value={email} onChange={handleEmailChange} required />
          </div>

          <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div>
            <input type="checkbox" className="custom-control custom-checkbox" id="check" />
            <label htmlFor="check" className="custom-input-label">
              Remember me
            </label>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign up to Echo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
