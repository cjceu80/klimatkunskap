import React, { useState, useEffect } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

import Wave from 'react-wavify';

import QuizStartFrame from './QuizStartFrame';
import QuizQuestion from './QuizQuestion';
import CountdownTimer from './CountdownTimer';

//Storage item names
const QUIZ_DATA = "quizData";
const QUIZ_STATUS = "quizStatus"

//State names
const QUIZ_STATUS_BEGIN = "QuizBegin";
const QUIZ_STATUS_END = "QuizEnd";
const QUIZ_STATUS_RUNNING = "running"

const WAVE_WIDTH = "100%";


export default function QuizFrame({ setQuizViewShown }) {
  const [quizData, setQuizData] = useState();
  const [quizViewState, setQuizViewState] = useState("");
  const [waterLevel, setWaterLevel] = useState(200);
  const [seconds, setSeconds] = useState(null);


  function handleStartQuizClick(e) {
    setQuizViewShown(QUIZ_STATUS_BEGIN);
    setQuizViewState(QUIZ_STATUS_BEGIN);
  }

  function startQuiz(newQuizData) {
    sessionStorage.setItem(QUIZ_STATUS, QUIZ_STATUS_RUNNING);
    sessionStorage.setItem(QUIZ_DATA, JSON.stringify(newQuizData));
    setQuizData(newQuizData);
    setQuizViewShown(QUIZ_STATUS_RUNNING);
    setQuizViewState(QUIZ_STATUS_RUNNING);
  }

  function handleCompleted() {
    sessionStorage.setItem(QUIZ_STATUS, QUIZ_STATUS_END);
    setQuizViewShown(QUIZ_STATUS_END);
    setQuizViewState(QUIZ_STATUS_END);
  }

  function handleCompletedClick() {
    setQuizViewState("");
    setQuizViewShown("");
  }

  function handleWaterLevel() {
    
    const base = 200;
    
    const step = (window.innerHeight - base) / 60;
  

    return (200 + ((60 - seconds) * step))
  }

  //     console.log(window.innerHeight);



  //Remain at the same state when refreshing and navigating
  if (quizViewState != QUIZ_STATUS_RUNNING && sessionStorage.getItem(QUIZ_STATUS) === QUIZ_STATUS_RUNNING) {
    setQuizViewShown("");
    setQuizViewState(QUIZ_STATUS_RUNNING);
    setQuizData(sessionStorage.getItem(QUIZ_DATA));
  }

    
    
  useEffect(() => {
  // Exit early if countdown is finished
  //setWaterLevel(handleWaterLevel());
  setWaterLevel(handleWaterLevel());
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

  function getWaterLevel() {
    if (quizViewState ===QUIZ_STATUS_RUNNING)
      return waterLevel;
    return 200;
  }


  if (quizViewState ===QUIZ_STATUS_RUNNING && seconds == null)
  {
      const quizData = JSON.parse(sessionStorage.getItem(QUIZ_DATA));
      setSeconds(Math.trunc((quizData.endTime - new Date().valueOf() ) / 1000));
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
    

  return (
    <Col xs={5} sm={4} lg={3} className="quiz_frame align-content-bottom justify-content-bottom top-0 end-0 position-fixed" style={{ height: window.innerHeight }} >
      <Row className='h-100 justify-content-md-center align-items-center px-2'>
        <Col className='zOnTop'>
          {quizViewState === "" && <Button onClick={handleStartQuizClick} className="button">Starta Quiz?</Button>}
          {quizViewState === QUIZ_STATUS_BEGIN && <QuizStartFrame callback={startQuiz}  />}
          {quizViewState === QUIZ_STATUS_END && <Button onClick={handleCompletedClick}>Avsluta Quiz Debugg?</Button>}
          {(quizViewState === QUIZ_STATUS_RUNNING && seconds > 0) && <p>{formatTime(seconds)}</p>}
          {quizViewState === QUIZ_STATUS_RUNNING && <QuizQuestion handleCompleted={handleCompleted} handleWaterLevel={handleWaterLevel}/>}
        </Col>
      </Row>
      <Wave
      className='wave'
      fill='#a9ebf4'
        paused={false}
        style={{ width: WAVE_WIDTH, transition: "height 1000ms", height: getWaterLevel(), position: "absolute", bottom: 0 }}
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
        style={{ width: WAVE_WIDTH, height: getWaterLevel(), position: "absolute", bottom: 0 }}
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