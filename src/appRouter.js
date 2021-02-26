import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./component/Header";
import App from "./component/App";
import Mymovie from "./component/page/Mymovie";
import Footer from "./component/Footer";


const AppRouter = () => (
  <Router>
    <Header />

    <Route path="/" exact component={App} />
    <Route path="/my-movie" component={Mymovie} />

    <Footer />
  </Router>
);

export default AppRouter;
