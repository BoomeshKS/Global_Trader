import React, { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import './Gallery.css'; // Import CSS file for styling
import img1 from '../../assets/Past-Events/pe1.jpeg';
import img4 from '../../assets/Past-Events/pe4.jpeg';
import img7 from '../../assets/Past-Events/pe7.jpeg';
import img11 from '../../assets/Past-Events/pe11.jpeg';
import img14 from '../../assets/Past-Events/pe14.jpeg';
import img15 from '../../assets/Past-Events/pe15.jpeg';
import img16 from '../../assets/Past-Events/pe16.jpeg';
import img17 from '../../assets/Past-Events/pe17.jpeg';
import img18 from '../../assets/Past-Events/pe18.jpeg';
import img19 from '../../assets/Past-Events/pe19.jpeg';
import img20 from '../../assets/Past-Events/pe20.jpeg';
import img25 from '../../assets/Past-Events/pe25.jpeg';
import img29 from '../../assets/Past-Events/pe29.jpeg';
import img30 from '../../assets/Past-Events/pe30.jpeg';
import img31 from '../../assets/Past-Events/pe31.jpeg';
import img32 from '../../assets/Past-Events/pe32.jpeg';
import img34 from '../../assets/Past-Events/pe34.jpeg';
import img35 from '../../assets/Past-Events/pe35.jpeg';
import img36 from '../../assets/Past-Events/pe36.jpeg';
import img37 from '../../assets/Past-Events/pe37.jpeg';
import img38 from '../../assets/Past-Events/pe38.jpeg';
import img39 from '../../assets/Past-Events/pe39.jpeg';
import img40 from '../../assets/Past-Events/pe18.jpeg';

function Gallery() {
    const [showModal, setShowModal] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const images = [
        {
            img:img1,
            title:'Shop Opening'
        },
        {
            img:img11,
            title:'Product Promotion'
        },
        {
            img:img14,
            title:'Birthday Party'
        },
        {
            img:img15,
            title:'Promotion Party'
        },
        {
            img:img16,
            title:'Campaign'
        },
        {
            img:img17,
            title:'Bike Expo'
        },
        {
            img:img7,
            title:'Beverage Promotion'
        },
        {
            img:img20,
            title:'Fertilizer Promotion'
        },
        {
            img:img25,
            title:'Sankranti Festival'
        },
        {
            img:img29,
            title:'Sankranti Festival'
        },
        {
            img:img30,
            title:'Christmas'
        },
        {
            img:img31,
            title:'Campaign'
        },
        {
            img:img32,
            title:'Catering'
        },
        {
            img:img34,
            title:'Electronic Show'
        },
        {
            img:img35,
            title:'Campaign'
        },
        {
            img:img36,
            title:'Beverage Promotion'
        },
        {
            img:img39,
            title:'Beverage Promotion'
        },
        {
            img:img37,
            title:'Product Promotion'
        },
        {
            img:img38,
            title:'Annual Day'
        },
        {
            img:img40,
            title:'Bike Expo'
        }
    ];

    const handleClick = (index) => {
        setSelectedImageIndex(index);
        setShowModal(true);
    };

    const handleNext = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const handlePrev = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    return (
        <div>
            <div className="home-hero gallery mb-3">
                <div style={{backgroundColor:'rgb(0,0,0,0.4)', height:'100%'}}>
                    <h1 className="home-hero-heading heading1 text-center" style={{paddingTop:'150px'}}>Gallery Page</h1>
                </div>
            </div>
            <Container>
                <Row>
                    {images.map((image, index) => (
                        <Col key={index} xs={6} md={4} lg={3}>
                            <div className="image-container" onClick={() => handleClick(index)}>
                                <img src={image.img} alt={`Image ${index}`} className="img-fluid" />
                                <h5 className='text-center'>{image.title}</h5>
                            </div>
                        </Col>
                    ))}
                </Row>

                {/* Modal to display clicked image */}
                <Modal show={showModal} onHide={() => setShowModal(false)} dialogClassName="custom-modal">
                    <Modal.Body>
                        <div className="modal-image">
                            <img src={images[selectedImageIndex]} alt={`Image ${selectedImageIndex}`} className="img-fluid"/>
                            <button className="arrow arrow-prev" onClick={handlePrev}>&#10094;</button>
                            <button className="arrow arrow-next" onClick={handleNext}>&#10095;</button>
                        </div>
                    </Modal.Body>
                </Modal>
            </Container>
        </div>
    );
};

export default Gallery;