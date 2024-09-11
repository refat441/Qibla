import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AboutPage from './components/AboutPage/AboutPage';
import HeaderHomePage from './components/Home-page/HeaderHomePage';
import Package from './components/Package/Package';
import Pricing from './components/Pricing/Pricing';
import Contact from './components/Contact/Contact';
import FAQ from './components/FAQ/FAQ';

import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/> ,
    children:[
      {
        path: "Home",
        element: <HeaderHomePage/> ,
      },
      {
        path: "About",
        element: <AboutPage/> ,
      },
      {
        path: "Package",
        element: <Package/> , 
      },
      {
        path: "Pricing",
        element: <Pricing/> , 
      },
      {
        path: "Contact",
        element: <Contact/> , 
      },
      {
        path: "FAQ",
        element: <FAQ/> , 
      },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
