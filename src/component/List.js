import React, { Component } from "react";

import {
  Button,
  Accordion,
  Card
} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrashAlt, faListAlt } from '@fortawesome/free-solid-svg-icons';


class List extends Component {
  render() {
    return(
      <div>
        <Button
          className="pl-5 btn btn-primary btn-icon btn-icon-placement-left btn-icon-with-text btn-active"
          type="submit">
          <FontAwesomeIcon icon={faPlus} /> Create New List
        </Button>

        <Accordion className="my-4" defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              <FontAwesomeIcon icon={faListAlt} /> My List
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <ul>
                  <li className="py-2 pe-5 position-relative ">
                    <span className="float-start w-100 text-dark">
                      My New List
                      <FontAwesomeIcon icon={faTrashAlt} className="list-icon"/>
                    </span>
                  </li>
                  <li className="py-2 pe-5 position-relative ">
                    <span href="#" className="float-start w-100 text-dark">
                      My New List
                      <FontAwesomeIcon icon={faTrashAlt} className="list-icon"/>
                    </span>
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    )
  }
}

export default List;
