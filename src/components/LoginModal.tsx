import React from "react";
import { Modal, Button, ModalBody, CloseButton } from "react-bootstrap";
import { Login } from "../pages/Login";
import ModalHeader from "react-bootstrap/ModalHeader";

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
          <Login />
        </ModalBody>
        <Modal.Footer className={"justify-content-start"}>
          <Button
            variant={"primary"}
            type={"submit"}
            onClick={() => console.log("login ")}
          >
            Log in
          </Button>
          <Button variant={"danger"} onClick={hideModal} type={"reset"}>
            Cancel
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};
