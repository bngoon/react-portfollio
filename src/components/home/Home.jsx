import React from 'react'
import "./home.css"
import Me from "../../assets/Pixel_Art_Profile.jpg"
import HeaderSocials from './HeaderSocials'
import ScrollDown from './ScrollDown'
// import Shapes from './Shapes'



function Home() {
  return (
   <section className="home container" id="home">
    <div className="intro">
      <img src={Me} alt="" className="home__img" />
      <h1 className='home__education'>Booker Ngon</h1> 
      <span className="home__education">Full-Stack developer</span>

      <HeaderSocials/>

      <a href="#contact" className="btn">Hire Me</a>

      <ScrollDown/>
    </div>
    {/* <Shapes/> */}
   </section>
  )
}

export default Home