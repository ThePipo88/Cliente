import React from "react";
import { useLocation } from 'react-router-dom';
import Navbar from "../components/Dashboard/Navbar";
import Gestionar from "../components/Casos/Gestionar";
import { useState } from "react";


function Tramites(props) {

  const [showAlert, setShowAlert] = useState(false);

  const handleNameChange = (newName)=>{
    setShowAlert(newName);
  };

  const location = useLocation();

  const data = location.state;

  return (
    <div className="metrics">
      <Navbar name = "Casos > Gestionar"/>
      <div className="grid-one">
      <Gestionar id={data.myData.id_cons} nombre={data.myData.nombre} />
      </div>
    </div>
  );
}

export default Tramites;