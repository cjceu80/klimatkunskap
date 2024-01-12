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

const CLOSE_ICON = "\u2716"; // Unicode character for a multiplication sign (X)

//When all else fails, just run this.
//debugReset(); 
function handleAbort(){
  sessionStorage.setItem(QUIZ_STATUS, "");
  sessionStorage.setItem(QUIZ_DATA, null)
}

export default function QuizFrame({ setQuizViewShown }) {
  const [quizData, setQuizData] = useState();
  const [quizViewState, setQuizViewState] = useState("");
  const [seconds, setSeconds] = useState();
  const [waterLevel, setWaterLevel] = useState(handleWaterLevel);

  //Handle on click to the start quiz button.
  function handleStartQuizClick(e) {
    //Callback to app that quest dificulty is beeing chosen
    setQuizViewShown(QUIZ_STATUS_BEGIN);
    //Set the frame to show quest option buttons
    setQuizViewState(QUIZ_STATUS_BEGIN);
  }

  //Starts the quiz, sent as callback to QuizStartFrame which provide a quizData object
  function startQuiz(newQuizData) {
    //Store status for quiz to work while browsing
    sessionStorage.setItem(QUIZ_STATUS, QUIZ_STATUS_RUNNING);
    sessionStorage.setItem(QUIZ_DATA, JSON.stringify(newQuizData));

    //Set the variables for the quiz
    setQuizData(newQuizData);
    setSeconds(60);
    setQuizViewState(QUIZ_STATUS_RUNNING);

    //Callback to app
    setQuizViewShown(QUIZ_STATUS_RUNNING);
  }

  //Callback function for when all questions are answered or internal when time runs out
  function handleCompleted() {
    //Stores data for the end result page
    sessionStorage.setItem(QUIZ_STATUS, QUIZ_STATUS_END)
    setQuizData(JSON.parse(sessionStorage.getItem(QUIZ_DATA)))
  
    //Return water level to start
    if (quizViewState)
      setWaterLevel(200);

    //Sends callback to app to change view
    setQuizViewShown(QUIZ_STATUS_END);

    //Return quizframe to start
    setQuizViewState("");
  }

  //Handle the waterlevel by using time
 function handleWaterLevel() {

  //Variable to store the time to return
  let sec;

  //If useState of seconds is uninitialized it checks for quizdata in sessionstorage. If it is valid it is stored as quizdata.
  //This prevents some buggs when refreshing pages during quiz.
  if (seconds == null) {{
      const tmpQizData = JSON.parse(sessionStorage.getItem(QUIZ_DATA))
      if (tmpQizData != null)
        setQuizData(tmpQizData);
      }

    //Check if quiz is running to set water start level
    if (sessionStorage.getItem(QUIZ_STATUS) == "")
      return 200;

    //At times quizData.endTime is undefined on page refresh even though a quizdata exist. This prevent that from causing trouble
    try {
      sec = Math.trunc((quizData.endTime - new Date().valueOf() ) / 1000);
          
    } catch (error) {
      sec = seconds;
    }  
  }
  else {sec = seconds;}

  //Starts calculating the level after initial variable checks

  //Water start level
  const base = 200;

  //Calculate step (per second) based on windowheight
  const step = (window.innerHeight - base) / 60;
  
  return (200 + ((60 - sec) * step))
}

//Called on the wave components style setup. Return waterlevel if running or start level if not
function getWaterLevel() {
  if (quizViewState === QUIZ_STATUS_RUNNING)
    return waterLevel;
  return 200;
}

// Format the remaining time to minutes and seconds
function formatTime(timeInSeconds) {

  //Remove fractions of seconds
  const roundedTime = Math.round(timeInSeconds);

  //Calculate minutes and format to two digits
  const minutes = Math.floor(roundedTime / 60)
    .toString()
    .padStart(2, "0");

  //Calculate seconds and format to two digits
  const seconds = (roundedTime % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
};

//Calback for quizquestion frame to change seconds on wrong answers
function handleSetSeconds(sec){
  setSeconds(sec);
}

    
//Remain at the same state when refreshing and navigating
const quizStatus = sessionStorage.getItem(QUIZ_STATUS);

//Initial variable check and setup on starting to render
if (quizViewState != QUIZ_STATUS_RUNNING && quizStatus === QUIZ_STATUS_RUNNING) {
  setQuizViewShown("");
  setQuizViewState(QUIZ_STATUS_RUNNING);
  setQuizData(JSON.parse(sessionStorage.getItem(QUIZ_DATA)));
  
  //A timeout for easy mode when the user have been away for long.
  if (!quizData || quizData.endTime - new Date().valueOf() < -10000)
  {
    setQuizViewState("");
  }
  
}
    
//Catches some time errors and buggs when refreshing pages when running hard mode
if (quizViewState === QUIZ_STATUS_RUNNING && (seconds == null || isNaN(seconds)) )
{
  const quizData = JSON.parse(sessionStorage.getItem(QUIZ_DATA));
  setSeconds(Math.trunc((quizData.endTime - new Date().valueOf() ) / 1000));
}
    
useEffect(() => {
  //Set the waterlevel on each execution
  setWaterLevel(handleWaterLevel());
  
  //If easy mode is running the useEffect returns and is ignored
  if (sessionStorage.getItem("hard") === "false")
  return;

  //Disable when no quiz is running
  if (sessionStorage.getItem(QUIZ_STATUS) !== QUIZ_STATUS_RUNNING){
    
    return;
  }
  
  // Exit when countdown is finished
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

  //style object for the wave components
  let style = { width: "100%", transition: "height 1000ms", position: "absolute", bottom: 0, height: getWaterLevel() };
 
    return (
      <Col xs={5} sm={4} lg={3} className="quiz_frame align-content-bottom justify-content-bottom top-0 end-0 position-fixed" style={{ height: window.innerHeight }} >
        {<button className="button" onClick={(e)=> {e.preventDefault(); handleAbort(); navigate("/kunskapsportalen");} } >
              Avbryt Quiz
            </button>}
      <Row className='h-100 justify-content-md-center align-items-center px-2'>
        <Row><Col></Col></Row>
        <Col className='zOnTop'>
        
          {/*<Button onClick={()=>{sessionStorage.clear(QUIZ_DATA); sessionStorage.clear(QUIZ_STATUS);}}>debug</Button>*/}
          {(quizViewState === "") && <Button onClick={handleStartQuizClick} className="button">Starta Quiz?</Button>}
          {quizViewState === QUIZ_STATUS_BEGIN && <QuizStartFrame callback={startQuiz}  />}
          {(quizViewState === QUIZ_STATUS_RUNNING && sessionStorage.getItem("hard") === "true" && seconds > 0) && <p>{formatTime(seconds)}</p>}
          {quizViewState === QUIZ_STATUS_RUNNING && <QuizQuestion handleCompleted={handleCompleted} setSeconds={handleSetSeconds} handleAbort={handleAbort} seconds={seconds}/>}
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
