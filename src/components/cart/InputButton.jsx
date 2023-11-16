import React, { useContext, useState } from 'react'
import { ContextAmazon } from '../ContextOfCart/ContextAmezon'

const InputButton = ({ product }) => {
    const context = useContext(ContextAmazon)
    const [button, setButton] = useState(product.quantity)
    const [click,setClick] = useState(true)
    function clickHandle(){
        setClick(false)
        context.inputValueOfCart(button,product)
    }

    return (
        <div 
        style={{
            display:'flex',
            alignItems:'flex-start',
            gap:'1rem'
        }}>
            <div className='input'
            >
                <input type="text" style={{ textAlign: 'center' ,width:'3.5rem',borderRadius:'5px'}}
                value={button}
                    onChange={e => setButton(Number(e.target.value), product,setClick(true))}
                    />
            </div>
            <button className={!click && 'button_close'} onClick={clickHandle}>update</button>
        </div>
    )
}

export default InputButton
