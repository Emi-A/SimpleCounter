//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/secondCounter.js";

let num0,
	num1,
	num2,
	num3,
	num4,
	num5 = 0;
let second_counter = 0;

setInterval(function(props) {
	num0 = Math.floor(second_counter / 1);
	num1 = Math.floor(second_counter / 100);
	num2 = Math.floor(second_counter / 1000);
	num3 = Math.floor(second_counter / 1000);
	num4 = Math.floor(second_counter / 10000);
	num5 = Math.floor(second_counter / 10000);

	second_counter++;

	ReactDOM.render(
		<Home
			dig0={num0}
			dig1={num1}
			dig2={num2}
			dig3={num3}
			dig4={num4}
			dig5={num5}
		/>,
		document.querySelector("#app")
	);
}, 1000);
