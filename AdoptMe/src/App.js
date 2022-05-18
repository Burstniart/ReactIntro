import React from "react";
// import ReactDOM from "react-dom"; //this imports everything
import { render } from "react-dom";


const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.color),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Hanzo",
      animal: "Cat",
      color: "Gray & White",
    }),
    React.createElement(Pet, {
      name: "Hamtaro",
      animal: "Hamster",
      color: "Orange",
    }),
    React.createElement(Pet, {
      name: "Bambi",
      animal: "Dog",
      color: "Black, brown & White",
    }),
  ]);
};
render(React.createElement(App), document.getElementById("root"));
