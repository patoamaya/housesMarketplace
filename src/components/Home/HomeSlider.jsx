import Carousel from 'react-bootstrap/Carousel';
import casa from "../../assets/CarouselHome/homeCasa.jpg"
import terreno from "../../assets/CarouselHome/homeTerreno.jpg"
import depto from "../../assets/CarouselHome/homeDepto.jpg"
import local from "../../assets/CarouselHome/homeLocal1.jpeg"
import local2 from "../../assets/CarouselHome/homeLocal2.jpeg"
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css'





function HomeSlider() {
  
  return (
    <Carousel controls={null} indicators={null}>
      <Carousel.Item className='slider-item'>
        <img src={casa} alt="" className='home-img' />
      </Carousel.Item >
      <Carousel.Item className='slider-item'>
      <img src={depto} alt="" className='home-img'/>
      </Carousel.Item>
      <Carousel.Item className='slider-item'>
      <img src={terreno} alt="" className='home-img' />
      </Carousel.Item>
      <Carousel.Item className='slider-item'>
      <img src={local} alt="" className='home-img' />
      </Carousel.Item>
      <Carousel.Item className='slider-item'>
      <img src={local2} alt="" className='home-img' />
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeSlider;