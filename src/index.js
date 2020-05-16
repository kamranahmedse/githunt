import React from "react";
import ReactDOM from "react-dom";
import { CSSReset, ThemeProvider } from "@chakra-ui/core";
import { App } from "./app";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <CSSReset />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
