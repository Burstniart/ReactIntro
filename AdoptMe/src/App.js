import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ReactDOM from "react-dom"; //this imports everything
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";

// JSX syntax
const App = () => {
  return (
    <BrowserRouter>
      <h1>Adopt Me!</h1>
      <Routes>
        <Route path="/details/:id" element={<Details/>} />
        <Route path="/" element={<SearchParams/>} />
      </Routes>
    </BrowserRouter>
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
