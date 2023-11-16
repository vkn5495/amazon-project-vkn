import React from 'react'
import './ProductViewImage.css'
import { NextArrow, PrevArrow, ViewProductImages } from '../../data/Data'
import ImageDetails from './ImageDetails'
import Slider from 'react-slick'

const ProductViewImage = ({viewItems}) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow/>,
    };
    return (
        <>
            <hr />
            <div className="ViewImage">
                <div className="container">
                    <h3>form the manufacturer</h3>
                    <div className="list">
                            <Slider {...settings}>
                                {
                                    viewItems.imgDetails.one.map((img, idx) =>{
                                        console.log(img)
                                    return (
                                        <ImageDetails key={idx} product={img} />
                                )})
                                }
                            </Slider>
                    </div>
                    <div className="list">
                            <Slider {...settings}>
                                {
                                    viewItems.imgDetails.two.map((img, idx) => (
                                        <ImageDetails key={idx} product={img} />
                                ))
                                }
                            </Slider>
                    </div>
                    <div className="list">
                            <Slider {...settings}>
                                {
                                    viewItems.imgDetails.three.map((img, idx) => (
                                        <ImageDetails key={idx} product={img} />
                                ))
                                }
                            </Slider>
                    </div>
                    <div className="list">
                            <Slider {...settings}>
                                {
                                    viewItems.imgDetails.four.map((img, idx) => (
                                        <ImageDetails key={idx} product={img} />
                                ))
                                }
                            </Slider>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default ProductViewImage
