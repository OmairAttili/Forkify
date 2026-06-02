import axios from 'axios';
import React, { useEffect } from 'react';
import { RouterProvider } from "react-router/dom";
import Navbar from './Components/Navbar';
import router from './router';
function App() {

  const getdata = async()=>{
    const response = await axios.get(`https://forkify-api.jonas.io/api/v2/recipes?search=pizza`);
    console.log(response.data.data.recipes);
  }

  useEffect(()=>{
    getdata();
  },[])

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App