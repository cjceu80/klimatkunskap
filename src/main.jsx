import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Home from './components/Home';
import ContentPortal from './components/ContentPortal';
import About from './components/About';
import Feedback from './components/Feedback';
import QuizStart from './components/QuizStart';
import { UserAuthContextProvider } from './utils/UserAuthContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,

    children: [
      { index: true, element: <Home />,},
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/feedback',
        element: <Feedback />,
      },
      {
        path: '/kunskapsportalen',
        element: <ContentPortal />,
      },
      {
        path: '/omoss',
        element: <About />,
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
