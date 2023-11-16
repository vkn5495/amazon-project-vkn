import React, { useContext } from 'react'
import './browsingHistory.css'
import Slider from 'react-slick'
import { NextArrow, PrevArrow, mobileList } from '../../data/Data';
import { ContextAmazon } from '../ContextOfCart/ContextAmezon';
import { Link } from 'react-router-dom';

const BrowsingHistory = () => {
    const context = useContext(ContextAmazon)
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 6,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 5,
                }
            },
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 5,
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
      {
        context.saveViewProducts.length > 0 ?
        <div className="browsingHistory">
        <div className="container">
            <div className="header">
                <div className="heading">Your browsing history</div>
                <Link to={'/list'}><div className="all_items_his link_one">View or edit your browsing history</div></Link>
            </div>
            <div className="image_silder">
                <Slider {...settings}>
                    {
                        context.saveViewProducts.map((product,idx)=>(
                            <Link to={'/view'}>
                                <div className="img" key={idx} onClick={()=> context.viewInItem(product)}>
                                    <img src={product.colour[0].img[0]} alt="" />
                                </div>
                                </Link>
                        ))
                    }
                </Slider>
            </div>
        </div>
      </div>:null
      }
    </>
  )
}

export default BrowsingHistory
