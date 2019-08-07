import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
// import { remote } from "electron";

/* declare global {
  interface Window {
    sharedPort: any;
  }
}*/

// const sharedPort = remote.getGlobal("sharedPort");

const sharedPort = 49862;

ReactDOM.render(
  <App sharedPort={sharedPort} />,
  document.getElementById("root")
);
