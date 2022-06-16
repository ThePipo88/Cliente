import React from "react";

import Navbar from "../components/Dashboard/Navbar";
import Parametro from "../components/Parametros/Parametro";
import { Alert } from 'antd';
import { useState } from "react";

function Parametros() {

  const [showAlert, setShowAlert] = useState(false);

  const handleNameChange = (newName)=>{
    setShowAlert(newName);
  };

  return (
    <div className="metrics">
      <Navbar name = "Parametros"/>
      <div className="grid-one">
      <Parametro nameChange={handleNameChange}/>
      </div>
    </div>
  );
}

export default Parametros;