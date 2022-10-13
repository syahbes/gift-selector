import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import theme from "../Theme";
import App from "./App";
// import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <main>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </main>
);
