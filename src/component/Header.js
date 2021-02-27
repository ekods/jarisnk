import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  NavbarBrand,
  Nav,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faList } from '@fortawesome/free-solid-svg-icons';


const Header = props => {

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

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
              <button className="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink
                    to="/"
                    activeClassName="activeRoute"
                    className="nav-link text-bold">
                      <FontAwesomeIcon icon={faHome} />  Discover
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                    to="/my-movie"
                    activeClassName="activeRoute"
                    className="nav-link text-bold">
                      <FontAwesomeIcon icon={faList} /> My Movie
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

export default Header;
