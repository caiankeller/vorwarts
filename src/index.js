import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";

var theme = createTheme({
  typography: {
    textAlign: "left",
    fontFamily: "Inter, Roboto",
    h1: {
      fontWeight: "bold",
    },
    body1: {
      fontWeight: "normal",
      fontFamily: "Roboto",
    },
  },
  palette: {
    primary: {
      main: "#141414",
    },
    secondary: {
      main: "#402be2",
    },
  },
});
theme = responsiveFontSizes(theme);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
