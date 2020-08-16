import React from "react";
import Header from "./components/Header";
import Project from "./components/Project";
import Util from "./utils/Header/index.json";

function App() {
  return (
    <div>
      <Header {...Util}></Header>
      <Project />
    </div>
  );
}

export default App;
