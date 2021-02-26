import React, { Component } from "react";

import { Container, Row, Col } from 'react-bootstrap';
import Content from './Content';



class App extends Component {
  render() {
    return(
        <Container>
          <Row>
            <Col xs={12} md={12}>
              <Content />
            </Col>
          </Row>
        </Container>
    );
  }
}

export default App;
