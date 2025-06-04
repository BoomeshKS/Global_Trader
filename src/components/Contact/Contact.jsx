import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import emailjs from '@emailjs/browser'
import './Contact.css';

const ContactForm = () => {
    let {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    let form = useRef(null)
    function handleFormSubmit(contact) {
        console.log(contact)
        emailjs
            .sendForm('service_6vcvtl7', 'template_50nx05e', form.current, {
                publicKey: '4-T0PY6no0KUEKwOf',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error);
                },
            );
    }
    let [width, setWidth] = useState(false)

    setTimeout(() => {
        const handleScroll = () => {
            if (window.innerWidth < 800) {
                setWidth(true)
            }
            else {
                setWidth(false)
            }
        }
        window.addEventListener('scroll', handleScroll);
        handleScroll();
    }, 100);
    return (
        <div className='contact-bg'>
            <div className='py-2 px-2 row mb-3' style={{ backgroundColor: 'rgb(0, 0, 117)' }}>
                <h1 className='text-white text-center'>Contact Us</h1>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="border border-1 px-4 mx-auto bg-light rounded-3 m-3" style={{ width: '75vmin' }}>
                        <h1 className="display-3 fs-2 fw-normal text-bold text-center mb-3 text-primarytext-primary">Contact Us</h1>
                        <form ref={form} className="mx-auto" onSubmit={handleSubmit(handleFormSubmit)}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder='Name'
                                    className="form-control shadow-sm"
                                    {...register("from_name", {
                                        required: true,
                                    })}
                                />
                                {errors.from_name?.type === "required" && (
                                    <p className="text-danger">Name is required</p>
                                )}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder='Email'
                                    className="form-control shadow-sm"
                                    {...register("from_email", {
                                        required: true,
                                    })}
                                />
                                {errors.from_email?.type === "required" && (
                                    <p className="text-danger">Email is required</p>
                                )}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="contactno" className="form-label">
                                    Contact Number
                                </label>
                                <input
                                    type="number"
                                    id="contactno"
                                    placeholder='Contact No'
                                    className="form-control shadow-sm"
                                    {...register("contact_no", {
                                        required: true,
                                        minLength:10
                                    })}
                                />
                                {errors.contact_no?.type === "required" && (
                                    <p className="text-danger">Contact Number is required</p>
                                )}
                                {errors.contact_no?.type === "minLength" && (
                                    <p className="text-danger">Minimum Length should be 10</p>
                                )}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="companyname" className="form-label">
                                    Company Name
                                </label>
                                <input
                                    type="text"
                                    id="companyname"
                                    placeholder='Company Name'
                                    className="form-control shadow-sm"
                                    {...register("company_name", {
                                        required: true,
                                    })}
                                />
                                {errors.company_name?.type === "required" && (
                                    <p className="text-danger">Company Name is required</p>
                                )}
                            </div>
                            <div className="mb-3">
                                <div>
                                    <label className='form-label'>Services Required :</label>
                                    <select className='form-control'
                                        {...register("service_required", {
                                            required: true
                                        })}
                                    >
                                        <option value="Events Organisation">Events Organisation</option>
                                        <option value="Brand Promotion">Brand Promotion</option>
                                        <option value="Installation And Activation">Installation And Activation</option>
                                        <option value="Corporate Activity">Corporate Activity</option>
                                        <option value="Road Show">Road Show</option>
                                        <option value="Product Launch">Product Launch</option>
                                        <option value="Manpower And Artist Coordination">Manpower And Artist Coordination</option>
                                        <option value="Marketing And Publicity">Marketing And Publicity</option>
                                        <option value="Cantervan Indoor Outdoor">Cantervan Indoor Outdoor</option>
                                    </select>
                                </div>
                                {errors.service_required?.type === "required" && (
                                    <p className="text-danger">Service is required</p>
                                )}
                            </div>
                            <button className="btn btn-success d-block mx-auto mb-3">Submit</button>
                        </form>
                    </div>
                    <div>
                        <div className="row row-cols-3 mx-auto" style={{ width: width ? '60%' : '30%' }}>
                            <a className='col' href="mailto:globaltrader19@gmail.com">
                                <IoIosMail className='d-block mx-auto' style={{ fontSize: width ? '11vw' : '4vw' }} />
                            </a>
                            <a className='col' href="tel:8939169177">
                                <FaPhoneAlt className='d-block mx-auto' style={{ fontSize: width ? '7.5vw' : '2.8vw', marginTop:width?'1vw':'0.5vw' }} />
                            </a>
                            <a className='col' href="https://www.google.com/maps/place/13%C2%B003'42.5%22N+80%C2%B010'39.2%22E/@13.0618115,80.1749793,17z/data=!3m1!4b1!4m4!3m3!8m2!3d13.0618115!4d80.1775542?entry=ttu">
                                <FaLocationDot className='d-block mx-auto' style={{ fontSize: width ? '7.5vw' : '2.8vw', marginTop:width?'1vw':'0.5vw' }} />
                            </a>
                        </div>
                    </div>
                    <div className="contact-about text-white">
                        <p>Have questions or need assistance? Reach out to our dedicated team for expert event planning guidance and support. Contact us today to turn your event dreams into reality!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
