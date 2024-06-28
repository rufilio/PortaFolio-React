import React from 'react'
import { Hero } from '../widgets/Hero'


import '../styles/Home.css'
import { NavbarHero } from '../widgets/NavbarHero'
import { Skills } from '../widgets/Skills'
import { Proyects } from '../widgets/Proyects'


import { motion as m } from 'framer-motion'

export const Home = () => {
  return (
    <div>
        <m.section animate={{ x: "0%" }}
                        exit={{ opacity: 1 }}
                        initial={{ x: "-100%" }}
                        transition={{ duration: 0.75, ease: "easeOut" }}
                        className="container-Home">
                <div className="container-principal">
                       <div className="hero-container-home">
                            <NavbarHero />
                            <Hero />
                            <Skills />
                            <Proyects />
                            <NavbarHero />
                       </div>
                </div>
        </m.section>

   
    </div>
  )
}


export default Home