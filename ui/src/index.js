import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
const { remote } = require('electron');

const sharedPort = remote.getGlobal("sharedPort") || 60155;

ReactDOM.render( <App sharedPort = {sharedPort} />,
	document.getElementById("root")
);