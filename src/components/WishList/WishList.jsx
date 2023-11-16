import React, { useContext, useState } from 'react'
import './WishList.css'
import { AiFillCaretDown, AiOutlinePlus, AiOutlineShareAlt } from 'react-icons/ai'
import { BiDotsHorizontal, BiLink } from 'react-icons/bi'
import { FaGripLines, FaPlus, FaUserSecret } from 'react-icons/fa'
import { TbGridDots } from 'react-icons/tb'
import { GrClose, GrFormClose, GrFormSearch } from 'react-icons/gr'
import { Logo, NextArrow, PrevArrow, mobileList } from '../../data/Data'
import { BsFacebook, BsPinterest, BsStarFill, BsStarHalf, BsThreeDots, BsXbox } from 'react-icons/bs'
import { PiUpload } from 'react-icons/pi'
import { MdDeleteOutline, MdLineStyle } from 'react-icons/md'
import { FiChevronDown } from 'react-icons/fi'
import { ContextAmazon } from '../ContextOfCart/ContextAmezon'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import { HiOutlineMail } from 'react-icons/hi'

const WishList = () => {
    const context = useContext(ContextAmazon)
    const [menuSwitch, setMenuSwitch] = useState(false)
    const [itemList, setItemList] = useState([])
    const [quickView, setQuickView] = useState(false)
    const [invite, setInvite] = useState(false)
    const [share, setShare] = useState(false)
    const [filter,setFilter] = useState(false)
    const [quickViewHold, setQuickViewHold] = useState([])
    const getProduct = (item) => {
        const x = itemList.find(i => i.id === item.id)?.y
        if (x === undefined) {
            return false
        }
        return x
    }

    const switchButton = (item) => {
        const x = getProduct(item)

        if (x === false) {
            setItemList([{ ...item, y: true }])
            setShare(false)
        }
        else {
            setItemList(
                itemList => itemList.filter(x => !x.id)
            )
            setShare(false)
        }
    }

    const quickHold = (item) => {
        setQuickView(!quickView)
        setQuickViewHold([{ ...item }])
    }

    const inviteClick = () => {
        setInvite(!invite)
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <>
            <div className="wish_lists">
                <div className="container">
                    <div className="body_header">
                        <div className="heading">
                            <h2>your lists</h2>
                            <h2>your idea lists</h2>
                            <h2>your friends</h2>
                        </div>
                        <div className="end">create a list</div>
                    </div>
                    <div className="wish_details">
                        <div className="wish_body">
                            <div className="left_list">
                                <div className="box">
                                    <div className="flex_head">
                                        <h4>shopping list</h4>
                                        <p>private</p>
                                    </div>
                                    <span>default list</span>
                                </div>
                            </div>
                            <div className="right_list">
                                <div className="first">
                                    <div className="shop_list">
                                        <div className="justify">
                                            <div className="head">
                                                <h4>shopping list</h4>
                                                <p>private</p>
                                            </div>
                                            <div className="share">
                                                <div className="send" onClick={inviteClick}>
                                                    <span><AiOutlineShareAlt /></span>
                                                    <p className='link_two'>Send list to others</p>
                                                </div>
                                                <hr />
                                                <div className="more">
                                                    <span><BiDotsHorizontal /></span>
                                                    <p className='link_two'>more</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="profile_invite b_flex">
                                        <div className="profile c_flex"><FaUserSecret /></div>
                                        <div className="invite b_flex" onClick={inviteClick}>
                                            <span><FaPlus /></span>
                                            <p>invite</p>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="second">
                                    <div className="second_justify d_flex">
                                        <div className="type_style">
                                            <span className={menuSwitch && 'under_line'} onClick={() => setMenuSwitch(true)}><TbGridDots /></span>
                                            <span className={!menuSwitch && 'under_line'} onClick={() => setMenuSwitch(false)}><MdLineStyle /></span>
                                        </div>
                                        <div className="type_search a_flex">
                                            <div className="search_box b_flex">
                                                <div>
                                                    <span><GrFormSearch /></span>
                                                    <input type="text" placeholder='search this list' />
                                                </div>

                                            </div>
                                            <hr />
                                            <div className="filter b_flex">
                                                <div className='b_flex'
                                                style={{cursor:'pointer'}}
                                                onMouseOver={()=> setFilter(true)}
                                                onMouseOut={()=> setFilter(false)}>
                                                    <p>filter & sort</p>
                                                    <span><AiFillCaretDown /></span>
                                                </div>
                                                <div className={filter ? "filter_box" : 'filter_box_close'}
                                                onMouseOver={()=> setFilter(true)}
                                                onMouseOut={()=> setFilter(false)}>
                                                    <div className="box">
                                                        <div className="head">filters:</div>
                                                        <div className="text">
                                                            <div className="pad">
                                                                <p>unpurchesd</p>
                                                            </div>
                                                            <div className="pad">
                                                                <p>purchaesd</p>
                                                            </div>
                                                            <div className="pad">
                                                                <p>all items</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="box">
                                                        <div className="head">sorts:</div>
                                                        <div className="text">
                                                            <div className="pad">
                                                                <p>default</p>
                                                            </div>
                                                            <div className="pad">
                                                                <p>priority (high to low)</p>
                                                            </div>

                                                            <div className="pad">
                                                                <p>price (low to high)</p>
                                                            </div>
                                                            <div className="pad">
                                                                <p>price (high to low)</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                {
                                    !menuSwitch ?
                                        <div className="items">
                                            {
                                                context.wishLists.map((product, idx) => (
                                                    <>
                                                        {
                                                            context.wishLists.length > 0 ?
                                                                <div className="box d_flex" key={idx}>

                                                                    <div className="text b_flex">
                                                                        <Link to={'/view'}>
                                                                            <div className="img" onClick={() => context.viewInItem(product)}>
                                                                                <img src={product.colour[0].img[0]} alt="" />
                                                                            </div>
                                                                        </Link>
                                                                        <div className="left_text">
                                                                            <h4 className='link_two'>{product.name}</h4>
                                                                            <p>by oneplus (electronics)</p>
                                                                            <div className="rates b_flex">
                                                                                <div className="stars">
                                                                                    <BsStarFill />
                                                                                    <BsStarFill />
                                                                                    <BsStarFill />
                                                                                    <BsStarFill />
                                                                                    <BsStarHalf />
                                                                                </div>
                                                                                <span><AiFillCaretDown /></span>
                                                                                <span className='link_two'>4285</span>
                                                                            </div>
                                                                            <div className="price b_flex">
                                                                                <span>$49999</span>
                                                                                <span>
                                                                                    <Logo />
                                                                                </span>
                                                                            </div>
                                                                            <div className="size_color b_flex">
                                                                                <div className="list b_flex">
                                                                                    <p>size :</p>
                                                                                    <p>12gb ram,256gb storage</p>
                                                                                </div>
                                                                                <hr />
                                                                                <div className="list b_flex">
                                                                                    <p>colour :</p>
                                                                                    <p>moonstone black</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                    <div className="right_text">
                                                                        <p>item added 30 august 2023</p>
                                                                        <button onClick={() => context.addOneToCart(product)}>add to cart</button>
                                                                        <div className="row c_flex">
                                                                            <div className="move">
                                                                                <span>move</span>
                                                                                <span><FiChevronDown /></span>
                                                                            </div>
                                                                            <div className="upload">
                                                                                <PiUpload />
                                                                            </div>
                                                                            <div className="delete" onClick={() => context.addAndRemoveToWishList(product)}>
                                                                                <MdDeleteOutline />
                                                                            </div>
                                                                        </div>
                                                                        <div className="end_text link_two">Add comment, quantity & priority</div>
                                                                    </div>
                                                                </div>
                                                                :
                                                                <h3>empty</h3>
                                                        }
                                                        <hr />
                                                    </>
                                                ))
                                            }
                                        </div>
                                        :
                                        <div className="items_two">
                                            {
                                                context.wishLists.map((product, idx) => (
                                                    <>
                                                        {
                                                            context.wishLists.length > 0 ?
                                                                <div className="box" key={idx}>
                                                                    <div className="details">
                                                                        <div className="img_view">
                                                                            <Link to={'/view'}>
                                                                                <div className="img" onClick={() => context.viewInItem(product)}>
                                                                                    <img src={product.colour[0].img[0]} alt="" />
                                                                                </div>
                                                                            </Link>
                                                                            <div className="view">
                                                                                <p className='e_flex' onClick={() => quickHold(product)}>quick view</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="text">
                                                                            <div className="price">$ {product.price}</div>
                                                                            <button onClick={()=> context.addOneToCart(product)}>add to cart</button>
                                                                        </div>
                                                                        <div className="menu" onClick={() => switchButton(product)}><BsThreeDots /></div>
                                                                        <div className={getProduct(product) === false ? "none" : 'items_details'}>
                                                                            <div className="item_box">
                                                                                <div className="close c_flex" onClick={() => switchButton(product)}><GrFormClose /></div>
                                                                                <div className="content">
                                                                                    <p>add comment,quantity & priority</p>
                                                                                    <p onClick={() => setShare(!share)}>share</p>
                                                                                    <div className={share ? "share_details" : 'share_details_close'}>
                                                                                        <div className="socail_media">
                                                                                            <div className="icon">
                                                                                                <span style={{ color: 'green' }}><HiOutlineMail /></span>
                                                                                                <p>email</p>
                                                                                            </div>
                                                                                            <div className="icon">
                                                                                                <span style={{ color: 'red' }}><BsPinterest /></span>
                                                                                                <p>pinterest</p>
                                                                                            </div>
                                                                                            <div className="icon">
                                                                                                <span style={{ color: 'blue' }}><BsFacebook /></span>
                                                                                                <p>facebook</p>
                                                                                            </div>
                                                                                            <div className="icon">
                                                                                                <span style={{ color: 'black' }}><BsXbox /></span>
                                                                                                <p>xbox</p>
                                                                                            </div>
                                                                                            <div className="icon">
                                                                                                <span style={{ color: 'black' }}><BiLink /></span>
                                                                                                <p>copy link</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <p>move</p>
                                                                                    <p onClick={() => context.addAndRemoveToWishList(product)}>delete</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                :
                                                                <h3>empty</h3>
                                                        }

                                                    </>
                                                ))
                                            }
                                        </div>
                                }

                            </div>
                        </div>
                    </div>
                </div>
                <div className={quickView ? "quickView" : "quickViewClose"}>
                    <div className="quick_container">
                        <div className="content">
                            {
                                quickViewHold.map((r, idx) => {
                                    const colorList = r.colour
                                    return (
                                        <div className="box" key={idx}>
                                            <div className="img">
                                                {
                                                    colorList.slice(-1).map((u, p) => {
                                                        const oneColor = u.img
                                                        return (
                                                            <div key={p}>
                                                                <Slider {...settings}>
                                                                    {
                                                                        oneColor.map((q, w) => {
                                                                            return (
                                                                                <img key={w} src={[q]} alt="" />
                                                                            )
                                                                        })
                                                                    }
                                                                </Slider>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <div className="text_content">

                                                <div className="text">
                                                    <div className="brand">one plus</div>
                                                    <div className="name">{r.name}</div>
                                                    <div className="rating">
                                                        <div className="star">
                                                            <BsStarFill />
                                                            <BsStarFill />
                                                            <BsStarFill />
                                                            <BsStarFill />
                                                            <BsStarHalf />
                                                        </div>
                                                        <div className="qty">(4577)</div>
                                                    </div>
                                                    <div className="price">$ {r.price}</div>
                                                    <div className="view_logo">
                                                        <Logo />
                                                        <p>free delivery</p>
                                                    </div>
                                                    <div className="button">
                                                        <button onClick={() => context.addOneToCart(r)}>add to cart</button>
                                                        <button>see product details</button>
                                                    </div>
                                                </div>
                                                <div className="close_btn" onClick={() => setQuickView(!quickView)}>
                                                    <GrClose />
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className={invite ? "invite_list" : 'inviteClose'}>
                    <div className="invite_container">
                        <div className="content">
                            <div className="head">
                                <h4>invite others to your list</h4>
                                <span onClick={inviteClick}><GrClose /></span>
                            </div>
                            <div className="tbody">
                                <div className="title">invite someone to</div>
                                <div className="box">
                                    <p>view only</p>
                                    <p>anyone with a link can view your list wiithout making edits</p>
                                </div>
                                <hr />
                                <div className="box">
                                    <p>view and edit</p>
                                    <p>invited people can add or remove items from your list</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WishList
