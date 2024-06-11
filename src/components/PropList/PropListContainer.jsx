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

useEffect(()=>{
    
    
    const database = ()=>{
        data.map((e)=>
    console.log(Object.values(e)))
    }
    database()

    

    let propType = data.filter((propiedad)=>
        propiedad.propiedad === objData.propiedad
    )
    let ambiente = data.filter((propiedad) =>

        propiedad.ambientes === +objData.ambientes
        
    )
    
    
    // let ubicacion = data.filter((propiedad)=>
    //     propiedad.localidad === objData.ubicacion
        
    // )
    
    // let moneda = data.filter((propiedad)=>
        
    //     propiedad.moneda === objData.moneda

        
        
    // )
    
    // let minPrice = data.filter((propiedad)=>
    //     propiedad.precio <= +objData.precioMin
        
    // )
    
    // let maxPrice = data.filter((propiedad)=>
    //     propiedad.precio >= +objData.precioMax
    // )
    
    

        // setFilteredProps(propType, ambiente, ubicacion, moneda, minPrice, maxPrice)
        
        setPropiedades(ambiente)
       

        
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