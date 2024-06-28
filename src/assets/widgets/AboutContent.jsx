import React from 'react'
import './WidgetsStyle/About.css'
import Logo from '../../images/lgo.png'
import { Link } from 'react-router-dom'


export const AboutContent = () => {
  return (
    <div className='about'>
        <div className="images">
            <img src={Logo} alt="imagen" />
        </div>
        <div className="text-for-me">
          <div className="back">
              <Link to='/' className='links'><i class='bx bxs-chevrons-left'></i></Link>
          </div>
            <h1><i>Me</i></h1>
            <div className="parrafo">
              <p>Skilled in problem solving and providing customer services, IT Sports Technician and Front-End Developer with Back-End Experience, Passionate about layout, programming and learning.</p>
            </div>
            <div className="cv-button">
              <a href="https://cdn.discordapp.com/attachments/1244354279779860511/1252740941434060891/ccc.pdf?ex=6680806b&is=667f2eeb&hm=bbd2ebfae23f43aa282e335b0751b465d8111c83220f296b60a23c15b8f7d82e&" className='button'>Download CV</a>
            </div>
        </div>
    </div>
  )
}
