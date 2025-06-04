import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import './FeatureCard.css'
const Home = () => {

    return (
        <div className="container-fluid">
            <div className='row row-cols-1 row-cols-md-2'>
                <div className="service-box bg-image hover-overlay hover-zoom shadow-1-strong" style={{ marginBottom: '10px' , borderRight:'1.5px solid blue'}} >
                    <div className="service-infoab text-center">
                        <FontAwesomeIcon className='text-primary' icon={faInfoCircle} size="2x"/><h3 className='text-primary'>Promotion Events</h3>
                        <p className='justify' style={{fontSize:'17px'}}>
                            Stand out from the competition with our innovative promotion and in-shop branding solutions. From eye catching displays to interactive experiences, we help you create immersive brand experiences that resonate with your audience and drive sales.

                        </p>
                    </div>
                </div>
                <div className="service-box bg-image hover-overlay hover-zoom shadow-1-strong" style={{ marginBottom: '10px' , borderLeft:'1.5px solid blue'}} >
                    <div className="service-infoab text-center">
                        <FontAwesomeIcon className='text-primary' icon={faUser} size="2x" /><h3 className='text-primary'>Shop Opening & Branding</h3>
                        <p className='justify' style={{fontSize:'17px'}}>
                            Make a memorable impact with our tailored shop opening services. From concept development to execution, we create unforgettable launch events that drive foot traffic, generate buzz, and leave a lasting impression on your customers.
                        </p>
                    </div>
                </div>
                <div className="service-box bg-image hover-overlay hover-zoom shadow-1-strong" style={{ marginBottom: '10px' , borderRight:'1.5px solid blue'}}>
                    <div className="service-infoab text-center">
                        <FontAwesomeIcon className='text-primary' icon={faLightbulb} size="2x" /><h3 className='text-primary'>Cantervan indoor / outdoor</h3>
                        <p className='justify' style={{fontSize:'17px'}}>
                            Capture attention and reach your target audience with our dynamic outdoor cantervan campaigns. Whether it's a product launch, awareness drive, or promotional event, our mobile marketing solutions deliver your message effectively to the masses.

                        </p>
                    </div>
                </div>
                <div className="service-box bg-image hover-overlay hover-zoom shadow-1-strong" style={{ marginBottom: '10px' , borderLeft:'1.5px solid blue'}}>
                    <div className="service-infoab text-center">
                        <FontAwesomeIcon className='text-primary' icon={faUserGroup} size="2x" /><h3 className='text-primary'>Manpower</h3>
                        <p className='justify' style={{fontSize:'17px'}}>
                            Our experienced team ensures that your event runs smoothly with reliable manpower. From event setup to guest assistance, we handle all staffing requirements with efficiency.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
