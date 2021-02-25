import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Navbar,
  NavbarBrand,
  Nav,
} from 'react-bootstrap';


class Header extends Component {
  render() {
    return(
      <header class="mb-4 bg-light">
        <Container>
          <Row>
            <Col sm="12" md="12" lg="12">
              <nav class="navbar navbar-light bg-light navbar-expand-sm">
                <a class="navbar-brand" href="/">
                  <img
                    src="logo.svg"
                    width="80"
                    alt="Logo"
                  />
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-list-2" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbar-list-2">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <Link to="/" class="nav-link">Home</Link>
                    </li>
                    <li>
                      <Link to="/my-movie" class="nav-link">My Movie</Link>
                    </li>

                  </ul>
                </div>
              </nav>
            </Col>
          </Row>
        </Container>
      </header>
    )
  }
}

export default Header;
