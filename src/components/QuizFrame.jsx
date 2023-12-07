import React, { useState, useContext } from 'react';
import Wave from 'react-wavify';

import { useQuiz } from '../utils/QuizContext';
import { Container } from 'react-bootstrap';

export default function QuizFrame() {
  const [ debugEnable, setDebugEnabled ] = useState(localStorage.getItem('enabled'));

  function handleOnClick(e){
    localStorage.setItem('enabled', "true")
    setDebugEnabled("true");
  }

  function handleDebugOnClick(e){
    localStorage.setItem('enabled', "false")
    setDebugEnabled("false");
  }

  return(
    <Container className='m-0 p-0'>
    <Wave fill='#a9ebf4'
                paused={false}
                style={{ maxWidth: "280px", width: "100%", height: 200, position: "absolute", bottom: 0 }}
                options={{
                    height: 18,
                    amplitude: 15,
                    speed: 0.25,
                    points: 3
                }}
            />
            <Wave fill='#4cd6e7'
                paused={false}
                style={{ maxWidth: "280px", width: "100%", height: 200, position: "absolute", bottom: 0 }}
                options={{
                    height: 20,
                    amplitude: 20,
                    speed: 0.25,
                    points: 3
                }}
            />
    <p>{debugEnable === "true" ? <button onClick={handleDebugOnClick}>Starta Quiz?</button> : <button onClick={handleOnClick}>Avsluta Quiz Debugg?</button>}</p>
    </Container>
  )
}
