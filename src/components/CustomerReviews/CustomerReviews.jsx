import React, { useContext, useState } from 'react'
import './CustomerReviews.css'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'
import phone from '../../img/phone/phone.jpg'
import { SiPrime } from 'react-icons/si'
import { BiUser } from 'react-icons/bi'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import { ContextAmazon } from '../ContextOfCart/ContextAmezon'
import { Link } from 'react-router-dom'

const CustomerReviews = ({ viewItems }) => {
    const context = useContext(ContextAmazon)
    const [seeOne, setSeeOne] = useState(false)
    const [seeTwo, setSeeTwo] = useState(false)
    return (
        <>
            <hr /><div className="CustomerReviews">
                <div className="container">
                    <div className="content">
                        <div className="left">
                            <div className="first_row">
                                <h3>Customer reviews</h3>
                                <div className="rates">
                                    <div className="stars">
                                        <BsStarFill />
                                        <BsStarFill />
                                        <BsStarFill />
                                        <BsStarHalf />
                                        <BsStar />
                                    </div>
                                    <span>4.3 out of 5</span>
                                </div>
                                <div className="globel">4276 global ratings</div>
                                <div className="percentage">
                                    <div className="box">
                                        <div className="star link">5 start</div>
                                        <span></span>
                                        <div className="data link">63%</div>
                                    </div>
                                    <div className="box">
                                        <div className="star link">5 start</div>
                                        <span></span>
                                        <div className="data link">63%</div>
                                    </div>
                                    <div className="box">
                                        <div className="star link">5 start</div>
                                        <span></span>
                                        <div className="data link">63%</div>
                                    </div>
                                    <div className="box">
                                        <div className="star link">5 start</div>
                                        <span></span>
                                        <div className="data link">63%</div>
                                    </div>
                                    <div className="box">
                                        <div className="star link">5 start</div>
                                        <span></span>
                                        <div className="data link">63%</div>
                                    </div>
                                </div>
                                <div className="calculate">
                                    <div className="heading"
                                        onClick={() => setSeeOne(!seeOne)}
                                    >
                                        <span>{
                                            seeOne ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />
                                        }</span>
                                        <p className='link'>how are rating calculated?</p>
                                    </div>
                                    <p
                                        className={seeOne ? 'show' : 'hide'}
                                    >To calculate the overall star rating and percentage breakdown by star, we don’t use a simple average. Instead, our system considers things like how recent a review is and if the reviewer bought the item on Amazon. It also analyses reviews to verify trustworthiness</p>
                                </div>
                                <hr />
                            </div>
                            <div className="second_row">
                                <h4>by feature</h4>
                                <div className={seeTwo ? "lists" : "lists  min"}>
                                    <div className="row">
                                        <p>charging power</p>
                                        <div className="rates">
                                            <div className="stars">
                                                <BsStarFill />
                                                <BsStarFill />
                                                <BsStarFill />
                                                <BsStarFill />
                                                <BsStarFill />
                                            </div>
                                            <div className="span">4.9</div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <p>value for money</p>
                                        <div className="rates">
                                            <div className="stars">
                                                <BsStarFill />
                                                <BsStarFill />
                                                <BsStarFill />
                                                <BsStarFill />
                                                <BsStarHalf />
                                            </div>
                                            <div className="span">4.7</div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <p>fingerprint reader</p>
                                        <div className="rates">
                                            <div className="stars">
                                                <BsStarFill />
                                                <BsStarFill />
                                                <BsStarFill />
                                                <BsStarFill />
                                                <BsStarHalf />
                                            </div>
                                            <div className="span">4.5</div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <p>comfort</p>
                                        <div className="rates">
                                            <div className="stars">
                                                <BsStarFill />
                                                <BsStarFill />
                                                <BsStarFill />
                                                <BsStarFill />
                                                <BsStarHalf />
                                            </div>
                                            <div className="span">4.3</div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <p>battery life</p>
                                        <div className="rates">
                                            <div className="stars">
                                                <BsStarFill />
                                                <BsStarFill />
                                                <BsStarFill />
                                                <BsStarFill />
                                                <BsStarHalf />
                                            </div>
                                            <div className="span">4.3</div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <p>charging power</p>
                                        <div className="rates">
                                            <div className="stars">
                                                <BsStarFill />
                                                <BsStarFill />
                                                <BsStarFill />
                                                <BsStarFill />
                                                <BsStar />
                                            </div>
                                            <div className="span">4.2</div>
                                        </div>
                                    </div>

                                </div>
                                <div onClick={() => setSeeTwo(!seeTwo)} className="see_more">
                                    <span
                                    >
                                        {
                                            seeTwo ? <MdKeyboardArrowUp /> :
                                                <MdKeyboardArrowDown />
                                        }
                                    </span>
                                    <p className='link'>see more</p>
                                </div>
                            </div>
                            <hr />
                            {
                                viewItems.slice(0, 1).map((product => {
                                    return (
                                        <div className="product" key={product.id}>
                                            <div className="content">
                                                <Link to={'/view'}>
                                                <img onClick={()=> context.viewInItem(product)} src={product.colour[0].img[0]} alt="" />
                                                </Link>
                                                <div className="text">
                                                    <Link to={'/view'}>
                                                    <div className="name link_two" onClick={()=> context.viewInItem(product)}>{product.name}</div>
                                                    </Link>
                                                    <div className="rates">
                                                        <div className="stars">
                                                            <BsStarFill />
                                                            <BsStarFill />
                                                            <BsStarFill />
                                                            <BsStarHalf />
                                                            <BsStar />
                                                        </div>
                                                        <span>28</span>
                                                    </div>
                                                    <div className="prime_price">
                                                        <div className="price">$ {product.price}</div>
                                                        <span><SiPrime /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }))
                            }
                        </div>
                        <div className="right">
                            <div className="header">
                                <div className="heading">Reviews with images</div>
                                <p className='link'>see all photos <span></span></p>
                            </div>
                            <div className="first">
                                <div className="img">
                                    <img src="https://m.media-amazon.com/images/I/81xV-+6sbOL._SY250_.jpg" alt="" />
                                    <img src="https://m.media-amazon.com/images/I/81012WgDuHL._SY250_.jpg" alt="" />
                                    <img src="https://m.media-amazon.com/images/I/81xV-+6sbOL._SY250_.jpg" alt="" />
                                    <img src="https://m.media-amazon.com/images/I/81012WgDuHL._SY250_.jpg" alt="" />
                                    <img src="https://m.media-amazon.com/images/I/81xV-+6sbOL._SY250_.jpg" alt="" />
                                    <img src="https://m.media-amazon.com/images/I/81012WgDuHL._SY250_.jpg" alt="" />
                                    <img src="https://m.media-amazon.com/images/I/81xV-+6sbOL._SY250_.jpg" alt="" />
                                    <img src="https://m.media-amazon.com/images/I/81012WgDuHL._SY250_.jpg" alt="" />
                                </div>
                            </div>
                            <hr />
                            <div className="second">
                                <div className="mention">
                                    <h4>read reviews that mention</h4>
                                    <div className="details">
                                        <p>battery life</p>
                                        <p> value fro money</p>
                                        <p>price range</p>
                                        <p>battery backup</p>
                                        <p>fast charging</p>
                                        <p>camera quanlity</p>
                                        <p>refresh rate</p>
                                        <p>snapdragon gen</p>
                                        <p>flagship killer</p>
                                        <p>heating issue</p>
                                        <p>top notch</p>
                                        <p>good phone</p>
                                        <p>front camera</p>
                                    </div>
                                </div>
                                <div className="select">
                                    <select name="" id="">
                                        <option value="">top reviews</option>
                                        <option value="">most recent</option>
                                    </select>
                                </div>
                                <div className="users">
                                    <h4>top reviews from india</h4>
                                    <div className="users_list">
                                        <div className="profile">
                                            <span><BiUser /></span>
                                            <div className="name">krunal tailor</div>
                                        </div>
                                        <div className="star_name">
                                            <div className="stars">
                                                <BsStarFill />
                                                <BsStarFill />
                                                <BsStarFill />
                                                <BsStarHalf />
                                                <BsStar />
                                            </div>
                                            <div className="product_name link">one plus from india</div>
                                        </div>
                                        <span>Reviewed in India on 26 June 2023
                                            Size: 12GB RAM, 256GB StorageColour: Moonstone BlackVerified Purchase
                                            Overall this phone is decent package. After using some months here is my review on One plus 10t
                                            Pros
                                            1. 150W fast charging is really awesome phone charge within 15-20 minutes
                                            2. Software experience is really good. There is need to fix some bugs but overall it's good
                                            3. Battery backup is good, due to fast charging there is some heating but it's acceptable. Overall if battery goes down it's charge very quickly so overall no issue.
                                            4. Display - Display quality is good but we expect Better display in this price range
                                            5. Speed - overall smooth experience,no lag in daily uses
                                            Cons</span>
                                        <div className="purchase">Verified Purchase</div>
                                        <span>Camera results not good as I expected</span>
                                        <div className="buttons">
                                            <button>helpful</button>
                                            <hr />
                                            <button>report</button>
                                        </div>
                                        <hr />
                                    </div>
                                </div>
                                <div className="users">
                                    <h4>top reviews from india</h4>
                                    <div className="users_list">
                                        <div className="profile">
                                            <span><BiUser /></span>
                                            <div className="name">krunal tailor</div>
                                        </div>
                                        <div className="star_name">
                                            <div className="stars">
                                                <BsStarFill />
                                                <BsStarFill />
                                                <BsStarFill />
                                                <BsStarHalf />
                                                <BsStar />
                                            </div>
                                            <div className="product_name link">one plus from india</div>
                                        </div>
                                        <span>Reviewed in India on 26 June 2023
                                            Size: 12GB RAM, 256GB StorageColour: Moonstone BlackVerified Purchase
                                            Overall this phone is decent package. After using some months here is my review on One plus 10t
                                            Pros
                                            1. 150W fast charging is really awesome phone charge within 15-20 minutes
                                            2. Software experience is really good. There is need to fix some bugs but overall it's good
                                            3. Battery backup is good, due to fast charging there is some heating but it's acceptable. Overall if battery goes down it's charge very quickly so overall no issue.
                                            4. Display - Display quality is good but we expect Better display in this price range
                                            5. Speed - overall smooth experience,no lag in daily uses
                                            Cons</span>
                                        <div className="purchase">Verified Purchase</div>
                                        <span>Camera results not good as I expected</span>
                                        <div className="buttons">
                                            <button>helpful</button>
                                            <hr />
                                            <button>report</button>
                                        </div>
                                        <hr />
                                    </div>
                                </div>
                                <div className="users">
                                    <h4>top reviews from india</h4>
                                    <div className="users_list">
                                        <div className="profile">
                                            <span><BiUser /></span>
                                            <div className="name">krunal tailor</div>
                                        </div>
                                        <div className="star_name">
                                            <div className="stars">
                                                <BsStarFill />
                                                <BsStarFill />
                                                <BsStarFill />
                                                <BsStarHalf />
                                                <BsStar />
                                            </div>
                                            <div className="product_name link">one plus from india</div>
                                        </div>
                                        <span>Reviewed in India on 26 June 2023
                                            Size: 12GB RAM, 256GB StorageColour: Moonstone BlackVerified Purchase
                                            Overall this phone is decent package. After using some months here is my review on One plus 10t
                                            Pros
                                            1. 150W fast charging is really awesome phone charge within 15-20 minutes
                                            2. Software experience is really good. There is need to fix some bugs but overall it's good
                                            3. Battery backup is good, due to fast charging there is some heating but it's acceptable. Overall if battery goes down it's charge very quickly so overall no issue.
                                            4. Display - Display quality is good but we expect Better display in this price range
                                            5. Speed - overall smooth experience,no lag in daily uses
                                            Cons</span>
                                        <div className="purchase">Verified Purchase</div>
                                        <span>Camera results not good as I expected</span>
                                        <div className="buttons">
                                            <button>helpful</button>
                                            <hr />
                                            <button>report</button>
                                        </div>
                                        <hr />
                                    </div>
                                </div>
                                <div className="users">
                                    <h4>top reviews from india</h4>
                                    <div className="users_list">
                                        <div className="profile">
                                            <span><BiUser /></span>
                                            <div className="name">krunal tailor</div>
                                        </div>
                                        <div className="star_name">
                                            <div className="stars">
                                                <BsStarFill />
                                                <BsStarFill />
                                                <BsStarFill />
                                                <BsStarHalf />
                                                <BsStar />
                                            </div>
                                            <div className="product_name link">one plus from india</div>
                                        </div>
                                        <span>Reviewed in India on 26 June 2023
                                            Size: 12GB RAM, 256GB StorageColour: Moonstone BlackVerified Purchase
                                            Overall this phone is decent package. After using some months here is my review on One plus 10t
                                            Pros
                                            1. 150W fast charging is really awesome phone charge within 15-20 minutes
                                            2. Software experience is really good. There is need to fix some bugs but overall it's good
                                            3. Battery backup is good, due to fast charging there is some heating but it's acceptable. Overall if battery goes down it's charge very quickly so overall no issue.
                                            4. Display - Display quality is good but we expect Better display in this price range
                                            5. Speed - overall smooth experience,no lag in daily uses
                                            Cons</span>
                                        <div className="purchase">Verified Purchase</div>
                                        <span>Camera results not good as I expected</span>
                                        <div className="buttons">
                                            <button>helpful</button>
                                            <hr />
                                            <button>report</button>
                                        </div>
                                        <hr />
                                    </div>
                                </div>
                                <div className="users">
                                    <h4>top reviews from india</h4>
                                    <div className="users_list">
                                        <div className="profile">
                                            <span><BiUser /></span>
                                            <div className="name">krunal tailor</div>
                                        </div>
                                        <div className="star_name">
                                            <div className="stars">
                                                <BsStarFill />
                                                <BsStarFill />
                                                <BsStarFill />
                                                <BsStarHalf />
                                                <BsStar />
                                            </div>
                                            <div className="product_name link">one plus from india</div>
                                        </div>
                                        <span>Reviewed in India on 26 June 2023
                                            Size: 12GB RAM, 256GB StorageColour: Moonstone BlackVerified Purchase
                                            Overall this phone is decent package. After using some months here is my review on One plus 10t
                                            Pros
                                            1. 150W fast charging is really awesome phone charge within 15-20 minutes
                                            2. Software experience is really good. There is need to fix some bugs but overall it's good
                                            3. Battery backup is good, due to fast charging there is some heating but it's acceptable. Overall if battery goes down it's charge very quickly so overall no issue.
                                            4. Display - Display quality is good but we expect Better display in this price range
                                            5. Speed - overall smooth experience,no lag in daily uses
                                            Cons</span>
                                        <div className="purchase">Verified Purchase</div>
                                        <span>Camera results not good as I expected</span>
                                        <div className="buttons">
                                            <button>helpful</button>
                                            <hr />
                                            <button>report</button>
                                        </div>
                                        <hr />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CustomerReviews
