import React, {useState} from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


//Storage item names
const QUIZ_DATA = "quizData";


export default function QuizQuestion({handleCompleted, seconds, setSeconds, handleAbort})
{ 
    const navigate = useNavigate();
    const [selectedValue, setSelectedValue] = useState(-1);
    const quizData = JSON.parse(sessionStorage.getItem(QUIZ_DATA));
    
    //Handle the next question button click
    function handleSubmit(e) {   
        e.preventDefault();   
        
        //Check for hard and decrease time to end if wrong answer is submitted
        if (sessionStorage.getItem("hard") === "true" && selectedValue != quizData.questions[quizData.answers.length].correctIndex)
        {
            const tmpTime = seconds - 10;
            setSeconds(tmpTime)
        }
        quizData.answers.push(selectedValue);

        //Store quizData with new answer.
        sessionStorage.setItem(QUIZ_DATA, JSON.stringify(quizData));

        //Unselect radiobutton
        setSelectedValue(-1);

            
            //Callback to parent when all questions are answered
            if (quizData.answers.length>=quizData.questions.length)
            {
                handleCompleted();
            }

        }

    return (    
    <>
    
        <h3>Fråga {quizData.answers.length +1} av {quizData.questions.length}</h3>
        <p>{quizData.questions[quizData.answers.length].text}</p>
        <Form onSubmit={handleSubmit}>

            {quizData.questions[quizData.answers.length].alt.map((element, index) => <Form.Check type="radio" checked={selectedValue == index} onChange={() => setSelectedValue(index)} name="answer" label={element} key={index} />)}
            <Button type="submit" disabled={selectedValue < 0} className="button">Nästa fråga</Button>
            {<button className="button" onClick={(e)=> {e.preventDefault(); handleAbort(); navigate("/kunskapsportalen");} } >
              Avbryt Quiz
            </button>}
        </Form>
    </>
    );
}