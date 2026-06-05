import { createBrowserRouter } from "react-router";
import React from 'react'
import Layout from "./Layout";
import About from "./Pages/About";
import PizzaRecipes from "./Pages/PizzaRecipes";
import Subscribe from "./Pages/Subscribe";
import Pasta from "./Pages/Pasta";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
        {
            index:true,
            element:<About/>
        },
        {
            path:'Pizza',
            element:<PizzaRecipes/>
        },
        {
            path:'Subscribe',
            element:<Subscribe/>
        },
        {
            path:'Pasta',
            element:<Pasta/>
        }
    ]
  },
]);

export default router;