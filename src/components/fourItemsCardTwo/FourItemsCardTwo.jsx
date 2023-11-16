import React,{useContext} from 'react'
import './FourItemCardTwo.css'
import { Link } from 'react-router-dom'
import { ContextAmazon } from '../ContextOfCart/ContextAmezon'

const FourItemsCardTwo = ({ product }) => {
    const context = useContext(ContextAmazon)
    return (
        <>
            <div className="fourItemsOne">
                <Link to={'/view'}>
                <div className="box" onClick={()=> context.viewInItem(product)}>
                    <div className="img">
                        <img src={product.colour[0].img[0]} alt="" />
                    </div>
                    <div className="name">
                        <span>{product.name}</span>
                    </div>
                    <div className="view">{product.quantity} viewed</div>
                </div>
                </Link>

            </div>
        </>
    )
}

export default FourItemsCardTwo
