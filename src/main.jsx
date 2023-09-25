import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/Root/Root';
import Donation from './page/Donation';
import Home from './page/Home';
import Statistics from './page/Statistics';
import Card from './component/card/Card';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/" ,
        element:<Home></Home>,
        loader:() => fetch('data.json') 
      },
      {
        path:"/donation",
        element:<Donation></Donation>
      },
      {
        path:"/statistics",
        element:<Statistics></Statistics>
      },
      {
        path:"/card/:id",
        element:<Card></Card>,
        loader:() => fetch('data.json')
      }

    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
