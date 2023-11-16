import React from 'react'
import { homePages } from '../../data/Data'
import '../home/Home.css'
import Slider from 'react-slick';
import { GrPrevious, GrNext } from 'react-icons/gr'

const NextArrow = (props) => {
  const { onClick } = props
  return (
    <div className="contral-btn" onClick={onClick}>
      <button className="next">
        <i><GrNext /></i>
      </button>
    </div>
  )
}
const PrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className="contral-btn" onClick={onClick}>
      <button className="prev">
        <i><GrPrevious /></i>
      </button>
    </div>
  )
}


const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <>
      <div className="home">
        <div className="container">
          <Slider {...settings}>
            <div className="img">
              <div className="silder1"></div>
            </div>
            <div className="img">
              <div className="silder2"></div>
            </div>
            <div className="img">
              <div className="silder3"></div>
            </div>
            <div className="img">
              <div className="silder4"></div>
            </div>
            <div className="img">
              <div className="silder5"></div>
            </div>
            <div className="img">
              <div className="silder6"></div>
            </div>
            <div className="img">
              <div className="silder7"></div>
            </div>
            <div className="img">
              <div className="silder8"></div>
            </div>
          </Slider>
        </div>

      </div>
    </>
  )
}

export default Home
