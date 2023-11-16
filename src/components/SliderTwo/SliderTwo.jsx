import React, { useContext, useState } from 'react'
import { GrNext, GrPrevious } from 'react-icons/gr'
import Slider from 'react-slick'
import './SliderTwo.css'
import { Link } from 'react-router-dom'
import { ContextAmazon } from '../ContextOfCart/ContextAmezon'

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

const SliderTwo = ({product}) => {
    const context = useContext(ContextAmazon)
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 5,
        // autoplay: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className="slider_two">
                <div className="container">
                    <div className="heading">
                        <h2>today's deals</h2>
                        <p>see all deals</p>
                    </div>
                    <Slider {...settings}>
                        {product.map((item,idx) => {
                               const image = item.colour[0].img[0]
                                return(
                                    <div className='box'>
                                        <Link to={'/view'}>
                                        <div className="img" key={idx} onClick={()=> context.viewInItem(item)}>
                                            <img src={image} alt="" />
                                        </div>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default SliderTwo
