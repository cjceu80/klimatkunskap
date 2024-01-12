import React from 'react';
import { Button, Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { getQuestions } from '../../utils/staticQuestions';
import { tempDiff } from '../../utils/dynamicQuestions';

//Storage item names
const QUIZ_DATA = "quizData";
const QUIZ_STATUS = "quizStatus"

//State names
const QUIZ_STATUS_BEGIN = "QuizBegin";
const QUIZ_STATUS_END = "QuizEnd";
const QUIZ_STATUS_RUNNING = "running"



export default function QuizStartFrame({callback}){
    const navigate = useNavigate();

    console.log("StartFrame Begin Render")
    
    
    function handleStartEasyQuizClick(){
        const quizData = {
            questions: getQuestions(10),
            answers: [],
            endTime: -1,  
        }
        
        console.log("Easy started");
        console.log(quizData);
        sessionStorage.setItem("hard", "false")

        callback(quizData);
        navigate("/kunskapsportalen")
    }

    function handleStartHardQuizClick(){
        tempDiff();
        const quizData = {
            questions: getQuestions(15),
            answers: [],
            endTime: new Date().valueOf() + 60000,
        }
        sessionStorage.setItem("hard", "true")
        console.log("Hard started");
        console.log(quizData);

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