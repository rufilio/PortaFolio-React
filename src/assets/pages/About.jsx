import React from 'react'
import { motion as m } from 'framer-motion'
import '../styles/About.css'
import { AboutContent } from '../widgets/AboutContent'





export const About = () => {
  return (
    <m.main
    animate={{ x: "0%" }}
    exit={{ opacity: 1 }}
    initial={{ x: "100%" }}
    transition={{
      duration: 0.75,
      ease: "easeOut",
    }}
    className="about-main-container"
  >
    <div className="about-container-center">
          <AboutContent  />
    </div>
  </m.main>
  )
}


export default About