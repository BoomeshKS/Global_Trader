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
import t1 from '../../assets/Service-7/1.jpeg';
import t2 from '../../assets/Service-7/2.jpeg';
import t3 from '../../assets/Service-7/3.jpg';
import t4 from '../../assets/Service-7/4.jpeg';
import t5 from '../../assets/Service-7/5.png';
import t6 from '../../assets/Service-7/6.jpg';
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
            <div className="home-hero mb-3 s7">
                <div style={{backgroundColor:'rgb(0,0,0,0.4)', height:'100%'}}>
                    <h1 className="home-hero-heading heading1 text-center" style={{paddingTop:'150px'}}>Manpower and Artist Coordination</h1>
                </div>
            </div>
        <div className="services">


            <br />
            <h2 className="fs-1 text-primary">Manpower and Artist Coordination</h2>
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
                            <h3>Talent Database Management</h3>
                            <p className='justify'>
                                Streamline your talent search and management process by maintaining a comprehensive database of skilled professionals and artists tailored to your clients' needs.
                            </p>
                        </div>
                    </div>
                    <div className="bg-light col bg-image hover-overlay hover-zoom shadow-1-strong border border-1 p-3">
                        <img src={t2} alt="Service 2 Icon" className="img-fluid rounded-3 mx-auto d-block" style={{ height: '250px', width: '450px' }} />
                        <a href="#!">
                            <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
                        </a>
                        <div className="service-info text-center">
                            <h3>Custom Casting Solutions</h3>
                            <p className='justify'>
                                Provide personalized casting services to match clients with the perfect talent or artists for their projects, ensuring a seamless and successful collaboration.
                            </p>
                        </div>
                    </div>
                    <div className="bg-light col bg-image hover-overlay hover-zoom shadow-1-strong border border-1 p-3">
                        <img src={t3} alt="Service 3 Icon" className="img-fluid rounded-3 mx-auto d-block" style={{ height: '250px', width: '450px' }} />
                        <a href="#!">
                            <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
                        </a>
                        <div className="service-info text-center">
                            <h3>Event Staffing Solutions</h3>
                            <p className='justify'>
                                Offer event staffing solutions by providing experienced and reliable manpower for various roles such as event coordinators, ushers, security personnel, and more.
                            </p>
                        </div>
                    </div>
                    <div className="bg-light col bg-image hover-overlay hover-zoom shadow-1-strong border border-1 p-3">
                        <img src={t4} alt="Service 4 Icon" className="img-fluid rounded-3 mx-auto d-block" style={{ height: '250px', width: '450px' }} />
                        <a href="#!">
                            <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
                        </a>
                        <div className="service-info text-center">
                            <h3>Artist Representation Services</h3>
                            <p className='justify'>
                                Act as a liaison between artists and clients, offering representation services to negotiate contracts, manage bookings, and ensure smooth communication and coordination.
                            </p>
                        </div>
                    </div>
                    <div className="bg-light col bg-image hover-overlay hover-zoom shadow-1-strong border border-1 p-3">
                        <img src={t5} alt="Service 5 Icon" className="img-fluid rounded-3 mx-auto d-block" style={{ height: '250px', width: '450px' }} />
                        <a href="#!">
                            <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
                        </a>
                        <div className="service-info text-center">
                            <h3>Training and Development Programs</h3>
                            <p className='justify'>
                                Enhance the skills and professionalism of your talent pool by offering training and development programs focused on areas such as communication, customer service, and industry-specific skills.
                            </p>
                        </div>
                    </div>
                    <div className="bg-light col bg-image hover-overlay hover-zoom shadow-1-strong border border-1 p-3">
                        <img src={t6} alt="Service 6 Icon" className="img-fluid rounded-3 mx-auto d-block" style={{ height: '250px', width: '450px' }} />
                        <a href="#!">
                            <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
                        </a>
                        <div className="service-info text-center">
                            <h3>Feedback and Performance Evaluation</h3>
                            <p className='justify'>
                                Gather feedback from clients and artists to continuously improve your services and ensure high-quality coordination and satisfaction for all parties involved.
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
