import React, { Component } from "react";

import { Container, Row, Col } from 'react-bootstrap';


class Footer extends Component {
  render() {
    return(
      <footer className="p-3 bg-light">
        <Container>
          <Row>
            <Col className="text-center">
              <small>&copy; {new Date().getFullYear()} Copyright: <a href="https://theteamtheteam.com/resume"> EDS</a></small>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
