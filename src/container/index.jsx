import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Homepage from "./homepage/index";
import About from "./homepage/About";
import Service from "./homepage/Service";
import ServiceDetail from "./homepage/ServiceDetail";
import Blog from "./homepage/Blog";
import BlogDetail from "./homepage/BlogDetail";
import Team from "./homepage/Team";
import Contact from "./homepage/Contact";
import Faq from "./homepage/Faq";
import Terms from "./homepage/Terms";
import Policy from "./homepage/Policy";
import Error from "./homepage/Error";
import Pricing from "./homepage/Pricing";

const Index = (props) => {
  return (
    <Fragment>
      <Router forceRefresh>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/service">
            <Service />
          </Route>
          <Route exact path="/service/detail">
            <ServiceDetail />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route exact path="/blog/detail">
            <BlogDetail />
          </Route>
          <Route exact path="/team">
            <Team />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/faq">
            <Faq />
          </Route>
          <Route exact path="/terms">
            <Terms />
          </Route>
          <Route exact path="/policy">
            <Policy />
          </Route>
          <Route exact path="/pricing">
            <Pricing />
          </Route>
          <Route exact path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
};

export default Index;
