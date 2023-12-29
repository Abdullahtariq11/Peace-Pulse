
import GetPrayerdata from '../Dashboard/GetPrayerData';
import PrayerTrack from '../Dashboard/PrayerTrack';
import Footer from '../Footer';
import "./DashboardLayout.css";


import Navbar from '../HomeNoLogin/Navbar';


function DashboardLayout() {
  
  return (


    <>
          
          <div className="DashboardLayout">
              <h1>Dashboard</h1>
              <ul>
                  <li><GetPrayerdata /></li>
                  <li><PrayerTrack /></li>
              </ul>



          </div>



          <Footer />


      </>
  );
}

export default DashboardLayout;