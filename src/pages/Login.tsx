import React from "react";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";

const Control = styled(Form.Control)`
  border-radius: 0;
`;

export const Login = () => (
  <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Keep me logged in" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
);
