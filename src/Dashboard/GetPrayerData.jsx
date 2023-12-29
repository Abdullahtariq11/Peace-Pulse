import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./GetPrayerData.css";


function GetPrayerData(){
    const [totalPrayerData,setPrayerData]=useState({})
    const[prayerData,setPrayerdata]=useState([])
    const [tab,setTab]=useState("")
    const [dateSelected,setDate]=useState("");

    const handleSelect = (e) => {
        const date = new Date(e.target.value);
        const day = date.getDate()+1;
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        const formattedDay = day < 10 ? `0${day}` : day;
        const formattedMonth = month < 10 ? `0${month}` : month;

        setDate(`${formattedMonth}-${formattedDay}-${year}`)
       
    };

    const fetchbyData=async ()=>{
        try {
            const response = await axios.get(
                `https://localhost:7221/Prayer/GetBydate/${dateSelected}`
              );
              setPrayerdata(response.data.$values)
              console.log(response.data.$values)
              if(response.status===404){
                console.log("set date")
            }
            
        } 
       
        catch (error) {
            console.log("error")
        }

    }

    const fetchData=async ()=>{
        try {
            const response = await axios.get(
                `https://localhost:7221/Dashboard/GetById/1`
              );
              
              setPrayerData(response.data)
            
        } catch (error) {
            console.log("error")
        }

    }
    useEffect(() => {
        fetchData()
        
        
      }, [fetchData]);

      useEffect(() => {
        if (dateSelected) {
            fetchbyData();
        }
    }, [dateSelected]);

      const handleClick=(e)=>{
        const selectedTab = e.target.getAttribute('data-tab');
        setTab(selectedTab)
      }

      

    return (
        <div className="Getprayer-body-container">
      <h2 className="Getprayer-heading">Prayer Status</h2>
      <div className="Getprayer-status-container">
        <ul className="Getprayer-nav-list">
          <li className="Getprayer-nav-item" data-tab={"total"} onClick={handleClick}>
            Aggregated Data
          </li>
          <li className="Getprayer-nav-item" data-tab={"individual"} onClick={handleClick}>
            Get by Date
          </li>
        </ul>
      </div>
      {tab === "total" && (
        <div className="individual-tab">
          <h3>Total prayer Data</h3>
          <ul className="total-data">
            <li className="total-data-list">
              <span className="total-span">Completed: </span>
              {totalPrayerData.completedPrayer}
            </li>
            <li className="total-data-list">
              <span className="total-span">Missed: </span>
              {totalPrayerData.missedPrayer}
            </li>
            <li className="total-data-list">
              <span className="total-span">Unfilled: </span>
              {totalPrayerData.unfilledPrayer}
            </li>
          </ul>
        </div>
      )}
      {tab === "individual" && (
        <div className="individual-tab">
          <h3>Individual prayer Data</h3>
          <div className="date-input">
            <input
              type="date"
              max={new Date().toISOString().split("T")[0]}
              onChange={handleSelect}
            />
          </div>
          <h4>{dateSelected}</h4>
          <ul className="Getprayer-list">
            {prayerData.length !== 0 ? (
              prayerData.map((prayer) => (
                <li key={prayer.id} className="Getprayer-item">
                  <p className="Getprayer-detail">{prayer.prayerName}</p>
                  <p className="Getprayer-detail">{prayer.status}</p>
                </li>
              ))
            ) : (
              <li className="no-data">No data found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
    
};
export default GetPrayerData;