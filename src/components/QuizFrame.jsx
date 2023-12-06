import React, { useState, useContext } from 'react';

import { useQuiz } from '../utils/QuizContext';

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

  console.log(debugEnable)
  return(
    <p>{debugEnable === "true" ? <button onClick={handleDebugOnClick}>Starta Quiz?</button> : <button onClick={handleOnClick}>Avsluta Quiz Debugg?</button>}</p>
  )
}
