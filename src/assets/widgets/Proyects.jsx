import React, {useEffect, useState} from 'react'
import './WidgetsStyle/Proyects.css'
import {db} from '../firebase/Config'
import { collection, getDocs, query, where } from "firebase/firestore";
import {Fade} from 'react-awesome-reveal'




export const Proyects = () => {

    const [proyectos, setDataProyects] = useState([]);

    useEffect(() => {

        const proyects = collection(db, "proyectos");
        
  
        getDocs(proyects)
          .then((resp) => {
            setDataProyects(
              resp.docs.map((doc) => {
                return { ...doc.data(), id: doc.id }
              })
            )
          })
          
      }, [])
    
      console.log(proyectos)

  return (
    <div className='card-proyect-content' id='proyects'>
        <div className="title">
            <h1><i>proyects</i></h1>
        </div>
        <div className="card-container">
        <Fade direction='up'>
        {Array.isArray(proyectos) && proyectos.length > 0 ? (
      proyectos.map((prod) => (
        <div key={prod.id} className='card'>
        <div className="img">
            <img src={prod.imagen} alt="Imagen" />
        </div>
        <div className="texto-div">
            <div className="tite">
                <h2>{prod.titulo}</h2>
            </div>
            <div className="descripcion">
                <p>{prod.descripcion}</p>
            </div>
            <div className="buttons">
                <a href={prod.urlGithub} className='buttons-p'><i class='bx bxl-github'></i></a>
                <a href={prod.urlPagina} className='buttons-p'><i class='bx bx-right-top-arrow-circle'></i></a>
            </div>
        </div>
            </div>
      ))
    ) : (
      <p>No hay accesorios disponibles</p>
    )}
       </Fade>
        </div>
    </div>
  )
}

