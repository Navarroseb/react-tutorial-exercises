import React from "react"; //Main React.js library
import ReactDOM from "react-dom"; //we use ReactDOM to render into the DOM

const planets = ["Mars", "Venus", "Jupiter", "Earth", "Saturn", "Neptune"];

const planetsInHtml = planets.map((singlePlanet, i) => {
	return (
		<li className="list-group-item" key={i}>
			{singlePlanet}
		</li>
	);
});

// 2) add the array planetsInHTML inside the innerHTML of this ul
const content = <ul className="list-group m-5">{planetsInHtml}</ul>;

ReactDOM.render(content, document.querySelector("#myDiv"));
