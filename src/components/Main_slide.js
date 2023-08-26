import React from 'react'
import data from '../data/home_slider.json'

function Main_slide(props){
  return (
    <div className='h-[35rem] mx-0'>
      <img src={data.at(props).event_image} alt="abc" className='md:w-[80vw] h-full absolute -z-1' />
      <a href={data.at(props).registration_link} className='max-md:hidden rounded bg-neutral-900 z-1 opacity-80 border text-white border-white top-1 float-right right-1 mt-[28rem] mr-[5rem] px-12 py-2 hover:bg-neutral-700'>Register</a>
      <div className='z-1 text-white absolute top-0 mx-20 leading-8 my-[24.8rem] text-xl font-lighter tracking-wide'>
        <p>{data.at(props).venue}</p>
        <p>{data.at(props).date}</p>
        <p>{data.at(props).time}</p>
      </div>
    </div>
  )
}

export default Main_slide
