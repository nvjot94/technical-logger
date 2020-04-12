import React, { useEffect } from "react";

import "materialize-css/dist/css/materialize.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";
import SearchBar from "./components/layout/SearchBar";
const App = () => {
  useEffect(() => {
    // init the materialise js
    M.AutoInit();
  });
  return (
    <div className="App">
      <SearchBar />
    </div>
  );
};

export default App;
