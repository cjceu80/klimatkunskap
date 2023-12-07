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
    <div className='m-0 p-0' style={{position:"relative"}}>
    
    <p>{debugEnable === "true" ? <button onClick={handleDebugOnClick}>Starta Quiz?</button> : <button onClick={handleOnClick}>Avsluta Quiz Debugg?</button>}</p>
    </div>
  )
}
