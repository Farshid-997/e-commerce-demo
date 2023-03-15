import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "./CarouselItem.css"
import slider from "../../Assests/image 116.png"
export default function CarouseItem() {
  return (
    <div className='main-carousel-div'>

<Carousel data-interval="false">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider}
          alt="First slide"
        />
        <Carousel.Caption className="custom-caption">
        <div className="caption-content">
    <h3 className='shop'>Shop <span className='span-head'>Computer</span></h3>
    <h3 className='span-head'>& experience</h3>
    <p>You cannot inspect quality into the product; it is already there.
I am not a product of my circumstances. I am a product of my decisions.</p>
    <button>Learn More</button>
  </div>
        </Carousel.Caption>

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider}
          alt="Second slide"
        />

<Carousel.Caption className="custom-caption">
        <div className="caption-content">
    <h3 className='shop'>Shop <span className='span-head'>Computer</span></h3>
    <h3 className='span-head'>& experience</h3>
    <p>You cannot inspect quality into the product; it is already there.
I am not a product of my circumstances. I am a product of my decisions.</p>
    <button>Learn More</button>
  </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider}
          alt="Third slide"
        />
  <Carousel.Caption className="custom-caption">
        <div className="caption-content">
    <h3 className='shop'>Shop <span className='span-head'>Computer</span></h3>
    <h3 className='span-head'>& experience</h3>
    <p>You cannot inspect quality into the product; it is already there.
I am not a product of my circumstances. I am a product of my decisions.</p>
    <button>Learn More</button>
  </div>
        </Carousel.Caption>

      </Carousel.Item>
    </Carousel>

    </div>
  )
}
