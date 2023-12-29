import React from "react";
import "./Navbar.css"
import logo from '../Assets/logo.jpg';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


function Navbar({isLogin, setLogin}){

    const handleclick=()=>{
        alert("you will be logged out")
        setLogin(false)
    }
    return(
        <header>
        <div className="Navbar">
            <ul className="container">
             
                    <li className="logoContainer">
                            <img src={logo} alt="logo here" />
                    </li>
             
                    
                        <div className="Navlinks">
                        <li >
                            <Link to="/" className="Link">Home</Link>
                        </li>
                        { !isLogin &&
                        <li >
                            <Link to="/SignUpLayout" className="Link">Join Now</Link>
                        </li>
                        }
                        { !isLogin &&
                        <li>
                            <Link to="/LoginLayout" className="Link">Login</Link>
                        </li>
                        }
                        
                        <li>
                            <Link to="/ReadLayout" className="Link">Read</Link>
                        </li>
                        { isLogin &&
                        <li>
                            <Link to="/DashboardLayout" className="Link">Dashboard</Link>
                        </li>
                        }   
                        { isLogin &&
                        <li>
                            <Link onClick={handleclick} to="/LoginLayout" className="Link">Sign out</Link>
                        </li>
                        }      
                    </div>
                    

            </ul>
        </div>
    </header>
    
    )
};
export default Navbar;