import React from 'react'
import './OneItemsCard.css'

const OneItemsCard = ({ OneProduct }) => {
    return (
        <>
            <div className="oneItems">
                <div className="img">
                    <img src={OneProduct} alt="" />
                </div>
            </div>
        </>
    )
}

export default OneItemsCard
