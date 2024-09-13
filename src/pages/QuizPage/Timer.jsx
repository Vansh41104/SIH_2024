import React, { useEffect, useState } from 'react';
import './Timer.css'

const Timer = ({ initialMinutes = 0, initialSeconds = 0, onTimeUp }) => {
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    let timerInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(timerInterval);
          onTimeUp(); // Trigger action when time is up
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timerInterval);
  }, [minutes, seconds, onTimeUp]);

  return (
    <div className="timer">
      <h2>{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h2>
    </div>
  );
};

export default Timer;
