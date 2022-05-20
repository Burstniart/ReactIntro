import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import ReactDOM from "react-dom"; //this imports everything
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import ThemeContext from "./ThemeContex";
import Details from "./Details";

// JSX syntax
const App = () => {
  const theme = useState("purple")
  return (
    <ThemeContext.Provider value={theme}>
    <BrowserRouter>
      <header>
      <Link to="/">Adopt Me!</Link>
      </header>
      <Routes>
        <Route path="/details/:id" element={<Details/>} />
        <Route path="/" element={<SearchParams/>} />
      </Routes>
    </BrowserRouter>
    </ThemeContext.Provider>
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
