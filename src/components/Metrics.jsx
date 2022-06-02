import React from "react";

import Navbar from "./Navbar";
import TrendingTracks from "./TrendingTracks";
import TrendingUsers from "./TrendingUsers";
import MusicMetric from "./MusicMetric";
import UserActivity from "./UserActivity";

function Metrics() {
  return (
    <div className="metrics">
      <Navbar />
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

export default Metrics;
