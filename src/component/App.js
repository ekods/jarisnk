import React, { Component } from "react";

import { Container, Row, Col } from 'react-bootstrap';
import Content from './Content';



class App extends Component {
  render() {
    return(
      <div>
        <Container>
          <Row>
            <Col xs={12} md={12}>
              <Content />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
