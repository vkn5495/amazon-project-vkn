import React, { useContext } from 'react'
import './CompareProduct.css'
import { mobileList } from '../../data/Data'
import { AllItemsStore } from '../../data/ItemCategories'
import { ContextAmazon } from '../ContextOfCart/ContextAmezon'
import { Link } from 'react-router-dom'

const CompareProduct = ({viewItems}) => {
    const context = useContext(ContextAmazon)
  return (
    <>
      <div className="compare_product">
        <div className="container">
            <h2>choose the best {viewItems.type.category} for you</h2>
             <div className="content">
             {
                AllItemsStore.filter(item=> item.type.items === viewItems.type.items && item.type.category === viewItems.type.category)
                .slice(0,3).map((product,idx)=>(
                    <div className="box">
                        <Link to={'/view'}>
                        <div className="img_box" onClick={()=> context.viewInItem(product)}>
                            <div className="img">
                                <img src={product.colour[0].img[0]} alt="" />
                            </div>
                            <div className="heading link_one">{product.name}</div>
                        </div>
                        </Link>
                        <hr />
                        <div className="text">
                            <div className="text_box">
                                <div className="header">processor</div>
                                <div className="details">qualcomm snapdragon 8 gen 2</div>
                            </div>
                            <div className="text_box">
                                <div className="header">main camera</div>
                                <div className="details">50mp with sony Imx890</div>
                            </div>
                            <div className="text_box">
                                <div className="header">charging</div>
                                <div className="details">100w supervooc</div>
                            </div>
                            <div className="text_box">
                                <div className="header">battery</div>
                                <div className="details">5000 mah</div>
                            </div>
                            <div className="text_box">
                                <div className="header">ram</div>
                                <div className="details">8gb / 16gb lpddr5x</div>
                            </div>
                        </div>
                    </div>
                ))
             } 
                </div>  
        </div>
      </div>
    </>
  )
}

export default CompareProduct
