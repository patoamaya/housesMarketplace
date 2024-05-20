import React, { useContext, useEffect, useState } from 'react'
import ListSidebar from './ListSidebar'
import {data} from '../../db'
import PropsCard from './PropsCard'
import './PropsList.css'
import { SearchContext } from '../../context/SearchContext'


const PropListContainer = () => {
const {objData} = useContext(SearchContext)
const [propiedades, setPropiedades] = useState([])

// let {operacion, propiedad, ambientes, ubicacion, moneda, precioMax, precioMin, propiedad, ubicacion} = objData

// let filteredProducts = (filtrado, data, propiedad, propValue)=>{
//     let filtrado = data.filter((propiedad)=>{
//         propiedad.propValue === objData.propValue
//     })

// }


useEffect(()=>{
    let filtrado = data.filter((propiedad) =>

        // propiedad.propiedad === objData.propiedad
        propiedad.ambientes === +objData.ambientes 
        // propiedad.ubicacion === objData.ubicacion
        // propiedad.moneda === objData.moneda
        // propiedad.precioMin === objData.precioMin
        // propiedad.precioMax === objData.precioMax
    
        )
        console.log(filtrado)
        setPropiedades(filtrado)
        
        
        
    },[])

// useEffect(()=>{
//     let dato = data.map((prop)=>{
//         return prop
//     })
    
//     setPropiedades(dato)
// },[data])

    
    // console.log(objData)


  return (
    <div className='propListContainer'>

    <div >
    <ListSidebar props={propiedades}/>
    </div>
    <div className="cards">

    <PropsCard props={propiedades}/>
    </div>
        </div>
    )
}

export default PropListContainer