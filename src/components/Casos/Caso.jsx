import React from "react";
import { ResponsiveContainer } from "recharts";
import TableCasos  from "./TableCasos";
import  CrearCaso from './CrearCaso';
import TableU  from "../Departamentos/TableU";


function Caso(){

    return(
        <div className="top__card">
            <div className="container_top">
                <div className="container_text">
                    <h3>Casos departamento</h3>
                </div>
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <div className="container_table">
                <TableU origin={true}/>
                </div>
            </ResponsiveContainer>
        </div>
    )  
}

export default Caso;