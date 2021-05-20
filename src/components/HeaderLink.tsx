import { Nav, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";
import { LocationDescriptor } from "history";

export type HeaderLinkProps = {
  to: LocationDescriptor;
  children: any;
  className?: string;
};

export const HeaderLink = ({ to, children, className }: HeaderLinkProps) => (
  <NavLink as={Link} to={to} className={className}>
    {children}
  </NavLink>
);
