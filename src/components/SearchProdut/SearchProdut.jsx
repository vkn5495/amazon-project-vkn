import React from 'react'
import ProductCard from '../ProductLists/ProductCard'
import { AllItemsStore } from '../../data/ItemCategories'
import { useContext } from 'react'
import { ContextAmazon } from '../ContextOfCart/ContextAmezon'
import ProductLists from '../ProductLists/ProductLists'
import ProductBox from '../RelatedProducts/ProductBox'
import Slider from 'react-slick'
import { NextArrow, PrevArrow } from '../../data/Data'

const SearchProdut = () => {
    const context = useContext(ContextAmazon)

    return (
        <>
            <div className="ProductLists">
                <div className="container">
                    <div className="list_items">
                        {
                            AllItemsStore.filter((item) => {
                                const search = context.search
                                const searchItem = search
                                const name = item.name
                                return searchItem && name.startsWith(searchItem)
                            })
                                .map((item) => {
                                    return (
                                        <ProductCard product={item} key={item.id} />
                                    )
                                })
                        }
                    </div>
                    <h3 style={{
                        margin: '2rem'
                    }}>related products</h3>
                    {
                        <div className="list_items">
                            {
                                context.searchProduct.map((product) => {
                                    return (
                                        <>
                                            {
                                                AllItemsStore.filter(item => item.type.category === product.type.category &&
                                                    item.type.items === product.type.items)
                                                    .map(item => {
                                                        return (
                                                            <ProductCard product={item} key={item.id} />
                                                        )
                                                    })
                                            }
                                        </>
                                    )
                                })
                            }
                        </div>
                    }
                    {
                        context.searchProduct.map((product => {
                            return (
                                <>
                                    <h3 style={{
                                        margin: '2rem'
                                    }}>all {product.type.items}</h3>
                                    <div className="list_items">
                                        {
                                            AllItemsStore.filter(item => item.type.items === product.type.items)
                                                .map(item => {
                                                    return (
                                                        <ProductCard product={item} key={item.id} />
                                                    )
                                                })
                                        }
                                    </div>
                                </>
                            )
                        }))
                    }
                </div>
            </div>
        </>
    )
}

export default SearchProdut
