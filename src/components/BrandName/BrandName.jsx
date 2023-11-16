import React from 'react'
import './BrandName.css'
import { GrStatusGood } from 'react-icons/gr'
import { BsHandThumbsUp } from 'react-icons/bs'

const BrandName = ({viewItems}) => {
    return (
        <>  <hr />
            <div className="brand_name">
                <div className="container">
                    <div className="heading">
                        <p>top brand</p>
                        <h4>{viewItems.type.category}</h4>
                    </div>
                    <div className="details">
                        <div className="box">
                            <div className="line">
                                <span><GrStatusGood /></span>
                                <p>80% positive rating from 10k+ customers</p>
                            </div>
                            <div className="line">
                                <span><GrStatusGood /></span>
                                <p>50k+ recent orders from this brand</p>
                            </div>
                            <div className="line">
                                <span><GrStatusGood /></span>
                                <p>7+ years on amazon</p>
                            </div>
                        </div>
                        <hr />
                        <div className="box">
                            <div className="high">highly rated by customers for</div>
                            <div className="list">
                                <div className="flex">
                                    <span><BsHandThumbsUp /></span>
                                    <span>value for money</span>
                                </div>
                                <div className="flex">
                                    <span><BsHandThumbsUp /></span>
                                    <span>good camera</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BrandName
