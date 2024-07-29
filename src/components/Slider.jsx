import Carousel from 'react-bootstrap/Carousel';
import ban1 from '../assets/propiedades/ban1.jpg'
import ban2 from '../assets/propiedades/ban2.jpg'
import ban3 from '../assets/propiedades/ban3.jpg'
import '../components/Detail/ItemDetail.css'
import { useEffect, useState } from 'react';


function Slider({product}) {
  const [imgs, setImgs] = useState()
  useEffect(()=>{
    
      setImgs(product.imgs)
  },[product])
    
    let imgsBan = [ban1, ban2, ban3]
    
    // {imgsBan?.map(img=>{
      //   console.log(img)
      // })
      // console.log(imgsBan)
      // imgs?.map((img)=>console.log(img))
      
      console.log(imgs)
      
      
      
      if(imgs){
        return(
          
          
          <Carousel interval={null}>
        {imgs.map(img =>(
          
          
          <Carousel.Item key={img}>
      <img
      className="d-block w-100"
      src={img}
      alt="Slide image alt"
      />
      
      </Carousel.Item>
    ))
    }
      </Carousel>
    )
  }
  
  // <Carousel interval={null}>
  // {
  //   imgsBan?.map(img=>(

      
  //     <Carousel.Item className='slider-item' key={img} >
  //         <img src={img} alt="" className='imgs' />
  //         </Carousel.Item >
  //       ))
          
  //     }
  //       </Carousel>


    }
    



export default Slider;