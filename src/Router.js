import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import MenuProvider from "./components/navbar/Context";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./views/Home";
import About from "./views/About";
import Project from "./views/Project";
import Service from "./views/Service";
import SmartGloves from "./views/SmartGloves"
import ScrollToTopButton from "./components/scrollToTop/ScrollToTop";
import NotFound from "./views/NotFound";
import ScrollTopChangeRoute from "./functions/ScrollToTop";

export default () => (
  <MenuProvider>
    <BrowserRouter>
      <Navbar />
      <ScrollToTopButton />
      <ScrollTopChangeRoute />
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={300}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/project/social-service" component={Service} />
                <Route exact path="/project/smart-gloves" component={SmartGloves} />
                <Route exact path="/project/besoft" component={Project} />
                <Route component={NotFound} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </BrowserRouter>
  </MenuProvider>
);
