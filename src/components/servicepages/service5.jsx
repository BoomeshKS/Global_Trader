import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import t7 from '../../assets/Past-Events/pe19.jpeg';
import t8 from '../../assets/Past-Events/pe20.jpeg';
import t9 from '../../assets/Past-Events/pe21.jpeg';
import t10 from '../../assets/Past-Events/pe22.jpeg';
import t11 from '../../assets/Past-Events/pe23.jpeg';
import t12 from '../../assets/Past-Events/pe24.jpeg';
import t1 from '../../assets/Service-5/1.jpeg';
import t2 from '../../assets/Service-5/2.webp';
import t3 from '../../assets/Service-5/3.jpeg';
import t4 from '../../assets/Service-5/4.jpeg';
import t5 from '../../assets/Service-5/5.jpeg';
import t6 from '../../assets/Service-5/6.jpeg';
import './service1.css'
import { useNavigate } from 'react-router-dom';

function Services() {
    let navigate = useNavigate()
    const [showDetails, setShowDetails] = useState([true, true, true, true, true]);


    return (
        <div>
        <div className="home-hero mb-3 s5">
            <div style={{backgroundColor:'rgb(0,0,0,0.4)', height:'100%'}}>
                <h1 className="home-hero-heading heading1 text-center" style={{paddingTop:'150px'}}>Road Show</h1>
            </div>
        </div>
        <div className="services">

            <br />
            <h2 className="fs-1 text-primary">Road Show</h2>
            <br />
           
            <br />
            <div className="about-us-container">
                <div className='row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3' style={{ fontSize: '14px' }}>
                    <div className="bg-light col bg-image hover-overlay hover-zoom shadow-1-strong border border-1 p-3">
                        <img src={t1} alt="Service 1 Icon" className="img-fluid rounded-3 mx-auto d-block" style={{ height: '250px', width: '450px' }} />
                        <a href="#!">
                            <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
                        </a>
                        <div className="service-info text-center">
                            <h3>Road Show Coordinators</h3>
                            <p className='justify'>
                                Providing experienced personnel to oversee the logistics and coordination of the entire road show, ensuring seamless execution from start to finish.
                            </p>
                        </div>
                    </div>
                    <div className="bg-light col bg-image hover-overlay hover-zoom shadow-1-strong border border-1 p-3">
                        <img src={t2} alt="Service 2 Icon" className="img-fluid rounded-3 mx-auto d-block" style={{ height: '250px', width: '450px' }} />
                        <a href="#!">
                            <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
                        </a>
                        <div className="service-info text-center">
                            <h3>Promotional Staff</h3>
                            <p className='justify'>
                                Offering enthusiastic individuals to engage with the public, distribute promotional materials, and generate interest in the road show.
                            </p>
                        </div>
                    </div>
                    <div className="bg-light col bg-image hover-overlay hover-zoom shadow-1-strong border border-1 p-3">
                        <img src={t3} alt="Service 3 Icon" className="img-fluid rounded-3 mx-auto d-block" style={{ height: '250px', width: '450px' }} />
                        <a href="#!">
                            <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
                        </a>
                        <div className="service-info text-center">
                            <h3>Drivers and Vehicle Operators</h3>
                            <p className='justify'>
                                Supplying skilled drivers and operators to handle transportation logistics, ensuring the safe and efficient movement of equipment and personnel between locations.
                            </p>
                        </div>
                    </div>
                    <div className="bg-light col bg-image hover-overlay hover-zoom shadow-1-strong border border-1 p-3">
                        <img src={t4} alt="Service 4 Icon" className="img-fluid rounded-3 mx-auto d-block" style={{ height: '250px', width: '450px' }} />
                        <a href="#!">
                            <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
                        </a>
                        <div className="service-info text-center">
                            <h3>Brand Ambassadors</h3>
                            <p className='justify'>
                                Deploying knowledgeable brand representatives to interact with attendees, showcase products or services, and create memorable experiences that resonate with the target audience.
                            </p>
                        </div>
                    </div>
                    <div className="bg-light col bg-image hover-overlay hover-zoom shadow-1-strong border border-1 p-3">
                        <img src={t5} alt="Service 5 Icon" className="img-fluid rounded-3 mx-auto d-block" style={{ height: '250px', width: '450px' }} />
                        <a href="#!">
                            <div className="mask" style={{ backgroundColor: 'rgba(43, 43, 255)' }}></div>
                        </a>
                        <div className="service-info text-center">
                            <h3>Multilingual Staff</h3>
                            <p className='justify'>
                                Offering personnel fluent in multiple languages to cater to diverse audiences encountered during the road show, facilitating effective communication and engagement.
                            </p>
                        </div>
                    </div>
                    <div className="bg-light col bg-image hover-overlay hover-zoom shadow-1-strong border border-1 p-3">
                        <img src={t6} alt="Service 6 Icon" className="img-fluid rounded-3 mx-auto d-block" style={{ height: '250px', width: '450px' }} />
                        <a href="#!">
                            <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
                        </a>
                        <div className="service-info text-center ">
                            <h3>On-site Management</h3>
                            <p className='justify '>
                                Furnishing experienced managers to oversee the day-to-day operations of the road show, handling logistics, resolving any issues that arise, and ensuring the overall success of the event at each location.
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
