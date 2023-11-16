import { useState } from "react";
import { createContext } from "react";

export const ContextAmazon = createContext({
    cartItems: [],
    getCartProductQuantity: () => { },
    addOneToCart: () => { },
    deleteFromCart: () => { },
    getTotalCartCost: () => { },
    inputValueOfCart: () => { },
    productQuantity: () => { },
    valueOfQuatities: [],
    getValueProduct: () => { },
    getValueOfQuantity: () => { },
    cartItemsHistories: [],
    saveItems: [],
    saveForLater: () => { },
    moveToCart: () => { },
    deleteFronSaveList: () => { },
    wishLists: [],
    getWishProductQuantity: () => { },
    addAndRemoveToWishList: () => { },
    viewProduct: [],
    viewInItem: () => { },
    saveViewProducts: [],
    saveQuantityViewProduct: () => { },
    deleteViewItem: () => { },
    AlldeleteViewItem: () => { },
    switchBrowserHistory: true,
    onAndOffBrowserHistory: () => { },
    click: false,
    button: 10,
    onchange: () => { },
    clickHandle: () => { },
    checkViewImageIndexNumber: 0,
    holdColor: 0,
    holdImg: 0,
    holdTheProduct: () => { },
    holdTheProductHover: () => { },
    holdTheProductHoverOut: () => { },
    holdInImg: () => { },
    search: [],
    searchHold: () => { },
    searchValue: '',
    onSearch: () => { },
    onChange: () => { },
    searchProduct: []
})

