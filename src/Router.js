import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import MenuProvider from "./components/navbar/Context";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./views/Home";
import About from "./views/About";
import Project from "./views/Project";
import ScrollToTopButton from "./components/scrollToTop/ScrollToTop";
import NotFound from "./views/NotFound";

export default () => (
  <MenuProvider>
    <BrowserRouter>
      <Navbar />
      <ScrollToTopButton />
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={300}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
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
