import React from 'react';
import { Button, Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { getQuestions } from '../../utils/staticQuestions';
import { getDynamicQuestions } from '../../utils/dynamicQuestions';


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
    navigate("/klimat/kunskapsportalen");
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
            endTime: new Date().valueOf() + 300000,
        };
        
        //Send quizData to parent and navigate to portal page
        callback(quizData);
        navigate("/klimat/kunskapsportalen");
    }

    return (
        <Stack>        
            <Button onClick={handleStartEasyQuizClick} className="button">Lätt</Button>
            <Button onClick={handleStartHardQuizClick} className="button">Svår</Button>            
        </Stack>
    )
}