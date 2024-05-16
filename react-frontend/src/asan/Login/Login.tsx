import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (username && password) {
      // Call your login functionality here
      loginLink(username, password);

      // Redirect to the homepage
      window.location.href = '/homepage';
    } else {
      alert('Please fill in both email and password fields.');
    }
  };

  const loginLink = (username: string, password: string) => {
    fetch('http://localhost:8315/api/authenticate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);

        if (data.id_token) {
          localStorage.setItem('token', data.token);

          // Redirect the user upon successful login
          navigate('/home');
        } else {
          alert('Invalid username or password');
        }
      })
      .catch(error => {
        console.error('Login problem:', error);
      });
  };

  // REMINDER !!! NEED TO FIX AND ROUTE TO SIGN UP BUTTON PAGE BELOW
  return (
    <div className="login template d-flex justify-content-center align-items-center 100-w 100-vh bg-primary">
      <div className="40-w p-5 rounded bg-white">
        <form>
          <h3 className="text-center">Log in to Echo</h3>
          <div className="login-image"></div>
          <div className="mb-2">
            <label htmlFor="username">Username</label>
            <input type="email" placeholder="" className="form-control" value={username} onChange={handleUsernameChange} required={true} />
          </div>
          <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder=""
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
            <button className="btn btn-primary" onClick={handleLogin} disabled={!username || !password}>
              Log In
            </button>
          </div>
          <p className="text-right">
            Don't have an account?
            <Link to="/signup" className="ms-2">
              Sign up
            </Link>
          </p>
          <p className="text-right">
            <Link to="/homepage" className="ms-2">
              Continue As Guest
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
