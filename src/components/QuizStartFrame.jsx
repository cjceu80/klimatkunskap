import React from 'react';
import { Button, Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { getQuestions } from '../utils/staticQuestions';

//Storage item names
const QUIZ_DATA = "quizData";
const QUIZ_STATUS = "quizStatus"

//State names
const QUIZ_STATUS_BEGIN = "QuizBegin";
const QUIZ_STATUS_END = "QuizEnd";
const QUIZ_STATUS_RUNNING = "running"



export default function QuizStartFrame({callback}){
    const navigate = useNavigate();
    
    
    function handleStartQuizClick(){
        const quizData = {
            questions: getQuestions(10),
            answers: [],
            startTime: new Date().valueOf(),  
        }
        //console.log(quizData);
        callback(quizData);
        navigate("/kunskapsportalen")
    }

    return (
        <Stack>        
            <Button onClick={handleStartQuizClick} className="button">Lätt</Button>
            <Button onClick={()=>sessionStorage.setItem(QUIZ_STATUS, null)} className="button">Svår (disabled)</Button>            
        </Stack>
    )
}