import { Form } from "react-bootstrap";
import React from "react";

export type LoginFieldProps = {
  label: string;
  controlId: string;
  type: string;
  info?: string;
  showLabel?: boolean;
  className?: string;
};

export const LoginNameField = ({
  label,
  type,
  info,
  controlId,
  showLabel,
  className,
}: LoginFieldProps) => (
  <Form.Group className={className} controlId={controlId}>
    {showLabel && <Form.Label>{label}</Form.Label>}
    {type === "checkbox" ? (
      <Form.Check type={type} label={label} />
    ) : (
      <Form.Control type={type} placeholder={label} />
    )}

    {info && <Form.Text className="text-muted">{info}</Form.Text>}
  </Form.Group>
);
