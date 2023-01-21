import React from 'react';
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavItem,
  NavbarBrand,
  Container
} from "reactstrap";
import { BiUserPlus } from "react-icons/bi";

export const Heading = () => {
  return (
    <Navbar color="dark rounded" dark>
      <Container  >
        <NavbarBrand  href="/">My Team</NavbarBrand>
        <Nav>
          <NavItem>
            <Link className="btn btn-dark" to="/add"><BiUserPlus /></Link>
          </NavItem>
        </Nav>

      </Container>
    </Navbar>
  )
}
