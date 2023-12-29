import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./ReadSurah.css";


function ReadSurah({ surahNumber }){
    const[surah,setSurah]=useState([])
   

    const fetchSurah=async()=>{
        try
        {
            const response=await axios.get
            (`https://api.alquran.cloud/v1/surah/${surahNumber}`);
            console.log('API Response:', response);
            setSurah(response.data.data.ayahs)
           console.log(surahNumber)
        } 
        catch (error) {
            console.error('Error fetching data:', error);
        }
       
    }
    useEffect(() => {
        fetchSurah();
      }, [surahNumber]);

      const convertToArabicNumber = (number) => {
        const arabicNumbers = ["۰", "۱", "۲", "۳", "٤", "۵", "٦", "۷", "۸", "۹"];
        const digits = number.toString().split(""); // Separate each digit
        const arabicDigits = digits.map((digit) => arabicNumbers[parseInt(digit)]);
        return arabicDigits.join(""); // Join the Arabic digits together
      };
      
      return (
        <div className="ReadQuran-container">
          {surah.map((ayah) => (
            <div className="ayah-card" key={ayah.numberInSurah}>
              <p className="ayah-text">{ayah.text}</p>
              <span className="arabic_number">{ayah.numberInSurah}</span>
            </div>
          ))}
        </div>
      );
    }
export default ReadSurah;