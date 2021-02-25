import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'react-bootstrap';


class Header extends Component {
  render() {
    return(
      <header class="mb-4 bg-light">
        <Container>
          <Row>
            <Col sm="12" md="12" lg="12">
              <Navbar className="navbar-inverse" toggleable>
                <NavbarBrand href="/">
                  <img
                    src="logo.svg"
                    width="80"
                    alt="Logo"
                  />
                </NavbarBrand>
                
                <Navbar>
                  <Nav navbar>
                    <NavItem>
                      <NavLink href="/comments">Discover</NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink href="/report">My  List</NavLink>
                    </NavItem>
                  </Nav>
                </Navbar>
              </Navbar>
            </Col>
          </Row>
        </Container>
      </header>
    )
  }
}

export default Header;
