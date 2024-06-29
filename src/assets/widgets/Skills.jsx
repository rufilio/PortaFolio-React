import React from 'react'
import './WidgetsStyle/Skills.css'
import {Zoom} from 'react-awesome-reveal'

export const Skills = () => {

    
  return (
    <div className='skills-container-main' id='skills'>
        <div className="title">
            <div className="title">
                <span>explore my</span>
                <h1><i>experience</i></h1>
            </div>
        </div>

        <div className="show-skills-container">
            <Zoom>
            <div className="front-end">
                <div className="titlee">
                    <h1><i>Front-End</i></h1>
                </div>
                <div className="itemn-s">
                    <div className="item">
                        <a href="#" className='skills-t'><i class='bx bxl-html5' ></i></a>
                    </div>
                    <div className="item">
                        <a href="#" className='skills-t'><i class='bx bxl-css3' ></i></a>
                    </div>
                    <div className="item">
                        <a href="#" className='skills-t'><i class='bx bxl-javascript'></i></a>
                    </div>
                    <div className="item">
                        <a href="#" className='skills-t'><i class='bx bxl-react'></i></a>
                    </div>
                    <div className="item">
                        <a href="#" className='skills-t'><i class='bx bxl-tailwind-css' ></i></a>
                    </div>
                    <div className="item">
                        <a href="#" className='skills-t'><i class="ri-nextjs-line"></i></a>
                    </div>
                    <div className="item">
                        <a href="#" className='skills-t'><i class="ri-vuejs-line"></i></a>
                    </div>
                </div>
            </div>
            <div className="front-end">
                <div className="titlee">
                    <h1><i>Back-End</i></h1>
                </div>
                <div className="itemn-s">
                    <div className="item">
                        <a href="#" className='skills-t'><i class='bx bxl-php'></i></a>
                    </div>
                    <div className="item">
                        <a href="#" className='skills-t'><i class='bx bxl-nodejs'></i></a>
                    </div>
                    <div className="item">
                        <a href="#" className='skills-t'><i class='bx bxl-firebase'></i></a>
                    </div>
                    <div className="item">
                        <a href="#" className='skills-t'><i class='bx bxl-mongodb'></i></a>
                    </div>
                </div>
            </div>
            <div className="front-end">
                <div className="titlee">
                    <h1><i>Tools</i></h1>
                </div>
                <div className="itemn-s">
                    <div className="item">
                        <a href="" className='skills-t'><i class='bx bxl-git'></i></a>
                    </div>
                    <div className="item">
                        <a href="" className='skills-t'><i class='bx bxl-github'></i></a>
                    </div>
                </div>
            </div>
            </Zoom>
        </div>
    </div>
  )
}
