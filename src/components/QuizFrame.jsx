import React, { useState, useContext } from 'react';
import { Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import Wave from 'react-wavify';

import { useQuiz } from '../utils/QuizContext';

const WAVE_WIDTH = "94%";

export default function QuizFrame() {
  const [ debugEnable, setDebugEnabled ] = useState(localStorage.getItem('enabled'));
  const navigate = useNavigate();

  function handleOnClick(e){
    localStorage.setItem('enabled', "true")
    setDebugEnabled("true");
    navigate(-1);

  }

  function handleDebugOnClick(e){
    localStorage.setItem('enabled', "false")
    setDebugEnabled("false");
    navigate("/quiz");
  }

  return(
    <Col sm={4} lg={3} className="quiz_frame align-content-bottom justify-content-bottom" style={{ position:"relative", height: window.innerHeight, minWidth: "300px"}} >
          <Wave fill='#a9ebf4'
                paused={false}
                style={{ width: WAVE_WIDTH, height: 200, position: "absolute", bottom: 0 }}
                options={{
                    container: "div",
                    height: 18,
                    amplitude: 15,
                    speed: 0.25,
                    points: 3
                }}
            />
            <Wave fill='#4cd6e7'
                paused={false}
                style={{ width: WAVE_WIDTH, height: 200, position: "absolute", bottom: 0 }}
                options={{
                    height: 20,
                    amplitude: 20,
                    speed: 0.25,
                    points: 3
                }}
            />
            
            {debugEnable === "true" ? <button onClick={handleDebugOnClick}>Starta Quiz?</button> : <button onClick={handleOnClick}>Avsluta Quiz Debugg?</button>}
          </Col>  
    

  )
}
