import React, { useContext } from 'react'
import './PopularItems.css'
import icon from '../../img/oneplus icon.png'
import image from '../../img/oneplusmobile.jpg'
import { AllItemsStore } from '../../data/ItemCategories'
import { ContextAmazon } from '../ContextOfCart/ContextAmezon'
import { Link } from 'react-router-dom'

const PopularItems = ({ viewItems }) => {
  const context = useContext(ContextAmazon)
  return (
    <>
      <hr />
      <div className="PopularItems">
        <div className="container">
          <div className="header">
            <div className="img">
              <img src={viewItems.icon} alt="" />
            </div>
            <h3>Popular items from {viewItems.type.category}</h3>
          </div>
          <div className="list">
            {
              AllItemsStore.filter(item => item.type.items === viewItems.type.items
                && item.type.category === viewItems.type.category)
                .slice(0, 5)
                .map((product, idx) => {
                  return (
                    <div className="box" key={product.id}>
                      <h3>{product.type.category} wearables</h3>
                      <Link to={'/view'}>
                        <div className="img" onClick={() => context.viewInItem(product)}>
                          <img src={product.colour[0].img[0]} alt="" />
                        </div>
                      </Link>
                    </div>

                  )
                })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default PopularItems
