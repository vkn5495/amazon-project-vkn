import React, { useContext, useState } from 'react'
import './Cart.css'
import { Logo, mobileList } from '../../data/Data'
import { BsFacebook, BsPinterest, BsStarFill, BsStarHalf, BsX, BsXbox } from 'react-icons/bs'
import { MdGppGood } from 'react-icons/md'
import { RiArrowDownSLine } from 'react-icons/ri'
import { RiArrowUpSLine } from 'react-icons/ri'
import { ContextAmazon } from '../ContextOfCart/ContextAmezon'
import { Link } from 'react-router-dom'
import InputButton from './InputButton'
import { AiOutlineClose } from 'react-icons/ai'
import { GrFormClose } from 'react-icons/gr'
import { HiOutlineMail } from 'react-icons/hi'
import { Mobile } from '../../data/ItemCategories'

const Cart = () => {
    const context = useContext(ContextAmazon)
    const [swicth, setSwitch] = useState(false)
    const [seeMore, setSeeMore] = useState(false)
    const [share, setShare] = useState(false)
    const saveSwitch = () => setSwitch(false)
    const buySwitch = () => setSwitch(true)
    const [order, setOrder] = useState(false)
    const saveLaterProductCount = context.saveItems.length
    const cartProductCount = context.cartItems.reduce((sum, product) => sum + product.quantity, 0)
    const cartProductTotalCost = context.cartItems.reduce((sum, product) => sum + (product.quantity * product.price), 0)

    const seeMoreClick = () => {
        setSeeMore(!seeMore)
    }
    const shareClick = () => {
        setShare(!share)
    }

    return (
        <>
            <div className="cart">
                <div className="container">
                    <div className="left_side">
                        <div className="shopping">
                            <div className="heading">
                                <h4>shopping cart</h4>
                                <p className='link'>Deselect all items</p>
                            </div>
                            <hr />
                            {
                                context.cartItems.length > 0 ?
                                    <div className="content_body">
                                        <div className="content">
                                            {
                                                context.cartItems.map((product, idx) => {

                                                    return (
                                                        <>
                                                            <div className="box_list" key={idx} >
                                                                <Link to={'/view'}>
                                                                    <img src={product.colour[0].img[0]} alt="" onClick={() => context.viewInItem(product)} />
                                                                </Link>
                                                                <div className="details">
                                                                    <Link to={'/view'} style={{ textDecoration: 'none' }}>
                                                                        <div className="details_name">
                                                                            <div className="name link_two" onClick={() => context.viewInItem(product)}>{product.name}</div>
                                                                        </div>
                                                                    </Link>
                                                                    <div className="price">${product.price}</div>
                                                                    <div className="stock">in stock</div>
                                                                    <div className="shipping">eligible for free shipping</div>
                                                                    <Logo />
                                                                    <div className="gift">
                                                                        <span></span>
                                                                        <span>This will be a giftThis is a gift Learn more </span>
                                                                    </div>
                                                                    <div className="size">
                                                                        <span>size</span>
                                                                        <span>: 12GB RAM, 256GB Storage</span>
                                                                    </div>
                                                                    <div className="colour">
                                                                        <span>colour :</span>
                                                                        <span>Moonstone Black</span>
                                                                    </div>
                                                                    <div className="bottom">
                                                                        <div className="qty">
                                                                            {
                                                                                product.quantity < 10 ?
                                                                                    <>
                                                                                        <div className='select'>
                                                                                            <label htmlFor="">qty:</label>
                                                                                            <select name="" id="" value={product.quantity}
                                                                                                onChange={e => context.inputValueOfCart(Number(e.target.value), product)}>
                                                                                                {
                                                                                                    Array.from(Array(9), (e, i) => {
                                                                                                        return (
                                                                                                            <option key={i + 1} value={i + 1}>{i + 1}</option>
                                                                                                        )
                                                                                                    })
                                                                                                }
                                                                                                <hr />
                                                                                                <option key={product.quantity} value={10}>
                                                                                                    +10
                                                                                                </option>
                                                                                            </select>
                                                                                        </div>
                                                                                    </>
                                                                                    :
                                                                                    <>
                                                                                        <InputButton product={product} />
                                                                                    </>
                                                                            }

                                                                        </div>
                                                                        <hr />
                                                                        <div className="delete" style={{ cursor: 'pointer', textAlign: 'center' }}
                                                                            onClick={() => context.deleteFromCart(product)}>
                                                                            delete</div>
                                                                        <hr />
                                                                        <div className="save_later" onClick={seeMoreClick}>see more like this</div>
                                                                        <hr />
                                                                        <div className="save_later" onClick={() => context.saveForLater(product)}>save for later</div>
                                                                        <hr />
                                                                        <div className="share link" onClick={shareClick}>share</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <hr />
                                                        </>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    :
                                    <p className='empty'>cart items is empty</p>
                            }
                        </div>
                        <div className="your_items">
                            <h2>your items</h2>
                            <div className="sub_heading">
                                <div className={swicth ? 'save' : 'active'} onClick={() => saveSwitch()}>saved for later ({saveLaterProductCount} items)</div>
                                <div className={swicth ? 'active' : 'buy'} onClick={() => buySwitch()}>buy it again</div>
                            </div>
                            {/* <hr /> */}
                            <div className={swicth ? 'hide' : "list_one"}>
                                {
                                    context.saveItems.map((product, idx) => (
                                        <div className="box" key={idx} >
                                            <Link to={'/view'}>
                                                <div className="img_save">
                                                    <img src={product.colour[0].img[0]} alt="" onClick={() => context.viewInItem(product)} />
                                                </div>
                                            </Link>
                                            <div className="text" >
                                                <Link to={'/view'} style={{ textDecoration: 'none' }}>
                                                    <h2 className='link' onClick={() => context.viewInItem(product)}>{product.name}</h2>
                                                </Link>
                                                <div className="rate">
                                                    <span>$ {product.price}</span>
                                                </div>
                                                <div className="stock">in stock</div>
                                                <div className="shipping">Eligible for FREE Shipping</div>
                                                <Logo />
                                                <div className="button">
                                                    <button onClick={() => context.moveToCart(product)}>move to cart</button>
                                                </div>
                                                <div className="bottom_list">
                                                    <p onClick={() => context.deleteFronSaveList(product)}>delete</p>
                                                    <p onClick={() => context.addAndRemoveToWishList(product)}>
                                                        {context.getWishProductQuantity(product) === 0 ?
                                                            <div>add to wish list</div>
                                                            : <div className='added'> added wish list</div>
                                                        }
                                                    </p>
                                                    <p onClick={seeMoreClick}>see more like this</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className={swicth ? "list_two" : 'hide'}>
                                <div className="content_buy">
                                    {
                                        Mobile.slice(0, 3).map((product, idx) => (
                                            <>
                                                <div className="box_list" key={idx}>
                                                    <Link to={'/view'}>
                                                        <img src={product.colour[0].img[0]} alt="" onClick={() => context.viewInItem(product)} />
                                                    </Link>
                                                    <div className="details">
                                                        <div className="name_price">
                                                            <Link to={'/view'} style={{ textDecoration: 'none' }}>
                                                                <div className="name link" onClick={() => context.viewInItem(product)}>{product.name}</div>
                                                            </Link>
                                                            <div className="price">$ {product.price}</div>
                                                        </div>
                                                        <div className="stock">in stock</div>
                                                        <button onClick={() => context.addOneToCart(product)}>add to cart</button>
                                                    </div>
                                                </div>
                                                <hr />
                                            </>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right_side">
                        <div className="first_row">
                            <div className="header_one">
                                <span><MdGppGood /></span>
                                <span>Your order is eligible for FREE Delivery. Select this option at checkout. Details</span>
                            </div>
                            <div className="sub_heading">
                                <span>Subtotal ({cartProductCount} items):</span>
                                <span>$ {cartProductTotalCost}</span>
                            </div>
                            <div className="gift">
                                <span>
                                    <input type="checkbox" />
                                </span>
                                <span>This order contains a gift</span>
                            </div>
                            <button>proceed to buy</button>
                            <div className="emi">
                                <div className="header" onClick={() => setOrder(!order)}>
                                    <p>EMI available</p>
                                    <span>{order ? <RiArrowUpSLine /> : <RiArrowDownSLine />}</span>
                                </div>
                                <div className={order ? "text" : 'hide_order'}>
                                    <span>Your order qualifies for EMI with valid credit cards (not available on purchase of Gold, Jewelry, Gift cards and Amazon pay balance top up)</span>
                                    <span className='link'>Learn more</span>
                                </div>
                            </div>
                        </div>
                        <div className="might">
                            <div className="heading">Customers who bought items in your cart also bought</div>
                            <div className="list">
                                {
                                    Mobile.filter(product=> product.type.items === 'mobile').slice(0,3).map((product, idx) => (

                                        <div className="box" key={idx} >
                                            <Link to={'/view'}>
                                                <img src={product.colour[0].img[0]} alt="" onClick={() => context.viewInItem(product)} />
                                            </Link>
                                            <div className="text">
                                                <Link to={'/view'} style={{ textDecoration: 'none' }}>
                                                    <h4 className='link' onClick={() => context.viewInItem(product)}>{product.name}</h4>
                                                </Link>
                                                <div className="star_rates">
                                                    <div className="stars">
                                                        <BsStarFill />
                                                        <BsStarFill />
                                                        <BsStarFill />
                                                        <BsStarFill />
                                                        <BsStarHalf />
                                                    </div>
                                                    <div className="rates">14872</div>
                                                </div>
                                                <button onClick={() => context.addOneToCart(product)}>add to cart</button>
                                            </div>
                                        </div>

                                    ))
                                }
                            </div>
                        </div>
                    </div>

                </div>
                <div className={seeMore ? "seeMoreClick" : 'seeMoreClose'}>
                    <div className="containers">
                        <div className="content">
                            <div className="sBody">
                                <div className="heading">
                                    more items like this
                                </div>
                                <div className="details">
                                    {
                                        mobileList.map((mobile, idx) => {
                                            return (
                                                <div className="box">
                                                    <Link to={'/view'}>
                                                        <div className="img" onClick={() => context.viewInItem(mobile)}>
                                                            <img src={mobile.img} alt="" />
                                                        </div>
                                                    </Link>
                                                    <div className="text">
                                                        <Link to={'/view'}>
                                                            <div className="name"
                                                                onClick={() => context.viewInItem(mobile)}>{mobile.name}</div>
                                                        </Link>
                                                        <div className="rating">
                                                            <div className="star">
                                                                <BsStarFill />
                                                                <BsStarFill />
                                                                <BsStarFill />
                                                                <BsStarFill />
                                                                <BsStarHalf />
                                                            </div>
                                                            <div className="qty">(456)</div>
                                                        </div>
                                                        <div className="rate">$ {mobile.price}</div>
                                                        <div className="delivery">
                                                            <Logo />
                                                            <p>free delivery</p>
                                                            <span className='p'>details</span>
                                                        </div>
                                                        <button onClick={() => context.addOneToCart(mobile)}>add to cart</button>
                                                    </div>
                                                </div>

                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className="closeBar" onClick={seeMoreClick}>
                                <AiOutlineClose />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={share ? "share_product" : "shareClose"}>
                    <div className="share_container">
                        <div className="share_content">
                            <div className="close_bar" onClick={shareClick}>
                                <GrFormClose />
                            </div>
                            <div className="content">
                                <div className="heading">share this product with friends</div>
                                <div className="socail_media">
                                    <div className="icon">
                                        <span style={{ color: 'green' }}><HiOutlineMail /></span>
                                        <span style={{ color: 'red' }}><BsPinterest /></span>
                                        <span style={{ color: 'blue' }}><BsFacebook /></span>
                                        <span style={{ color: 'black' }}><BsXbox /></span>
                                    </div>
                                </div>
                                <div className="copy_link">
                                    <div className="copy">
                                        https://www.amazon.in/dp/B079N9BJY7?psc=1&ref_=cm_sw_r_cp_ud_ct_WDCZQM5WDWHF06946R0R
                                    </div>
                                    <button>copy link</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Cart

