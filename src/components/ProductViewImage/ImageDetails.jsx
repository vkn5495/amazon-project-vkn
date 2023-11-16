import React from 'react'

const ImageDetails = ({ product }) => {
    return (
        <>
            <div className="img">
                <img src={product} alt="" />
            </div>
        </>
    )
}

export default ImageDetails
