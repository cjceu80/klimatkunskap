import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Home from './components/Home';
import About from './components/About';
import Feedback from './components/Feedback';
import MainContent, { loader as contentLoader} from './components/MainContent';
import { UserAuthContextProvider } from './utils/UserAuthContext';

const router = createBrowserRouter([
  {
    path: '/klimat',
    element: <App />,

    children: [
      { index: true, element: <Home />,},
      {
        path: 'home/',
        element: <Home />,
      },
      {
        path: 'feedback/',
        element: <Feedback />,
      },
      {
        path: 'kunskapsportalen/',
        element: <MainContent />,
        loader: contentLoader,
      },
      {
        path: 'omoss/',
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
