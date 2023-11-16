import React, { useContext } from 'react'
import { headphone, mobileList, smartWatchs } from '../../data/Data'
import FourItemsCard from '../FourItemsCard/FourItemsCard'
import './HomeList.css'
import FourItemsCardTwo from '../fourItemsCardTwo/FourItemsCardTwo'
import OneItemsInTwoFlex from '../OneItemsInTwoFlex/OneItemsInTwoFlex'
import OneItemsCard from '../oneItems/OneItemsCard'
import OneProduct from '../../img/laptop.jpg'
import Pricedetails from '../Pricedetails/Pricedetails'
import ProductFilter from '../ProductFilter/ProductFilter'
import SliderOne from '../Slider/Slider'
import SliderTwo from '../SliderTwo/SliderTwo'
import { ContextAmazon } from '../ContextOfCart/ContextAmezon'
import { Link } from 'react-router-dom'
import { Vivo } from '../../data/mobile/vivo/Vivo'
import { Mobile } from '../../data/ItemCategories'

const HomeLists = () => {
    const context = useContext(ContextAmazon)
    const saveViewProudctCount = context.saveViewProducts.length
    return (
        <>
            <div className="home_lists">
                <div className="containers">
                    <div className="grid">
                        {
                            context.cartItemsHistories.length > 0 ?
                            <div className="grid_lists">
                            <h3>pick up where to left</h3>
                            <div className="flex_wrap">
                                {
                                    context.cartItemsHistories.slice(0, 4).map((product, idx) => (
                                        <>
                                            <FourItemsCard product={product} key={idx} />
                                        </>
                                    ))
                                }
                            </div>
                        </div>:null
                        }
                        {
                            saveViewProudctCount > 0 ?
                                <div className="grid_lists">
                                    <h3>keep shopping for</h3>
                                    <div className="flex_wrap">
                                        {
                                            context.saveViewProducts.slice(0, 4).map((product, idx) => (
                                                <>
                                                    <FourItemsCardTwo product={product} key={idx} />
                                                </>
                                            ))
                                        }
                                    </div>
                                    {
                                        saveViewProudctCount > 2 ?
                                            <Link style={{
                                                textDecoration: 'none'
                                            }} to={'/list'}>
                                                <div className="see_all link">
                                                    view your browsering history
                                                </div>
                                            </Link>
                                            :
                                            null
                                    }
                                </div> :
                                null

                        }
                        <div className="grid_lists_one">
                            <h3>top smart watch</h3>
                            <div className="flex_wrap">
                                {
                                    smartWatchs.slice(0, 4).map((product, idx) => (
                                        <Pricedetails product={product} key={idx} />
                                    ))
                                }
                            </div>
                        </div>
                        <div className="grid_lists_three">
                            <h3>Bestselling laptop starts</h3>
                            <div className="flex_wrap">
                                <OneItemsCard OneProduct={OneProduct} />
                            </div>
                            <div className="see_all">
                                see more
                            </div>
                        </div>
                        

                        <div className="grid_lists_four">
                            <h3>pick up where to left</h3>
                            <div className="flex_wrap">
                                <ProductFilter categories={smartWatchs} />
                            </div>
                        </div>
                        
                        <div className="grid_lists">
                            <h3>pick up where to left</h3>
                            <div className="flex_wrap">
                                {
                                    smartWatchs.slice(0, 4).map((product, idx) => (
                                        <>
                                            <FourItemsCard product={product} key={idx} />
                                        </>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="grid_lists_two">
                            <h3>Prime Video: Recommended for you</h3>
                            <div className="flex_wrap">
                                <OneItemsInTwoFlex />
                            </div>
                        </div>
                        <div className="grid_lists_four">
                            <h3>pick up where to left</h3>
                            <div className="flex_wrap">
                                <ProductFilter categories={Vivo} />
                            </div>
                        </div>
                    </div>
                    <div className="Home_slider_one">
                        <div className="container">
                            <SliderOne product={smartWatchs} />
                        </div>
                    </div>
                    <div className="Home_slider_two">
                        <div className="container">
                            <SliderTwo product={Mobile} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeLists
