import React from "react";
import { Container } from "@mui/material";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route
          path="/"
          exact
          component={() => <Redirect to="/blogs?page=1" />}
        />
        <Route path="/blogs" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
