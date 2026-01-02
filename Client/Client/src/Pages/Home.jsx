import React from 'react'
import Herosec from '../Components/Herosec.jsx'
import Subsec from '../Components/Subsec.jsx'
import Footer from '../Components/Footer.jsx'
import Adopt from '../Components/Adopt.jsx'
import ContactUs from '../Components/ContactUs.jsx'
import Login from '../Components/Login.jsx' 
import Story from '../Components/Story.jsx'

function Home() {
  return (
    <>
      <Herosec />
      <Subsec />
      <Adopt />
      <Story/>
      <Login />
      <ContactUs />
      <Footer />
      
    </>
  )
}

export default Home
