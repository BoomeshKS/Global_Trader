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
import t1 from '../../assets/Service-4/1.jpeg';
import t2 from '../../assets/Service-4/2.jpeg';
import t3 from '../../assets/Service-4/3.png';
import t4 from '../../assets/Service-4/4.png';
import t5 from '../../assets/Service-4/5.jpeg';
import t6 from '../../assets/Service-4/6.png';
import './service1.css'
import { useNavigate } from 'react-router-dom';

function Services() {
    let navigate = useNavigate()
    const [showDetails, setShowDetails] = useState([true, true, true, true, true]);


    return (
        <div>
            <div className="home-hero mb-3 s4">
                <div style={{ backgroundColor: 'rgb(0,0,0,0.4)', height: '100%' }}>
                    <h1 className="home-hero-heading heading1 text-center" style={{ paddingTop: '150px' }}>Corporate activity</h1>
                </div>
            </div>
            <div className="services">


                <br />
                <h2 className='fs-1 text-primary'>Corporate activity</h2>
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
                                <h3>Event Planners</h3>
                                <p className='justify'>
                                    Providing skilled professionals to conceptualize, plan, and execute corporate activities tailored to the specific goals and objectives of the organization.
                                </p>
                            </div>
                        </div>
                        <div className="bg-light col bg-image hover-overlay hover-zoom shadow-1-strong border border-1 p-3">
                            <img src={t2} alt="Service 2 Icon" className="img-fluid rounded-3 mx-auto d-block" style={{ height: '250px', width: '450px' }} />
                            <a href="#!">
                                <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
                            </a>
                            <div className="service-info text-center">
                                <h3>Facilitators and Trainers</h3>
                                <p className='justify'>
                                    Offering experienced facilitators and trainers to lead workshops, seminars, team-building exercises, and other interactive activities designed to enhance employee skills and foster a positive corporate culture.
                                </p>
                            </div>
                        </div>
                        <div className="bg-light col bg-image hover-overlay hover-zoom shadow-1-strong border border-1 p-3">
                            <img src={t3} alt="Service 3 Icon" className="img-fluid rounded-3 mx-auto d-block" style={{ height: '250px', width: '450px' }} />
                            <a href="#!">
                                <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
                            </a>
                            <div className="service-info text-center">
                                <h3>Administrative Support</h3>
                                <p className='justify'>
                                    Supplying administrative personnel to handle registration, attendee management, scheduling, and other logistical tasks necessary for the smooth operation of corporate activities.
                                </p>
                            </div>
                        </div>
                        <div className="bg-light col bg-image hover-overlay hover-zoom shadow-1-strong border border-1 p-3">
                            <img src={t4} alt="Service 4 Icon" className="img-fluid rounded-3 mx-auto d-block" style={{ height: '250px', width: '450px' }} />
                            <a href="#!">
                                <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
                            </a>
                            <div className="service-info text-center">
                                <h3>Technical Support</h3>
                                <p className='justify'>
                                    Deploying technicians and IT specialists to set up and manage audio-visual equipment, presentation tools, and other technical aspects of corporate activities, ensuring seamless execution without technical glitches.
                                </p>
                            </div>
                        </div>
                        <div className="bg-light col bg-image hover-overlay hover-zoom shadow-1-strong border border-1 p-3">
                            <img src={t5} alt="Service 5 Icon" className="img-fluid rounded-3 mx-auto d-block" style={{ height: '250px', width: '450px' }} />
                            <a href="#!">
                                <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
                            </a>
                            <div className="service-info text-center">
                                <h3>Multilingual Staff</h3>
                                <p className='justify'>
                                    Offering personnel fluent in multiple languages to accommodate the diverse linguistic needs of employees and guests attending corporate activities, facilitating clear communication and engagement.
                                </p>
                            </div>
                        </div>
                        <div className="bg-light col bg-image hover-overlay hover-zoom shadow-1-strong border border-1 p-3">
                            <img src={t6} alt="Service 6 Icon" className="img-fluid rounded-3 mx-auto d-block" style={{ height: '250px', width: '450px' }} />
                            <a href="#!">
                                <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
                            </a>
                            <div className="service-info text-center">
                                <h3>On-site Management</h3>
                                <p className='justify'>
                                    Supplying experienced managers to oversee all aspects of corporate activities, including logistics, scheduling, and participant satisfaction, ensuring that objectives are met and any issues are promptly addressed.
                                </p>
                            </div>
                        </div>
                    </div>

                    <br />
                    <button className='primary-button mx-auto d-block' onClick={() => navigate('/Global_Trader/contact')}>Get This Service</button>
                    <br />
                </div>
            </div>
        </div>
    );
}

export default Services;
