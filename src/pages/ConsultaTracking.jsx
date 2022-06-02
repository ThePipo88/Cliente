import React from "react";

import Navbar from "../components/Navbar";
import DailyMetric from "../components/DailyMetric";
import TrendingTracks from "../components/TrendingTracks";
import TrendingUsers from "../components/TrendingUsers";
import MusicMetric from "../components/MusicMetric";
import UserActivity from "../components/UserActivity";

function ConsultaTracking() {
  return (
    <div className="metrics">
      <Navbar name = "Consulta Tracking"/>
      <div className="grid-one">
        <DailyMetric />
        <MusicMetric />
      </div>
    </div>
  );
}

export default ConsultaTracking;