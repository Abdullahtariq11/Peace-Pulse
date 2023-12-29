import React from "react";
import Footer from "../Footer";
import Navbar from "../HomeNoLogin/Navbar";
import GetQuran from "../Read/GetQuran";
import ReadSurah from "../Read/ReadSurah";
import QuranAndSurah from "../Read/QuranAndSurah";



function ReadLayout(){


    return(
        <div>
           
            
            <QuranAndSurah/>
            <Footer/>
        </div>
    )
}
export default ReadLayout;