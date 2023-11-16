import React, { useContext } from 'react'
import ProductLists from '../components/ProductLists/ProductLists'
import CartEdge from '../components/CartEdge/CartEdge'
import { ContextAmazon } from '../components/ContextOfCart/ContextAmezon'

const ProductListsPagps = () => {
  const context = useContext(ContextAmazon)
  const quantity = context.cartItems.length
  return (
    <>
    <div>
      <div className="cart_items_ds">
        <div className={quantity === 0 ?'let_home_width' :"let_home"}>
        <ProductLists />
        </div>
        <div className={quantity === 0 ?'display_none': "let_cart_item"}>
        <CartEdge />
        </div>
      </div>
    </div>
      
    </>
  )
}

export default ProductListsPagps
