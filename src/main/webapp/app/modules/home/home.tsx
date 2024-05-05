import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Alert, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useAppSelector } from 'app/config/store';

export const Home = () => {
  const account = useAppSelector(state => state.authentication.account);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleLogin = () => {
    // You can implement your login logic here
    // For simplicity, let's just check if username and password are 'admin'
    if (username === 'admin' && password === 'admin') {
      // Simulate successful login
      // Replace this with actual authentication logic
      alert('Login successful!');
    } else {
      setLoginError('Invalid username or password.');
    }
  };

  return (
    <Row>
      <Col md="9">
        <h1 className="display-4">Hello, World!</h1>
        {account?.login ? (
          <div>
            <Alert color="success">You are logged in as user &quot;{account.login}&quot;.</Alert>
          </div>
        ) : (
          <div>
            <Form>
              <FormGroup>
                <Label for="username">Username</Label>
                <Input
                  type="text"
                  name="username"
                  id="username"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  placeholder="Enter your username"
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />
              </FormGroup>
              {loginError && <Alert color="danger">{loginError}</Alert>}
              <Button onClick={handleLogin} color="primary">
                Login
              </Button>
            </Form>
            <p>
              Don't have an account? <Link to="/signup">Sign up</Link>
            </p>
          </div>
        )}
      </Col>
    </Row>
  );
};

export default Home;
