import React, { lazy, Suspense } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import MenuProvider from "./components/navbar/Context";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import ScrollToTopButton from "./components/scrollToTop/ScrollToTop";
import ScrollTopChangeRoute from "./functions/ScrollToTop";
import NotFound from "./views/NotFound";

const Home = lazy(() => import("./views/Home"));
const About = lazy(() => import("./views/About"));
const Besoft = lazy(() => import("./views/Besoft"));
const Listo = lazy(() => import("./views/Listo"));
const Airline = lazy(() => import("./views/Airline"));
const Blackbull = lazy(() => import("./views/Blackbull"));
const Service = lazy(() => import("./views/Service"));
const SmartGloves = lazy(() => import("./views/SmartGloves"));

export default () => (
  <MenuProvider>
    <BrowserRouter>
      <Navbar />
      <ScrollToTopButton />
      <ScrollTopChangeRoute />
      <Suspense fallback="">
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} classNames="fade" timeout={300}>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route
                    exact
                    path="/project/social-service"
                    component={Service}
                  />
                  <Route
                    exact
                    path="/project/smart-gloves"
                    component={SmartGloves}
                  />
                  <Route exact path="/project/besoft" component={Besoft} />
                  <Route exact path="/project/listo" component={Listo} />
                  <Route exact path="/project/airline" component={Airline} />
                  <Route
                    exact
                    path="/project/blackbull"
                    component={Blackbull}
                  />
                  <Route component={NotFound} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </Suspense>
    </BrowserRouter>
  </MenuProvider>
);
