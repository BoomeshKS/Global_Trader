import React from 'react';
import t6 from '../../assets/asd.jpg'; // Import your image here
import t5 from '../../assets/dfg.jpg'
import './textimage.css'; // Create and import your CSS file for styling

const TextImageSection = () => {
    return (
        <div>
            <h2 className="section-heading">Our Previous Achivements</h2>
            <div className="row row-cols-1 row-cols-md-2 text-image-section">
                <div className="col text-content">
                    <p className="section-text justify">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error totam, nihil incidunt qui pariatur velit sunt, accusantium quis nesciunt odit ullam ratione odio? Veniam, eligendi earum repellendus perferendis consectetur accusantium numquam quo at veritatis porro adipisci. Delectus laudantium, nihil exercitationem, officiis eaque ratione voluptates inventore iste mollitia a, blanditiis repellendus.
                    </p>
                </div>
                <div className="col image-content">
                    <img src={t6} alt="Description of Image" className="section-image" style={{ height: '300px' }} />
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 text-image-section">
                <div className="col text-content">
                    <p className="section-text justify">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error totam, nihil incidunt qui pariatur velit sunt, accusantium quis nesciunt odit ullam ratione odio? Veniam, eligendi earum repellendus perferendis consectetur accusantium numquam quo at veritatis porro adipisci. Delectus laudantium, nihil exercitationem, officiis eaque ratione voluptates inventore iste mollitia a, blanditiis repellendus.
                    </p>
                </div>
                <div className="col image-content">
                    <img src={t6} alt="Description of Image" className="section-image" style={{ height: '300px' }} />
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 text-image-section">
                <div className="col text-content">
                    <p className="section-text justify">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error totam, nihil incidunt qui pariatur velit sunt, accusantium quis nesciunt odit ullam ratione odio? Veniam, eligendi earum repellendus perferendis consectetur accusantium numquam quo at veritatis porro adipisci. Delectus laudantium, nihil exercitationem, officiis eaque ratione voluptates inventore iste mollitia a, blanditiis repellendus.
                    </p>
                </div>

                <div className="col image-content">
                    <img src={t6} alt="Description of Image" className="section-image" style={{ height: '300px' }} />
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 text-image-section">
                <div className="col text-content">
                    <p className="section-text justify">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error totam, nihil incidunt qui pariatur velit sunt, accusantium quis nesciunt odit ullam ratione odio? Veniam, eligendi earum repellendus perferendis consectetur accusantium numquam quo at veritatis porro adipisci. Delectus laudantium, nihil exercitationem, officiis eaque ratione voluptates inventore iste mollitia a, blanditiis repellendus.
                    </p>
                </div>
                <div className="col image-content">
                    <img src={t6} alt="Description of Image" className="section-image" style={{ height: '300px' }} />
                </div>
            </div>
            <h2 className="section-heading"> past activities</h2>
            <div className="row row-cols-1 row-cols-md-2 text-image-section">
                <div className="col text-content">
                    <p className="section-text justify">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error totam, nihil incidunt qui pariatur velit sunt, accusantium quis nesciunt odit ullam ratione odio? Veniam, eligendi earum repellendus perferendis consectetur accusantium numquam quo at veritatis porro adipisci. Delectus laudantium, nihil exercitationem, officiis eaque ratione voluptates inventore iste mollitia a, blanditiis repellendus.
                    </p>
                </div>
                <div className="col image-content">
                    <img src={t5} alt="Description of Image" className="section-image" style={{ height: '300px' }} />
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 text-image-section">
                <div className="col text-content">
                    <p className="section-text justify">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error totam, nihil incidunt qui pariatur velit sunt, accusantium quis nesciunt odit ullam ratione odio? Veniam, eligendi earum repellendus perferendis consectetur accusantium numquam quo at veritatis porro adipisci. Delectus laudantium, nihil exercitationem, officiis eaque ratione voluptates inventore iste mollitia a, blanditiis repellendus.
                    </p>
                </div>
                <div className="col image-content">
                    <img src={t5} alt="Description of Image" className="section-image" style={{ height: '300px' }} />
                </div>
            </div>
        </div>
    );
};

export default TextImageSection;
