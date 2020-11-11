import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { Theme } from "./globalStyles";
import App from "./App";
import axios from "axios";

// production
axios.defaults.baseURL = "https://audioexpert.herokuapp.com";

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
