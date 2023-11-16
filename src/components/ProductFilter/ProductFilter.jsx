import React, { useContext, useState } from 'react'
import './ProductFilter.css'
import { Link } from 'react-router-dom'
import { ContextAmazon } from '../ContextOfCart/ContextAmezon'

const ProductFilter = ({ categories }) => {
    const context = useContext(ContextAmazon)
    const [holdItem, setHoldItem] = useState(categories[0])
    const holdProdut = (item) => {
        const slider = categories[item]
        setHoldItem(slider)
    }
    return (
        <>
            <div className="productFilter">
                <div className="container">
                    <div>
                        <Link to={'/view'}>
                            <div className="img" onClick={()=> context.viewInItem(holdItem)}>
                                <img src={holdItem.colour[0].img[2]} alt="" />
                            </div>
                        </Link>
                        <div className="text">
                            <p>{holdItem.name}</p>
                            <div className="price">
                                <span>${holdItem.price}</span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                    <div className="img_list">
                        {
                            categories.slice(0, 4).map((product, idx) => {
                               const image = product.colour[0].img[2]
                            return(
                                <div className="img_silder" key={idx} onClick={() => holdProdut(idx)}>
                                    <img src={image} alt="" />
                                </div>
                            )})
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductFilter
