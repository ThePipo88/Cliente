import React from "react";
import { useLocation } from 'react-router-dom';
import Navbar from "../components/Navbar";


function Tramites(props) {

  const location = useLocation();
  const data = location.state;
  console.log(data)

  return (
    <div className="metrics">
      <Navbar name = "Tramites"/>
      <div className="grid-one">

      </div>
    </div>
  );
}

export default Tramites;