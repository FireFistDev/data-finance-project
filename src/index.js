import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CompanyPage from './pages/CompanyPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "company",
        element: <CompanyPage/> ,
      },
    ],
  },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <RouterProvider router={router}/>
  </React.Fragment>
);
