import React from "react";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";
import { LoginNameField } from "../components/login/LoginNameField";

const Control = styled(Form.Control)`
  border-radius: 0;
`;

export const Login = () => (
  <Form>
    <LoginNameField
      label={"Email"}
      type={"email"}
      controlId={"user_email"}
      className={"mb-3"}
    />
    <LoginNameField
      label={"Password"}
      type={"password"}
      controlId={"user_password"}
      className={"mb-3"}
    />
    <LoginNameField
      label={"Keep me logged in"}
      type={"checkbox"}
      controlId={"keep_login"}
      className={"mb-3"}
    />
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
);
