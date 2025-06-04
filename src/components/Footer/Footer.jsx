import React, { useState } from 'react';
import logo from "../../assets/logo.png";
import "./Footer.css";
import { Link, useNavigate, useLocation } from 'react-router-dom';

function Footer() {
    let path = useLocation().pathname.split('/')
    let navigate = useNavigate()
    let [width, setWidth] = useState(false)
    setTimeout(() => {
        const handleScroll = () => {
            if (window.innerWidth < 800) {
                setWidth(true)
            }
            else {
                setWidth(false)
            }
        }
        window.addEventListener('scroll', handleScroll);
        handleScroll();
    }, 100);
    return (
        <div>
            {(path.length == 2 ? true : path[2] == '' ? false : true) && <div>
                {!width && <div className='py-4 px-2 row my-3' style={{ backgroundColor: 'rgb(0, 0, 117)' }}>
                    <h3 className='col-9 text-white text-center'>Want to transform your event into a bliss? Connect to our experts now.</h3>
                    <div className='col-3 justify-content-end d-flex'>
                        <button className='btn d-block mx-auto px-5' style={{ backgroundColor: 'rgb(0, 0, 117)', color: 'yellow', border: '2.5px solid yellow', fontSize: '20px' }} onClick={() => navigate('contact')}>Contact Us</button>
                    </div>
                </div>}
                {width && <div className='py-4 px-2 row my-3' style={{ backgroundColor: 'rgb(0, 0, 117)' }}>
                    <h3 className='text-white text-center' style={{ fontSize: '20px', marginBottom: '10px' }}>Want to transform your event into a bliss? Connect to our experts now.</h3>
                    <div className='justify-content-end d-flex'>
                        <button className='btn d-block mx-auto' style={{ backgroundColor: 'rgb(0, 0, 117)', color: 'yellow', border: '2.5px solid yellow', fontSize: '15px' }} onClick={() => navigate('contact')}>Contact Us</button>
                    </div>
                </div>}
            </div>}
            <footer className='mt-3' id="footer">
                <div className="container">
                    <div className="row text-white">
                        <div className="col-lg-3">
                            <h2>Services</h2>
                            <div className="separator"></div>
                            <Link to='/Global_Trader/service5'>
                                <p className='text-white'>
                                    Road Show
                                </p>
                            </Link>
                            <Link to='/Global_Trader/service6'>
                                <p className='text-white'>
                                    Product Launch
                                </p>
                            </Link>
                            <Link to='/Global_Trader/service2'>
                                <p className='text-white'>
                                    Brand Promotion
                                </p>
                            </Link>
                            <Link to='/Global_Trader/service4'>
                                <p className='text-white'>
                                    Corporate Activity
                                </p>
                            </Link>
                            <Link to='/Global_Trader/service1'>
                                <p className='text-white'>
                                    Events Organisation
                                </p>
                            </Link>
                            <Link to='/Global_Trader/service8'>
                                <p className='text-white'>
                                    Marketing and Publicity
                                </p>
                            </Link>
                            <Link to='/Global_Trader/service3'>
                                <p className='text-white'>
                                    Installation and Activation
                                </p>
                            </Link>
                            <Link to='/Global_Trader/service9'>
                                <p className='text-white'>
                                    Cantervan Indoor / Outdoor
                                </p>
                            </Link>
                            <Link to='/Global_Trader/service7'>
                                <p className='text-white'>
                                    Manpower and Artist Coordination
                                </p>
                            </Link>
                        </div>
                        <div className="col-lg-3">
                            <h2>Company</h2>
                            <div className="separator"></div>
                            <Link to='/Global_Trader/aboutus'><p className='text-white'>About Us</p></Link>
                            <p>Our Team</p>

                        </div>
                        <div className="col-lg-3 text-white">
                            <h2>Resources</h2>
                            <div className="separator"></div>
                            <Link to='/Global_Trader/gallery'>
                                <p className='text-white'>
                                    Blog
                                </p>
                            </Link>
                            <Link to='/Global_Trader/gallery'>
                                <p className='text-white'>
                                    Gallery
                                </p>
                            </Link>

                        </div>
                        <div className="col-lg-3 text-white">
                            <h2>Contact Us</h2>
                            <div className="separator"></div>
                            <div className="social-media">
                            </div>
                            <h6><img src={logo} alt="EnviGo Logo" style={{ width: '150px', height: '150px' }} /></h6>

                            <p>
                                19, Abhirami Nagar 5th St, CDN Nagar, Cmda Colony, Chennai, Tamil Nadu 600095
                                <br/>
                                Ph.No: +918939169177
                                <br/>
                                Gmail: globaltrader19@gmail.com
                            </p>
                        </div>
                    </div>

                    <div className="footer-copyright">
                        <div className="row">
                            <div className="col-sm-24 col-md-24 col-lg-24 footer-copyright">
                                <p className='text-white'>&copy; 2024 Global Traders Pvt. Ltd. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
