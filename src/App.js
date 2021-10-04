import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CreateBlog from "./components/CreateBlog";
import { Container, Box } from "@mui/material";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Container sx={{ marginTop: 12 }}>
        <Switch>
          <Route
            path="/"
            exact
            component={() => <Redirect to="/blogs?page=1" />}
          />
          <Route path="/blogs" exact component={Home} />
          <Route path="/blogs/create" component={CreateBlog} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
