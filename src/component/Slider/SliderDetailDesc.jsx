import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import { Fragment } from 'react'
import Slider, { slickGoTo } from 'react-slick';

const SliderDetailDesc = (props) => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: false,
        swipeToSlide: false,
    };


    const slider1 = useRef(null);


    useEffect(() => {
        slider1.current.slickGoTo(props.active);
    }, [props.active])


    return (
        <Fragment>
            <div className="mt__min-service">
                <Slider ref={slider1} {...settings} className="wrapper__slider-detail-desc">
                    <div className="items">
                        <div className="row justify-content-center position-relative z-2">
                            <div className="col-md-7">
                                <div className="mb-5 text-center">
                                    <p className="medium font__size--16 text__16-1024 text-uppercase text__gr-default">Service</p>
                                    <h2 className="semi-bold font__size--48 text__48-1024 text__48-md text__48-sm mb-0">VR Development</h2>
                                </div>
                                <p className='light font__size--16 text__16-1024 color__gray-1 mb-3'>At our VR design service, we specialize in creating immersive and engaging virtual reality experiences that transport your audience to a whole new world. Our team of experienced designers and developers work together to create VR experiences that are not only visually stunning but also interactive and user-friendly.</p>
                                <p className='light font__size--16 text__16-1024 color__gray-1 mb-0'>We take a collaborative approach to our VR design process, working closely with you to understand your specific needs and goals. Whether you're looking to create a VR training program, a marketing campaign, or a game, we can help you bring your idealife.</p>

                                <div className="row my-5 justify-content-center">
                                    <div className="col-md-8">
                                        <div className="wrapper__wrap-service">
                                            <h5 className='normal font__size--16 text__16-1024 mb-3'>Our VR design services include:</h5>

                                            <ul className='list__data'>
                                                <li>
                                                    <div className="d-flex">
                                                        <img src="./../images/check-box (1).png" className='object-fit-content' alt="" />
                                                        <span className='ml-2 normal font__size--16 text__16-1024'>Concept development and ideation</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <img src="./../images/check-box (1).png" className='object-fit-content' alt="" />
                                                        <span className='ml-2 normal font__size--16 text__16-1024'>Storyboarding and scriptwriting</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <img src="./../images/check-box (1).png" className='object-fit-content' alt="" />
                                                        <span className='ml-2 normal font__size--16 text__16-1024'>3D modeling and animation</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <img src="./../images/check-box (1).png" className='object-fit-content' alt="" />
                                                        <span className='ml-2 normal font__size--16 text__16-1024'>User interface design and development</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <img src="./../images/check-box (1).png" className='object-fit-content' alt="" />
                                                        <span className='ml-2 normal font__size--16 text__16-1024'>Sound design and effects</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <img src="./../images/check-box (1).png" className='object-fit-content' alt="" />
                                                        <span className='ml-2 normal font__size--16 text__16-1024'>Quality assurance testing and optimization</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>


                                <p className='light font__size--16 text__16-1024 color__gray-1 mb-3'>We use the latest VR technologies and software to create immersive experiences that are fully customized to your brand and message. We understand that every project is unique, and we work closely with you to ensure that we create a VR experience that perfectly matches your vision.</p>
                                <p className='light font__size--16 text__16-1024 color__gray-1 mb-3'>At our VR design service, we are committed to delivering high-quality VR experiences that engage, educate, and inspire your audience. Contact us today to discuss how we can help bring your ideas to life with our VR design services.</p>
                            </div>
                        </div>

                        <div className="text-center mt-5">
                            <a href="#!" className="bold font__size--14 text__14-1024 btn__action-more color__white text-uppercase">Contact us</a>
                        </div>
                    </div>
                    <div className="items">
                        <div className="row justify-content-center position-relative z-2">
                            <div className="col-md-7">
                                <div className="mb-5 text-center">
                                    <p className="medium font__size--16 text__16-1024 text-uppercase text__gr-default">Service</p>
                                    <h2 className="semi-bold font__size--48 text__48-1024 text__48-md text__48-sm mb-0">VR Games</h2>
                                </div>
                                <p className='light font__size--16 text__16-1024 color__gray-1 mb-3'>At our VR design service, we specialize in creating immersive and engaging virtual reality experiences that transport your audience to a whole new world. Our team of experienced designers and developers work together to create VR experiences that are not only visually stunning but also interactive and user-friendly.</p>
                                <p className='light font__size--16 text__16-1024 color__gray-1 mb-0'>We take a collaborative approach to our VR design process, working closely with you to understand your specific needs and goals. Whether you're looking to create a VR training program, a marketing campaign, or a game, we can help you bring your idealife.</p>

                                <div className="row my-5 justify-content-center">
                                    <div className="col-md-8">
                                        <div className="wrapper__wrap-service">
                                            <h5 className='normal font__size--16 text__16-1024 mb-3'>Our VR design services include:</h5>

                                            <ul className='list__data'>
                                                <li>
                                                    <div className="d-flex">
                                                        <img src="./../images/check-box (1).png" className='object-fit-content' alt="" />
                                                        <span className='ml-2 normal font__size--16 text__16-1024'>Concept development and ideation</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <img src="./../images/check-box (1).png" className='object-fit-content' alt="" />
                                                        <span className='ml-2 normal font__size--16 text__16-1024'>Storyboarding and scriptwriting</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <img src="./../images/check-box (1).png" className='object-fit-content' alt="" />
                                                        <span className='ml-2 normal font__size--16 text__16-1024'>3D modeling and animation</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <img src="./../images/check-box (1).png" className='object-fit-content' alt="" />
                                                        <span className='ml-2 normal font__size--16 text__16-1024'>User interface design and development</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <img src="./../images/check-box (1).png" className='object-fit-content' alt="" />
                                                        <span className='ml-2 normal font__size--16 text__16-1024'>Sound design and effects</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <img src="./../images/check-box (1).png" className='object-fit-content' alt="" />
                                                        <span className='ml-2 normal font__size--16 text__16-1024'>Quality assurance testing and optimization</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>


                                <p className='light font__size--16 text__16-1024 color__gray-1 mb-3'>We use the latest VR technologies and software to create immersive experiences that are fully customized to your brand and message. We understand that every project is unique, and we work closely with you to ensure that we create a VR experience that perfectly matches your vision.</p>
                                <p className='light font__size--16 text__16-1024 color__gray-1 mb-3'>At our VR design service, we are committed to delivering high-quality VR experiences that engage, educate, and inspire your audience. Contact us today to discuss how we can help bring your ideas to life with our VR design services.</p>
                            </div>
                        </div>

                        <div className="text-center mt-5">
                            <a href="#!" className="bold font__size--14 text__14-1024 btn__action-more color__white text-uppercase">Contact us</a>
                        </div>
                    </div>
                    <div className="items">
                        <div className="row justify-content-center position-relative z-2">
                            <div className="col-md-7">
                                <div className="mb-5 text-center">
                                    <p className="medium font__size--16 text__16-1024 text-uppercase text__gr-default">Service</p>
                                    <h2 className="semi-bold font__size--48 text__48-1024 text__48-md text__48-sm mb-0">VR Events</h2>
                                </div>
                                <p className='light font__size--16 text__16-1024 color__gray-1 mb-3'>At our VR design service, we specialize in creating immersive and engaging virtual reality experiences that transport your audience to a whole new world. Our team of experienced designers and developers work together to create VR experiences that are not only visually stunning but also interactive and user-friendly.</p>
                                <p className='light font__size--16 text__16-1024 color__gray-1 mb-0'>We take a collaborative approach to our VR design process, working closely with you to understand your specific needs and goals. Whether you're looking to create a VR training program, a marketing campaign, or a game, we can help you bring your idealife.</p>

                                <div className="row my-5 justify-content-center">
                                    <div className="col-md-8">
                                        <div className="wrapper__wrap-service">
                                            <h5 className='normal font__size--16 text__16-1024 mb-3'>Our VR design services include:</h5>

                                            <ul className='list__data'>
                                                <li>
                                                    <div className="d-flex">
                                                        <img src="./../images/check-box (1).png" className='object-fit-content' alt="" />
                                                        <span className='ml-2 normal font__size--16 text__16-1024'>Concept development and ideation</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <img src="./../images/check-box (1).png" className='object-fit-content' alt="" />
                                                        <span className='ml-2 normal font__size--16 text__16-1024'>Storyboarding and scriptwriting</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <img src="./../images/check-box (1).png" className='object-fit-content' alt="" />
                                                        <span className='ml-2 normal font__size--16 text__16-1024'>3D modeling and animation</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <img src="./../images/check-box (1).png" className='object-fit-content' alt="" />
                                                        <span className='ml-2 normal font__size--16 text__16-1024'>User interface design and development</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <img src="./../images/check-box (1).png" className='object-fit-content' alt="" />
                                                        <span className='ml-2 normal font__size--16 text__16-1024'>Sound design and effects</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <img src="./../images/check-box (1).png" className='object-fit-content' alt="" />
                                                        <span className='ml-2 normal font__size--16 text__16-1024'>Quality assurance testing and optimization</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>


                                <p className='light font__size--16 text__16-1024 color__gray-1 mb-3'>We use the latest VR technologies and software to create immersive experiences that are fully customized to your brand and message. We understand that every project is unique, and we work closely with you to ensure that we create a VR experience that perfectly matches your vision.</p>
                                <p className='light font__size--16 text__16-1024 color__gray-1 mb-3'>At our VR design service, we are committed to delivering high-quality VR experiences that engage, educate, and inspire your audience. Contact us today to discuss how we can help bring your ideas to life with our VR design services.</p>
                            </div>
                        </div>

                        <div className="text-center mt-5">
                            <a href="#!" className="bold font__size--14 text__14-1024 btn__action-more color__white text-uppercase">Contact us</a>
                        </div>
                    </div>
                    <div className="items">
                        <div className="row justify-content-center position-relative z-2">
                            <div className="col-md-7">
                                <div className="mb-5 text-center">
                                    <p className="medium font__size--16 text__16-1024 text-uppercase text__gr-default">Service</p>
                                    <h2 className="semi-bold font__size--48 text__48-1024 text__48-md text__48-sm mb-0">VR Design</h2>
                                </div>
                                <p className='light font__size--16 text__16-1024 color__gray-1 mb-3'>At our VR design service, we specialize in creating immersive and engaging virtual reality experiences that transport your audience to a whole new world. Our team of experienced designers and developers work together to create VR experiences that are not only visually stunning but also interactive and user-friendly.</p>
                                <p className='light font__size--16 text__16-1024 color__gray-1 mb-0'>We take a collaborative approach to our VR design process, working closely with you to understand your specific needs and goals. Whether you're looking to create a VR training program, a marketing campaign, or a game, we can help you bring your idealife.</p>

                                <div className="row my-5 justify-content-center">
                                    <div className="col-md-8">
                                        <div className="wrapper__wrap-service">
                                            <h5 className='normal font__size--16 text__16-1024 mb-3'>Our VR design services include:</h5>

                                            <ul className='list__data'>
                                                <li>
                                                    <div className="d-flex">
                                                        <img src="./../images/check-box (1).png" className='object-fit-content' alt="" />
                                                        <span className='ml-2 normal font__size--16 text__16-1024'>Concept development and ideation</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <img src="./../images/check-box (1).png" className='object-fit-content' alt="" />
                                                        <span className='ml-2 normal font__size--16 text__16-1024'>Storyboarding and scriptwriting</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <img src="./../images/check-box (1).png" className='object-fit-content' alt="" />
                                                        <span className='ml-2 normal font__size--16 text__16-1024'>3D modeling and animation</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <img src="./../images/check-box (1).png" className='object-fit-content' alt="" />
                                                        <span className='ml-2 normal font__size--16 text__16-1024'>User interface design and development</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <img src="./../images/check-box (1).png" className='object-fit-content' alt="" />
                                                        <span className='ml-2 normal font__size--16 text__16-1024'>Sound design and effects</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <img src="./../images/check-box (1).png" className='object-fit-content' alt="" />
                                                        <span className='ml-2 normal font__size--16 text__16-1024'>Quality assurance testing and optimization</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>


                                <p className='light font__size--16 text__16-1024 color__gray-1 mb-3'>We use the latest VR technologies and software to create immersive experiences that are fully customized to your brand and message. We understand that every project is unique, and we work closely with you to ensure that we create a VR experience that perfectly matches your vision.</p>
                                <p className='light font__size--16 text__16-1024 color__gray-1 mb-3'>At our VR design service, we are committed to delivering high-quality VR experiences that engage, educate, and inspire your audience. Contact us today to discuss how we can help bring your ideas to life with our VR design services.</p>
                            </div>
                        </div>

                        <div className="text-center mt-5">
                            <a href="#!" className="bold font__size--14 text__14-1024 btn__action-more color__white text-uppercase">Contact us</a>
                        </div>
                    </div>
                    <div className="items">
                        <div className="row justify-content-center position-relative z-2">
                            <div className="col-md-7">
                                <div className="mb-5 text-center">
                                    <p className="medium font__size--16 text__16-1024 text-uppercase text__gr-default">Service</p>
                                    <h2 className="semi-bold font__size--48 text__48-1024 text__48-md text__48-sm mb-0">VR Consulting</h2>
                                </div>
                                <p className='light font__size--16 text__16-1024 color__gray-1 mb-3'>At our VR design service, we specialize in creating immersive and engaging virtual reality experiences that transport your audience to a whole new world. Our team of experienced designers and developers work together to create VR experiences that are not only visually stunning but also interactive and user-friendly.</p>
                                <p className='light font__size--16 text__16-1024 color__gray-1 mb-0'>We take a collaborative approach to our VR design process, working closely with you to understand your specific needs and goals. Whether you're looking to create a VR training program, a marketing campaign, or a game, we can help you bring your idealife.</p>

                                <div className="row my-5 justify-content-center">
                                    <div className="col-md-8">
                                        <div className="wrapper__wrap-service">
                                            <h5 className='normal font__size--16 text__16-1024 mb-3'>Our VR design services include:</h5>

                                            <ul className='list__data'>
                                                <li>
                                                    <div className="d-flex">
                                                        <img src="./../images/check-box (1).png" className='object-fit-content' alt="" />
                                                        <span className='ml-2 normal font__size--16 text__16-1024'>Concept development and ideation</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <img src="./../images/check-box (1).png" className='object-fit-content' alt="" />
                                                        <span className='ml-2 normal font__size--16 text__16-1024'>Storyboarding and scriptwriting</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <img src="./../images/check-box (1).png" className='object-fit-content' alt="" />
                                                        <span className='ml-2 normal font__size--16 text__16-1024'>3D modeling and animation</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <img src="./../images/check-box (1).png" className='object-fit-content' alt="" />
                                                        <span className='ml-2 normal font__size--16 text__16-1024'>User interface design and development</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <img src="./../images/check-box (1).png" className='object-fit-content' alt="" />
                                                        <span className='ml-2 normal font__size--16 text__16-1024'>Sound design and effects</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <img src="./../images/check-box (1).png" className='object-fit-content' alt="" />
                                                        <span className='ml-2 normal font__size--16 text__16-1024'>Quality assurance testing and optimization</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>


                                <p className='light font__size--16 text__16-1024 color__gray-1 mb-3'>We use the latest VR technologies and software to create immersive experiences that are fully customized to your brand and message. We understand that every project is unique, and we work closely with you to ensure that we create a VR experience that perfectly matches your vision.</p>
                                <p className='light font__size--16 text__16-1024 color__gray-1 mb-3'>At our VR design service, we are committed to delivering high-quality VR experiences that engage, educate, and inspire your audience. Contact us today to discuss how we can help bring your ideas to life with our VR design services.</p>
                            </div>
                        </div>

                        <div className="text-center mt-5">
                            <a href="#!" className="bold font__size--14 text__14-1024 btn__action-more color__white text-uppercase">Contact us</a>
                        </div>
                    </div>
                    <div className="items">
                        <div className="row justify-content-center position-relative z-2">
                            <div className="col-md-7">
                                <div className="mb-5 text-center">
                                    <p className="medium font__size--16 text__16-1024 text-uppercase text__gr-default">Service</p>
                                    <h2 className="semi-bold font__size--48 text__48-1024 text__48-md text__48-sm mb-0">VR Entertainment</h2>
                                </div>
                                <p className='light font__size--16 text__16-1024 color__gray-1 mb-3'>At our VR design service, we specialize in creating immersive and engaging virtual reality experiences that transport your audience to a whole new world. Our team of experienced designers and developers work together to create VR experiences that are not only visually stunning but also interactive and user-friendly.</p>
                                <p className='light font__size--16 text__16-1024 color__gray-1 mb-0'>We take a collaborative approach to our VR design process, working closely with you to understand your specific needs and goals. Whether you're looking to create a VR training program, a marketing campaign, or a game, we can help you bring your idealife.</p>

                                <div className="row my-5 justify-content-center">
                                    <div className="col-md-8">
                                        <div className="wrapper__wrap-service">
                                            <h5 className='normal font__size--16 text__16-1024 mb-3'>Our VR design services include:</h5>

                                            <ul className='list__data'>
                                                <li>
                                                    <div className="d-flex">
                                                        <img src="./../images/check-box (1).png" className='object-fit-content' alt="" />
                                                        <span className='ml-2 normal font__size--16 text__16-1024'>Concept development and ideation</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <img src="./../images/check-box (1).png" className='object-fit-content' alt="" />
                                                        <span className='ml-2 normal font__size--16 text__16-1024'>Storyboarding and scriptwriting</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <img src="./../images/check-box (1).png" className='object-fit-content' alt="" />
                                                        <span className='ml-2 normal font__size--16 text__16-1024'>3D modeling and animation</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <img src="./../images/check-box (1).png" className='object-fit-content' alt="" />
                                                        <span className='ml-2 normal font__size--16 text__16-1024'>User interface design and development</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <img src="./../images/check-box (1).png" className='object-fit-content' alt="" />
                                                        <span className='ml-2 normal font__size--16 text__16-1024'>Sound design and effects</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <img src="./../images/check-box (1).png" className='object-fit-content' alt="" />
                                                        <span className='ml-2 normal font__size--16 text__16-1024'>Quality assurance testing and optimization</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>


                                <p className='light font__size--16 text__16-1024 color__gray-1 mb-3'>We use the latest VR technologies and software to create immersive experiences that are fully customized to your brand and message. We understand that every project is unique, and we work closely with you to ensure that we create a VR experience that perfectly matches your vision.</p>
                                <p className='light font__size--16 text__16-1024 color__gray-1 mb-3'>At our VR design service, we are committed to delivering high-quality VR experiences that engage, educate, and inspire your audience. Contact us today to discuss how we can help bring your ideas to life with our VR design services.</p>
                            </div>
                        </div>

                        <div className="text-center mt-5">
                            <a href="#!" className="bold font__size--14 text__14-1024 btn__action-more color__white text-uppercase">Contact us</a>
                        </div>
                    </div>
                    <div className="items">
                        <div className="row justify-content-center position-relative z-2">
                            <div className="col-md-7">
                                <div className="mb-5 text-center">
                                    <p className="medium font__size--16 text__16-1024 text-uppercase text__gr-default">Service</p>
                                    <h2 className="semi-bold font__size--48 text__48-1024 text__48-md text__48-sm mb-0">Client Testimony</h2>
                                </div>
                                <p className='light font__size--16 text__16-1024 color__gray-1 mb-3'>At our VR design service, we specialize in creating immersive and engaging virtual reality experiences that transport your audience to a whole new world. Our team of experienced designers and developers work together to create VR experiences that are not only visually stunning but also interactive and user-friendly.</p>
                                <p className='light font__size--16 text__16-1024 color__gray-1 mb-0'>We take a collaborative approach to our VR design process, working closely with you to understand your specific needs and goals. Whether you're looking to create a VR training program, a marketing campaign, or a game, we can help you bring your idealife.</p>

                                <div className="row my-5 justify-content-center">
                                    <div className="col-md-8">
                                        <div className="wrapper__wrap-service">
                                            <h5 className='normal font__size--16 text__16-1024 mb-3'>Our VR design services include:</h5>

                                            <ul className='list__data'>
                                                <li>
                                                    <div className="d-flex">
                                                        <img src="./../images/check-box (1).png" className='object-fit-content' alt="" />
                                                        <span className='ml-2 normal font__size--16 text__16-1024'>Concept development and ideation</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <img src="./../images/check-box (1).png" className='object-fit-content' alt="" />
                                                        <span className='ml-2 normal font__size--16 text__16-1024'>Storyboarding and scriptwriting</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <img src="./../images/check-box (1).png" className='object-fit-content' alt="" />
                                                        <span className='ml-2 normal font__size--16 text__16-1024'>3D modeling and animation</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <img src="./../images/check-box (1).png" className='object-fit-content' alt="" />
                                                        <span className='ml-2 normal font__size--16 text__16-1024'>User interface design and development</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <img src="./../images/check-box (1).png" className='object-fit-content' alt="" />
                                                        <span className='ml-2 normal font__size--16 text__16-1024'>Sound design and effects</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <img src="./../images/check-box (1).png" className='object-fit-content' alt="" />
                                                        <span className='ml-2 normal font__size--16 text__16-1024'>Quality assurance testing and optimization</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>


                                <p className='light font__size--16 text__16-1024 color__gray-1 mb-3'>We use the latest VR technologies and software to create immersive experiences that are fully customized to your brand and message. We understand that every project is unique, and we work closely with you to ensure that we create a VR experience that perfectly matches your vision.</p>
                                <p className='light font__size--16 text__16-1024 color__gray-1 mb-3'>At our VR design service, we are committed to delivering high-quality VR experiences that engage, educate, and inspire your audience. Contact us today to discuss how we can help bring your ideas to life with our VR design services.</p>
                            </div>
                        </div>

                        <div className="text-center mt-5">
                            <a href="#!" className="bold font__size--14 text__14-1024 btn__action-more color__white text-uppercase">Contact us</a>
                        </div>
                    </div>
                </Slider>
            </div>
        </Fragment>
    )
}

export default SliderDetailDesc