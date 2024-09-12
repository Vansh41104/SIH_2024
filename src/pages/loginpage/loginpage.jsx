import React, { useState } from 'react';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import Signup from './Signup';
import RecoveryEmailSent from './RecoveryEmailSent';
import './loginpage.css';
import Navbar from './Navbar/Navbar';

function Loginpage() {
    const [activeCard, setActiveCard] = useState('login');

    const renderCard = () => {
        switch (activeCard) {
            case 'login':
                return <Login setActiveCard={setActiveCard} />;
            case 'signup':
                return <Signup setActiveCard={setActiveCard} />;
            case 'forgot-password':
                return <ForgotPassword setActiveCard={setActiveCard} />;
            case 'recovery-email-sent':
                return <RecoveryEmailSent setActiveCard={setActiveCard} />;
            default:
                return <Login setActiveCard={setActiveCard} />;
        }
    };

    return (
        <div className="page">
            <Navbar />
            <div className="fullscreen">
                {renderCard()}
            </div>
            </div>
    );
}

export default Loginpage;
