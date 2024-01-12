import React from 'react';
import { Button, Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { getQuestions } from '../../utils/staticQuestions';
import { getDynamicQuestions } from '../../utils/dynamicQuestions';

//Storage item names
const QUIZ_DATA = "quizData";
const QUIZ_STATUS = "quizStatus"

//State names
const QUIZ_STATUS_BEGIN = "QuizBegin";
const QUIZ_STATUS_END = "QuizEnd";
const QUIZ_STATUS_RUNNING = "running"



export default function QuizStartFrame({callback}){
    const navigate = useNavigate();  
    
    //Handle and setyp start of easy quiz.
    function handleStartEasyQuizClick(){

        //Initialize static questions
        let questions = getQuestions(8);

        //Blend with dynamic questions
        const dynamicQuestions = getDynamicQuestions(2);
        dynamicQuestions.forEach((value) => {
            const index = Math.floor(Math.random() * (questions.length + 1));
            questions.splice(index, 0, value);
        });

    //Set variable that disable timer when easy
    sessionStorage.setItem("hard", "false")
    
    //Blend with dynamic questions
    const quizData = {
        questions: questions,
        answers: [],
        endTime: -1,  
    };

    //Send quizData to parent and navigate to portal page
    callback(quizData);
    navigate("/kunskapsportalen");
    }

    //Handle and setyp start of easy quiz.
    function handleStartHardQuizClick(){

        //Initialize static questions
        let questions = getQuestions(10);

        //Blend with dynamic questions
        const dynamicQuestions = getDynamicQuestions(5);
        dynamicQuestions.forEach((value) => {
            const index = Math.floor(Math.random() * (questions.length + 1));
            questions.splice(index, 0, value);
        });
        
        //Set variable that enable timer when hard
        sessionStorage.setItem("hard", "true");
        
        //Blend with dynamic questions
        const quizData = {
            questions: questions,
            answers: [],
            endTime: new Date().valueOf() + 20000,
        };
        
        //Send quizData to parent and navigate to portal page
        callback(quizData);
        navigate("/kunskapsportalen");
    }

    return (
        <Stack>        
            <Button onClick={handleStartEasyQuizClick} className="button">Lätt</Button>
            <Button onClick={handleStartHardQuizClick} className="button">Svår</Button>            
        </Stack>
    )
}