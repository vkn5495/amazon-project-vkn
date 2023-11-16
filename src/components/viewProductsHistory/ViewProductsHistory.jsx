import React, { useContext } from 'react'
import { ContextAmazon } from '../ContextOfCart/ContextAmezon'
import ProductCard from '../ProductLists/ProductCard'

const ViewProductsHistory = () => {
    const context = useContext(ContextAmazon)
  return (
    <>
      {
        context.saveViewProducts.map((product,idx)=>(
            <ProductCard key={idx} product={product}/>
        ))
      }
    </>
  )
}

export default ViewProductsHistory
