import React, { Component } from "react";

import { Row, Col } from 'react-bootstrap';
import axios from "axios";
import moment from 'moment';



class Content extends Component {
  state = {
    move: [],
    isLoading: true,
    errors: null
  };

  getUsers() {
    axios
      .get("https://api.themoviedb.org/3/discover/movie?page=1&api_key=943cc4f77f40afc90157127eac5065c1")
      .then(response =>
        response.data.results.map(move => ({
          id: `${move.id}`,
          title: `${move.title}`,
          adult: `${move.adult}`,
          backdrop_path: `${move.backdrop_path}`,
          original_title: `${move.original_title}`,
          overview: `${move.overview}`,
          poster_path: `${move.poster_path}`,
          release_date: `${move.release_date}`,
        }))
      )
      .then(move => {
        this.setState({
          move,
          isLoading: false
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.getUsers();
  }


  render() {
    const { isLoading, move } = this.state;
    return (
      <React.Fragment>
        <Row>
          {!isLoading ? (
            move.map(move => {
              const { poster_path } = move;
              const short_overview = move.overview.substring(0, 50) + '...';
              const release_date = move.release_date;

              return (
                <Col xs={6} md={3}>
                  <div class="item-move">
                    <div class="poster" style={{backgroundImage: `url(https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path})`}}></div>
                    <div class="p-3 short-detail-move">
                      <p>
                        <b>{move.title} - {moment(release_date).format("YYYY")}</b>
                      </p>
                      <small>{short_overview}</small>
                    </div>
                  </div>
                </Col>
              );
            })
          ) : (
            <p>Loading...</p>
          )}
        </Row>
      </React.Fragment>
    );
  }
}

export default Content;
