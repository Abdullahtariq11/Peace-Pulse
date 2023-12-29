import React from "react";
import fbicon from './Assets/facebook.png';
import Linkicon from './Assets/linkedin-logo.png';
import logo from './Assets/logo.jpg';
import "./Footer.css"

function Footer()
{
    return(
        <footer className="footer-container">
           
                <div className="left">
                    <span className="logoContainerFooter">
                        <img src={logo} alt="logo" />
                    </span>
                    <span>
                    <p>© 2022-2023 Abdullah Tariq. All Rights Reserved.</p>
                    </span>
                </div>
                 <div className="right">
                    <span className="contact">Contact us</span>
                    <a href="https://www.linkedin.com/in/abdullah-tariq-499629171/">
                        <img src={Linkicon} alt="linkedin icon" className="social-icon" />
                    </a>
                    
                    <a href="https://www.facebook.com/abdullah.tariq11/">
                        <img src={fbicon} alt="facebook icon" className="social-icon" />
                    </a>
                    
                </div>

           
        </footer>


    )
}

export default Footer;