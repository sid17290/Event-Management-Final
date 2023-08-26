import React from 'react'
import Carousel,{consts} from 'react-elastic-carousel'
import Main_slide from '../components/Main_slide'
import SocietyCard from '../components/SocietyCard'
import './home.css'
import EventCard from '../components/EventCard'

const myArrow = ({ type, onClick, isEdge }) =>{
  const pointer = type === consts.PREV ? <img src="left-arrow.svg" alt="" /> : <img src="right-arrow.svg" alt="" />
  return (
    <button onClick={onClick} >
      {pointer}
    </button>
  )
}

const myArrowOrange = ({ type, onClick, isEdge }) =>{
  const pointer = type === consts.PREV ? <img src="left-arrow-o.svg" alt="" /> : <img src="right-arrow-o.svg" alt="" />
  return (
    <button onClick={onClick} >
      {pointer}
    </button>
  )
}

const breakPoints = [
  
  { width: 600, itemsToShow: 3 },
  { width: 800, itemsToShow: 4 },
  { width: 1100, itemsToShow: 5 }
]

const Home = () => {
  return (
    <div className='md:mx-[10vw]'>
      <Carousel itemsToShow={1} renderArrow={myArrow} enableAutoPlay autoPlaySpeed={2500}>
          <item>{Main_slide(0)}</item>
          <item>{Main_slide(1)}</item>
          <item>{Main_slide(1)}</item>
          <item>{Main_slide(1)}</item>
          <item>{Main_slide(1)}</item>
      </Carousel>
      <Carousel className='upcoming_carousel' itemPadding={[0, 10]} breakPoints={breakPoints} renderArrow={myArrowOrange} >
          <item>{EventCard(0)}</item>
          <item>{EventCard(1)}</item>
          <item>{EventCard(2)}</item>
          <item>{EventCard(3)}</item>
          <item>{EventCard(4)}</item>
          <item>{EventCard(5)}</item>
      </Carousel>
      <Carousel className='upcoming_carousel' itemPadding={[0, 10]} breakPoints={breakPoints} renderArrow={myArrowOrange} >
          <item>{SocietyCard(0)}</item>
          <item>{SocietyCard(1)}</item>
          <item>{SocietyCard(2)}</item>
          <item>{SocietyCard(3)}</item>
          <item>{SocietyCard(4)}</item>
          <item>{SocietyCard(5)}</item>
      </Carousel>
    </div>
  )
}


export default Home
