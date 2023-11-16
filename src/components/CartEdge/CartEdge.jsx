import React, { useContext } from 'react'
import './CartEdge.css'
import { ContextAmazon } from '../ContextOfCart/ContextAmezon'
import { Link } from 'react-router-dom'
import InputButtonOne from './InputButtonOne'
import { MdDelete } from 'react-icons/md'

const CartEdge = () => {
    const context = useContext(ContextAmazon)
    const cartItemsTotalCost = context.cartItems.reduce((sum,product)=> sum + product.quantity * product.price,0)
    return (
        <>
            <div className="CartEdge">
                <div className="heading">
                    <p>subtotal</p>
                    <p>$ {cartItemsTotalCost}</p>
                    <p>
                        <span>part of your order qualifies for free devilery.</span>
                        <span>select this option at checkout details</span>
                    </p>
                    <Link to={'/cart'}><button>go to cart</button></Link>
                </div>
                <hr />
                <div className="cart_items_list">
                    {
                        context.cartItems.map((product, idx) => {
                            return (
                                <>
                                    <div className="box">
                                        <Link to={'/view'}>
                                        <div className="img" onClick={()=> context.viewInItem(product)}>
                                            <img src={product.colour[0].img[0]} alt="" />
                                        </div>
                                        </Link>
                                        <div className="rate">$ {product.price}</div>
                                        <div className="details">
                                            <div className="qty">
                                                {
                                                    product.quantity < 10 ?
                                                        <>
                                                            <div className='select'>
                                                                
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
                                                            <InputButtonOne product={product} />
                                                        </>
                                                }
                                            <div className="delete" onClick={()=> context.deleteFromCart(product)}><MdDelete /></div>
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
        </>
    )
}

export default CartEdge
