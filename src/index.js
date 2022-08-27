import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { getAccessTokenCookie, setAccessTokenCookie } from "./utils";

function renderApp() {
  const container = document.getElementById("root");
  const root = createRoot(container);
  root.render(<App tab="App" />);}

// this initializes the app after the access token is set.
if (getAccessTokenCookie()) {
  // this executes if the app is run within flask:
  renderApp();
} else {
  // this executes if the app is run via npm start
  setAccessTokenCookie("webdev", "password", renderApp);
}
