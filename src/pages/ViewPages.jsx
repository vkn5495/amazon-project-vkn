import React, { useContext } from 'react'
import ViewProduct from '../components/ViewProduct/ViewProduct'
import ViewProductDetails from '../components/ViewProductDetails/ViewProductDetails'
import BrandName from '../components/BrandName/BrandName'
import BrandDetails from '../components/BrandDetails/BrandDetails'
import ProductViewImage from '../components/ProductViewImage/ProductViewImage'
import CompareProduct from '../components/CompareProduct/CompareProduct'
import Information from '../components/Information/Information'
import RelatedProducts from '../components/RelatedProducts/RelatedProducts'
import PopularItems from '../components/PopularItems/PopularItems'
import CustomerReviews from '../components/CustomerReviews/CustomerReviews'
import BrowsingHistory from '../components/browsingHistory/browsingHistory'
import { ContextAmazon } from '../components/ContextOfCart/ContextAmezon'
import CartEdge from '../components/CartEdge/CartEdge'
import { AllItemsStore } from '../data/ItemCategories'

const ViewPages = () => {
  const context = useContext(ContextAmazon)
  const quantity = context.cartItems.length
  return (
    <>
      {
        context.viewProduct.map((product, idx) => {
          const allItems = AllItemsStore.filter(item=>
            item.type.items === product.type.items)
            const category = AllItemsStore.filter(item=>
              item.type.items === product.type.items && item.type.category === product.type.category)
        return(
          <div key={idx} style={{
          }}>
            <div>
              <div className="cart_items_ds">
                <div className={quantity === 0 ? 'let_home_width' : "let_home"}
                  style={{ background: '#fff' }}>
                  <ViewProduct />
                  <ViewProductDetails viewItems={product} />
                  <BrandName viewItems={product} />
                  <BrandDetails viewItems={product}/>
                  <ProductViewImage viewItems={product}/>
                  <CompareProduct viewItems={product}/>
                  <Information />
                  {/* <RelatedProducts viewItems={category}/> */}
                  <PopularItems viewItems={product}/>
                  <RelatedProducts viewItems={allItems}/>
                  <CustomerReviews viewItems={category}/>
                  <BrowsingHistory />
                </div>
                <div className={quantity === 0 ? 'display_none' : "let_cart_item"}>
                  <CartEdge />
                </div>
              </div>
            </div>

          </div>
        )})
      }
    </>
  )
}

export default ViewPages
