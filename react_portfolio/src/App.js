import React from "react";
import Header from "./components/Header";
import Util from "./utils/Header";
import Project from "./components/Project";


function App() {
  // console.log(x)
  return (
    <div>
      <Header {...Util}></Header>
      <Project />
    </div>
  );
}

export default App;
