import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import t1 from '../../assets/Services/promotion-events.png'
import t2 from '../../assets/Services/shop-opening-branding.png';
import t3 from '../../assets/Services/cantervan-indoor-outdoor.png';
import t4 from '../../assets/Services/manpower.png';
import t5 from '../../assets/Services/installation-activation.png';
import t7 from '../../assets/Past-Events/pe31.jpeg';
import t8 from '../../assets/Past-Events/pe32.jpeg';
import t9 from '../../assets/Past-Events//pe33.jpeg';
import t10 from '../../assets/Past-Events/pe34.jpeg';
import t11 from '../../assets/Past-Events/pe35.jpeg';
import t12 from '../../assets/Past-Events/pe36.jpeg';
import t13 from '../../assets/Past-Events/pe37.jpeg';
import t14 from '../../assets/Past-Events/pe38.jpeg';
import t15 from '../../assets/Past-Events/pe39.jpeg';
import FeatureCard from './FeatureCard'
import './AboutUs.css'
import { useNavigate } from 'react-router-dom';
import img1 from '../../assets/Home/pre-planning.jpg'
import img2 from '../../assets/Home/logistics-management.jpg'
import img3 from '../../assets/Home/coordination.jpeg'
import img4 from '../../assets/Home/event-planning.jpeg'
import img5 from '../../assets/Home/venue-selection.jpg'
import img6 from '../../assets/Home/site-management.jpeg'

