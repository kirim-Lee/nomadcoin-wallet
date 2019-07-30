import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { remote } from "electron";

declare global {
  interface Window {
    sharedPort: any;
  }
}

const sharedPort = remote.getGlobal("sharedPort");

alert(sharedPort);
// window.sharedPort = sharedPort;

ReactDOM.render(<App />, document.getElementById("root"));