export const CotextProvider = ({ children }) => {

    const [cartItem, setCartItem] = useState([])
    const [cartItemsHistory, setCartItemsHistory] = useState([])
    const [wistItem, setWishItem] = useState([])
    const [viewProduct, setViewProduct] = useState([])
    const [saveItem, setSaveItem] = useState([])
    const [valueOfQuatity, setValueOfQuantity] = useState([])
    const [saveViewProduct, setSaveViewProduct] = useState([])
    const [switchBrowserHistory, setSwitchBrowserHistory] = useState(true)
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(10)
    const [checkViewImageIndexNumber, setCheckViewImageIndexNumber] = useState(0)
    const [holdColor, setHoldColor] = useState(0)
    const [holdImg, setHoldImg] = useState(0)
    const [search, setSearch] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [searchProduct, setSearchProduct] = useState([])



    function onchange(e, item) {
        setButton(Number(e.target.value), item, setClick(true))
    }
    function clickHandle(item) {
        setClick(false)
        inputValueOfCart(button, item)
    }
    function getCartProductQuantity(item) {
        const quantity = cartItem.find(product => product.id === item.id)?.quantity

        if (quantity === undefined) {
            return 0
        }
    }


    function getWishProductQuantity(item) {
        const quantity = wistItem.find(product => product.id === item.id)?.quantity

        if (quantity === undefined) {
            return 0
        }
    }


    function addOneToCart(item) {
        const quantity = getCartProductQuantity(item)

        if (quantity === 0) {
            setCartItem([...cartItem, { ...item, quantity: 1 }])
        }
        else {
            setCartItem(
                cartItem.map(product => product.id === item.id ? { ...product, quantity: product.quantity + 1 } : product)
            )
        }
        setCartItemsHistory([...cartItemsHistory, { ...item }])
    }



    function deleteFromCart(item) {
        setCartItem(
            cartItem => cartItem.filter(product => product.id != item.id)
        )
    }


    function inputValueOfCart(newValue, item) {
        setCartItem(
            cartItem.map(product => product.id === item.id ?
                { ...product, quantity: newValue } : product)
        )
    }


    function getValueProduct(item) {
        const quantity = valueOfQuatity.find(product => product.id === item.id)?.quantity
        if (quantity === undefined) {
            return 0
        }
        return quantity
    }


    function getValueOfQuantity(amount, item) {
        setValueOfQuantity(
            valueOfQuatity.map(product => product.id === item.id ?
                { ...product, quantity: amount } : product)
        )
    }


    function productQuantity(item) {
        const value = getValueProduct(item)
        const quantity = getCartProductQuantity(item)
        if (quantity === 0) {
            setCartItem([...cartItem, { ...item, quantity: value }])
        }
        else {
            setCartItem(
                cartItem.map(product => product.id === item.id ?
                    { ...product, quantity: product.quantity + value } : product)
            )
        }
        setCartItemsHistory([...cartItemsHistory, { ...item }])
    }


    function getTotalCartCost() {
        cartItem.reduce((sum, product) => sum + (product.quantity * product.price), 0)
    }


    function saveForLater(item) {
        deleteFromCart(item)
        setSaveItem([...saveItem, { ...item }])
    }


    function moveToCart(item) {
        addOneToCart(item)
        deleteFronSaveList(item)
    }


    function deleteFronSaveList(item) {
        setSaveItem(
            saveItem => saveItem.filter(product => product.id != item.id)
        )
    }


    function addAndRemoveToWishList(item) {
        const quantity = getWishProductQuantity(item)
        if (quantity === 0) {
            setWishItem([...wistItem, { ...item, quantity: 1 }])
        }
        else {
            setWishItem(
                wistItem => wistItem.filter(product => product.id !== item.id)
            )
        }
    }

    function saveQuantityViewProduct(item) {
        const quantity = saveViewProduct.find(product => product.id === item.id)?.quantity

        if (quantity === undefined) {
            return 0
        }
        return quantity
    }


    function viewInItem(item) {
        setViewProduct([{ ...item }]);

        const quantity = saveQuantityViewProduct(item)
        if (switchBrowserHistory) {
            if (quantity === 0) {
                setSaveViewProduct([...saveViewProduct, { ...item, quantity: 1 }])
            }
            else {
                setSaveViewProduct(
                    saveViewProduct.map(product => product.id === item.id ?
                        { ...product, quantity: product.quantity + 1 } : product)
                )
            }
        }
        const f = getValueProduct(item)
        if (f === 0) {
            setValueOfQuantity([{ ...item, quantity: 1 }])
        }
        setHoldColor(item.colour[0])
        setHoldImg(item.colour[0].img[0])
    }

    function deleteViewItem(item) {
        setSaveViewProduct(
            saveViewProduct => saveViewProduct.filter(product => product.id != item.id)
        )
    }
    function AlldeleteViewItem() {
        setSaveViewProduct(
            saveViewProduct => saveViewProduct.filter(product => !product.id)
        )
    }

    function onAndOffBrowserHistory() {
        setSwitchBrowserHistory(!switchBrowserHistory)
    }

    const holdTheProduct = (item, view) => {
        setHoldColor(item.colour[view])
        setHoldImg(
            item.colour[view].img[0]
        )
        setCheckViewImageIndexNumber(0)
    }

    const holdTheProductHover = (item, view) => {
        setHoldImg(
            item.colour[view].img[checkViewImageIndexNumber]
        )
    }

    const holdTheProductHoverOut = () => {
        setHoldImg(
            holdColor.img[checkViewImageIndexNumber]
        )
    }
    const holdInImg = (idx) => {
        setHoldImg(holdColor.img[idx])
        setCheckViewImageIndexNumber(idx)
    }

    const searchHold = (item) => {
        setSearch(item)
    }

    const onSearch = (searchItem) => {
        setSearchValue(searchItem.name)
        setSearchProduct([{ ...searchItem }])
    }
    console.log(searchProduct)
    const onChange = (e) => {
        setSearchValue(e.target.value)
    }

    const ContextValue = {
        cartItems: cartItem,
        getCartProductQuantity,
        addOneToCart,
        deleteFromCart,
        getTotalCartCost,
        inputValueOfCart,
        productQuantity,
        valueOfQuatities: valueOfQuatity,
        getValueProduct,
        getValueOfQuantity,
        cartItemsHistories: cartItemsHistory,
        saveItems: saveItem,
        saveForLater,
        moveToCart,
        deleteFronSaveList,
        wishLists: wistItem,
        getWishProductQuantity,
        addAndRemoveToWishList,
        viewProduct: viewProduct,
        viewInItem,
        saveViewProducts: saveViewProduct,
        saveQuantityViewProduct,
        deleteViewItem,
        AlldeleteViewItem,
        switchBrowserHistory: switchBrowserHistory,
        onAndOffBrowserHistory,
        click: click,
        button: button,
        onchange,
        clickHandle,
        checkViewImageIndexNumber: checkViewImageIndexNumber,
        holdColor: holdColor,
        holdImg: holdImg,
        holdTheProduct,
        holdTheProductHover,
        holdTheProductHoverOut,
        holdInImg,
        search: search,
        searchHold,
        searchValue,
        onChange,
        onSearch,
        searchProduct: searchProduct,
    }
    return (
        <ContextAmazon.Provider value={ContextValue}>
            {children}
        </ContextAmazon.Provider>
    )
}

export default CotextProvider