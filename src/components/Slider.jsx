import Carousel from 'react-bootstrap/Carousel';
import ban1 from '../assets/propiedades/ban1.jpg'
import ban2 from '../assets/propiedades/ban2.jpg'
import ban3 from '../assets/propiedades/ban3.jpg'
import '../components/Detail/ItemDetail.css'


function Slider() {
  
  return (
    <Carousel interval={null}>
      <Carousel.Item className='slider-item'>
        <img src={ban1} alt="" className='imgs' />
      </Carousel.Item >
      <Carousel.Item className='slider-item'>
      <img src={ban2} alt="" className='imgs' />
      </Carousel.Item>
      <Carousel.Item className='slider-item'>
      <img src={ban3} alt="" className='imgs' />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;