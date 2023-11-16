import React from 'react'
import { AiOutlineGlobal } from 'react-icons/ai'
import logo from '../../img/logo/LOGO-removebg-preview.png'
import './Footer.css'


const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="footer_top">
                        <p>back to top</p>
                    </div>
                    <div className="footer_middle">
                        <div className="list_one">
                            <div className="container">
                                <div className="box">
                                    <h4>get to know us</h4>
                                    <ul>
                                        <li>about us</li>
                                        <li>carrers</li>
                                        <li>press releases</li>
                                        <li>amoazon science</li>
                                    </ul>
                                </div>
                                <div className="box">
                                    <h4>connect with us</h4>
                                    <ul>
                                        <li>facebook</li>
                                        <li>twitter</li>
                                        <li>instagram</li>
                                    </ul>
                                </div>
                                <div className="box">
                                    <h4>make money with us</h4>
                                    <ul>
                                        <li>sell o namazon</li>
                                        <li>sell under amozon accelerator</li>
                                        <li>protect and build your brand</li>
                                        <li>amazon global selling</li>
                                        <li>become an affiliate</li>
                                        <li>fulfilment</li>
                                        <li>advertise your products</li>
                                        <li>amazon pay on merchants</li>
                                    </ul>
                                </div>
                                <div className="box">
                                    <h4>let us help you</h4>
                                    <ul>
                                        <li>covid-19 and amazon</li>
                                        <li>your account</li>
                                        <li>returns cntre </li>
                                        <li>100% purchase protection</li>
                                        <li>amazon app download</li>
                                        <li>help</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="list_two">
                            <div className="logo">
                                <div className="img">
                                    <img src={logo} alt="" />
                                </div>
                                <div className="language">
                                    <span><AiOutlineGlobal /></span>
                                    <span>
                                        <select name="" id="">
                                            <option value="">english</option>
                                            <option value="">kannada</option>
                                        </select>
                                    </span>
                                </div>
                            </div>
                            <div className="country">
                                <li>australia</li>
                                <li>brazil</li>
                                <li>canada</li>
                                <li>china</li>
                                <li>france</li>
                                <li>germany</li>
                                <li>italy</li>
                                <li>japan</li>
                                <li>mexico</li>
                                <li>netherlands</li>
                                <li>poland</li>
                                <li>singapore</li>
                                <li>spain</li>
                                <li>turkey</li>
                                <li>united arab emirates</li>
                                <li>united kingdom</li>
                                <li>united states</li>
                            </div>
                        </div>
                    </div>
                    <div className="footer_bottom">
                        <div className="container">
                            <div className="top">
                                <div className="box">
                                    <h5>abebooks</h5>
                                    <span>books, art & collectebles</span>
                                </div>
                                <div className="box">
                                    <h5>amazon web services</h5>
                                    <span>scalable cloud computing services</span>
                                </div>
                                <div className="box">
                                    <h5>audible</h5>
                                    <span>download audio books</span>
                                </div>
                                <div className="box">
                                    <h5>dpreview</h5>
                                    <span>digital photography</span>
                                </div>
                                <div className="box">
                                    <h5>IMDb</h5>
                                    <span>movies TV & celebrities</span>
                                </div>
                                <div className="box">
                                    <h5>shopbop</h5>
                                    <span>designer fashion brands</span>
                                </div>
                                <div className="box">
                                    <h5>amazon business</h5>
                                    <span>everything for your business</span>
                                </div>
                                <div className="box">
                                    <h5>prime now</h5>
                                    <span>2-hours delivery on everyday items</span>
                                </div>
                                <div className="box">
                                    <h5>amazon prime music</h5>
                                    <span>100 millon songs, ad-free over 15 millon podcast episodes</span>
                                </div>
                            </div>
                            <div className="bottom">
                                <div className="first_line">
                                    <span>conditions of use & sale</span>
                                    <span>privacy natice</span>
                                    <span>interest-based ads</span>
                                </div>
                                <div className="last_line">
                                    <span>@ 1996-2023, amazon.com, inc. or its affiliates</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
