import React from "react";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import TableU from "./TableU";
import {Table} from "react-bootstrap";


function Departamento() {
  return (
    <div className="top__card">
      <div className="container_top">
      <div className="container_text">
      <h3>Departamentos registrados</h3>
      </div>

      <div className="container_button">
      <button>Crear Nuevo Departamento</button>
      </div>
      </div>
      <ResponsiveContainer width="100%" height="100%">
         <div className="container_table">
         <TableU/>
         </div>
      </ResponsiveContainer>
    </div>
  );
}

export default Departamento;
