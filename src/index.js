import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import ErrorPage from './page/ErrorPage';
import HomePage from './page/HomePage';
import Pdp from './page/Pdp';
import Shop from './page/Shop';
import Bag from './page/Bag';

const root = ReactDOM.createRoot(document.getElementById('root'));

const appRouter = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      {
        element:   <HomePage />,
        path: "/",
      },
      {
        element:  <Pdp />,
        path: "/pdp",
      },
     
      {
        element:  <Shop /> ,
        path: "/shop",
      },
      {
        element:  <Bag /> ,
        path: "/bag",
      },
      
      
      
     
    ]
  }
]);

 
root.render(
  <React.StrictMode>
      <RouterProvider router={appRouter} />
  </React.StrictMode>
);

