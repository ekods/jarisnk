import React, { Component } from "react";

import axios from "axios";
import moment from 'moment';
import {
  Row,
  Col,
  Dropdown,
} from 'react-bootstrap';

import FontAwesome from 'react-fontawesome'


class ContentMymovie extends Component {
  state = {
    movie: [],
    isLoading: true,
    errors: null
  };

  getMovie() {
    axios
      .get("https://api.themoviedb.org/3/discover/movie?api_key=943cc4f77f40afc90157127eac5065c1")
      .then(response =>
        response.data.results.map(movie => ({
          id: `${movie.id}`,
          title: `${movie.title}`,
          adult: `${movie.adult}`,
          backdrop_path: `${movie.backdrop_path}`,
          original_title: `${movie.original_title}`,
          overview: `${movie.overview}`,
          poster_path: `${movie.poster_path}`,
          release_date: `${movie.release_date}`,
        }))
      )
      .then(movie => {
        this.setState({
          movie,
          isLoading: false
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.getMovie();
  }


  render() {
    const { movie } = this.state;
    return (
      <React.Fragment>
        <Row>
          {movie.map((movie, index) => (

            <Col xs={6} md={4}>
              <div className="item-movie-inner">
                <div className="card_add">
                  <span className="share-toggle share-icon">
                    <FontAwesome className="fa fa-times" name="fa-times" />
                  </span>
                </div>
                <div className="poster" style={{backgroundImage: `url(https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path})`}}></div>
                <div className="p-3 short-detail-movie">
                  <p>
                    <b>{movie.title} - {moment(movie.release_date).format("YYYY")}</b>
                  </p>
                  <small>{movie.overview.substring(0, 100) + '...'}</small>
                </div>
              </div>
            </Col>

          ))}
        </Row>
      </React.Fragment>
    );
  }
}

export default ContentMymovie;
