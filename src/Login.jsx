import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { useNavigate } from 'react-router-dom';

function Login({ setLogin }) {
  const [login, setLoginData] = useState({
    Username: "",
    password: ""
  });
  const [loginState, setLoginState] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    const { id, value } = e.target;
    setLoginData({ ...login, [id]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://localhost:7221/User/login", {
        Username: login.Username,
        Password: login.password,
      });

      if (response.status === 200) {
        console.log(response.data);
        setLogin(true);
        setLoginState(true);
        alert("Successful");
        navigate('/DashboardLayout'); // Navigate to Dashboard after successful login
      } else {
        alert("Signup failed: ${response.data}");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Please try again.");
    }
    // Reset input boxes
    setLoginData({
      Username: "",
      Password: ""
    });
  };

  return (
    <>
      {!loginState && (
        <div className="login-container">
          <h1>Login</h1>
          <form className="login" onSubmit={submitForm}>
            <label>Username</label>
            <input
              onChange={handleChange}
              id="Username"
              value={login.Username}
              type="email"
              required
            />
            <label>Password</label>
            <input
              onChange={handleChange}
              id="password"
              value={login.password}
              type="password"
              minLength={8}
              required
            />
            <button>Login</button>
            <p>Forgot Password?</p>
          </form>
        </div>
      )}
    </>
  );
}
export default Login;
