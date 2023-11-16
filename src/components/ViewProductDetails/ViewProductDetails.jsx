import React, { useContext, useState } from 'react'
import './ViewProductDetails.css'
import { BsBoxArrowInRight, BsHeart, BsStar } from 'react-icons/bs'
import phoneOne from '../../img/phone/phone.jpg'
import phoneTwo from '../../img/phone/phone2.jpg'
import { TbDiscount2 } from 'react-icons/tb'
import { CiDeliveryTruck } from 'react-icons/ci'
import { BiArrowFromLeft, BiArrowFromRight, BiDownArrow, BiMessageAltDetail, BiUpArrow } from 'react-icons/bi'
import { GrLocation } from 'react-icons/gr'
import { AiTwotoneLock } from 'react-icons/ai'
import { BsHeartFill } from 'react-icons/bs'
import amazon from '../../img/amazon-2.png'
import Slider from 'react-slick'
import { ContextAmazon } from '../ContextOfCart/ContextAmezon'
import { Link } from 'react-router-dom'

const ViewProductDetails = ({ viewItems }) => {
    const context = useContext(ContextAmazon)
    const [show, setShow] = useState(false)
    const firstRow = () => setShow(true)
    const secondRow = () => setShow(false)
    const [about, setAbout] = useState(false)
    // const [checkViewImageIndexNumber,setCheckViewImageIndexNumber] = useState(0)
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    // };
    // 
    // const [holdColor, setHoldColor] = useState(viewItems.colour[0])
    // const [holdImg, setHoldImg] = useState(holdColor.img[0])

    // const holdTheProduct = (view) => {
    //     setHoldColor(viewItems.colour[view])
    //     setHoldImg(
    //         viewItems.colour[view].img[0]
    //     )
    //     setCheckViewImageIndexNumber(0)
    // }
    // const holdTheProductHover = (view) => {
    //     setHoldImg(
    //         viewItems.colour[view].img[checkViewImageIndexNumber]
    //     )
    // }
    // const holdTheProductHoverOut = () => {
    //     setHoldImg(
    //         holdColor.img[checkViewImageIndexNumber]
    //     )
    // }
    // const holdInImg = (idx) => {
    //     setHoldImg(holdColor.img[idx])
    //     setCheckViewImageIndexNumber(idx)
    // }

    return (
        <>
            <div className="view_details">
                <div className="container">
                    <div className="view_products">
                        <div className="first_row">
                            <div className="content">
                                <div className="list_items">
                                    {
                                        context.holdColor.img.map((item, idx) => (
                                            <div className="img" key={idx} onMouseOver={() => context.holdInImg(idx)}
                                            >
                                                <li>
                                                    <img src={item} alt="" />
                                                </li>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="img_view">
                                    <div className="img">
                                        <img src={[context.holdImg]} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="second_row">
                            <div className="first_column">
                                <div className="name_details_one">
                                    <div className="name">{viewItems.name}</div>
                                </div>
                                <div className="name_details_two">
                                    <span>visit the itel store</span>
                                </div>
                                <div className="name_details_three">
                                    <div className="rating">
                                        <span>3.7</span>
                                        <div className="stars">
                                            <li> <BsStar /></li>
                                            <li> <BsStar /></li>
                                            <li> <BsStar /></li>
                                            <li> <BsStar /></li>
                                            <li> <BsStar /></li>
                                        </div>
                                        <span>725 rating</span>
                                        <span> | 176 answered questions</span>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="second_column">
                                <div className="timer">ends in 00:00</div>
                                <div className="rate">
                                    <div className="discount_price">
                                        <span>-23%</span>
                                        <span>${viewItems.price}</span>
                                    </div>
                                    <div className="product_price">
                                        <span>M.R.P:</span>
                                        <span>$1088</span>
                                    </div>
                                </div>
                                <div className="tax">
                                    <div className="lable">
                                        <div className='img'>
                                            <img src={amazon} alt="" />
                                        </div>
                                        <span>fulfilled</span>
                                    </div>
                                    <div className="tax_text">inclusive of all taxes</div>
                                </div>
                                <div className="product_emi">
                                    <span>EMI</span>
                                    <span>starts at $408. no cost EMI available</span>
                                    <span>EMI option</span>
                                </div>
                                <div className="reward">
                                    <span>buy now, pay in EMI up to 12 months with amazon pay later</span>
                                    <span>active now and unlock welcome rewards worth $600</span>
                                </div>
                            </div>
                            <hr />
                            <div className="thrid_column">
                                <div className="offers_emi">
                                    <div className="offer">
                                        <span><TbDiscount2 /></span>
                                        <span>offers</span>
                                    </div>
                                    <div className="offers_imfo">
                                        <div className="max-width">
                                            <div className="list">
                                                <div className="box">
                                                    <span>no cost EMI</span>
                                                    <span>upto $382.70 EMI interest savings on amazon pay icici</span>
                                                    <span>1 offer</span>
                                                </div>
                                                <div className="box">
                                                    <span>no cost EMI</span>
                                                    <span>upto $382.70 EMI interest savings on amazon pay icici</span>
                                                    <span>1 offer</span>
                                                </div>
                                                <div className="box">
                                                    <span>no cost EMI</span>
                                                    <span>upto $382.70 EMI interest savings on amazon pay icici</span>
                                                    <span>1 offer</span>
                                                </div>
                                                <div className="box">
                                                    <span>no cost EMI</span>
                                                    <span>upto $382.70 EMI interest savings on amazon pay icici</span>
                                                    <span>1 offer</span>
                                                </div>
                                                <div className="box">
                                                    <span>no cost EMI</span>
                                                    <span>upto $382.70 EMI interest savings on amazon pay icici</span>
                                                    <span>1 offer</span>
                                                </div>
                                                <div className="box">
                                                    <span>no cost EMI</span>
                                                    <span>upto $382.70 EMI interest savings on amazon pay icici</span>
                                                    <span>1 offer</span>
                                                </div>
                                                <div className="box">
                                                    <span>no cost EMI</span>
                                                    <span>upto $382.70 EMI interest savings on amazon pay icici</span>
                                                    <span>1 offer</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="fourth_column">
                                <div className="list">
                                    <div className="box">
                                        <span><CiDeliveryTruck /></span>
                                        <span>free delivery</span>
                                    </div>
                                    <div className="box">
                                        <span><CiDeliveryTruck /></span>
                                        <span>free delivery</span>
                                    </div>
                                    <div className="box">
                                        <span><CiDeliveryTruck /></span>
                                        <span>free delivery</span>
                                    </div>
                                    <div className="box">
                                        <span><CiDeliveryTruck /></span>
                                        <span>free delivery</span>
                                    </div>
                                    <div className="box">
                                        <span><CiDeliveryTruck /></span>
                                        <span>free delivery</span>
                                    </div>
                                    <div className="box">
                                        <span><CiDeliveryTruck /></span>
                                        <span>free delivery</span>
                                    </div>
                                    <div className="box">
                                        <span><CiDeliveryTruck /></span>
                                        <span>free delivery</span>
                                    </div>
                                    <div className="box">
                                        <span><CiDeliveryTruck /></span>
                                        <span>free delivery</span>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="fifth_column">
                                <div className="a_flex gap">
                                    <div className="type">
                                        <span>colour:</span>
                                        <span>{context.holdColor.subColor}</span>
                                    </div>
                                    <div className='b_flex'
                                    style={{gap:'8px'}}>
                                    {
                                        viewItems.colour.map((product, idx) => (
                                            <div className="list" key={idx}>

                                                <div className="models" onClick={() => context.holdTheProduct(viewItems,idx)}
                                                    onMouseOver={() => context.holdTheProductHover(viewItems,idx)}
                                                    onMouseOut={()=>context.holdTheProductHoverOut()}>
                                                    <div className="box">
                                                        <img src={product.img[0]} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                    </div>
                                </div>
                                <div className="table">
                                    <table>
                                        <tr>
                                            <th>brand</th>
                                            <td>itel</td>
                                        </tr>
                                        <tr>
                                            <th>model</th>
                                            <td>s23</td>
                                        </tr>
                                        <tr>
                                            <th>network service provider</th>
                                            <td>unlocked for all carries</td>
                                        </tr>
                                        <tr>
                                            <th>operating system</th>
                                            <td>andriod 12.0</td>
                                        </tr>
                                        <tr>
                                            <th>cellular technology</th>
                                            <td>4G</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <hr />
                            <div className="sixth_column">
                                <div className="about">
                                    <div onClick={() => setAbout(!about)} className="heading">
                                        <h3>about this item</h3>
                                        <span>
                                            {about ? <BiUpArrow /> : <BiDownArrow />}
                                        </span>
                                    </div>
                                    <ul className={about ? 'down' : 'up'}>
                                        <li>50MP ai dual rear camera | 8MP front camera with flash</li>
                                        <li>6.6inch HD + IPS display with 90Hz refresh rate | side mounted fingerprint sensor | stylish design with colour changing back panel</li>
                                        <li>5000mAh battery with type c charging | UFS 2.2 storage</li>
                                        <li>one time screen replacement within 100 days</li>
                                        <li>see more details</li>
                                    </ul>
                                    <div className="feed_back">
                                        <span><BiMessageAltDetail /></span>
                                        <span>report incorrect product information</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="view_product_details">
                        <div className="container">
                            <div className="first_step">
                                <div className={show ? 'first' : 'first fale'}>
                                    <div onClick={firstRow} className='header'>
                                        <div className="main">
                                            <div className="heading">
                                                <span>with exchange</span>
                                                <span className={show ? 'active' : 'notActice'}></span>
                                            </div>
                                            <div className="off_price">up to $ 8050 off</div>
                                        </div>
                                    </div>
                                    <div className={show ? 'bottom' : 'close'}>
                                        <div className="under">
                                            <div className="exchange">choose phone to exchange</div>
                                            <span><BiArrowFromLeft /></span>
                                        </div>
                                        <div className="text">how does exchange woork?</div>
                                    </div>
                                </div>
                                <hr />
                                <div className={show ? 'second fale' : 'second'}>
                                    <div onClick={() => secondRow()} className="header">
                                        <div className="main">
                                            <div className="heading">
                                                <span>with exchange</span>
                                                <span className={!show ? 'active' : 'notActice'}>
                                                </span>
                                            </div>
                                            <div className="off_price">up to $ 8050 off</div>
                                        </div>
                                    </div>
                                    <div className={show ? 'close' : 'bottom'}>
                                        <div className="lable">
                                            <div className='img'>
                                                <img src={amazon} alt="" />
                                            </div>
                                            <span>fulfilled</span>
                                        </div>
                                        <div className="delivery_time">
                                            <span>free delivery</span>
                                            <span>monday, 28 august. </span>
                                            <span>order within 20 hrs 30 mins.</span>
                                            <span> details</span>
                                        </div>
                                        <div className="delivery_to">
                                            <span><GrLocation /></span>
                                            <span>deliver to vivek - kumta 581343</span>
                                        </div>
                                        <div className="stock">
                                            <h4>in stock</h4>
                                            <div className="text">
                                                <span>slod by</span>
                                                <span>appario rretail private ltd </span>
                                                <span>and</span>
                                                <span>fulfilled by amazon</span>
                                            </div>
                                        </div>
                                        <div className="plan">
                                            <h4>add a protection plan:</h4>
                                            <div className="text">
                                                <div className="list">
                                                    <span></span>
                                                    <span className='link'>1 year extended warantly plan</span>
                                                    <span>for</span>
                                                    <span>$499</span>
                                                </div>
                                                <div className="list">
                                                    <span></span>
                                                    <span className='link'>1 year extended warantly plan</span>
                                                    <span>for</span>
                                                    <span>$499</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="quantity">
                                            <label htmlFor="">qty</label>
                                            {
                                                context.valueOfQuatities.map((o, idx) => {
                                                    return (
                                                        <select key={idx} onChange={e => context.getValueOfQuantity(Number(e.target.value), o)}
                                                            value={o.quantity}>
                                                            {
                                                                Array.from(Array(9), (e, i) => (
                                                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                                                ))
                                                            }
                                                        </select>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div className="button">
                                            <div className="container">
                                                <button onClick={() => context.productQuantity(viewItems)}>add to cart</button>
                                                <button>buy now</button>
                                            </div>
                                        </div>
                                        <div className="secure">
                                            <p>
                                                <span><AiTwotoneLock /></span>
                                                <span className='link'>secure transaction</span>
                                            </p>
                                            <p>
                                                <span></span>
                                                <span>add gift options</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="second_step">
                                <div className="container">
                                    <div className="add_wish" onClick={() => context.addAndRemoveToWishList(viewItems)}>
                                        <span>add to wish list</span>
                                        {
                                            context.getWishProductQuantity(viewItems) === 0 ?
                                                <span><BsHeart /></span>
                                                : <span><BsHeartFill /></span>
                                        }
                                    </div>
                                    <Link to={'/wish'}>
                                        <div className="wish_list">
                                            <span>go to wish list</span>
                                            <span><BsBoxArrowInRight /></span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewProductDetails
