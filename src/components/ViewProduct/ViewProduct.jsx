import React, { useState } from 'react'
import './ViewProduct.css'
import { allElectricsItems } from '../../data/allElectricsItems'

const ViewProduct = () => {
    const [category, setCategory] = useState([])
    const [show, setShow] = useState(false)
    const holdLists = (item) => {
        setShow(true)
        setCategory(item)
    }
    return (
        <>
            <div className="view_product">
                <div className="container"
                >
                    <div className="top"
                    >
                        <div className="heading">electronics</div>
                        <div className="under_list"
                        onMouseOver={() => setShow(true)}
                        onMouseOut={() => setShow(false)}>
                        <div className="under_product"
                            >
                            {
                                allElectricsItems.map((group, idx) => {
                                    const hold = group.subHead
                                    return (
                                        <li key={idx}
                                            onMouseOver={() => holdLists(hold)}
                                            onMouseOut={() => setShow(false)}
                                        >{group.head}</li>
                                    )
                                })
                            }
                        </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className={show ? "category_list" : 'category_list_none'}
                    onMouseOver={() => setShow(true)}
                    onMouseOut={() => setShow(false)}>
                    <div className="list_container">
                        <div className="cotent">
                            {
                                category.map((list, idx) => {
                                    const i = list
                                    console.log(i)
                                    return (
                                        <>
                                            <div className="box" key={idx}>
                                                <div className="img">
                                                    {
                                                        list.img === null ? null :
                                                            <img src={list.img} alt="" />
                                                    }
                                                </div>
                                                <div className="text">
                                                    <div className="head">{list.title}</div>
                                                    {
                                                        list.details.map((b, n) => {
                                                            return (
                                                                <p key={n}>{[b]}</p>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </>
                                    )

                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewProduct
