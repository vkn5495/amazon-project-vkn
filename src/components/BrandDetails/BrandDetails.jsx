import React, { useContext } from 'react'
import { BsChevronRight, BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'
import { SiPrime } from 'react-icons/si'
import mobileOne from '../../img/phone/phone.jpg'
import mobileTwo from '../../img/phone/phone2.jpg'
import './BrandDetails.css'
import { AllItemsStore } from '../../data/ItemCategories'
import { Link } from 'react-router-dom'
import { ContextAmazon } from '../ContextOfCart/ContextAmezon'

const BrandDetails = ({ viewItems }) => {
    const context = useContext(ContextAmazon)
    return (
        <>
            <hr />
            <div className="brand_details">
                <div className="container">
                    <h2>brand in this category on amazon</h2>
                    <div className="brand_category">
                        <img src={viewItems.icon} alt="" />
                        <hr />
                        <div className="name">
                            <div className="heading link_two">{viewItems.name} | availble now</div>
                            <p className="link_one">shop onePlus <span><BsChevronRight /></span></p>
                        </div>
                    </div>
                    <div className="img">
                        <div className="bg_img">
                            <img src={viewItems.brandImg} alt="" />
                        </div>
                        <div className="img_brand">
                            <div className="img_content">
                                {
                                    AllItemsStore.filter(product => product.type.items === viewItems.type.items &&
                                        product.type.category === viewItems.type.category)
                                        .slice(0, 3)
                                        .map((item) => {
                                            return (
                                                <div className="box" key={item.id}>
                                                    <Link to={'/view'}>
                                                    <div className="img" onClick={()=> context.viewInItem(item)}>
                                                        <img src={item.colour[0].img[0]} alt="" />
                                                    </div>
                                                    </Link>
                                                    <div className="text">
                                                        <div className="name link_one">{item.name}</div>
                                                        <div className="straight">
                                                            <div className="star">
                                                                <BsStarFill />
                                                                <BsStarFill />
                                                                <BsStarFill />
                                                                <BsStarHalf />
                                                                <BsStar />
                                                            </div>
                                                            <div className='link_one'>939</div>
                                                        </div>
                                                        <span><SiPrime /></span>
                                                    </div>
                                                </div>
                                            )
                                        })
                                }
                            </div>
                        </div>
                        <span className="blank"></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BrandDetails
