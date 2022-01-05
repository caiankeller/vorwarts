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
    fontFamily: "Roboto, sans-serif",
    h1: {
      fontFamily: "Inter",
      fontWeight: "bold",
    },
    h4: {
      fontFamily: "Inter",
      fontWeight: "bold",
    },
    body1: {
      textIndent: "1rem",
      textAlign: "justify",
      marginTop: "1rem",
    },
  },
  palette: {
    typography: { color: "white" },
    primary: {
      main: "#141414",
    },
    secondary: {
      main: "#fff",
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
