import React, { useState } from 'react'
import './SearchList.css'
import { BiArrowBack, BiMenu } from 'react-icons/bi'
import { AiOutlineClose, AiOutlineRight, AiOutlineRollback } from 'react-icons/ai'
import { HiOutlineHome } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { FaUserSecret, FaAngleRight } from 'react-icons/fa6'
import { allItems } from '../../data/allItemsList'
import { smartWatchs } from '../../data/Data'

const SearchList = () => {
  const [toggle, setToggle] = useState(false)
  const [details, setDetails] = useState(false)
  const [holder, setHolder] = useState([])
  const toggleClick = () => {
    setDetails(false)
    setToggle(!toggle)
  }
  const handleClick = (hold) => {
    setDetails(!details)
    setHolder(hold)
  }

  return (
    <>
      <div className="search_bar">
        <div className="container d_flex">
          <div className="search_left b_flex">
            <span className='icon' onClick={toggleClick}> <BiMenu style={{ fontSize: '30px' }} /> <span>all</span> </span>
            <ul className='a_flex'>
              <li>amazon miniTV</li>
              <li>sell</li>
              <li>amazon pay</li>
              <li>gift cards</li>
              <li>buy again</li>
              <li>gift ideas</li>
            </ul>
          </div>
          <div className="search_right">
            <div className="home_return">
              <Link to={'/'}><span><HiOutlineHome /></span></Link>
              <span><AiOutlineRollback /></span>

            </div>
            <div className="text">
              new launches from mobiles, electronics & more | shop now
            </div>
          </div>
        </div>
        <div className={toggle ? "all_items toggle" : 'all_items toggle_close'}>
          <div className="item_container">
            <div className="close_btn" onClick={() => setToggle(!toggle)}><AiOutlineClose /></div>
            <div className="list_of_items">
              <div className="heading">
                <div className="users c_flex"><FaUserSecret /></div>
                <h3>hello , guest</h3>
              </div>
              <div className={'width_gap'}>
                <div className={details ? 'list_items take_left' : "list_items"}>
                  <div className="lists_container">
                    {
                      allItems.map((product, idx) => {
                        const subHead = product.subHeading
                        return (
                          <div key={idx}>
                            <div className="box">
                              <div className="group_list">
                                <div className="head">{product.heading}</div>
                                {
                                  subHead.map((item, i) => {
                                    const lists = item.lists
                                    return (
                                      <>
                                        <div className="sub_head d_flex" key={i} onClick={
                                          lists === null ? null : () => handleClick(lists)
                                        }>
                                          <div className="title">{item.groups}</div>
                                          {
                                            lists === null ? null
                                              :
                                              <div className="icon"><FaAngleRight /></div>
                                          }
                                        </div>
                                      </>
                                    )
                                  })
                                }
                              </div>
                            </div>
                            <hr />
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
                <div className={details ? "list_items_details" : 'list_items_details take_right'}>
                  <div className="lists_container">
                    <div className="title" onClick={() => setDetails(!details)}>
                      <span><BiArrowBack /></span>
                    <h3 >main menu</h3>
                    </div>
                    {
                      holder.map((v, idx) => {
                        const u = { v }
                        console.log([v])
                        return (
                          <>
                          <hr />
                          <div style={{padding:'8px 0'}} key={idx}>
                            
                            <div className='head'>
                              {v.header}
                            </div>
                            {
                              v.details.map((q,w)=>(
                                <div className="details"
                                key={w}>{[q]}</div>
                              ))
                            }
                          </div>
                          </>
                        )
                      })
                    }

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

export default SearchList
