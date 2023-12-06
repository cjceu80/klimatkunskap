import React, { createContext, useContext, useEffect, useState } from 'react';

const quizContext = createContext();

export function QuizContextProvider({ children }) {
  const [time, setTime] = useState({});
  const [debugEnable, setDebugEnable] = useState(false);

  function doSum(val) {
    setDebugEnable(val);
  }

  return (
    <quizContext.Provider value={{ debugEnable, doSum }}>
      {children}
    </quizContext.Provider>
  );
}

export function useQuiz() {
  return useContext(quizContext);
}
