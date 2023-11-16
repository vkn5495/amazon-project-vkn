import React, { useContext, useEffect } from 'react'
import { BsStarFill,BsStarHalf,BsStar} from 'react-icons/bs'
import {SiPrime} from 'react-icons/si'
import { ContextAmazon } from '../ContextOfCart/ContextAmezon'
import { Link } from 'react-router-dom'

const ProductBox = ({ product }) => {
    const context = useContext(ContextAmazon)
    return (
        <>
            <Link to={'/view'}>
                <div className="box" onClick={() => context.viewInItem(product)}>
                    <img src={product.colour[0].img[0]} alt="" />
                    <div className="text">
                        <div className="name link">{product.name}</div>
                        <div className="products">
                            <div className="stars">
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarHalf />
                                <BsStar />
                            </div>
                            <div className="qty">56</div>
                        </div>
                        <div className="bar">
                            <div className="price">${product.price}</div>
                            <span><SiPrime /></span>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default ProductBox
