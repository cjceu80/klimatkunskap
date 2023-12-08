import React, { useState, useContext } from 'react';
import { Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import Wave from 'react-wavify';

import QuizStartFrame from './QuizStartFrame';
import { getQuestions } from '../utils/staticQuestions';
import { useQuiz } from '../utils/QuizContext';

const WAVE_WIDTH = "94%";
const QUIZ_BEGIN = "QuizBegin";
const QUIZ_END = "QuizEnd";
const QUIZ_ANSWERS = "QuizAnswers"
const QUIZ_DATA = "quizData";

export default function QuizFrame( {setQuizViewShown}) {
  const [ quizData, setQuizData ] = useState();
  const [ quizViewState, setQuizViewState ] = useState("");
  const navigate = useNavigate();

  function handleEnQuizClick(e){
    setQuizViewShown(QUIZ_END);
    setQuizViewState(QUIZ_END);
    sessionStorage.getItem(QUIZ_DATA, getQuestions);
  }

  function handleBeginQuizClick(e){

    setQuizViewShown("");
    setQuizViewState("");
  }

  function handleStartQuizClick(e){
    setQuizViewShown(QUIZ_BEGIN);
    setQuizViewState(QUIZ_BEGIN);
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
            
            {quizViewState === "" && <Button onClick={handleStartQuizClick}>Starta Quiz?</Button>}
            {quizViewState === QUIZ_BEGIN && <QuizStartFrame />}
            {quizViewState === QUIZ_END && <Button onClick={handleOnClick}>Avsluta Quiz Debugg?</Button>}
          </Col>  
    
  )
}
