import React from "react";

import Navbar from "../components/Dashboard/Navbar";
import Caso from "../components/Casos/Caso";

function Casos() {
  
  return (
    <div className="metrics">
      <Navbar name = "Casos"/>
      <div className="grid-one">
        <Caso/>
      </div>
    </div>
  );
}

export default Casos;