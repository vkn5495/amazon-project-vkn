import React, { useContext } from 'react'
import { BsStarFill, BsStarHalf } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { ContextAmazon } from '../ContextOfCart/ContextAmezon'

const ProductCard = ({ product }) => {
    const context = useContext(ContextAmazon)
    return (
        <>
            <div className="box" >
                <Link to={'/view'}>
                    <img src={product.colour[0].img[0]} onClick={() => context.viewInItem(product)} alt="" />
                </Link>
                <div className="text">
                    <Link to={'/view'}>
                        <div className="name link" onClick={() => context.viewInItem(product)}>{product.name}</div>
                    </Link>
                    <div className="rates c_flex">
                        <div className="stars">
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarHalf />
                        </div>
                        <span>34598</span>
                    </div>
                    <div className="price">$84737</div>
                    <div className="arrive">
                        <span>get it by</span>
                        <span> Saturday, September 2</span>
                    </div>
                    <button onClick={() => context.deleteViewItem(product)}>remove from view</button>
                </div>
            </div>
        </>
    )
}

export default ProductCard
