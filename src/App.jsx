import React from 'react'
import Navbar from "./Navbar"
import Home from "./home"
import About from "./About"
import PortFolio from './PortFolio'
import Footer from "./Footer"
import Experience from "./Experience"


function App() {
  return (
    <>
        <Navbar />
        <home />
        <About />
        <PortFolio />
        <Experience />
        <Footer />
    </>
  );
}

export default App