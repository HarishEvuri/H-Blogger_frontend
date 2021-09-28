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
      light: "#606771",
      main: "#39424e",
      dark: "#272e36",
      contrastText: "#fff",
    },
    secondary: {
      light: "#48ba6f",
      main: "#1ba94c",
      dark: "#127635",
      contrastText: "#fff",
    },
    neutral: {
      main: "#fff",
      contrastText: "#39424e",
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
