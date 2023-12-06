// Login.js
import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Card, Alert } from 'react-bootstrap';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);

  const handleLogin = () => {
    // Implement your login logic here
    // For simplicity, let's assume login fails if either username or password is empty
    if (username && password) {
      // Successful login logic here
      console.log('Logging in with:', username, password);
      setShowError(false);
    } else {
      // Display error if username or password is empty
      setShowError(true);
    }
  };

  return (
    <Container className="mt-5" style={{ backgroundImage: 'url("/path/to/your/background-image.jpg")', backgroundSize: 'cover', minHeight: '100vh' }}>
      <Row className="justify-content-center">
        <Col md={4}> {/* Increase the width of the Card */}
          <Card style={{ width: '500px' }}>
            <Card.Body style={{ padding: '0px' }}> {/* Increase the padding inside the Card */}
              <h2 className="text-center mb-4">Login</h2>

              {showError && (
                <Alert variant="danger" className="mb-4">
                  Please enter both username and password.
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
