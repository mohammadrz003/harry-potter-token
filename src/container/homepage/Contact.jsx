import React, { useState } from 'react'
import { Fragment } from 'react'
import Footer from '../../component/Other/Footer'
import Navbar from '../../component/Other/Navbar'
import Head from '../../component/Page/Head'
import SecServiceCount from "../../component/Page/SecServiceCount"
import SecSubscribe from '../../component/Page/SecSubscribe'

const Contact = () => {
    return (
        <Fragment>
            <div className="overflow-hidden position-relative">
                <img src="./../images/sdsad.png" className="images__head-top" alt="" />
                <Navbar />
                <Head title={"Contact Us"} sub={"Contact Us"} />

                <section className='pt-0'>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 mb-4 mb-md-0">
                                <div className="wrapper__card-contact-detai text-center">
                                    <img src="./../images/cc (3).png" className='mb-4' alt="" />
                                    <div>
                                        <p className="medium font__size--16 text__16-1024 text-uppercase text__gr-default">EMAIL</p>
                                        <h5 className='mb-0 light font__size--20 text__20-1024'>Support@VRNas.com</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4 mb-md-0">
                                <div className="wrapper__card-contact-detai text-center">
                                    <img src="./../images/cc (2).png" className='mb-4' alt="" />
                                    <div>
                                        <p className="medium font__size--16 text__16-1024 text-uppercase text__gr-default">ADDRESS</p>
                                        <h5 className='mb-0 light font__size--20 text__20-1024'>Tanjung Sari Street no.48, Pontianak City</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4 mb-md-0">
                                <div className="wrapper__card-contact-detai text-center">
                                    <img src="./../images/cc (1).png" className='mb-4' alt="" />
                                    <div>
                                        <p className="medium font__size--16 text__16-1024 text-uppercase text__gr-default">PHONE</p>
                                        <h5 className='mb-0 light font__size--20 text__20-1024'>+123 456 7890</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 mt-4 mt-md-0 text-center text-md-left order-md-1 order-12">
                                <img src="./../images/sdsadsad.png" className='images__path-side-contact' alt="" />
                            </div>
                            <div className="col-md-6 z-2 order-1 order-md-12">
                                <p className="medium font__size--16 text__16-1024 text-uppercase text__gr-default">CONTACT US</p>
                                <h2 className="semi-bold font__size--48 text__48-1024 text__48-md text__48">Get in Touch</h2>
                                <p className="light font__size--16 text__16-1024 color__gray-1 mb-3">At VRNas, we're always happy to hear from our clients and potential clients. Whether you have a question about our VR services, want to discuss a potential project, or just want to say hello, we're here to help.</p>

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className='form-control wrapper__input-field light font__size--16 text__16-1024 color__white' placeholder="First Name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className='form-control wrapper__input-field light font__size--16 text__16-1024 color__white' placeholder="Last Name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className='form-control wrapper__input-field light font__size--16 text__16-1024 color__white' placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className='form-control wrapper__input-field light font__size--16 text__16-1024 color__white' placeholder="Phone Number" />
                                        </div>
                                    </div>
                                </div>

                                <textarea name="" className='form-control wrapper__input-field light font__size--16 text__16-1024 color__white textarea mb-4' placeholder='Message' id="" cols="30" rows="10"></textarea>

                                <button href="#!" className="bold font__size--14 text__14-1024 btn__action-more color__white ls__1 text-uppercase">send message</button>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <img src="./../images/Group 1000003203.png" className='w-100' alt="" />
                    </div>
                </section>

                <SecSubscribe />

                <Footer />
            </div>
        </Fragment>
    )
}

export default Contact