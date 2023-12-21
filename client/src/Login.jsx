import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Card, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

import AccountPage from './AccountPage';
import HomePage from './HomePage';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [user, setUser] = useState(null);
  // const navigate = useNavigate(); // Use react-router-dom's useNavigate hook

  const handleLogin = () => {
    // Simulate fake authentication
    if (username === 'Snehal' && password === 'password@123') {
      // Set user data in state upon successful login
      setUser({
        username: 'Snehal',
        email: 'snehal@gmail.com',
        // Add other user data as needed
      });

      setShowError(false);

      // Navigate to the AccountPage component on successful login
      // navigate('/account');
    } else {
      // Display error if login fails
      setShowError(true);
    }
  };

  // If user is authenticated, render the AccountPage component
  if (user) {
    return <HomePage user={user} />;
  }

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={4}>
          <Card style={{ width: '500px' }}>
            <Card.Body style={{ padding: '0px' }}>
              <h2 className="text-center mb-4">Login</h2>

              {showError && (
                <Alert variant="danger" className="mb-4">
                  Invalid username or password.
                </Alert>
              )}

              <Form>
                <Form.Group controlId="formBasicUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={{ fontSize: '18px', padding: '10px' }}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ fontSize: '18px', padding: '10px' }}
                  />
                </Form.Group>

                <Button variant="primary" type="button" onClick={handleLogin} style={{ fontSize: '20px', padding: '10px' }}>
                  Login
                </Button>
              </Form>

              <div className="mt-3 text-center">
                <a href="/forgot-password">Forgot Password?</a>
              </div>
            </Card.Body>
          </Card>

          <div className="mt-3 text-center">
            Don't have an account? <a href="/register">Register</a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
