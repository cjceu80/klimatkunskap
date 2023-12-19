import React from "react";

//Storage item names
const QUIZ_DATA = "quizData";
const QUIZ_STATUS = "quizStatus"

export default function QuizQuestion({question})
{
    return (
    
    <>

        <button onClick={()=> {sessionStorage.setItem(QUIZ_DATA, null); sessionStorage.setItem(QUIZ_STATUS, null)}}>Ok?</button>
    </>
    );
}