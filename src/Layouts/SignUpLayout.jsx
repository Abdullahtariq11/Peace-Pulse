import React from "react";
import Footer from "../Footer";
import Navbar from "../HomeNoLogin/Navbar";
import Signup from "../Signup";


function SignUpLayout(){


    return(
        <>
    
            
            <Signup/>
            <footer>
                <Footer/>
            </footer>
           
        </>
    )
}
export default SignUpLayout;