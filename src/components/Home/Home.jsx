import { useRef, useEffect, useState } from 'react'
import Slider from 'react-slick';
import hand from '../../assets/Home/hand.png'
import logo from '../../assets/Home/5-hands.png'
import './Home.css'
import { useNavigate, Link } from 'react-router-dom'
import img1 from '../../assets/Home/pre-planning.jpg'
import img2 from '../../assets/Home/logistics-management.jpg'
import img3 from '../../assets/Home/coordination.jpeg'
import img4 from '../../assets/Home/event-planning.jpeg'
import img5 from '../../assets/Home/venue-selection.jpg'
import img6 from '../../assets/Home/site-management.jpeg'
import ser1 from '../../assets/Home/ser1.png'
import ser2 from '../../assets/Home/ser2.png'
import ser3 from '../../assets/Home/ser3.png'
import ser4 from '../../assets/Home/ser4.png'
import ser5 from '../../assets/Home/ser5.png'
import ser6 from '../../assets/Home/ser6.png'
import ser7 from '../../assets/Home/ser7.png'
import ser8 from '../../assets/Home/ser8.png'
import ser9 from '../../assets/Home/ser9.png'
import l1 from '../../assets/Home/clogo1.png'
import l2 from '../../assets/Home/clogo2.png'
import l3 from '../../assets/Home/clogo3.png'
import l4 from '../../assets/Home/clogo4.png'
import video from '../../assets/Home/background-video.mp4'
import contact from '../../assets/contact-background.jpg'
import gallery1 from '../../assets/Past-Events/pe1.jpeg';
import gallery2 from '../../assets/Past-Events/pe12.jpeg';
import gallery3 from '../../assets/Past-Events/pe17.jpeg';
// import gallery4 from '../../assets/Past-Events/pe4.jpeg';
// import gallery5 from '../../assets/Past-Events/pe5.jpeg';
// import gallery6 from '../../assets/Past-Events/pe6.jpeg';
import gallery7 from '../../assets/Past-Events/pe7.jpeg';
import gallery8 from '../../assets/Past-Events/pe8.jpeg';
import whyusbg from '../../assets/Home/why-us-bg.avif'

