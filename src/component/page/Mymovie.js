import React, { Component } from "react";

import { Container, Row, Col } from 'react-bootstrap';
import Header from '../Header';
import List from '../List';
import Content from '../Content';



class Mymovie extends Component {
  render() {
    return(
      <div>
        <Container>
          <Row>
            <Col xs={12} md={3}>
              <List />
            </Col>
            <Col xs={12} md={9}>
              <Content />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Mymovie;
