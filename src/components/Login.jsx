import React, { useState } from 'react';
import { Form, Alert } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import GoogleButton from 'react-google-button';
import { useUserAuth } from '../utils/UserAuthContext';

//Render login form and handle login functionality
export default function Login({close}) {
  
 const [signupShown, setSignupShown] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { logIn, googleSignIn, signUp } = useUserAuth();


  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signUp(email, password);
      close();
    } catch (err) {
      setError(err.message);
    }
  };
  //Handle the submit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await logIn(email, password);
      close();
    } catch (err) {
      setError(err.message);
    }
  };

  //Handles google login
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      close();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>

    {signupShown === true //test to se if signup should be rendered

    ? //render signup

    <div>
    <div className="p-4 box">
      <h2 className="mb-3">Firebase/ React Auth Signup</h2>

      {error && <Alert variant="danger">{error}</Alert>}

      <Form onSubmit={handleSignupSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="E-post"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Lösenord"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <div className="d-grid gap-2">
          <Button variant="primary" type="Submit">
            Sign up
          </Button>
        </div>
      </Form>
    </div>
    <div className="p-4 box mt-3 text-center">
      Already have an account? <a className='link' onClick={ () => setSignupShown(false)}>Log In</a>
    </div>
  </div>
  
  : //Render login page

    <div>
      <div className="p-4 box">
        <h2 className="mb-3">Logga in</h2>
        {/* Error-code */}
        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Log In
            </Button>
          </div>
        </Form>
        <hr />
        <div>
          <GoogleButton
            className="g-btn"
            type="dark"
            onClick={handleGoogleSignIn}
          />
        </div>
      </div>
      <div className="p-4 box mt-3 text-center">
        Har du inget konto? <a className='link' onClick={() => setSignupShown(true)} >Registrera konto</a>
      </div>
      <div className="p-4 box mt-3">
      <h3>Behandling av personuppgifter</h3>
      <p><small>
        Vi tar din integritet på allvar. All hantering av personuppgifter sker i enlighet med gällande dataskyddslagar. Vi samlar endast in personuppgifter som är nödvändiga för att tillhandahålla våra tjänster och förbättra din användarupplevelse.
        </small></p>
      </div>
    </div>
}
    </>
  );
}
