import React from "react";
import MenuProvider from "./components/navbar/Context";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./views/Home";

export default () => (
  <MenuProvider>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  </MenuProvider>
);
