import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./SurahList.css";


function SurahList({ setSurahNumber }){
    const [surahs, setSurahs] = useState([]);
   

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

     const handleSelect=(e)=>{
        setSurahNumber(e.target.value)
     }
     
      
    return(
       <div className="SurahList-container">
            <form action="">
                <select onChange={handleSelect}>
                    <option  value="">Select a Surah</option>
                    {surahs.map((surah)=>(
                        <option  key={surah.number} value={surah.number}>{surah.englishName}</option>
                    ))}
                </select>
            </form>
       </div>
    )
};
export default SurahList;