import React from "react";

import Navbar from "../components/Navbar";
import DailyMetric from "../components/Departamento";
import TrendingTracks from "../components/TrendingTracks";
import TrendingUsers from "../components/TrendingUsers";
import MusicMetric from "../components/MusicMetric";
import UserActivity from "../components/UserActivity";

function Casos() {
  
  return (
    <div className="metrics">
      <Navbar name = "Casos"/>
      <div className="grid-one">

      </div>
      <div className="grid-two">
        <TrendingTracks />
        <TrendingUsers />
        <UserActivity />
      </div>
    </div>
  );
}

export default Casos;