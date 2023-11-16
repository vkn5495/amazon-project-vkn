import React, { useContext } from 'react'
import './RelatedProducts.css'
import { NextArrow, PrevArrow, mobileList } from '../../data/Data'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'
import { SiPrime } from 'react-icons/si'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import { ContextAmazon } from '../ContextOfCart/ContextAmezon'
import ProductBox from './ProductBox'

const RelatedProducts = ({viewItems}) => {
    const context = useContext(ContextAmazon)
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 5,
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
                    initialSlide: 2
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
            <div className="RelatedProducts">
                <div className="container">
                    <h3>
                        Related products with free delivery on eligible orders</h3>
                    <p>sponsored</p>
                    <div className="list">
                        <Slider {...settings}>
                            {
                                viewItems.map((product) => (
                                    <ProductBox product={product} key={product.idx}/>
                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RelatedProducts
