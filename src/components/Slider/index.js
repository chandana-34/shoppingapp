import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './Slider.css'

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  }
  return (
    <div className='slider-wrapper'>
      <Slider {...settings}>
        <div>
          <img src={`${process.env.PUBLIC_URL}/images/img1.png`} alt=' 1' />
        </div>
        <div>
          <img src={`${process.env.PUBLIC_URL}/images/img2.png`} alt=' 2' />
        </div>
        <div>
          <img src={`${process.env.PUBLIC_URL}/images/img3.png`} alt=' 3' />
        </div>
        <div>
          <img src={`${process.env.PUBLIC_URL}/images/img4.png`} alt=' 4' />
        </div>
      </Slider>
    </div>
  )
}
