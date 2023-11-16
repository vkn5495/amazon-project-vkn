import React, { useContext } from 'react'
import Home from '../components/home/Home'
import HomeLists from '../components/homeLists/HomeLists'
import BrowsingHistory from '../components/browsingHistory/browsingHistory'
import CartEdge from '../components/CartEdge/CartEdge'
import { ContextAmazon } from '../components/ContextOfCart/ContextAmezon'

const HomePages = () => {
  const context = useContext(ContextAmazon)
  const quantity = context.cartItems.length
  return (
    <div>
      <div className="cart_items_ds">
        <div className={quantity === 0 ? 'let_home_width' : "let_home"}>
          <Home />
          <HomeLists />
          <BrowsingHistory />
        </div>
        <div className={quantity === 0 ? 'display_none' : "let_cart_item"}>
          <CartEdge />
        </div>
      </div>
    </div>
  )
}

export default HomePages
