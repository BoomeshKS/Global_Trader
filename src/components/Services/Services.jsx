import React from 'react';
import { useRef, useEffect, useState } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';
import ser1 from '../../assets/Home/ser1.png'
import ser2 from '../../assets/Home/ser2.png'
import ser3 from '../../assets/Home/ser3.png'
import ser4 from '../../assets/Home/ser4.png'
import ser5 from '../../assets/Home/ser5.png'
import ser6 from '../../assets/Home/ser6.png'
import ser7 from '../../assets/Home/ser7.png'
import ser8 from '../../assets/Home/ser8.png'
import ser9 from '../../assets/Home/ser9.png'
import video from '../../assets/Services/Services_vid.mp4'
import './Services.css'

function Services() {
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
            body: "Crafting compelling narratives and deploying strategic campaigns, we amplify your brand's presence, ensuring maximum visibility and engagement to drive success."
        },
        {
            ind: 9,
            img: ser9,
            heading: 'Cantervan Indoor / Outdoor',
            body: 'Versatile and adaptable, our Cantervan seamlessly transitions from indoor elegance to outdoor adventure, providing comfort and luxury wherever your journey takes you.'
        }
    ]
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

    return (
        <div className="service-container">
            <div className="video-text" style={{ position: 'relative' }}>
                <video autoPlay muted loop className="background-video" height="350" style={{ width: '100%', objectFit: 'cover' }}>
                    <source src={video} type='video/mp4' />
                </video>
                <div className='vid-text text-white' style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <h1 className='text-center'>Welcome to our Services</h1>
                    <div style={{ marginTop: '50px' }}>
                    </div>
                </div>
            </div>

            <h2 className="text-center text-primary">Our Services</h2>
            <p className='text-center padded-paragraph'>
                Where we specialize in delivering exceptional event management services tailored to your unique needs. From manpower coordination to captivating outdoor campaigns, seamless installations, grand shop openings, and engaging promotion strategies, we offer a comprehensive suite of solutions to make your event a resounding success.
            </p>

            <div className="m-3">
                <br />
                <div className='row row-cols-1 row-cols-md-3 mx-auto' style={{ width: '85vw' }}>
                    {services.map((service, index) => (
                        <div style={{ position: 'relative', minHeight: '350px',border: '1px solid rgb(220,220,220)'}} onMouseEnter={() => {
                            let arr = [false, false, false, false, false, false, false, false, false]
                            arr[service.ind - 1] = true
                            console.log(arr)
                            setFf(arr)
                        }} onMouseLeave={() => {
                            let arr = [...ff]
                            arr[service.ind - 1] = false
                            setFf(arr)
                        }} onClick={() => {
                            navigate(`/Global_Trader/service${index + 1}`)
                        }}>
                            <div key={index} className="rounded-5 p-3" style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', zIndex: '1', marginBottom: '10px' }}>
                                <div className="text-center">
                                    <img src={service.img} style={{ height: '150px' }} />
                                    <h3 className='text-primary' style={{ fontSize: '18px',fontWeight:'700',marginBottom:'10px'}}>{service.heading}</h3>
                                    <p className='justify' style={{ fontSize: '15px' }}>
                                        {service.body}
                                    </p>
                                </div>
                            </div>
                            <div className="home-services-card" style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', zIndex: '2' }}>
                                <h3 className={`services-service-p${service.ind}1 ${ff[service.ind - 1] ?` services-service-p${service.ind}11`: ""} text-center text-white`} style={{ position: 'relative' }}>{service.heading}</h3>
                                <p className={`services-service-p${service.ind}2 ${ff[service.ind - 1] ? `services-service-p${service.ind}22 `: ""} text-center text-white`} style={{ position: 'relative' }}>Read more →</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Services;