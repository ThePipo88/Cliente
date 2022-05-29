import React from "react";
import { Link } from 'react-router-dom';
import { IoStatsChartSharp } from "react-icons/io5";
import { HiMusicNote } from "react-icons/hi";
import { FiUsers, FiSettings } from "react-icons/fi";
import { SiHomeassistant,SiFiles, SiOpenstreetmap, SiGooglesearchconsole } from "react-icons/si";
import Logo from "../assets/logo.png";
import Player from "./Player";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="upper__container">
        <div className="brand">
          <img src={Logo} alt="" />
        </div>
        <div className="links">
          <ul>
            <li className="active">
              <SiHomeassistant />
              <Link to={"/admin/departamentos"}>
                 <span className='nav-text'>Departamentos</span>
                </Link>
            </li>
            <li>
              <SiFiles />
              <Link to={"/admin/tramites"}>
                 <span className='nav-text'>Tramites</span>
                </Link>
            </li>
            <li>
              <SiOpenstreetmap />
              <Link to={"/admin/casos"}>
                 <span className='nav-text'>Casos</span>
                </Link>
            </li>
            <li>
              <SiGooglesearchconsole />
              <Link to={"/admin/parametros"}>
                 <span className='nav-text'>Parametros</span>
                </Link>
            </li>
            <li>
              <FiUsers />
              <Link to={"/admin/consulta"}>
                 <span className='nav-text'>Consulta Tracking</span>
                </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="lower__container">
        <div className="music__container">
          <Player />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
