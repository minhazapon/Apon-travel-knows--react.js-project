import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'




import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



import Root from './Root';
import Home from './Home';
import News from './News';
import Place from './Place';
import Contact from './Contact';
import Destination from './Destination';
import Login from './Login';
import SignUp from './SignUp';
import Blog from './Blog';



const router = createBrowserRouter([
  {
    path: "/",
    element:  <Root></Root> ,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        
      },
      {
        path: "/news",
        element:  <News></News> ,
        
      },
      {
        path: "/place",
        loader: () => fetch('places.json') ,
        element: <Place></Place> ,
        
      },
     
      {
        path: "/contact",
        element:  <Contact></Contact>,
        
      },
      {
        path: "/destination",
        element:  <Destination></Destination>,
        
      },
      {
        path: "/login",
        element:  <Login></Login>,
        
      },
      {
        path: "/registration",
        element:  <SignUp></SignUp>,
        
      },
      {
        path: "/blog",
        element:  <Blog></Blog> ,
        
      },
     
    ],
  },
]);





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)


