import React from "react";
import { useLocation } from 'react-router-dom';
import Navbar from "../components/Dashboard/Navbar";
import Tramite from "../components/Tramites/Tramite"
import { useState } from "react";


function VerConsulta(props) {

  const [showAlert, setShowAlert] = useState(false);

  const handleNameChange = (newName)=>{
    setShowAlert(newName);
  };

  return (
    <div className="metrics">
      
    </div>
  );
}

export default VerConsulta;