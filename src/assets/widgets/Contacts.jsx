import React from 'react'
import './WidgetsStyle/Contacts.css'
import { Link } from 'react-router-dom'







export const Contacts = () => {

 function copy() {
  const textToCopy = "alexisrafaelbz@gmail.com"
    // Copiar el texto al portapapeles
    navigator.clipboard.writeText(textToCopy);
    // Opcional: podrías agregar una notificación o mensaje de éxito aquí
    alert('Email, Copiado en el Portapales');
 }



  return (
    <div className='contact-div-main'>
        <div className="items">
          <span><i>contact</i></span>
          <ul>
          <li><a href="https://github.com/rufilio" className='links'>Github</a></li>
          <li><a href="https://www.instagram.com/no_soyvegano/?hl=es-la" className='links'>Instagram</a></li>
          <li><button onClick={copy} className='links'>Email</button></li>
          </ul>
        </div>
        <div className="items">
          <ul>
            <li><Link to='/About' className='links'>About</Link></li>
          </ul>
        </div>
    </div>
  )
}
