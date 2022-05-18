import React from "react";
// import ReactDOM from "react-dom"; //this imports everything
import { render } from "react-dom";
import Pet from "./Pet";

// JSX syntax
const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name = "Hanzo" animal = "Cat" color = "Gray & White"/>
      <Pet name = "Hamtaro" anima = "Hamster" color = "Orange"/>
      <Pet name = "Bambi" anima = "Dog" color = "Black, brown & White"/>
    </div>
  )
}

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Hanzo",
//       animal: "Cat",
//       color: "Gray & White",
//     }),
//     React.createElement(Pet, {
//       name: "Hamtaro",
//       animal: "Hamster",
//       color: "Orange",
//     }),
//     React.createElement(Pet, {
//       name: "Bambi",
//       animal: "Dog",
//       color: "Black, brown & White",
//     }),
//   ]);
// };
render(<App/>, document.getElementById("root"));

// render(React.createElement(App), document.getElementById("root"));
