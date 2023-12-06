import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import './style.css';

import HeaderNav from './components/HeaderNav';
import QuizFrame from './components/QuizFrame';
import { QuizContextProvider } from './utils/QuizContext';

export default function App() {
  return (
    <QuizContextProvider>
      <Row>
        <Col className="m-3">
          <Row>
            <Col>
              <HeaderNav />              
            </Col>
          </Row>
          <Row>
            <Col>
              <Outlet />
            </Col>
          </Row>
        </Col>
        <Col sm={4} className="border quiz_frame" style={{height: window.innerHeight}} >
          <QuizFrame />
        </Col>
  
      </Row>
    </QuizContextProvider>
  );
}
