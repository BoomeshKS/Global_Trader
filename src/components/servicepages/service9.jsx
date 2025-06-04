import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import t1 from '../../assets/Service-9/1.png';
import t2 from '../../assets/Service-9/2.png';
import t3 from '../../assets/Service-9/3.png';
import t4 from '../../assets/Service-9/4.png';
import t5 from '../../assets/Service-9/5.png';
import t6 from '../../assets/Service-9/6.png';
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
             <div className="home-hero mb-3 s9">
                <div style={{backgroundColor:'rgb(0,0,0,0.4)', height:'100%'}}>
                    <h1 className="home-hero-heading heading1 text-center" style={{paddingTop:'150px'}}>Cantervan indoor / outdoor</h1>
                </div>
            </div>
        <div className="services">


            <br />
            <h2 className="fs-1 text-primary">Cantervan indoor / outdoor</h2>
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
                            <h3>Mobile Catering</h3>
                            <p className='justify'>
                                Offering catering services from the cantervan, providing a variety of food and beverage options for event attendees.
                            </p>
                        </div>
                    </div>
                    <div className="bg-light col bg-image hover-overlay hover-zoom shadow-1-strong border border-1 p-3">
                        <img src={t2} alt="Service 2 Icon" className="img-fluid rounded-3 mx-auto d-block" style={{ height: '250px', width: '450px' }} />
                        <a href="#!">
                            <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
                        </a>
                        <div className="service-info text-center">
                            <h3>Ticketing and Merchandise Sales</h3>
                            <p className='justify'>
                                Converting the cantervan into a mobile ticketing and merchandise store, allowing attendees to purchase tickets and event-related items on-site.
                            </p>
                        </div>
                    </div>
                    <div className="bg-light col bg-image hover-overlay hover-zoom shadow-1-strong border border-1 p-3">
                        <img src={t3} alt="Service 3 Icon" className="img-fluid rounded-3 mx-auto d-block" style={{ height: '250px', width: '450px' }} />
                        <a href="#!">
                            <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
                        </a>
                        <div className="service-info text-center">
                            <h3>Information Hub</h3>
                            <p className='justify'>
                                Setting up the cantervan as an information center, providing event maps, schedules, and assistance to attendees.
                            </p>
                        </div>
                    </div>
                    <div className="bg-light col bg-image hover-overlay hover-zoom shadow-1-strong border border-1 p-3">
                        <img src={t4} alt="Service 4 Icon" className="img-fluid rounded-3 mx-auto d-block" style={{ height: '250px', width: '450px' }} />
                        <a href="#!">
                            <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
                        </a>
                        <div className="service-info text-center">
                            <h3>Interactive Experiences</h3>
                            <p className='justify'>
                                Creating interactive installations within the cantervan, such as photo booths or gaming stations, to enhance attendee engagement.
                            </p>
                        </div>
                    </div>
                    <div className="bg-light col bg-image hover-overlay hover-zoom shadow-1-strong border border-1 p-3">
                        <img src={t5} alt="Service 5 Icon" className="img-fluid rounded-3 mx-auto d-block" style={{ height: '250px', width: '450px' }} />
                        <a href="#!">
                            <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
                        </a>
                        <div className="service-info text-center">
                            <h3>Brand Activation</h3>
                            <p className='justify'>
                                Utilizing the cantervan as a platform for brand activation and promotional activities, allowing brands to interact with event attendees directly.
                            </p>
                        </div>
                    </div>
                    <div className="bg-light col bg-image hover-overlay hover-zoom shadow-1-strong border border-1 p-3">
                        <img src={t6} alt="Service 6 Icon" className="img-fluid rounded-3 mx-auto d-block" style={{ height: '250px', width: '450px' }} />
                        <a href="#!">
                            <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
                        </a>
                        <div className="service-info text-center">
                            <h3>Mobile Restrooms</h3>
                            <p className='justify'>
                                Providing mobile restroom facilities from the cantervan to ensure attendee comfort and convenience during outdoor events.
                            </p>
                        </div>
                    </div>
                </div>
                <br/>
                <button className='primary-button mx-auto d-block' onClick={() => navigate('/Global_Trader/contact')}>Get This Service</button>
                <br />
            </div>
            </div>
        </div>
    );
}

export default Services;
