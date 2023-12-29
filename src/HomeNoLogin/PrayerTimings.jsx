import React, { useEffect, useState } from "react";
import "./PrayerTimings.css"
import axios from 'axios';



function PrayerTimings(){
const [prayerTimes, setPrayerTimes] = useState(null);
const [currentDate, setCurrentDate] = useState(new Date().toISOString().split('T')[0]);

const fetchData=async()=>{
    try {
        const [year, month, day] = currentDate.split('-');
        const response = await axios.get(
          ` http://api.aladhan.com/v1/timingsByCity?city=Vancouver&country=CA&method=8`
        
        );

        // Assuming the API returns an object with data containing prayer times
        setPrayerTimes(response.data.data);
      } catch (error) {
        console.error('Error fetching prayer times:', error);
      }

}

useEffect(()=>{
    fetchData();
},[currentDate])

    return (
        <div className="PrayerTimings">
        <h1 className="PrayerTimings-heading">Prayer Times for Vancouver on {currentDate}</h1>
        {prayerTimes && (
          <ul>
            <li>
              <strong>Fajr:</strong> {prayerTimes.timings.Fajr}
            </li>
            <li>
              <strong>Dhuhr:</strong> {prayerTimes.timings.Dhuhr}
            </li>
            <li>
              <strong>Asr:</strong> {prayerTimes.timings.Asr}
            </li>
            <li>
              <strong>Maghrib:</strong> {prayerTimes.timings.Maghrib}
            </li>
            <li>
              <strong>Isha:</strong> {prayerTimes.timings.Isha}
            </li>
          </ul>
        )}
      </div>
    
    )
};
export default PrayerTimings;