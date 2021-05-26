import React from "react";
import { Modal, Button, ModalBody, CloseButton } from "react-bootstrap";
import { Login } from "../pages/Login";
import ModalHeader from "react-bootstrap/ModalHeader";
import { LoginNameField } from "./login/LoginNameField";

export type LoginModalProps = {
  show?: boolean;
  hideModal: () => void;
};

export const LoginModal = ({ show, hideModal }: LoginModalProps) => {
  return (
    <Modal onHide={hideModal} show={show} animation={true}>
      <ModalHeader>
        <Modal.Title>Login</Modal.Title>
        <button
          type="button"
          className="btn-close"
          aria-label="Hide"
          onClick={hideModal}
        />
      </ModalHeader>
      <form>
        <ModalBody>
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
        </ModalBody>
        <Modal.Footer className={"justify-content-start"}>
          <Button
            variant={"primary"}
            type={"submit"}
            onClick={() => console.log("login ")}
          >
            Log in
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};
