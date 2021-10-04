import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { reducers } from "./reducers";
import App from "./App";
import "./index.css";

const store = createStore(reducers, {}, compose(applyMiddleware(thunk)));

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
      contrastText: "#39424e",
    },
    secondary: {
      main: "#1a8917",
      light: "#47a045",
      contrastText: "#fff",
    },
    teritiary: {
      main: "#39424e",
      contrastText: "#fff",
    },
    neutral: {
      main: "#39424e",
      contrastText: "#fff",
    },
  },
});

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
