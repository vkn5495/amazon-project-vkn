import React from 'react'
import prime from '../../img/prime.jpg'
import './OneItemsInTwoFlex.css'

const OneItemsInTwoFlex = () => {
  return (
    <>
      <div className="TowFlex">
        <div className="container">
            <div className="img">
                <img src={prime} alt="" />
            </div>
        </div>
      </div>
    </>
  )
}

export default OneItemsInTwoFlex
