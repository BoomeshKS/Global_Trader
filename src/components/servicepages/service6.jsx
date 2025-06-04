import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import t1 from '../../assets/Service-6/1.webp';
import t2 from '../../assets/Service-1/2.jpeg';
import t3 from '../../assets/Service-1/3.jpeg';
import t4 from '../../assets/Service-1/4.webp';
import t5 from '../../assets/Service-1/5.jpeg';
import t6 from '../../assets/Service-1/6.jpeg';
import t7 from '../../assets/Past-Events/pe1.jpeg';
import t8 from '../../assets/Past-Events/pe2.jpeg';
import t9 from '../../assets/Past-Events/pe3.jpeg';
import t10 from '../../assets/Past-Events/pe4.jpeg';
import t11 from '../../assets/Past-Events/pe5.jpeg';
import t12 from '../../assets/Past-Events/pe6.jpeg';

import './service1.css'
import { useNavigate } from 'react-router-dom';

function Services() {
    let navigate = useNavigate()
    const [showDetails, setShowDetails] = useState([true, true, true, true, true]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
    };
    return (
        <div>
        <div className="home-hero mb-3 s6">
            <div style={{backgroundColor:'rgb(0,0,0,0.4)', height:'100%'}}>
                <h1 className="home-hero-heading heading1 text-center" style={{paddingTop:'150px'}}>Product Launch</h1>
            </div>
        </div>
        <div className="services">

            <br />
            <h2 className="fs-1 text-primary">Product Launch</h2>
            <br />
            <br />
            <div className="about-us-container">
                <div className='row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3'>
                    <div className="bg-light col bg-image hover-overlay hover-zoom shadow-1-strong border border-1 p-3">
                        <img src={t1} alt="Service 1 Icon" className="img-fluid rounded-3 mx-auto d-block" style={{ height: '250px', width: '450px' }} />
                        <a href="#!">
                            <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
                        </a>
                        <div className="service-info text-center">
                            <h3>Social Media Teasers</h3>
                            <p className='justify'>
                                Generate excitement and anticipation by posting sneak peeks and teasers about the upcoming product launch across social media platforms.
                            </p>
                        </div>
                    </div>
                    <div className="bg-light col bg-image hover-overlay hover-zoom shadow-1-strong border border-1 p-3">
                        <img src={t2} alt="Service 2 Icon" className="img-fluid rounded-3 mx-auto d-block" style={{ height: '250px', width: '450px' }} />
                        <a href="#!">
                            <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
                        </a>
                        <div className="service-info text-center">
                            <h3>Email Countdown Campaigns</h3>
                            <p className='justify'>
                                Build anticipation and drive engagement by sending a series of countdown emails leading up to the product launch, revealing exclusive details and offers.
                            </p>
                        </div>
                    </div>
                    <div className="bg-light col bg-image hover-overlay hover-zoom shadow-1-strong border border-1 p-3">
                        <img src={t3} alt="Service 3 Icon" className="img-fluid rounded-3 mx-auto d-block" style={{ height: '250px', width: '450px' }} />
                        <a href="#!">
                            <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
                        </a>
                        <div className="service-info text-center">
                            <h3>Influencer Product Reviews</h3>
                            <p className='justify'>
                                Amplify your product's reach and credibility by partnering with influencers to review and endorse the new product to their followers.
                            </p>
                        </div>
                    </div>
                    <div className="bg-light col bg-image hover-overlay hover-zoom shadow-1-strong border border-1 p-3">
                        <img src={t5} alt="Service 5 Icon" className="img-fluid rounded-3 mx-auto d-block" style={{ height: '250px', width: '450px' }} />
                        <a href="#!">
                            <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
                        </a>
                        <div className="service-info text-center">
                            <h3>Pre-launch Giveaways</h3>
                            <p className='justify'>
                                Generate buzz and grow your audience by hosting pre-launch giveaways or contests, offering participants a chance to win the new product.
                            </p>
                        </div>
                    </div>
                    <div className="bg-light col bg-image hover-overlay hover-zoom shadow-1-strong border border-1 p-3">
                        <img src={t6} alt="Service 6 Icon" className="img-fluid rounded-3 mx-auto d-block" style={{ height: '250px', width: '450px' }} />
                        <a href="#!">
                            <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
                        </a>
                        <div className="service-info text-center">
                            <h3>Press Releases and Media Coverage</h3>
                            <p className='justify'>
                                Generate publicity and awareness by distributing press releases and securing media coverage in relevant publications and outlets.
                            </p>
                        </div>
                    </div>
                    <div className="bg-light col bg-image hover-overlay hover-zoom shadow-1-strong border border-1 p-3">
                        <img src={t4} alt="Service 4 Icon" className="img-fluid rounded-3 mx-auto d-block" style={{ height: '250px', width: '450px' }} />
                        <a href="#!">
                            <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
                        </a>
                        <div className="service-info text-center">
                            <h3>Launch Event or Webinar</h3>
                            <p className='justify'>
                                Create excitement and engagement by hosting a virtual or in-person launch event or webinar to showcase the new product and interact with your audience.
                            </p>
                        </div>
                    </div>
                </div>
                <br></br>
                <button className='primary-button mx-auto d-block' onClick={() => navigate('/Global_Trader/contact')}>Get This Service</button>
            </div>
        </div>
        </div>

    );
}

export default Services;
