
import Footer from '../Footer';
import "./HomeNoLogin.css"
import prayer1 from '../Assets/prayer1.jpg';
import Navbar from '../HomeNoLogin/Navbar';
import PrayerTimings from '../HomeNoLogin/PrayerTimings';


function HomeNoLogin() {
  
  return (
    <div className="HomeNoLogin">
    
      <div className="home-container">
        <h1 className='home-heading'>Welcome to Peace Pulse</h1>
        <p className='home-wording'>Join now and keep track of your prayers !</p>
        <div className="prayerTimings-container">
          <PrayerTimings/>
        </div>

      </div>
     
     
      <Footer/>

  
    </div>
  );
}

export default HomeNoLogin;