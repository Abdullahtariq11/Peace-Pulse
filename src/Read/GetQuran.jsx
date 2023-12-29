import React, { useState, useEffect } from "react";
import axios from "axios";
import "./GetQuran.css";

function GetQuran() {
  const [surahs, setSurahs] = useState([]);
  const [tab,setTab]=useState("Surahs")
  
  const fetchSurahs = async () => {
    try {
      const response = await axios.get(
        `https://api.alquran.cloud/v1/surah`
      );
      console.log('API Response:', response);
      setSurahs(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchSurahs();
  }, []);

  const handleCLick=(e)=>{
    const selectedTab = e.target.getAttribute('data-tab');
    setTab(selectedTab);
  }
  
  return (
    <div className="Read">
        <div className="Tabs-container">
            <ul className="tab">
                <li data-tab="Surahs" onClick={handleCLick}>Surahs</li>
                <li data-tab="Juzs" onClick={handleCLick}>Juz</li>
            </ul>
        </div>
        {
            tab=="Surahs" && (<div className="Surah-container">
            <ul className="Surahs">
                {surahs.map((surah) => (
                <li key={surah.number}>
                    <div className="surah-card">
                    <p className="bold">{surah.englishName}</p>
                    <p className="bold">{surah.name}</p>
                    <p className="bold">Ayahs: {surah.numberOfAyahs}</p>
                    <p className="bold">{surah.revelationType}</p> 
                    </div>
                </li>
                ))}
            </ul>
            </div>
        )}  

                {
            tab=="Juzs" && (<div className="Juz-container">
            <ul className="Js">
                <li>hello</li>
            </ul>
            </div>
        )}       

    </div>

  );
}

export default GetQuran;


   