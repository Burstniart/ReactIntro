import React from "react";
// import ReactDOM from "react-dom"; //this imports everything
import { render } from "react-dom";
import SearchParams from "./SearchParams";

// JSX syntax
const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

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
render(<App />, document.getElementById("root"));

// render(React.createElement(App), document.getElementById("root"));
