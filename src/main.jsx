import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Welcome from './components/Welcome';
import News from './components/News';
import Stats from './components/Stats';
import QuizStart from './components/QuizStart';
import { UserAuthContextProvider } from './utils/UserAuthContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,

    children: [
      { index: true, element: <Welcome />,},
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/news',
        element: <News />,
      },
      {
        path: '/stats',
        element: <Stats />,
      },
      {
        path: '/quiz',
        element: <QuizStart />,
      },
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserAuthContextProvider>
      <RouterProvider router={router} />
    </UserAuthContextProvider>
  </React.StrictMode>
);
