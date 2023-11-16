import React, { useContext, useState } from 'react'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'
import { VscLayoutSidebarLeft, VscLayoutSidebarRight } from 'react-icons/vsc'
import './ProductLists.css'
import { ContextAmazon } from '../ContextOfCart/ContextAmezon'
import ViewProductsHistory from '../viewProductsHistory/ViewProductsHistory'

const ProductLists = () => {
    const context = useContext(ContextAmazon)
    const [manageHistory,setManageHistory] = useState(false)
    return (
        <>
            <div className="ProductLists">
                <div className="container">
                    <h3>your browsing history</h3>
                    <div className="content d_flex">
                        <p>These items were viewed recently. We use them to personalise recommendations.</p>
                        <div className="manage link b_flex"  onClick={()=> setManageHistory(!manageHistory)}>
                            <div className="icon">
                                {
                                    manageHistory ? <BiChevronUp/> :<BiChevronDown /> 
                                }
                            </div>
                            <div className="history ">Manage history</div>
                        </div>
                    </div>
                    <div className={manageHistory ? 'under_list':"under_list_close"}>
                        <div className="module_history">
                            <div className="text" >Turn on/off browsing history</div>
                            <div className={context.switchBrowserHistory ? "module_icon green": "module_icon red"} onClick={()=> context.onAndOffBrowserHistory()}>
                                {
                                    context.switchBrowserHistory ? 
                                    <VscLayoutSidebarRight />:<VscLayoutSidebarLeft/>
                                }
                                </div>
                        </div>
                        <div className="remove" onClick={()=> context.AlldeleteViewItem()}>Remove all items from view</div>
                    </div>
                    <div className="list_items">
                        {
                            context.saveViewProducts.length > 0 ? 
                            <ViewProductsHistory /> :
                            <h3 style={{
                                fontSize:'30px',
                                fontWeight:'100'
                            }}>empty history</h3>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductLists
