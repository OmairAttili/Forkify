import axios from 'axios';
import React, { useEffect } from 'react';
import { RouterProvider } from "react-router/dom";
import Navbar from './Components/Navbar';
import router from './router';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
function App() {

  const queryClient=new QueryClient;


  return (
    <QueryClientProvider client ={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App