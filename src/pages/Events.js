import React, { useEffect, useState } from 'react'
import SocietyCard from '../components/SocietyCard'

const Events = () => {

    const [societies, setSocieties] = useState()
    const [selected, setSelected] = useState()

    function fetchData(){
    fetch('../data/events.json')
    .then(response => response.json())
    .then(json => {;
            setSocieties(json)
        })
    }

    useEffect(()=>{
        fetchData()
    },[])

  return (
    <div className='bg-darkGray min-h-screen flex flex-col gap-6 items-center'>

        <nav className='h-12 text-white'>Navbar</nav>

        <h1 className='text-white text-center font-bold text-5xl font-roboto tracking-wide'>Societies</h1>

        <div className='grid gap-7 grid-cols-2 md:grid-cols-4 my-8 mx-3 lg:mx-0'>
            {societies?.map((society, index)=>(
                <div className='mt-2' key={index} onClick={()=>{setSelected(index)}}>
                    <SocietyCard society={society} isSelected={selected===index} />
                </div>
            ))}
        </div>

    </div>    
  )
}

export default Events