const Home = (props) => {
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

    let [width, setWidth] = useState(false)
    let animRef = useRef(null)
    let eleRef = useRef(null)
    let eleRef1 = useRef(null);
    let eleRef2 = useRef(null);
    let eleRef3 = useRef(null);
    let eleRef4 = useRef(null);
    let eleRef5 = useRef(null);
    let [isVis1, setVis1] = useState()
    let [isVis2, setVis2] = useState()
    let [isVis3, setVis3] = useState()
    let [isVis4, setVis4] = useState()
    let [isVis5, setVis5] = useState()

    setTimeout(() => {
        const handleScroll = () => {
            if (window.innerWidth < 800) {
                setWidth(true)
            }
            else {
                setWidth(false)
            }
            const animObserver = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        observer1.unobserve(entry.target);
                    }
                },
                { threshold: 0.3 } // Intersection threshold
            )
            const observer1 = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setVis1(true);
                        observer1.unobserve(entry.target);
                    }
                },
                { threshold: 0.3 } // Intersection threshold
            );
            const observer2 = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setVis2(true);
                        observer2.unobserve(entry.target);
                    }
                },
                { threshold: 0.3 } // Intersection threshold
            );
            const observer3 = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setVis3(true);
                        observer3.unobserve(entry.target);
                    }
                },
                { threshold: 0.3 } // Intersection threshold
            );
            if (animRef.current) {
                animObserver.observe(animRef.current)
            }
            if (eleRef1.current) {
                observer1.observe(eleRef1.current)
            }
            if (eleRef2.current) {
                observer2.observe(eleRef2.current)
            }
            if (eleRef3.current) {
                observer3.observe(eleRef3.current)
            }
        }
        window.addEventListener('scroll', handleScroll);
        handleScroll();
    }, 100);

    return (
        <div className="home-container" style={{overflowX:'hidden'}}>
            <div className="home-hero">
                <div className="home-container01 heroContainer">
                    <h1 className="home-hero-heading heading1 text-center m-0">About Us</h1>
                    <span className="home-hero-sub-heading bodyLarge">
                        <h4 className='text-center'>Your Trusted Event Management Partner </h4>
                    </span>
                    <div className="home-btn-group">
                        <button className="buttonFilled" onClick={() => navigate('/Global_Trader/')} >Learn More</button>
                    </div>
                </div>
            </div>
            <div className="bannerContainer home-banner1 mt-4">
                <h1 className="home-banner-heading heading2 justify text-center text-primary">
                    Welcome to Global Trader
                </h1>
                <span className="home-banner-sub-heading bodySmall">
                    <p className='text-center mx-auto' style={{width:'85vw'}}>
                        At our event management company, we specialize in creating
                        unforgettable experiences for all types of events. From
                        corporate gatherings to weddings and everything in between, we
                        are dedicated to bringing your vision to life. With our team
                        of experienced professionals, we handle every detail with
                        precision and care to ensure a seamless and successful event.
                        Discover how we can make your next event truly special.
                    </p>
                </span>
                <div className='home-btn-group'>
                    <button className="buttonFilled" onClick={() => navigate('/Global_Trader/')}>Discover More</button>
                </div>
            </div>
            <div className="m-3">
                <h3 className='text-center fs-1 text-primary'>3 Steps To Design An Event</h3>
                <br />
                <div className='row row-cols-1 row-cols-md-3'>
                    <div className="rounded-5" style={{ marginBottom: '10px' }} >
                        <div className="home-card text-center">
                            <img className='rounded-circle' src={img1} style={{ width: '150px' }} />
                            <h3 className='text-primary' style={{ marginBottom: '15px' }}>Pre-Event Planning</h3>
                            <p className='text-center p-3' style={{fontSize:'15px'}}>
                                We strategize meticulously to set objectives, secure resources, and promote the event effectively.
                            </p>
                        </div>
                    </div>
                    <div className="rounded-5" style={{ marginBottom: '10px' }}>
                        <div className="home-card text-center">
                            <img className='rounded-circle' src={img2} style={{ width: '150px' }} />
                            <h3 className='text-primary' style={{ marginBottom: '15px' }}>Logistics Management</h3>
                            <p className='text-center p-3' style={{fontSize:'15px'}}>
                                We coordinate seamlessly to ensure smooth operations, from equipment setup to attendee logistics.
                            </p>
                        </div>
                    </div>
                    <div className="rounded-5" style={{ marginBottom: '10px' }}>
                        <div className="home-card text-center">
                            <img className='rounded-circle' src={img3} style={{ width: '150px' }} />
                            <h3 className='text-primary' style={{ marginBottom: '15px' }}>Coordination</h3>
                            <p className='text-center' style={{fontSize:'15px',padding:'6px'}}>
                                We execute flawlessly, overseeing all aspects of the event to guarantee a memorable and successful experience for attendees.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cards-div" style={{ margin: '30px' }}>
                <div ref={eleRef1} className={`card-single card11 ${isVis1 ? 'card12' : ''} row row-cols-1 row-cols-sm-1 row-cols-lg-2 justify-content-center`}>
                    <div className='m-3 col' style={{ width: `${width ? '85vw' : '40vw'}`, borderRadius: '10px', margin: `${width ? '10px !important' : '0'}` }}>
                        <img className='d-block mx-auto' src={img4} style={{ width: '70%', borderRadius: '10px' }} />
                    </div>
                    <div className='col text-white rounded-3 m-3 p-3' style={{ width: `${width ? '90vw' : '40vw'}`, fontSize: '20px', backgroundColor: 'rgb(0,0,0,0.5)' }}>
                        <h3 className='text-center'>Event Planning</h3>
                        <p>We specialize in planning and coordinating events of all sizes. From corporate gatherings to intimate celebrations, we handle every detail to ensure a memorable experience for you and your guests.</p>
                    </div>
                </div>
                <div ref={eleRef2} className={`card-single card21 ${isVis2 ? 'card22' : ''} row row-cols-1 row-cols-sm-1 row-cols-md-2 justify-content-center`}>
                    {width && <div className='m-3 col' style={{ width: `${width ? '85vw' : '40vw'}`, borderRadius: '10px', margin: `${width ? '10px !important' : '0'}` }}>
                        <img className='d-block mx-auto' src={img5} style={{ width: '70%', borderRadius: '10px' }} />
                    </div>}
                    <div className='col text-white rounded-3 m-3 p-3' style={{ width: `${width ? '90vw' : '40vw'}`, fontSize: '20px', backgroundColor: 'rgb(0,0,0,0.5)' }}>
                        <h3 className='text-center'>Venue Selection</h3>
                        <p>Finding the perfect venue can make or break an event. Let us help you discover the ideal setting that suits your needs and captures the essence of your occasion, whether it's a rustic barn, elegant ballroom, or picturesque outdoor space.</p>
                    </div>
                    {!width && <div className='m-3 col' style={{ width: `${width ? '85vw' : '40vw'}`, borderRadius: '10px', margin: `${width ? '10px !important' : '0'}` }}>
                        <img className='d-block mx-auto' src={img5} style={{ width: '70%', borderRadius: '10px' }} />
                    </div>}
                </div>
                <div ref={eleRef3} className={`card-single card11 ${isVis3 ? 'card12' : ''} row row-cols-1 row-cols-sm-1 row-cols-md-2 justify-content-center`}>
                    <div className='m-3 col' style={{ width: `${width ? '85vw' : '40vw'}`, borderRadius: '10px', margin: `${width ? '10px !important' : '0'}` }}>
                        <img className='d-block mx-auto' src={img6} style={{ width: '70%', borderRadius: '10px' }} />
                    </div>
                    <div className='col text-white rounded-3 m-3 p-3' style={{ width: `${width ? '90vw' : '40vw'}`, fontSize: '20px', backgroundColor: 'rgb(0,0,0,0.5)' }}>
                        <h3 className='text-center'>On-Site Management</h3>
                        <p>Relax and enjoy your event while we take care of the logistics. Our experienced team will be on-site to oversee every aspect of the event, from setup to teardown, ensuring everything runs smoothly and according to plan.</p>
                    </div>
                </div>
            </div>
            <div className="home-features m-5">
                <div className="featuresContainer">
                    <div className="home-features1">
                        <div className="home-container02">
                            <h2 className="home-features-heading heading2 text-center text-primary">
                                Our Key Features
                            </h2>
                            <span className="home-features-sub-heading bodyLarge">
                                <h3 className='text-center'>Discover what sets us apart in event management</h3>
                            </span>
                        </div>
                        <div className="home-container03">
                            <br></br>
                            <FeatureCard
                                heading="Customized Event Planning"
                                subHeading="Tailored event planning services to meet your specific needs"
                            ></FeatureCard>
                            {/* <Slider {...settings}>
                                <div>
                                    <img src={t7} alt="Service 7" style={{ height: '60vmin' }} />
                                </div>
                                <div>
                                    <img src={t9} alt="Service 9" style={{ height: '60vmin' }} />
                                </div>
                                <div>
                                    <img src={t10} alt="Service 10" style={{ height: '60vmin' }} />
                                </div>
                                <div>
                                    <img src={t11} alt="Service 11" style={{ height: '60vmin' }} />
                                </div>
                                <div>
                                    <img src={t12} alt="Service 12" style={{ height: '60vmin' }} />
                                </div>
                                <div>
                                    <img src={t13} alt="Service 13" style={{ height: '60vmin' }} />
                                </div>
                                <div>
                                    <img src={t14} alt="Service 14" style={{ height: '60vmin' }} />
                                </div>
                                <div>
                                    <img src={t15} alt="Service 15" style={{ height: '60vmin' }} />
                                </div>
                            </Slider> */}
                        </div>
                    </div>
                </div>
                <div className="home-container">

                </div>
            </div>
            {/* <div className="home-banner">
                <div className="bannerContainer home-banner1 ">
                    <h2 className='text-center'>Services We Provide</h2>
                    <br />
                    <div className="our-services justify-content-center row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5">
                        <div className={`col service-card ${showDetails[0] ? 'show-details' : ''}`} onClick={() => navigate('/global-trader/service1')}>
                            <div className="service-icon au-icon">
                                <img src={t1} alt="Service 1 Icon" style={{ height: '150px' }} className='d-block mx-auto' />
                            </div>
                            <div className="service-infoab au-info">
                                <h3 className="text-black">Promotion Events</h3>
                                {showDetails[0] && (
                                    <p className='text-black'>
                                        Stand out from the competition with our innovative promotion and in-shop branding solutions. From eye-catching displays to interactive experiences, we help you create immersive brand experiences that resonate with your audience and drive sales.
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className={`col service-card ${showDetails[1] ? 'show-details' : ''}`} onClick={() => navigate('/global-trader/service2')}>
                            <div className="service-icon au-icon">
                                <img src={t2} alt="Service 2 Icon" style={{ height: '150px' }} className='d-block mx-auto' />
                            </div>
                            <div className="service-infoab au-info">
                                <h3 className="text-black">Shop Opening & Branding</h3>
                                {showDetails[1] && (
                                    <p className=' text-black'>
                                        Make a memorable impact with our tailored shop opening services. From concept development to execution, we create unforgettable launch events that drive foot traffic, generate buzz, and leave a lasting impression on your customers.
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className={`col service-card ${showDetails[2] ? 'show-details' : ''}`} onClick={() => navigate('/global-trader/service3')}>
                            <div className="service-icon au-icon">
                                <img src={t3} alt="Service 3 Icon" style={{ height: '150px' }} className='d-block mx-auto' />
                            </div>
                            <div className="service-infoab au-info">
                                <h3 className="text-black">Cantervan indoor / outdoor</h3>
                                {showDetails[2] && (
                                    <p className=' text-black'>
                                        Capture attention and reach your target audience with our dynamic outdoor cantervan campaigns. Whether it's a product launch, awareness drive, or promotional event, our mobile marketing solutions deliver your message effectively to the masses.
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className={`col service-card ${showDetails[3] ? 'show-details' : ''}`} onClick={() => navigate('/global-trader/service4')}>
                            <div className="service-icon au-icon">
                                <img src={t4} alt="Service 4 Icon" style={{ height: '150px' }} className='d-block mx-auto' />
                            </div>
                            <div className="service-infoab au-info">
                                <h3 className="text-black">Manpower</h3>
                                {showDetails[3] && (
                                    <p className=' text-black'>
                                        Our experienced team ensures that your event runs smoothly by providing skilled and reliable manpower. From event setup to guest assistance, we handle all staffing requirements with professionalism and efficiency.
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className={`col service-card ${showDetails[4] ? 'show-details' : ''}`} onClick={() => navigate('/global-trader/service5')}>
                            <div className="service-icon au-icon">
                                <img src={t5} alt="Service 5 Icon" style={{ height: '150px' }} className='d-block mx-auto' />
                            </div>
                            <div className="service-infoab au-info">
                                <h3 className="text-black">Installation & Activation</h3>
                                {showDetails[4] && (
                                    <p className=' text-black'>
                                        Let us take care of the logistics with our expert installation services. Whether it's setting up elaborate stage designs, exhibition booths, or technical equipment, our team ensures everything is in place for a flawless event experience.
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                    <h1 className="home-banner-heading heading2 justify text-center">
                        Welcome to Our Event Management Company
                    </h1>
                    <span className="home-banner-sub-heading bodySmall justify">
                        <p className='justify p-5'>
                            At our event management company, we specialize in creating
                            unforgettable experiences for all types of events. From
                            corporate gatherings to weddings and everything in between, we
                            are dedicated to bringing your vision to life. With our team
                            of experienced professionals, we handle every detail with
                            precision and care to ensure a seamless and successful event.
                            Discover how we can make your next event truly special.
                        </p>
                    </span>
                    <div className='home-btn-group'>
                        <button className="buttonFilled" onClick={() => navigate('/global-trader/')}>Discover More</button>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Home;