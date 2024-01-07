import React from 'react';
import { Button, Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { getQuestions } from '../../utils/staticQuestions';

//Storage item names
const QUIZ_DATA = "quizData";
const QUIZ_STATUS = "quizStatus"

//State names
const QUIZ_STATUS_BEGIN = "QuizBegin";
const QUIZ_STATUS_END = "QuizEnd";
const QUIZ_STATUS_RUNNING = "running"



export default function QuizStartFrame({callback}){
    const navigate = useNavigate();
    
    
    function handleStartEasyQuizClick(){
        const quizData = {
            questions: getQuestions(10),
            answers: [],
            endTime: -1,  
        }
        
        callback(quizData);
        navigate("/kunskapsportalen")
    }

    function handleStartHardQuizClick(){
        const quizData = {
            questions: getQuestions(15),
            answers: [],
            endTime: new Date().valueOf() + 60000,  
        }
        
        callback(quizData);
        navigate("/kunskapsportalen")
    }

    return (
        <Stack>        
            <Button onClick={handleStartEasyQuizClick} className="button">Lätt</Button>
            <Button onClick={handleStartHardQuizClick} className="button">Svår</Button>            
        </Stack>
    )
}