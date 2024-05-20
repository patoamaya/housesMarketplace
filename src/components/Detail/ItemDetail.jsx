import React from 'react'
import './ItemDetail.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Slider from '../Slider'
import PaidIcon from '@mui/icons-material/Paid';
import SignpostIcon from '@mui/icons-material/Signpost';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HouseSidingIcon from '@mui/icons-material/HouseSiding';
import StraightenIcon from '@mui/icons-material/Straighten';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import GarageIcon from '@mui/icons-material/Garage';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import BathtubIcon from '@mui/icons-material/Bathtub';
import BedIcon from '@mui/icons-material/Bed';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { TextField, Button } from '@mui/material';

const ItemDetail = () => {
  return (
    
    <main className='detail-container'>
      <div className="info1">

            <div className="detail-img-container">
              <Slider/>
              </div>

              <div className="fav-share-container">
                <p className='fav'>
                 {/* Hacer un if, si el estado donde muestra que este elemento esta agregado en favs, que muestre el icono <FavoriteIcon/> */}
                  <FavoriteBorderIcon fontSize="large" sx={{ color: "#B7A15F" }} className='icon'/>
                  </p>
                <div className="share">
                <WhatsAppIcon fontSize="large" sx={{ color: "#B7A15F" }} className='icon'/>
                <FacebookIcon fontSize="large" sx={{ color: "#B7A15F" }} className='icon'/>
                <InstagramIcon fontSize="large" sx={{ color: "#B7A15F" }} className='icon'/>
                <XIcon fontSize="large" sx={{ color: "#B7A15F" }} className='icon'/>
                </div>

              </div>
            <div className="detail-first-info-container">
              <div className="detail-price-container">
              <PaidIcon fontSize="large" sx={{ color: "#B7A15F" }}/>
              <h1>145.000 US$</h1>
              </div>
              <div className="detail-street-container">
              <SignpostIcon fontSize='large' sx={{ color: "#B7A15F" }}/>
              <h3>Araoz 250</h3>
              </div>
              <div className="detail-location-container">
              <LocationOnIcon fontSize='large' sx={{ color: "#B7A15F" }}/>
              <h4>Banfield, Buenos Aires Sur</h4>
              </div>
              <div className="detail-ambientes-sup-container">
              <HouseSidingIcon fontSize='large' sx={{ color: "#B7A15F" }}/>
              <p>4 Ambientes</p>
              <StraightenIcon fontSize='large' sx={{ color: "#B7A15F" }}/>
              <p>330 m2</p>
              </div>
              <div className="detail-sale-container" >
                <PermIdentityIcon fontSize='large' sx={{ color: "#B7A15F" }}/>
                <p>Particular</p>
                <LoyaltyIcon fontSize='large' sx={{ color: "#B7A15F" }}/>
                <p>Venta</p>
              </div>
              

            </div>

      </div>
            <div className="info2">
              <div className="detail-info2-map-container">
              <iframe className='detail-map' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3278.7776837754386!2d-58.40336405503957!3d-34.73599778405945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1711818250123!5m2!1ses-419!2sar" allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div className="detail-info2-contact-container">
                <h2><PermIdentityIcon fontSize='large' sx={{ color: "#B7A15F" }}/>Leonardo Pisculichi</h2>
                <div className="sell-contact">


                <p><WhatsAppIcon fontSize="large" sx={{ color: "#B7A15F" }}/> | <PhoneIcon fontSize="large" sx={{ color: "#B7A15F" }}/> 1134066776</p>
                  
                 <p><EmailIcon fontSize="large" sx={{ color: "#B7A15F"}}/>leopiscu15@gmailcom</p>
                {/* hacer if si esta logeado o no para pedir sus datos a la hora de enviar la pregunta */}
               <form action="">

               <TextField
                 className='input'
                 id="mail"
                 color='secondary'
                 variant='filled'
                 label="Email"
                 />
               <TextField
                 className='input'
                 id="tel"
                 color='secondary'
                 variant='filled'
                 label="Telefono"
                 />
               <TextField
               className='input'
                 id="text"
                 color='secondary'
                 variant='filled'
                 label="Mensaje"
               />
          <Button variant="contained" color="secondary"  >
            Enviar
          </Button>
                 </form>
                </div>
              </div>
            </div>
              <div className="detail-info3-container">
                <ul className="detail-info3-gral">
                   <li ><GarageIcon fontSize='large' sx={{ color: "#B7A15F" }}/><p>0 cochera/s</p></li>
                   <li> <StraightenIcon fontSize='large' sx={{ color: "#B7A15F" }}/><p>330 m2 Sup. total</p></li>
                   <li><SquareFootIcon  fontSize='large' sx={{ color: "#B7A15F" }}/> <p>240 m2 Sup. cubierta</p></li>
                   <li><BathtubIcon fontSize='large' sx={{ color: "#B7A15F" }}/><p>1 Baño/s</p></li>
                   <li><BedIcon fontSize='large' sx={{ color: "#B7A15F" }}/> <p>2 Habitacion/es</p></li>
                   <li><CalendarMonthIcon fontSize='large' sx={{ color: "#B7A15F" }}/><p> 9 Año/s de antiguedad</p></li>
                   <li><AccountBalanceIcon fontSize='large' sx={{ color: "#B7A15F" }}/><p>Apto crédito</p></li>
                  </ul>
                  <div className="detail-info3-description">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad corrupti vero voluptas deserunt, id minima tenetur distinctio omnis. Natus harum voluptatibus tempora illum nulla dolor aliquid unde soluta suscipit mollitia!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, minima. Iure accusantium adipisci animi natus quos explicabo eius magnam cupiditate veritatis laborum! Aliquam alias corrupti maxime recusandae, ad impedit quibusdam.
                    Quidem, libero sequi? Aliquam sed consectetur eveniet, quibusdam, cumque iure soluta deleniti repellat eligendi dolorum vitae perspiciatis impedit neque dicta quo, sequi ipsum magni voluptatibus aliquid minus! Iure, ut ex.
                    Officiis perferendis, tempore architecto voluptatibus aliquid reprehenderit, consequatur magnam aperiam cumque soluta ipsam sunt recusandae, esse fuga fugit natus eveniet praesentium rem quo? Ipsam a, cum fugit iste deserunt dolorum?
                    Tempora, quidem aut dolorum architecto natus omnis alias corporis a iusto iure quo necessitatibus, impedit tenetur voluptatum ut iste voluptatibus temporibus laborum similique vero eos voluptates. Suscipit commodi tempore qui?
                    </div>  
            </div>
    </main>
  )
}

export default ItemDetail