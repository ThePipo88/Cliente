import React from "react";

import Navbar from "../components/Navbar";
import Departamento from "../components/Departamento";
import TrendingTracks from "../components/TrendingTracks";
import TrendingUsers from "../components/TrendingUsers";
import MusicMetric from "../components/MusicMetric";
import UserActivity from "../components/UserActivity";

function Departamentos() {
  return (
    <div className="metrics">
      <Navbar name = "Departamentos"/>
      <div className="grid-one">
        <Departamento />
      </div>
    </div>
  );
}

export default Departamentos;