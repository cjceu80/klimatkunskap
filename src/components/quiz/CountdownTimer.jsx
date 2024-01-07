import React, { useState, useEffect } from "react";


const QUIZ_DATA = "quizData";

export default function CountdownTimer({handleWaterLevel}) {
    const [seconds, setSeconds] = useState(null);
    
    useEffect(() => {
    // Exit early if countdown is finished
    if (seconds <= 0) {
    return;
    }
    

    // Set up the timer
    const timer = setInterval(() => {
    setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);
    
    // Clean up the timer
    return () => clearInterval(timer);
    }, [seconds]);

    if (seconds == null)
    {
        const quizData = JSON.parse(sessionStorage.getItem(QUIZ_DATA));
        setSeconds(Math.trunc((quizData.endTime - new Date().valueOf() ) / 1000));
    }

    // Format the remaining time (e.g., “00:05:10” for 5 minutes and 10 seconds)
    const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60)
    .toString()
    .padStart(2, "0");
    const seconds = (timeInSeconds % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
    };
    
    return (
    <div>
    <p>{formatTime(seconds)}</p>
    </div>
    );
    };
    