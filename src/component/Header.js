import React, { Component } from "react";
import { Link } from "react-router-dom";
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
      <header className="mb-4 bg-light">
        <Container>
          <Row>
            <Col sm="12" md="12" lg="12">
              <Nav className="navbar navbar-light navbar-expand-sm">
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
                      <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li>
                      <Link to="/my-movie" className="nav-link">My Movie</Link>
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
