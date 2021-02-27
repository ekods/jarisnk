import React, { Component } from 'react';

import axios from "axios";
import moment from 'moment';
import {
  Row,
  Col,
} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome'


class ItemMovie extends Component {

  render() {
  return (
    <Col xs={6} md={3}>
      <div className="item-movie-inner">
        <div className="card_add">
          <span className="share-toggle share-icon">
            <FontAwesome className="fa fa-times" name="fa-times" />
          </span>
        </div>
        <div className="poster" style={{backgroundImage: `url(https://www.themoviedb.org/t/p/w220_and_h330_face${this.props.movie.poster_path})`}}></div>
        <div className="p-3 short-detail-movie">
          <p>
            <b>{this.props.movie.title} - {moment(this.props.movie.release_date).format("YYYY")}</b>
          </p>
          <small>{this.props.movie.overview.substring(0, 100) + '...'}</small>
        </div>
      </div>

    </Col>
  )
}
}

class ContentHome extends Component {
 constructor(props) {
 super(props);

 this.state = {
      movies: [],
      page: 1
  }
}

componentDidMount = () => {
  window.addEventListener('scroll', this.infiniteScroll);
  this.fetchData(this.state.page);
}

infiniteScroll = () => {
  if (
    window.innerHeight + document.documentElement.scrollTop
    === document.documentElement.offsetHeight
  )
  {
    let newPage = this.state.page;
    newPage++;
    this.setState({
      page: newPage
    });

    this.fetchData(newPage);
  }
}

fetchData = (pageNum) => {

  let movieUrl = 'https://api.themoviedb.org/3/discover/movie?page='+pageNum+'&api_key=943cc4f77f40afc90157127eac5065c1';

  fetch(movieUrl)
  .then(res=>res.json())
  .then(data => {
    this.setState({
      movies: [...this.state.movies,...data.results]
    })
  })
}

  render() {
  return (
    <Row>
     {this.state.movies.map((beerdata,idx) => (<ItemMovie key={idx} movie={beerdata} />))}
    </Row>
  );
}
}

export default ContentHome;
