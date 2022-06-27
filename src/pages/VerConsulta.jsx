import React from "react";
import { useLocation } from 'react-router-dom';
import Navbar from "../components/Dashboard/Navbar";
import Tramite from "../components/Tramites/Tramite";
import imagen from "../assets/documento.png";
import pendiente from "../assets/pendiente.png";
import subido from "../assets/subido.png";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import { useState } from "react";


function VerConsulta(props) {

  const [showAlert, setShowAlert] = useState(false);

  const documentos  = [
    {
     nombre: "Digitales",
     color: "rgb(178, 255, 214)",
     textoInferior: "Subido",
     icono: subido
    },
    {
      nombre: "Hoja de vida",
      color: "rgb(255, 255, 204)",
      textoInferior: "Pendiente",
      icono: pendiente
     }
  ]

  return (
    <div className="metrics">
      <Navbar name = {"Consulta  > Estado"}/>
      {documentos.map(documento => (
        <div className="grid-tracking">
        <div style={{backgroundColor:documento.color}} className="top__tracking">
           <h2 className="text_document">{documento.nombre}</h2>
              <div>
                <img src={imagen} alt="" style={{height:"150px", width:"150px", marginLeft: "5%"}}/>
              </div>
              <div style={{marginTop: "2%"}}>
                <img src={documento.icono} alt="" style={{height:"50px", width:"50px"}}/>
                <h3 className="text_document">{documento.textoInferior}</h3>
              </div>
          </div>
       </div>
      ))}
    </div>
  );
}

export default VerConsulta;