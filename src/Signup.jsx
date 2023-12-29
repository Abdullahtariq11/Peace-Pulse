import React from "react";
import { useState } from "react";
import axios from "axios";
import "./Signup.css";


function Signup(){

    const[formData,setformData]=useState({
        firstName:"",
        LastName:"",
        Email:"",
        Password:"",
    })

    let handleChange=(e)=>{
        const {id,value}=e.target;
        setformData({...formData,[id]:value});

    }
        

    let submitForm= async(e)=>{
        e.preventDefault();
        
        try {
             const response= await axios.post("https://localhost:7221/User/signup",{
                FirstName: formData.firstName,
                LastName: formData.LastName,
                Email: formData.Email,
                Password: formData.Password,
                EmailConfirmed: false,
                Createdt: new Date(),
            })

            if(response.status===200){
                alert("Successful");
            }
            else{
                alert("Signup failed: ${response.data}")
            } 
            
        } catch (error) {
            console.error("Error:", error);
            alert('Please try again.');
        }
        //reset input boxes
        setformData({
            firstName:"",
            LastName:"",
            Email:"",
            Password:"",
        });
    }

    return(
        <div className="signup-container">
            <h1>Join Now!</h1>
            <form className="signUp"  onSubmit={submitForm}>
                <span>First Name:</span>
            <input type="name" onChange={handleChange} value={formData.firstName} id="firstName" required placeholder="First Name"/>
            <span>Last Name:</span>

            <input type="name" onChange={handleChange} value={formData.LastName} id="LastName" required placeholder="Last Name"/>
            <span>Email:</span>

            <input type="email" onChange={handleChange} value={formData.Email} id="Email" required placeholder="Email"/>
            <span>Password:</span>

            <input type="password" onChange={handleChange} value={formData.Password} id="Password" required placeholder="password"
            minLength={8} />

            <button>Sign Up</button>
            </form>
        </div>

    )
}
export default Signup;