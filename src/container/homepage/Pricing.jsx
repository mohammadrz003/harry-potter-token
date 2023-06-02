import React, { useState } from 'react'
import { Fragment } from 'react'
import Footer from '../../component/Other/Footer'
import Navbar from '../../component/Other/Navbar'
import Head from '../../component/Page/Head'
import SecChooseSecon from '../../component/Page/SecChooseSecon'
import SecFaq from '../../component/Page/SecFaq'
import SecSubscribe from '../../component/Page/SecSubscribe'

const Pricing = () => {
    return (
        <Fragment>
            <div className="overflow-hidden position-relative">
                <img src="./../images/sdsad.png" className="images__head-top" alt="" />
                <Navbar />
                <Head title={"Pricing Plan"} sub={"Pricing Plan"} />

                <section className='pt__md-0'>
                    <div className="container">
                        <div className="mb-5 text-center">
                            <p className="medium font__size--16 text__16-1024 text-uppercase text__gr-default">PRICING</p>
                            <h2 className="semi-bold font__size--48 text__48-1024 text__48-md text__48-sm mb-0">Pricing Plans</h2>
                            <p className='light font__size--16 text__16-1024 color__gray-1'>Choose the pricing plan that fits your needs and budget. All plans come with a free trial period so you can <br />test out our service and see which plan works best for you.</p>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                                <div className="wrapper__price-list">
                                    <p className='normal font__size--18 text__18-1024 mb-3'>Basic Plan</p>
                                    <h4 className='normal font__size--60 text__60-1024 text__60-sm text__60-xxs mb-3'>$99<sub className='normal font__size--16 text__16-1024 color__gray-2'>/ month</sub></h4>
                                    <p className='normal font__size--16 text__16-1024 color__gray-3 mb-3'>All the basic features to boost your freelance career</p>

                                    <ul className='list__price-data mb-4'>
                                        <li>
                                            <div className="d-flex align-items-start">
                                                <img src="./../images/check-circle.png" className='object-fit-content mt-2' alt="" />
                                                <span className='medium font__size--16 text__16-1024 ml-2'>Access to a selection of VR games and experiences</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-start">
                                                <img src="./../images/check-circle.png" className='object-fit-content mt-2' alt="" />
                                                <span className='medium font__size--16 text__16-1024 ml-2'>Limited access to educational content</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-start">
                                                <img src="./../images/check-circle.png" className='object-fit-content mt-2' alt="" />
                                                <span className='medium font__size--16 text__16-1024 ml-2'>Limited access to architecture and design tools</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-start">
                                                <img src="./../images/check-circle.png" className='object-fit-content mt-2' alt="" />
                                                <span className='medium font__size--16 text__16-1024 ml-2'>No access to exclusive events or promotions</span>
                                            </div>
                                        </li>
                                    </ul>

                                    <a href="#!" className='bold font__size--14 text__14-1024 btn__action-price color__white'>Get 14 Days Free Trial</a>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                                <div className="wrapper__price-list active">
                                    <p className='normal font__size--18 text__18-1024 mb-3'>Standard Plan</p>
                                    <h4 className='normal font__size--60 text__60-1024 text__60-sm text__60-xxs mb-3'>$149<sub className='normal font__size--16 text__16-1024 color__gray-2'>/ month</sub></h4>
                                    <p className='normal font__size--16 text__16-1024 color__gray-3 mb-3'>All the basic features to boost your freelance career</p>

                                    <ul className='list__price-data mb-4'>
                                        <li>
                                            <div className="d-flex align-items-start">
                                                <img src="./../images/check-circle.png" className='object-fit-content mt-2' alt="" />
                                                <span className='medium font__size--16 text__16-1024 ml-2'>Access to a selection of VR games and experiences</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-start">
                                                <img src="./../images/check-circle.png" className='object-fit-content mt-2' alt="" />
                                                <span className='medium font__size--16 text__16-1024 ml-2'>Limited access to educational content</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-start">
                                                <img src="./../images/check-circle.png" className='object-fit-content mt-2' alt="" />
                                                <span className='medium font__size--16 text__16-1024 ml-2'>Limited access to architecture and design tools</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-start">
                                                <img src="./../images/check-circle.png" className='object-fit-content mt-2' alt="" />
                                                <span className='medium font__size--16 text__16-1024 ml-2'>No access to exclusive events or promotions</span>
                                            </div>
                                        </li>
                                    </ul>

                                    <a href="#!" className='bold font__size--14 text__14-1024 btn__action-price color__white'>Get 14 Days Free Trial</a>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                                <div className="wrapper__price-list">
                                    <p className='normal font__size--18 text__18-1024 mb-3'>Standard Plan</p>
                                    <h4 className='normal font__size--60 text__60-1024 text__60-sm text__60-xxs mb-3'>$200<sub className='normal font__size--16 text__16-1024 color__gray-2'>/ month</sub></h4>
                                    <p className='normal font__size--16 text__16-1024 color__gray-3 mb-3'>All the basic features to boost your freelance career</p>

                                    <ul className='list__price-data mb-4'>
                                        <li>
                                            <div className="d-flex align-items-start">
                                                <img src="./../images/check-circle.png" className='object-fit-content mt-2' alt="" />
                                                <span className='medium font__size--16 text__16-1024 ml-2'>Access to a selection of VR games and experiences</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-start">
                                                <img src="./../images/check-circle.png" className='object-fit-content mt-2' alt="" />
                                                <span className='medium font__size--16 text__16-1024 ml-2'>Limited access to educational content</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-start">
                                                <img src="./../images/check-circle.png" className='object-fit-content mt-2' alt="" />
                                                <span className='medium font__size--16 text__16-1024 ml-2'>Limited access to architecture and design tools</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-start">
                                                <img src="./../images/check-circle.png" className='object-fit-content mt-2' alt="" />
                                                <span className='medium font__size--16 text__16-1024 ml-2'>No access to exclusive events or promotions</span>
                                            </div>
                                        </li>
                                    </ul>

                                    <a href="#!" className='bold font__size--14 text__14-1024 btn__action-price color__white'>Get 14 Days Free Trial</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <SecChooseSecon />

                <SecFaq />

                <SecSubscribe />

                <Footer />
            </div>
        </Fragment>
    )
}

export default Pricing