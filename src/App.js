
import './App.css';
import HomeNoLogin from './Layouts/HomeNoLogin';
import Login from './Login';
import SignUpLayout from './Layouts/SignUpLayout';
import ReadLayout from './Layouts/ReadLayout';
import DashboardLayout from './Layouts/DashboardLayout';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Navbar from './HomeNoLogin/Navbar';
import LoginLayout from './Layouts/LoginLayout';
import { useState } from 'react';





function App() {
const[isLogin,setLogin]=useState(false)
const[userId,SetId]=useState("")
  return (
    
      
     <Router >
      <div className='App'>
        <Navbar isLogin={isLogin} setLogin={setLogin}/>
        <Routes>
        <Route path="/" element={<HomeNoLogin/>} />
          <Route path="/SignUpLayout" element={<SignUpLayout/>} />
          <Route path="/LoginLayout" element={<LoginLayout setLogin={setLogin} />} />
          <Route path="/ReadLayout" element={<ReadLayout/>} />
          <Route path="/DashboardLayout" element={<DashboardLayout/>} />
        </Routes>
        </div>
  </Router>
    
  );
}

export default App;
