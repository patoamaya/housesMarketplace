import React, { useContext } from 'react'
import './Home.css'
import { Button, MenuItem, TextField } from '@mui/material'
import HomeSlider from './HomeSlider'
import 'bootstrap/dist/css/bootstrap.min.css'
import { SearchContext } from '../../context/SearchContext'
import { useNavigate } from 'react-router-dom'




const Home = () => {
  
const {handleOperationSelect, handleAmb, handleUbication, handleSubmit, handlePropSelect, propSelect, handleCurrency, handleMaxPrice, handleMinPrice} = useContext(SearchContext)
const navigate = useNavigate()
  return ( 
    <div className='home-container'>
      <main className='home-main'>
        
          <form action="" className='home-form' onSubmit={handleSubmit}>  
          <div className="home-tags-container">
            <select name="operacion" className='operation-select' onChange={handleOperationSelect} >
              <option value="alquiler">Alquiler</option>
              <option value="venta">Venta</option>
            </select>
            <select
                name='tipoDePropiedad'
                onChange={handlePropSelect}
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
          <select name="ambientes" className='amb-select' onChange={handleAmb}>
              <option value="1">1 Ambiente</option>
              <option value="2">2 Ambientes</option>
              <option value="3">3 Ambientes</option>
              <option value="4">4 Ambientes</option>
              <option value="5">5 Ambientes</option>
            </select>  

                <input
                  className='home-ubication'
                  type="text"
                  placeholder='Ubicacion'
                  name='ubicacion'
                  onChange={handleUbication}
                  />
              <div className="home-precio">
              

              <select
                name='moneda'
                onChange={handleCurrency}
                className='currency-select'
                
                >
                <option value="peso">$</option>
                <option value="u$s">US$</option>
              </select>

              <input
                type='number'
                placeholder='Precio mínimo'
                className='prices'
                name='precioMin'
                onChange={handleMinPrice}      
                />
              
              <input
                type='number'
                placeholder='Precio máximo'
                className='prices'    
                name='precioMax'
                onChange={handleMaxPrice}  
                />
              
                </div>
                <div className="home-btn">
                <Button variant="contained" color="primary" type='submit' onClick={()=> setTimeout(() => {
                navigate("/list")  
                }, 500)}>
                  Buscar
                </Button>
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