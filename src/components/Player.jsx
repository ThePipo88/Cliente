import React from "react";
import { FiSkipBack, FiSkipForward } from "react-icons/fi";
import { FaPause } from "react-icons/fa";
import thumbnail from "../assets/thumbnail.jpg";
import { Link } from 'react-router-dom';
import { IoLogOut } from "react-icons/io5";
function Player() {
  return (
    <div className="player">
      <div className="links">
          <ul>
            <li className="active">
              <IoLogOut />
              <Link to={"/login"}>
                 <span className='nav-text'>Cerrar Sesion</span>
                </Link>
            </li>
          </ul>
        </div>
    </div>
  );
}

export default Player;
