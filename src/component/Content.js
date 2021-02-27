import React, { Component } from "react";

import { Row, Col } from 'react-bootstrap';
import axios from "axios";
import moment from 'moment';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

class ContentHome extends Component {
  state = {
    movie: [],
    isLoading: true,
    errors: null
  };

  getMovie() {
    axios
      .get("https://api.themoviedb.org/3/discover/movie?page=1&api_key=943cc4f77f40afc90157127eac5065c1")
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
    const { isLoading, movie } = this.state;

    return (
      <React.Fragment>
        <Row>
        {!isLoading ? (
            movie.map((movie,index) => {
              const { poster_path } = movie;
              const id = movie.id;
              const release_date = movie.release_date;
              const short_overview = movie.overview.substring(0, 50) + '...';

              return (
                <Col xs={6} md={3} key={id}>
                  <div className="item-movie">
                    <div className="card_add">
                      <span className="share-toggle share-icon">
                        <FontAwesomeIcon icon={faPlus} size="lg" />
                      </span>
                    </div>

                    <div className="poster" style={{backgroundImage: `url(https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path})`}}></div>
                    <div className="p-3 short-detail-movie">
                      <p>
                        <b>{movie.title} - {moment(release_date).format("YYYY")}</b>
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

export default ContentHome;
