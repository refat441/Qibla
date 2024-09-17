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
import Testimonial from './components/Testimonial/Testimonial';
import News from './components/News/News';
import Error from './components/Error/Error';
import ComingSoon from './components/ComingSoon/ComingSoon';
import Blog from './components/Blog/Blog';

import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './components/Home-page/HomePage';









const router = createBrowserRouter([
  {
    path: "/",
    element: <App/> ,
    children:[
      {
        path: "Home",
        element: <HomePage/> ,
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
      {
        path: "Testimonial",
        element: <Testimonial/> , 
      },
      {
        path: "News",
        element: <News/> , 
      },
      {
        path: "Error",
        element: <Error/> , 
      },
      {
        path: "ComingSoon",
        element: <ComingSoon/> , 
      },
      {
        path: "Blog",
        element: <Blog/> , 
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
