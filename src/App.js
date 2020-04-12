import React, { Fragment, useEffect } from "react";

import "materialize-css/dist/css/materialize.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";
import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/logs/logs";
import AddBtn from "./components/button/AddBtn";
import AddLogModal from "./components/modal/AddLogModal";
const App = () => {
  useEffect(() => {
    // init the materialise js
    M.AutoInit();
  }, []);
  return (
    <Fragment>
      <SearchBar />
      <div className='container'>
        <Logs />
        <AddBtn />
        <AddLogModal />
      </div>
    </Fragment>
  );
};

export default App;
