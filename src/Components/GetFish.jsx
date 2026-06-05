import React from 'react'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function GetFish() {

  const getFood = async()=>{
  const response = await axios.get(`https://forkify-api.jonas.io/api/v2/recipes?search=fish`);
  return response.data.data;
}

const {data,isError,isLoading,error}=useQuery({
  queryKey:['recipes'],
  queryFn:getFood,
  staleTime:1000 * 60 * 5,
});


if(isError) return <h2 className='text-red-600 text-5xl py-10 text-center font-semibold'>Error to get data</h2>
if(isLoading) return <h2 className='text-[#9D4300] text-5xl py-10 text-center font-semibold'>Loading...</h2>


  return (
    <section className='pb-20'>
        <div className='container bg-white/90'>
        <h2 className='text-center font-bold text-6xl mb-6'>Fish</h2>
            <div className='grid grid-cols-12 gap-6'>
                {data.recipes.map((p)=>
                <div className='col-span-12 sm:col-span-6 lg:col-span-4 bg-white rounded-3xl drop-shadow-2xl flex flex-col gap-6 pb-8 hover:-translate-y-6 duration-500 transition-all delay-100'>
                  <img src={p.image_url} alt={p.image_url} className='h-75 rounded-3xl'/>
                  <div className='flex items-center flex-col justify-center gap-6 text-center'>
                    <h2 className='text-[#121C2A] font-playFair font-semibold text-[28px]'>{p.title}</h2>
                    <h3 className='text-[#584237] font-plusJakarta '>Publisher : {p.publisher}</h3>
                  </div>
                </div>
                )}
            </div>
        </div>
    </section>
  )
}

export default GetFish