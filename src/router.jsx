import { createBrowserRouter } from "react-router";
import React from 'react'
import Layout from "./Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import PizzaRecipes from "./Pages/PizzaRecipes";
import Subscribe from "./Pages/Subscribe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
        {
            index:true,
            element:<Home/>
        },
        {
            path:'About',
            element:<About/>
        },
        {
            path:'Pizza',
            element:<PizzaRecipes/>
        },
        {
            path:'Subscribe',
            element:<Subscribe/>
        }
    ]
  },
]);

export default router;