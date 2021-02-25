import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./component/Header";
import App from "./component/App";
import Mymovie from "./component/page/Mymovie";

const AppRouter = () => (
  <Router>
    <div>
      <Header />

      <Route path="/" exact component={App} />
      <Route path="/" component={Mymovie} />
    </div>

  </Router>
);

export default AppRouter;
