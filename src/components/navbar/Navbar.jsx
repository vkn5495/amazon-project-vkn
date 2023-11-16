import React, { useContext, useEffect, useState } from 'react'
import logo from '../../img/logo/LOGO-removebg-preview.png'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { AllProducts } from '../../data/Data'
import { IoMdSearch } from 'react-icons/io'
import { PiShoppingCartSimpleBold } from 'react-icons/pi'
import './Navbar.css'
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai'
import { ContextAmazon } from '../ContextOfCart/ContextAmezon'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { AllItemsStore } from '../../data/ItemCategories'

const Navbar = () => {
    const [hover, setHover] = useState(false)
    const context = useContext(ContextAmazon)
    const cartCount = context.cartItems.reduce((sum, product) => sum + product.quantity, 0)

    
    return (

        <>
            <div className="navbar">
                <div className="container">
                    <div className="nav">
                        <div className="nav_left">
                            <div className="brand">
                                <img src={logo} alt="" />
                                <span>.in</span>
                            </div>
                            <div className="nav_adress">
                                <span className='icon'>
                                    <HiOutlineLocationMarker />
                                </span>
                                <span className='location'>
                                    <span>deliver to guest</span>
                                    <span>kumta 581343</span>
                                </span>
                            </div>
                        </div>
                        <div className="nav_middle">
                            <div className="nav_fashion">
                                <select id="products">
                                    {
                                        AllProducts.map((product) => (
                                            <option value="">{product.name} key={product.id}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            {/* <div className="nav_input_box"> */}
                                <div className="nav_input">
                                    <input value={context.searchValue}
                                     type="text" 
                                     placeholder='search amozon.in'
                                     onChange={e=> context.onChange(e)}
                                     />
                                </div>
                                <div className="nav_product">
                                    {
                                        AllItemsStore
                                        .filter(item=>{
                                            const searchItem = context.searchValue.toLowerCase()
                                            const name = item.name.toLowerCase()
                                            return searchItem && name.startsWith(searchItem) && name !== searchItem
                                        })
                                        .slice(0,6)
                                        .map((item=>{
                                            return(
                                                <p onClick={()=> context.onSearch(item)}>{item.name}</p>
                                            )
                                        }))
                                    }
                                </div>
                            {/* </div> */}
                            <Link to={'/search'}>
                            <div className="nav_button" onClick={()=> context.searchHold(context.searchValue)}>
                                <IoMdSearch />
                            </div>
                            </Link>
                        </div>
                        <div className="nav_right">
                            <div className="nav_account"
                                onMouseOver={() => setHover(true)}
                                onMouseOut={() => setHover(false)}>
                                <>
                                    <div className="icon_text">
                                        <p>hello, guest</p>
                                        <h4>account & lists </h4>
                                    </div>
                                    {
                                        hover ?
                                            <span><AiOutlineCaretUp /></span>
                                            :
                                            <span><AiOutlineCaretDown /></span>
                                    }
                                </>
                            </div>
                            <div className="nav_return">
                                <div className="head">
                                    <p>reutrns</p>
                                    <h4>& orders</h4>
                                </div>

                            </div>

                            <Link to={'/cart'}>
                                <div className="nav_cart">
                                    <span>
                                        <span className='icon'><PiShoppingCartSimpleBold /></span>
                                        <span className='count'>{cartCount}</span>
                                    </span>
                                    <span>cart</span>
                                </div>
                            </Link>
                        </div>
                        <div className={hover ? "homeHover" : " displayNone"}
                        >
                            <div className="content"
                                onMouseOver={() => setHover(true)}
                                onMouseOut={() => setHover(false)}>
                                <div className="box">
                                    <h4>your lists</h4>
                                    <Link to={'/wish'}>
                                        <p onClick={() => setHover(false)}>shopping list</p>
                                    </Link>
                                    <hr />
                                    <p>create a wish list</p>
                                    <p>wish from any website</p>
                                    <p>baby wishlist</p>
                                    <p>discover your style</p>
                                    <p>explore showroom</p>
                                </div>
                                <hr />
                                <div className="box">
                                    <h4>your account</h4>
                                    <p>your account</p>
                                    <p>your order</p>
                                    <Link to={'/wish'}
                                        onClick={() => setHover(false)}><p>your wish list</p></Link>
                                    <p>your recommendAtions</p>
                                    <p>your prime membership</p>
                                    <p>your prime video</p>
                                    <p>your subcribe & save items</p>
                                    <p>memberships & subscriptions</p>
                                    <p>your seller account</p>
                                    <p>manage your content and devices</p>
                                    <p>your free amazon business account</p>
                                    <p>switch accounts</p>
                                    <p>sign out</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Navbar
