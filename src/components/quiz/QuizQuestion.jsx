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

        //console.log("HandleSubmit in QuizQuestion");
        //console.log(quizData);
        //console.log(`selectedValue = ${selectedValue}`)

        quizData.answers.push(selectedValue);

        //console.log(`answers = ${quizData.answers}`)

        sessionStorage.setItem(QUIZ_DATA, JSON.stringify(quizData));
        setSelectedValue(-1);

        const debug = JSON.parse(sessionStorage.getItem(QUIZ_DATA));
        //console.log(debug);
        //console.log(debug.answers);
        if (quizData.answers.length>=quizData.questions.length)
        {
            //console.log(`Sending handleComplete answers=${quizData.answers.length} questions=${quizData.questions.length}`);
            handleCompleted();
        }
    }

    const [selectedValue, setSelectedValue] = useState(-1);
    const quizData = JSON.parse(sessionStorage.getItem(QUIZ_DATA));
    //console.log("Question Begin Render")


    //console.log(quizData);

    //sessionStorage.setItem(QUIZ_DATA, null); sessionStorage.setItem(QUIZ_STATUS, null)
   // {quizData.endTime != -1 && <CountdownTimer handleWaterLevel={handleWaterLevel} initialSeconds={120}/>}

    return (    
    <>
       
        <h3>Fråga {quizData.answers.length +1} av {quizData.questions.length}</h3>
        <p>{quizData.questions[quizData.answers.length].text}</p>
        <Form onSubmit={handleSubmit}>
            {quizData.questions[quizData.answers.length].alt.map((element, index) => <Form.Check type="radio" checked={selectedValue == index} onChange={() => setSelectedValue(index)} name="answer" label={element} key={index} />)}
            <Button type="submit" disabled={selectedValue < 0} className="button">Nästa fråga</Button>
        </Form>
       {/* <button onClick={()=> {sessionStorage.setItem(QUIZ_DATA, null); sessionStorage.setItem(QUIZ_STATUS, null)}} className="button">Debug... Avbryt</button>*/}
    </>
    );
}