import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  NavbarBrand,
  Nav,
} from 'react-bootstrap';


class Header extends Component {
  render() {
    return(
      <header className="bg-dark fixed-top">
        <Container>
          <Row>
            <Col sm="12" md="12" lg="12">
              <Nav className="navbar navbar-dark navbar-expand-sm">
                <NavbarBrand>
                  <a className="navbar-brand" href="/">
                    <img
                      src="logo.svg"
                      width="80"
                      alt="Logo"
                    />
                  </a>
                </NavbarBrand>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-list-2" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar-list-2">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <NavLink
                      to="/"
                      activeClassName="activeRoute"
                      className="nav-link text-uppercase">
                        Discover
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                      to="/my-movie"
                      activeClassName="activeRoute"
                      className="nav-link text-uppercase">
                        My Movie
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </Nav>
            </Col>
          </Row>
        </Container>
      </header>
    )
  }
}

export default Header;
