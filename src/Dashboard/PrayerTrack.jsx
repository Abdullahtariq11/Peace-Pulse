import React, { useState } from "react";
import "./PrayerTrack.css";
import SetPrayerStatus from "./components/SetPrayerStatus";
import EditPrayer from "./components/EditPrayer";

function PrayerTrack() {

  

  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Adding 1 because January is 0
  const day = String(currentDate.getDate()).padStart(2, '0');
  
  const formattedDate = `${year}-${month}-${day}`;

  

  return (
    <div className="prayer-track-container">
      <h2>Prayer Tracker</h2>
      <p>Did you pray today?</p>
      <form>
      <p className="current-date">{formattedDate}</p>
        <SetPrayerStatus dateSelected={formattedDate}/>
        <EditPrayer/>
        
      </form>
      
    </div>
  );
}

export default PrayerTrack;
