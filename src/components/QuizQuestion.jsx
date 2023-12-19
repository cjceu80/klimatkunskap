import React, {useState} from "react";
import { Button, Form } from "react-bootstrap";

//Storage item names
const QUIZ_DATA = "quizData";
const QUIZ_STATUS = "quizStatus"

const QUIZ_STATUS_END = "QuizEnd";

export default function QuizQuestion({handleCompleted})
{ 

    function handleSubmit(e) {   
        e.preventDefault();   
        quizData.answers.push(selectedValue);
        sessionStorage.setItem(QUIZ_DATA,JSON.stringify(quizData));
        setSelectedValue(-1);
    }

    const [selectedValue, setSelectedValue] = useState(-1);
    const quizData = JSON.parse(sessionStorage.getItem(QUIZ_DATA));

    console.log(quizData.answers);
    console.log(quizData.questions);
    if (quizData.answers.length==quizData.questions.length)
    {
        handleCompleted();
        return;
    }

    return (    
    <>
        <h3>Fråga {quizData.answers.length +1} av {quizData.questions.length}</h3>
        <p>{quizData.questions[quizData.answers.length].text}</p>
        <Form onSubmit={handleSubmit}>
            {quizData.questions[quizData.answers.length].alt.map((element, index) => <Form.Check type="radio" checked={selectedValue == index} onChange={() => setSelectedValue(index)} name="answer" label={element} key={index} />)}
            <Button type="submit"  disabled={selectedValue < 0}>Nästa fråga</Button>
        </Form>
        <button onClick={()=> {sessionStorage.setItem(QUIZ_DATA, null); sessionStorage.setItem(QUIZ_STATUS, null)}}>Debug... Avbryt</button>
    </>
    );
}