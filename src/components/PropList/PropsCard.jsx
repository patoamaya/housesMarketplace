import React from 'react'
import './PropsCard.css'
import PaidIcon from '@mui/icons-material/Paid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HouseSidingIcon from '@mui/icons-material/HouseSiding';
import StraightenIcon from '@mui/icons-material/Straighten';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import { Link } from 'react-router-dom';




const PropsCard = ({props}) => {
  if(props.length !=0){

    return (
      
      props.map((prop)=>{
        
        
        return(
          <Link to= {`/${prop.id}`} key={prop.id} className='link'>
          <div key={prop.id} className='cardsContainer'>
    <div className='propsCardContainer'>
        <div className="propCardContainer">

        <div className='propsImgContainer'>
             <img src={prop.imgs[0]} alt="" className='img'/>  
        </div>
        <div className="infosContainer">

        <div className="propsCardInfo1">
        <PaidIcon fontSize="large" sx={{ color: "#B7A15F" }}/><h2>{prop.precio} {prop.moneda}</h2>
        </div>
        <div className="propsCardInfo2Container">
          <ul className='info2H3'>
          <li><h3>{prop.direccion}</h3></li>
          <li><h4>{prop.localidad}, {prop.provincia} {prop.zona}</h4></li>
          <ul className='info2P'>
          <li>{prop.ambientes} Ambiente/s</li>
          <li>{prop.supTotal} m2</li>
          <li>{prop.operacion}</li>
          </ul>
          <li className='vendedor'>{prop.vendedor}</li>


          </ul>
        </div>
        </div>
        </div>
    </div>
    </div>
        </Link>
    )
  }
            )
        )  
      }else{
        return(
          
          <h1>No hay nada gil</h1>
        )
}}
                
  
        
        
        export default PropsCard
        
        
        // <p><LocationOnIcon fontSize='large' sx={{ color: "#B7A15F" }}/> {prop.localidad}</p>
        // <p><HouseSidingIcon fontSize='large' sx={{ color: "#B7A15F" }}/>{prop.ambientes} ambiente/s</p>
// <p><StraightenIcon fontSize='large' sx={{ color: "#B7A15F" }}/>{prop.supTotal} m2</p>
// <p><LoyaltyIcon fontSize='large' sx={{ color: "#B7A15F" }}/>{prop.operacion}</p>