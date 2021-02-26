import React, { Component } from "react";

import { Container, Row, Col } from 'react-bootstrap';
import List from '../List';
import ContentMymovie from './ContentMymovie';



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
              <ContentMymovie />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Mymovie;
