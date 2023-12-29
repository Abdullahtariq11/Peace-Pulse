import React, { useState } from "react";
import "../PrayerTrack.css";
import SetPrayerStatus from "./SetPrayerStatus";

function EditPrayer() {
  const [isSelected, setIsSelected] = useState(false);
  const [showDateInput, setShowDateInput] = useState(false);
  const [dateSelected,setDate]=useState("");

  const handleSelect = (e) => {
    setIsSelected(true);
    setDate(`${e.target.value}`)
    //setShowDateInput(false); // Hide date input after selecting a date
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setShowDateInput(value === "Yes");
    setIsSelected(false); // Reset prayed status when changing the date
  };



  return (
    <div >
        <p className="edit-label">Do you want to edit any other date?</p>
        <select className="edit-dropdown" onChange={handleChange}>
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        {showDateInput && (
          <div className="date-input">
            <input type="date" 
             max={new Date().toISOString().split("T")[0]} // Get today's date and set as maximum
             onChange={handleSelect} />
          </div>
        )}

        {isSelected && (
          <SetPrayerStatus dateSelected={dateSelected}/>
        )}
      
    </div>
  );
}

export default EditPrayer;
