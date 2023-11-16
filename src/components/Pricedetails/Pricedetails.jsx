import React, { useContext } from 'react'
import './Pricedetails.css'
import { ContextAmazon } from '../ContextOfCart/ContextAmezon'
import { Link } from 'react-router-dom'

const Pricedetails = ({ product }) => {
    const context = useContext(ContextAmazon)
    return (
        <>
            <div className="price_details" >
                <div className="box">
                    <Link to={'./view'}> 
                        <div className="img" onClick={() => context.viewInItem(product)}>
                            <img src={product.img} alt="" />
                        </div>
                    </Link>
                    <div className="name">
                        <span>{product.name}</span>
                    </div>
                    <p className="price">${product.price}</p>
                </div>
            </div>
        </>
    )
}

export default Pricedetails
