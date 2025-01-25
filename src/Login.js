import React from "react";
import { Button, Form, Container, Row, Col, Card } from "react-bootstrap";

function Login() {
  return (
    <Container fluid className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <Row>
        <Col xs={12} sm={8} md={6} lg={4}>
          <Card className="shadow-lg">
            <Card.Body>
              <h3 className="text-center mb-4">Login</h3>
              <Form>
                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formPassword" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100 mb-3">
                  Log in
                </Button>
                <div className="text-center">
                  <a href="/register" className="text-decoration-none">
                    Don't have an account? Register
                  </a>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
