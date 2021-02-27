import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./component/Header";
import App from "./component/App";
import Mymovie from "./component/page/Mymovie";
import Footer from "./component/Footer";


const AppRouter = () => (
  <Router>
    <Header />

    <div className="py-5" style={{
      backgroundImage: `url(${process.env.PUBLIC_URL}/assortment-cinema-elements-red-background-with-copy-space2.jpg)`,
      backgroundPosition: 'center right',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
      <Route path="/" exact component={App} />
      <Route path="/my-movie" component={Mymovie} />
    </div>

    <Footer />
  </Router>
);

export default AppRouter;
