import React from 'react'
import './WidgetsStyle/Hero.css'
import { Contacts } from './Contacts'





export const Hero = () => {



  return (
    <section className="hero-container-main" id='hero'>
        <div className="text-hero-main-todo">
            <div className="context-text-hero">
                <div className="navbar-avaiable">
                    <div className="work-active">
                        <div className="dot"></div>
                        <span>available for work</span>
                    </div>
                </div>
                   
                   <div className="title-and-contact">
                        <h1 className='tile'><i>Programmer and Web Developer passionate about design.</i></h1>
                        
                        <div className="contacts">
                            <Contacts />
                        </div>
                   </div>
                </div>
        </div>
    </section>
  )
}

