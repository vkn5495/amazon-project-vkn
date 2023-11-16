import React from 'react'
import './Information.css'
import { AdditionalInformation, TechnicalDetails } from '../../data/Data'

const Information = () => {
  return (
    <>
    <hr />
      <div className="information">
        <div className="container">
            <h3>onePlus 11 5G mobile phone infoemation</h3>
            <div className="list">
                <div className="box">
                    <h3>Technical Details</h3>
                    <hr />
                    <table>
                        {
                            TechnicalDetails.map((product,idx)=>(
                                <>
                                <tr key={idx}>
                                       <th>{product.head}</th>
                                        <td>{product.text}</td>
                                </tr>
                                {/* <hr /> */}
                                </>
                            ))
                        }
                    </table>
                </div>
                <div className="box">
                    <h3>Additional Information</h3>
                    <hr />
                    <table>
                        {AdditionalInformation.map((product,idx)=>(
                                <tr key={idx}>
                                       <th>{product.head}</th>
                                        <td>{product.text}</td>
                                </tr>
                            ))
                        }
                    </table>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Information
