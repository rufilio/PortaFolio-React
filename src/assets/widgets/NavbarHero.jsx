import React from 'react'
import './WidgetsStyle/NavbarHero.css'



export const NavbarHero = () => {
  return (
    <header>
        <div className="navbar">
            <ul>
                <li><a href="#hero" className='links'>Home</a></li>
                <li><a href="#skills" className='links'>Skills</a></li>
                <li><a href="#proyects" className='links'>Proyects</a></li>
            </ul>
        </div>
    </header>
  )
}
