import React, { useContext } from 'react'
import './FourItemsCard.css'
import { Link } from 'react-router-dom'
import { ContextAmazon } from '../ContextOfCart/ContextAmezon'

const FourItemsCard = ({ product }) => {
    const context = useContext(ContextAmazon)
    return (
        <>
            <div className="fourItems">
                <Link to={'/view'}>
                
                <div className="box" onClick={()=> context.viewInItem(product)}>
                    <div className="img">
                        <img src={product.colour[0].img[0]} alt="" />
                    </div>
                    <div className="name">
                        <span>{product.name}</span>
                    </div>
                </div></Link>
            </div>
        </>
    )
}

export default FourItemsCard
