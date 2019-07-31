import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { remote } from 'electron';


const sharedPort = remote.getGlobal("sharedPort");

alert(sharedPort);
window.sharedPort = sharedPort;

ReactDOM.render( < App / > , document.getElementById("root"));