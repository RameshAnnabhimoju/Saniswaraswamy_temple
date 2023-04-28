import React from 'react'
import Baner from '../components/Baner/Baner'
import Navbar from '../components/Navbar/Navbar'
import Car from '../components/Carousel/Car'
import Scrollingtxt from '../components/Scrolling_text/Scrollingtxt'
const Home = () => {
  return (
    <div>
      <Baner/>
      <Navbar/>
      <Car/>
      <Scrollingtxt/>
    </div>
  )
}

export default Home