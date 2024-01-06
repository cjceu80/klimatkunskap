import React, { useState, useContext } from 'react';
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


export default function QuizFrame({ setQuizViewShown }) {
  const [quizData, setQuizData] = useState();
  const [quizViewState, setQuizViewState] = useState("");

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

  //Remain at the same state when refreshing and navigating
  if (quizViewState != QUIZ_STATUS_RUNNING && sessionStorage.getItem(QUIZ_STATUS) === QUIZ_STATUS_RUNNING) {
    setQuizViewShown("");
    setQuizViewState(QUIZ_STATUS_RUNNING);
    setQuizData(sessionStorage.getItem(QUIZ_DATA));
  }

  // if (questionIndex < 0 && Array.isArray(quizData.answers))
  //   console.log(quizData.answers.length)

  return (
    <Col xs={5} sm={4} lg={3} className="quiz_frame align-content-bottom justify-content-bottom top-0 end-0 position-fixed" style={{ height: window.innerHeight }} >
      <Row className='h-100 justify-content-md-center align-items-center px-2'>
        <Col className='zOnTop'>
          {quizViewState === "" && <Button onClick={handleStartQuizClick} className="button">Starta Quiz?</Button>}
          {quizViewState === QUIZ_STATUS_BEGIN && <QuizStartFrame callback={startQuiz} />}
          {quizViewState === QUIZ_STATUS_END && <Button onClick={handleCompletedClick}>Avsluta Quiz Debugg?</Button>}
          {quizViewState === QUIZ_STATUS_RUNNING && <QuizQuestion handleCompleted={handleCompleted} />}
        </Col>
      </Row>
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
          speed: 0.3,
          points: 3
        }}
      />

    </Col>

  )
}

//{quizViewState === QUIZ_STATUS_RUNNING && <QuizQuestion question={quizData.questions[questionIndex]} />}