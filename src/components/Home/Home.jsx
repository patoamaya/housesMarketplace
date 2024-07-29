import React, { useContext, useEffect, useState } from 'react'
import './Home.css'
import { Button, MenuItem, TextField } from '@mui/material'
import HomeSlider from './HomeSlider'
import 'bootstrap/dist/css/bootstrap.min.css'
import { SearchContext } from '../../context/SearchContext'
import { Link, useNavigate } from 'react-router-dom'
import {data} from '../../db'
import { Key } from '@mui/icons-material'





const Home = () => {
  // const [ubis, setUbis] = useState({})
  // useEffect(() => {
  //   setTimeout(() => {
      
  //     data.map((ubication)=> {setUbis(ubication.localidad)})
  //   }, 3000);
  // }, [])
// data.map((ubis)=>{console.log(ubis.localidad)})
//   console.log(ubis)
  

  
// const {handleOperationSelect, handleAmb, handleUbication, handleSubmit, handlePropSelect, propSelect, handleCurrency, handleMaxPrice, handleMinPrice} = useContext(SearchContext)

const {handleChange, handleSubmit} = useContext(SearchContext)
const navigate = useNavigate()
  return ( 
    <div className='home-container'>
      <main className='home-main'>
        
          <form action="" className='home-form' onSubmit={handleSubmit}>  
          <div className="home-tags-container">
            <select name="operacion" defaultValue="alquiler" className='operation-select' onChange={handleChange} >
              <option value="alquiler">Alquiler</option>
              <option value="venta">Venta</option>
            </select>
            <select
                name='propiedad'
                onChange={handleChange}
                className='prop-select'
                >

                <option value="casa">Casa</option>
                <option value="departamento">Departamento</option>
                <option value="local">Local</option>
                <option value="terreno">Terreno</option>
              </select>

           

            {/* Hacer un select con los inputs y el value que le corresponda a alquiler y ventya, poner en la card de home */}
            {/* <input type='text' name='operacion' className={alquiler ? 'home-tag-true' : 'home-tag'} onClick={alquilerTrue} value="Alquiler" readOnly/>
            <input type='text' name='operacion' className={venta ? 'home-tag-true' : 'home-tag'} onClick={ventaTrue} value="Compra" readOnly/> */}
          </div>
          <select name="ambientes" className='amb-select' onChange={handleChange}>
              <option value="1">1 Ambiente</option>
              <option value="2">2 Ambientes</option>
              <option value="3">3 Ambientes</option>
              <option value="4">4 Ambientes</option>
              <option value="5">5 Ambientes</option>
            </select>  

                {/* <input
                  className='home-ubication'
                  type="text"
                  placeholder='Ubicacion'
                  name='ubicacion'
                  onChange={handleChange}
                  /> */}
              

              <select name="localidad" className='home-ubication' onChange={handleChange} >
                {data.map((ubication)=> <option key={ubication.id} value={ubication.localidad}>{ubication.localidad}</option>)
                }
              </select>
              
              <div className="home-precio">
              <select
                name='moneda'
                onChange={handleChange}
                className='currency-select'
                
                >
                <option value="$">$</option>
                <option value="u$s">US$</option>
              </select>

              <input
                type='number'
                placeholder='Precio mínimo'
                className='prices'
                name='precioMin'
                onChange={handleChange}      
                />
              
              <input
                type='number'
                placeholder='Precio máximo'
                className='prices'    
                name='precioMax'
                onChange={handleChange}  
                />
              
                </div>
                <div className="home-btn">

                <Link to="/list">
                <Button variant="contained" color="primary" type='submit'>
                  Buscar
                </Button>
                </Link>
                </div>
            </form>
            <div className="home-img-container">
              <HomeSlider/>
            </div>
      </main>
      </div>
  )
}

export default Home