function Home() {
    let navigate = useNavigate()
    let [ff, setFf] = useState([false, false, false, false, false, false, false, false, false])
    let [ii1, setii1] = useState("");
    let [ii2, setii2] = useState("");
    let [ii3, setii3] = useState("");
    let [ii4, setii4] = useState("");
    let [ii5, setii5] = useState("");
    let [ihh, setihh] = useState("");
    let [flag, setFlag] = useState("true")
    let [style, setStyle] = useState()
    let [imgStyle, setImgStyle] = useState("")

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

    let services = [
        {
            ind: 1,
            img: ser1,
            heading: 'Events Organisation',
            body: 'Bringing your dreams to life, one perfectly planned occasion at a time. Let us handle the details while you enjoy the magic.'
        },
        {
            ind: 2,
            img: ser2,
            heading: 'Brand Promotion',
            body: "Elevate your brand's visibility with strategic campaigns tailored to captivate your audience, ensuring your message resonates loud and clear in the competitive market."
        },
        {
            ind: 3,
            img: ser3,
            heading: 'Installation and Activation',
            body: 'Transforming spaces into captivating experiences, our expert touch breathes life into your vision, ensuring every activation leaves a lasting impression.'
        },
        {
            ind: 4,
            img: ser4,
            heading: 'Corporate Activity',
            body: "Foster team unity and productivity with meticulously planned corporate events, tailored to inspire, engage, and leave a lasting impact on your organization's culture and success."
        },
        {
            ind: 5,
            img: ser5,
            heading: 'Road Show',
            body: 'Take your brand on the road to captivate audiences far and wide, igniting excitement and engagement as you showcase your message, products, and services with flair and impact at every stop.'
        },
        {
            ind: 6,
            img: ser6,
            heading: 'Product Launch',
            body: 'Unveil your innovation with a captivating launch event that leaves a lasting impression, sparking curiosity, excitement, and anticipation among your target audience, setting the stage for success.'
        },
        {
            ind: 7,
            img: ser7,
            heading: 'Manpower and Artist Coordination',
            body: 'Seamlessly synchronize talent and resources, ensuring flawless execution and unforgettable performances that elevate your event to new heights of professionalism and entertainment.'
        },
        {
            ind: 8,
            img: ser8,
            heading: 'Marketing and Publicity',
            body: "Crafting compelling narratives and deploying strategic campaigns, we amplify your brand's presence, ensuring maximum visibility and engagement to drive success and leave a lasting impression on your audience."
        },
        {
            ind: 9,
            img: ser9,
            heading: 'Cantervan Indoor / Outdoor',
            body: 'Versatile and adaptable, our Cantervan seamlessly transitions from indoor elegance to outdoor adventure, providing comfort and luxury wherever your journey takes you, ensuring every moment is an unforgettable experience.'
        }
    ]

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
                        setii1('ii1')
                        setii2('ii2')
                        setii3('ii3')
                        setii4('ii4')
                        setii5('ii5')
                        setihh('ihh')
                        setTimeout(() => {
                            setFlag(false)
                            setStyle('hidden')
                            setImgStyle("logo2")
                        }, 2000)
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

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: !width ? 3 : 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
    };

    const images = [
        {
            image: gallery1,
            heading: 'Shop Manpower Management',
            body: "Maneuvering the shop's manpower entailed intricate scheduling, swift decision-making, and adept problem-solving. Balancing efficiency with adaptability, it underscored the pivotal role of management in delivering exceptional service."
        },
        ...(!width ? [
            {
                image: gallery2,
                heading: 'Shop Opening',
                body: "Launching the shop was an exhilarating endeavor, blending meticulous planning with bursts of spontaneity. Witnessing the doors finally open to welcome eager customers was a moment of pride, marking the beginning of a new chapter"
            },
            {
                image: gallery3,
                heading: 'Bike Expo',
                body: 'Running the bike expo was a thrilling ride from start to finish. Balancing exhibitor logistics, attendee engagement, and event flow was a high-stakes adventure. But seeing enthusiasts connecting with the latest gear made all the work worthwhile.'
            }
        ] : [])
    ]

    return (
        <div className='home-bg'>
            <div ref={eleRef} className='home'>
                <div className='video-text-cards'>
                    <div className="video-text" style={{ position: 'relative' }}>
                        <video autoPlay muted loop className="background-video" height="350" style={{ width: '100%', objectFit: 'cover' }}>
                            <source src={video} type='video/mp4' />
                        </video>
                        <div className='vid-text text-white' style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <h1 className='text-center'>Welcome to our Company Website</h1>
                            <div style={{ marginTop: '50px' }}>
                                <button className='btn btn-danger' onClick={() => navigate('services')}>
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* <div className="m-3">
                        <h2 className='text-center'>3 steps to design an event</h2>
                        <br />
                        <div className='row row-cols-1 row-cols-md-3'>
                            <div className="rounded-5" style={{ marginBottom: '10px' }} >
                                <div className="home-card text-center">
                                    <img className='rounded-circle' src={img1} style={{ width: '150px' }} />
                                    <h3 style={{ marginBottom: '15px' }}>Pre-Event Planning</h3>
                                    <p className='text-center'>
                                        We strategize meticulously to set objectives, secure resources, and promote the event effectively.
                                    </p>
                                </div>
                            </div>
                            <div className="rounded-5" style={{ marginBottom: '10px' }}>
                                <div className="home-card text-center">
                                    <img className='rounded-circle' src={img2} style={{ width: '150px' }} />
                                    <h3 style={{ marginBottom: '15px' }}>Logistics Management</h3>
                                    <p className='text-center'>
                                        We coordinate seamlessly to ensure smooth operations, from equipment setup to attendee logistics.
                                    </p>
                                </div>
                            </div>
                            <div className="rounded-5" style={{ marginBottom: '10px' }}>
                                <div className="home-card text-center">
                                    <img className='rounded-circle' src={img3} style={{ width: '150px' }} />
                                    <h3 style={{ marginBottom: '15px' }}>Coordination</h3>
                                    <p className='text-center'>
                                        We execute flawlessly, overseeing all aspects of the event to guarantee a memorable and successful experience for attendees.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
                {/* {flag && <div ref={animRef} className='anim-div'>
                    <img src={hand} className={`i i1 ${ii1}`} />
                    <img src={hand} className={`i i2 ${ii2}`} />
                    <img src={hand} className={`i i3 ${ii3}`} />
                    <img src={hand} className={`i i4 ${ii4}`} />
                    <img src={hand} className={`i i5 ${ii5}`} />
                    <div className={`i ih ${ihh}`} style={{ position: 'relative', width: '30%', height: '70%', overflow: 'hidden' }}>
                        <img src={hand} style={{ width: '100%', height: '100%', top: 0, left: 0, objectFit: 'cover', clipPath: 'inset(0 0 50% 0)' }} />
                    </div>
                </div>}
                {!flag && <div className='anim-div' style={{ marginBottom: '40px' }}>
                    <div style={{ position: 'absolute', width: '90vmin', height: '90vmin', fontSize: 'small' }}>
                        <img src={logo} style={{ width: '90vmin', height: '90vmin' }} className='logo' />
                        <button className='btn b b1 rounded' onClick={() => navigate('/global-trader/service1')}><p className='btnp rounded' ><b>Promotion Events</b></p></button>
                        <button className='btn b b2' onClick={() => navigate('/global-trader/service2')}><p className='btnp rounded'><b>Shop Opening & Branding</b></p></button>
                        <button className='btn b b3' onClick={() => navigate('/global-trader/service3')}><p className="btnp rounded"><b>Cantervan indoor / outdoor</b></p></button>
                        <button className='btn b b4' onClick={() => navigate('/global-trader/service4')}><p className="btnp rounded"><b>Manpower</b></p></button>
                        <button className='btn b b5' onClick={() => navigate('/global-trader/service5')}><p className="btnp rounded"><b>Installation & Activation</b></p></button>
                    </div>
                </div>} */}
                <div className="m-3">
                    <h2 className='text-center text-primary'>Our Services</h2>
                    <br />
                    <div className='row row-cols-1 row-cols-md-3 mx-auto' style={{ width: '80vw' }}>
                        {services.map((service, index) => (
                            <div style={{ position: 'relative', minHeight: '230px', border: '1px solid rgb(220,220,220)' }} onMouseEnter={() => {
                                let arr = [false, false, false, false, false, false, false, false, false]
                                arr[service.ind - 1] = true
                                console.log(arr)
                                setFf(arr)
                            }} onMouseLeave={() => {
                                let arr = [...ff]
                                arr[service.ind - 1] = false
                                setFf(arr)
                            }} onClick={() => { navigate(`service${index + 1}`) }}>
                                <div key={index} className="rounded-5 p-3" style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', zIndex: '1', marginBottom: '10px' }}>
                                    <div className="text-center">
                                        <img src={service.img} style={{ height: '150px' }} />
                                        <h5 className='text-primary' style={{ margin: '15px' }}>{service.heading}</h5>
                                        {/* <p className='justify'>
                                            {service.body}
                                        </p> */}
                                    </div>
                                </div>
                                <div className="home-services-card" style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', zIndex: '2' }}>
                                    <h3 className={`home-service-p${service.ind}1 ${ff[service.ind - 1] ? `home-service-p${service.ind}11` : ""} text-center text-white`} style={{ position: 'relative' }}>{service.heading}</h3>
                                    <p className={`home-service-p${service.ind}2 ${ff[service.ind - 1] ? `home-service-p${service.ind}22` : ""} text-center text-white`} style={{ position: 'relative' }}>Read more →</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* <div className="cards-div" style={{ margin: '30px' }}>
                <div ref={eleRef1} className={`card-single card11 ${isVis1 ? 'card12' : ''} row row-cols-1 row-cols-sm-1 row-cols-lg-2 justify-content-center`}>
                    <div className='m-3 col' style={{ width: `${width ? '85vw' : '40vw'}`, borderRadius: '10px', margin: `${width ? '10px !important' : '0'}` }}>
                        <img className='d-block mx-auto' src={img4} style={{ width: '70%', borderRadius: '10px' }} />
                    </div>
                    <div className='col text-white rounded-3 m-3 p-3' style={{ width: `${width ? '90vw' : '40vw'}`, fontSize: '20px', backgroundColor: 'rgb(0,0,0,0.5)' }}>
                        <h3>Event Planning</h3>
                        <p>We specialize in planning and coordinating events of all sizes. From corporate gatherings to intimate celebrations, we handle every detail to ensure a memorable experience for you and your guests.</p>
                    </div>
                </div>
                <div ref={eleRef2} className={`card-single card21 ${isVis2 ? 'card22' : ''} row row-cols-1 row-cols-sm-1 row-cols-md-2 justify-content-center`}>
                    {width && <div className='m-3 col' style={{ width: `${width ? '85vw' : '40vw'}`, borderRadius: '10px', margin: `${width ? '10px !important' : '0'}` }}>
                        <img className='d-block mx-auto' src={img5} style={{ width: '70%', borderRadius: '10px' }} />
                    </div>}
                    <div className='col text-white rounded-3 m-3 p-3' style={{ width: `${width ? '90vw' : '40vw'}`, fontSize: '20px', backgroundColor: 'rgb(0,0,0,0.5)' }}>
                        <h3>Venue Selection</h3>
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
                        <h3>On-Site Management</h3>
                        <p>Relax and enjoy your event while we take care of the logistics. Our experienced team will be on-site to oversee every aspect of the event, from setup to teardown, ensuring everything runs smoothly and according to plan.</p>
                    </div>
                </div>
            </div> */}
            <div>
                <h1 className='text-center text-primary'>Why Us</h1>
                <div className='why-us-div m-3 mx-auto' style={{ width: '70%' }}>
                    <div className='why-us p-4 rounded-3'>
                        <div className='why-us-para p-3 rounded-3' style={!width ? { marginLeft: '40%' } : {}}>
                            <p className='justify'>
                                At Global traders, we understand that every event is unique and requires careful planning, attention to detail, and creativity to ensure its success. From the initial consultation to the final execution, we work closely with each client to understand their vision, objectives, and preferences.
                            </p>
                            <br />
                            <p className='justify'>
                                Our dedicated event planners will tailor every aspect of your event to ensure it reflects your unique style and exceeds your expectations. The team will handle all the details, logistics, and coordination, allowing you to focus on what matters most enjoying your event and creating memories that last a lifetime.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {!width && <div className='py-4 px-2 row my-3' style={{ backgroundColor: 'rgb(0, 0, 117)' }}>
                <h3 className='col-9 text-white text-center'>Want to transform your event into a bliss? Connect to our experts now.</h3>
                <div className='col-3 justify-content-end d-flex'>
                    <button className='btn d-block mx-auto px-5' style={{ backgroundColor: 'rgb(0, 0, 117)', color: 'yellow', border: '2.5px solid yellow', fontSize: '20px' }} onClick={() => navigate('contact')}>Contact Us</button>
                </div>
            </div>}
            {/* <div className='m-5'>
                <div className='row row-cols-1 row-cols-sm-1 row-cols-md-2'>
                    <div className='col'>
                        <img className='d-block mx-auto rounded-3' src={contact} style={{ width: !width ? '45vw' : '90%' }} />
                    </div>
                    <div className='col p-3'>
                        <h1 className='text-center'>Contact Us </h1>
                        <p className='p-3 justify'>
                            Ready to bring your event vision to life? Let's make it happen together! Whether you're planning a corporate conference, a wedding celebration, or any special occasion, our team is here to turn your ideas into unforgettable experiences. Reach out to us today and let's start planning your next remarkable event. We're excited to collaborate with you and bring your vision to reality!
                        </p>
                        <button className='btn btn-primary m-3 text-canter mx-auto d-block' onClick={() => navigate('contact')}>Contact Us</button>
                    </div>
                </div>
            </div> */}
            <div>
                <div className='bg-black p-3 gallery-home' style={{ position: 'relative' }}>
                    <h1 className='text-center text-white'>Our Success Stories</h1>
                    <div className='p-3'>
                        <div className='row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3'>
                            {images.map((card, index) => (
                                <div className="col text-white p-3">
                                    <div className='p-3 rounded rounded-3' style={{ backgroundColor: 'rgb(0,0,0,0.3)' }}>
                                        <img src={card.image} alt={`Image ${index}`} className='rounded-3 d-block mx-auto' style={{ height: '150px', maxWidth: '100%' }} />
                                        <h3 className='text-center mt-3'>{card.heading}</h3>
                                        <p>{card.body}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='gallery-button text-white' style={{ position: 'absolute', left: 0, bottom: 0, width: '100%', height: '25%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <button className='btn btn-primary m-3 text-canter mx-auto d-block' onClick={() => navigate('gallery')}>See More</button>
                    </div>
                </div>
                {/* <div style={{ position: 'relative' }}>
                    <div className='gallery1'>
                        <Container>
                            <Row>
                                {images.map((imageUrl, index) => (
                                    <Col key={index} xs={6} md={4} lg={3}>
                                        <div className="home-image-container">
                                            <img src={imageUrl} alt={`Image ${index}`} className='gallery-img' />
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    </div>
                    <div className='gallery-2'>
                        <button className='btn btn-primary m-3 text-canter mx-auto d-block' onClick={() => navigate('gallery')}>See More</button>
                    </div>
                </div> */}
            </div>
            {width && <div className='py-4 px-2 row my-3' style={{ backgroundColor: 'rgb(0, 0, 117)' }}>
                <h3 className='text-white text-center' style={{ fontSize: '20px', marginBottom: '10px' }}>Want to transform your event into a bliss? Connect to our experts now.</h3>
                <div className='justify-content-end d-flex'>
                    <button className='btn d-block mx-auto' style={{ backgroundColor: 'rgb(0, 0, 117)', color: 'yellow', border: '2.5px solid yellow', fontSize: '15px' }} onClick={() => navigate('contact')}>Contact Us</button>
                </div>
            </div>}
            <div className='m-3 p-3 rounded-3'>
                <h1 className='text-center text-primary'>Collaboration with our company</h1>
                <div className='row'>
                    <Slider {...settings} infinite className='mx-auto'>
                        <div>
                            <img src={l1} alt="Service 7" className="slider-image" />
                        </div>
                        <div>
                            <img src={l2} alt="Service 9" className="slider-image" />
                        </div>
                        <div>
                            <img src={l3} alt="Service 10" className="slider-image" />
                        </div>
                        <div>
                            <img src={l4} alt="Service 11" className="slider-image" />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Home