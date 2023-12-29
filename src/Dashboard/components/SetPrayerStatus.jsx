import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "../PrayerTrack.css";

function SetPrayerStatus({ dateSelected }) {
    const [prayerData, setPrayerData] = useState({
        userId: 0,
        dashboardId: 0,
        prayerName: "",
        date: "",
        dateTime: "",
        status: ""
    })
    const handleChange = (e) => {
        const { id, value } = e.target
        // setPrayerData({...prayerData,[id]:value})
        setPrayerData({...prayerData,prayerName:id,status:value})
    }

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://localhost:7221/Prayer/PrayerSetStatus", {
                userId: 1,
                dashboardId: 1,
                prayerName: prayerData.prayerName,
                date: dateSelected,
                dateTime: "2023-12-20T06:00:29.539Z",
                status: prayerData.status
            })
          

            if (response.status === 200) {
                alert("Successful");
            }
            else {
                alert("Signup failed: ${response.data}")
            }

        } catch (error) {
            console.error("Error:", error);
            alert('Please try again.');
            
        }

    }

    return (
        <div className="prayer-checkboxes">
            {["Fajr", "Zuhr", "Asr", "Maghrib", "Isha"].map((prayer) => (
                <label key={prayer}>
                    {prayer}
                    <select id={prayer} onChange={handleChange}>
                        <option value="Unfilled">Set Status</option>
                        <option value="Completed">Prayed</option>
                        <option value="Missed">Missed</option>
                    </select>
                    <button onClick={handleClick} className="save-button">save</button>
                </label>
            ))}

        </div>
    )
}
export default SetPrayerStatus;