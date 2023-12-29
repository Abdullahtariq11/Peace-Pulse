import React from "react";
import Footer from "../Footer";
import Navbar from "../HomeNoLogin/Navbar";
import Signup from "../Signup";
import Login from "../Login";


function LoginLayout({setLogin}){


    return(
        <div>
           
            <Login setLogin={setLogin}/>
            <Footer/>
        </div>
    )
}
export default LoginLayout;