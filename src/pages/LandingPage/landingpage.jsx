import React from "react";
import './Landingpage.css';
import Navbar from "./../../pages/loginpage/Navbar/Navbar";
import SecondPages from './SecondPages'
import ThirdPage from "./ThirdPage";
import FifthPage from "./FifthPage";
import FourthPage from "./FourthPage";
import { useNavigate } from 'react-router-dom';

function Landingpage() {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/login');
    };

  return (
    <>
    <Navbar/>
    <div className="landing-page">
       
        <div className="big-div">
            <div className="main-content">
                <div className="text-section">
                <h1>Single Platform for all your <span className="highlight">Learnings</span></h1>
                <button className="start-button" onClick={handleClick}>Start Now ➔</button>
                </div>
                <div className="features-sections">
                    <div className="feature">
                        <img src="src\assets\certify.png" alt="" />
                        <p>Get Online Certificate</p>
                    </div>
                    <div className="feature1" >
                        <img src="src\assets\laptop.png" alt="" />
                        <p>Learn anything</p>
                    </div>
                    <div className="feature">
                        <img src="src\assets\people.png" alt="" className="img3" />
                        <p>Learn with best courses worldwide</p>
                    </div>
                </div>
            </div>

            <div className="image-strip">
                <img src="src\assets\Rectangle 15.png" alt="Image 1" />
                <img src="src\assets\Rectangle 16.png" alt="Image 2"  className="img2"/>
                <img src="src\assets\Rectangle 17.png" alt="Image 3" />
            </div>
        </div>
        <SecondPages/>
        <ThirdPage/>
        <FourthPage/>
        <FifthPage/>

    </div>
    
    </>

  );
}

export default Landingpage;