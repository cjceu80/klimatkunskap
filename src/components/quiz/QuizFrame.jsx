import React, { useState, useEffect } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

import Wave from 'react-wavify';

import QuizStartFrame from './QuizStartFrame';
import QuizQuestion from './QuizQuestion';

//Storage item names
const QUIZ_DATA = "quizData";
const QUIZ_STATUS = "quizStatus"

//State names
const QUIZ_STATUS_BEGIN = "QuizBegin";
const QUIZ_STATUS_END = "QuizEnd";
const QUIZ_STATUS_RUNNING = "running"

const WAVE_WIDTH = "100%";


debugReset();
function debugReset(){
  sessionStorage.setItem(QUIZ_STATUS, "");
  sessionStorage.setItem(QUIZ_DATA, null)
}

export default function QuizFrame({ setQuizViewShown }) {
  const [quizData, setQuizData] = useState();
  const [quizViewState, setQuizViewState] = useState("");
  const [seconds, setSeconds] = useState();
  const [waterLevel, setWaterLevel] = useState(handleWaterLevel);


  function handleStartQuizClick(e) {
    setQuizViewShown(QUIZ_STATUS_BEGIN);
    setQuizViewState(QUIZ_STATUS_BEGIN);
  }

  function startQuiz(newQuizData) {
    sessionStorage.setItem(QUIZ_STATUS, QUIZ_STATUS_RUNNING);
    sessionStorage.setItem(QUIZ_DATA, JSON.stringify(newQuizData));
    setQuizData(newQuizData);
    setSeconds(60);
    setQuizViewShown(QUIZ_STATUS_RUNNING);
    setQuizViewState(QUIZ_STATUS_RUNNING);
  }

  function handleCompleted() {
    //console.log("Handle Completed recieved")
    //console.log(`quizViewState = ${quizViewState}`)
    sessionStorage.setItem(QUIZ_STATUS, QUIZ_STATUS_END)
    setQuizData(JSON.parse(sessionStorage.getItem(QUIZ_DATA)))
  

    //console.log(quizData)

    if (quizViewState)
    setWaterLevel(200);
    //quizData.endTime = -1;
    sessionStorage.setItem(QUIZ_STATUS, QUIZ_STATUS_END);
   // sessionStorage.setItem(QUIZ_DATA, JSON.stringify(quizData));
    setQuizViewShown(QUIZ_STATUS_END);
    setQuizViewState("");
  }

  function handleCompletedClick() {
    setQuizViewState("");
    setQuizViewShown("");
  }

 function handleWaterLevel() {
  let sec;
  if (seconds == null) {{
      const tmpQizData = JSON.parse(sessionStorage.getItem(QUIZ_DATA))
      if (tmpQizData != null)
        setQuizData(tmpQizData);
      }


    if (sessionStorage.getItem(QUIZ_STATUS) == "")
      return 200;

    try {
      sec = Math.trunc((quizData.endTime - new Date().valueOf() ) / 1000);
          
    } catch (error) {
      sec = seconds;
    }
      
  }
  else {sec = seconds;}

  const base = 200;
    
  const step = (window.innerHeight - base) / 60;
  

  return (200 + ((60 - sec) * step))
}

function getWaterLevel() {

  if (quizViewState === QUIZ_STATUS_RUNNING)
    return waterLevel;
  return 200;
}

// Format the remaining time (e.g., “00:05:10” for 5 minutes and 10 seconds)
function formatTime(timeInSeconds) {
  const roundedTime = Math.round(timeInSeconds)
  const minutes = Math.floor(roundedTime / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (roundedTime % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
};

function handleSetSeconds(sec){
  setSeconds(sec);
}

    
//Remain at the same state when refreshing and navigating
const quizStatus = sessionStorage.getItem(QUIZ_STATUS);
if (quizViewState != QUIZ_STATUS_RUNNING && quizStatus === QUIZ_STATUS_RUNNING) {
  setQuizViewShown("");
  setQuizViewState(QUIZ_STATUS_RUNNING);
  setQuizData(JSON.parse(sessionStorage.getItem(QUIZ_DATA)));
  
  if (!quizData || quizData.endTime - new Date().valueOf() < -10000)
  {
    //setQuizViewShown(QUIZ_STATUS_END);
    setQuizViewState("");
  }
  
}
    
if (quizViewState === QUIZ_STATUS_RUNNING && (seconds == null || isNaN(seconds)) )
{
  const quizData = JSON.parse(sessionStorage.getItem(QUIZ_DATA));
  setSeconds(Math.trunc((quizData.endTime - new Date().valueOf() ) / 1000));
}
    
useEffect(() => {
  // Exit early if countdown is finished
  setWaterLevel(handleWaterLevel());

    if (sessionStorage.getItem("hard") === "false")
    return;
  
  //if (seconds <= 0 ) {
    if (sessionStorage.getItem(QUIZ_STATUS) !== QUIZ_STATUS_RUNNING){

    return;
  }

  if (seconds<=0){
    handleCompleted()
    return;
  }
  
  // Timer setup
  const timer = setInterval(() => {
    setSeconds((prevSeconds) => prevSeconds - 1);
  }, 1000);

// Timer clean up
  return () => clearInterval(timer);
  }, [seconds]
);
    
    let style = { width: WAVE_WIDTH, transition: "height 1000ms", position: "absolute", bottom: 0, height: getWaterLevel() };
 
    return (
      <Col xs={5} sm={4} lg={3} className="quiz_frame align-content-bottom justify-content-bottom top-0 end-0 position-fixed" style={{ height: window.innerHeight }} >
      <Row className='h-100 justify-content-md-center align-items-center px-2'>
        <Col className='zOnTop'>
          <Button onClick={()=>{sessionStorage.clear(QUIZ_DATA); sessionStorage.clear(QUIZ_STATUS);}}>debug</Button>
          {(quizViewState === "") && <Button onClick={handleStartQuizClick} className="button">Starta Quiz?</Button>}
          {quizViewState === QUIZ_STATUS_BEGIN && <QuizStartFrame callback={startQuiz}  />}
          {/*quizViewState === QUIZ_STATUS_END && <Button onClick={handleCompletedClick}>Avsluta Quiz Debugg?</Button>*/}
          {(quizViewState === QUIZ_STATUS_RUNNING && sessionStorage.getItem("hard") === "true" && seconds > 0) && <p>{formatTime(seconds)}</p>}
          {quizViewState === QUIZ_STATUS_RUNNING && <QuizQuestion handleCompleted={handleCompleted} setSeconds={handleSetSeconds} seconds={seconds}/>}
        </Col>
      </Row>
      <Wave
      className='wave'
      id='wave'
      fill='#a9ebf4'
      paused={false}
      style={style}
      options={{
        container: "div",
          height: 18,
          amplitude: 15,
          speed: 0.25,
          points: 3
        }}
      />
      <Wave
      className='wave' fill='#4cd6e7'
        paused={false}
        style={style}
        options={{
          height: 20,
          amplitude: 20,
          speed: 0.3,
          points: 3
        }}
      />

    </Col>

  )
}

//{quizViewState === QUIZ_STATUS_RUNNING && <QuizQuestion question={quizData.questions[questionIndex]} />}