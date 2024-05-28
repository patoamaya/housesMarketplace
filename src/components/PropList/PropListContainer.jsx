import React, { useContext, useEffect, useState } from 'react'
import ListSidebar from './ListSidebar'
import {data} from '../../db'
import PropsCard from './PropsCard'
import './PropsList.css'
import { SearchContext } from '../../context/SearchContext'


const PropListContainer = () => {
const {objData, propSelect, setPropSelect, amb, setAmb, ubication, setUbication, currency, setCurrency, minPrice, setMinPrice, maxPrice, setMaxPrice} = useContext(SearchContext)
const [filteredProps, setFilteredProps] = useState({})
const [propiedades, setPropiedades] = useState([])

// let {operacion, propiedad, ambientes, ubicacion, moneda, precioMax, precioMin, propiedad, ubicacion} = objData

// let filteredProducts = (filtrado, data, propiedad, propValue)=>{
//     let filtrado = data.filter((propiedad)=>{
//         propiedad.propValue === objData.propValue
//     })

// }

// console.log(data)

useEffect(()=>{
    let propType = data.filter((propiedad)=>
        propiedad.propiedad === objData.propiedad
    )
    let ambiente = data.filter((propiedad) =>

        propiedad.ambientes === +objData.ambientes
        
    )
    
    
    let ubicacion = data.filter((propiedad)=>
        propiedad.localidad === objData.ubicacion
        
    )
    
    let moneda = data.filter((propiedad)=>
        
        propiedad.moneda === objData.moneda

        
        
    )
    
    let minPrice = data.filter((propiedad)=>
        propiedad.precio <= +objData.precioMin
        
    )
    
    let maxPrice = data.filter((propiedad)=>
        propiedad.precio >= +objData.precioMax
    )
    
    
    // setPropSelect(propType)
    // setAmb(ambiente)
    // setUbication(ubicacion) 
    // setCurrency(moneda)  
    // setMinPrice(precioMin)  
    // setMaxPrice(precioMax)
    setFilteredProps({propType, ambiente, ubicacion, moneda, minPrice, maxPrice})
    console.log(filteredProps)
    setPropiedades()

        
    },[])




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