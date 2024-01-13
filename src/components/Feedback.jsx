import React, { useState } from "react";
import '../styles/Feedback.css';

const Feedback = () => {
    const [feedback, setFeedback] = useState('');

    const handleFeedbackChange = (event) => {
        setFeedback(event.target.value);
    };

    const handleSubmit = () => {
        // Här kan en mail-funktion läggas till
        alert('Feedback skickad:' + feedback);
    };

    return (
        <div className="feedback-container">
            <main className="feedback-content">
                <h1>Din åsikt är viktig för oss!</h1>
                <p>Tack för att du använder vår applikation! Vi strävar alltid efter att förbättra och din feedback är avgörande för detta.</p>
                <div className="feedback-form">
                    <label className="rutRubrik" htmlFor="feedback-input">Vad kan vi förbättra?:</label>
                    <div className="input-group">
                    <textarea
                        id="feedback-input"
                        value={feedback}
                        onChange={handleFeedbackChange}
                        placeholder="Skriv här..."
                        rows={6} 
                        cols={50} 
                    />
                    <button onClick={handleSubmit} style={{ borderRadius: "50px" ,  margin:"5px"}} className="submit-button">Skicka</button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Feedback;