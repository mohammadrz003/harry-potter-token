import React, { useState } from 'react'
import { Fragment } from 'react'
import Footer from '../../component/Other/Footer'
import Navbar from '../../component/Other/Navbar'
import Head from '../../component/Page/Head'
import SecSubscribe from '../../component/Page/SecSubscribe'

const Policy = () => {
    return (
        <Fragment>
            <div className="overflow-hidden position-relative">
                <img src="./../images/sdsad.png" className="images__head-top" alt="" />
                <Navbar />
                <Head title={"Privacy Policy"} sub={"Privacy Policy"} />

                <section className='position-relative'>
                    <div className="images__top-path left">
                        <div className="position-relative">
                            <img src="./../images/aa (1).png" alt="" />
                        </div>
                    </div>
                    <div className="images__top-path right">
                        <div className="position-relative">
                            <img src="./../images/aa (2).png" alt="" />
                        </div>
                    </div>
                    <div className="container position-relative z-2">
                        <div className="text-center mb-5">
                            <p className="medium font__size--16 text__16-1024 text-uppercase text__gr-default">Privacy Policy</p>
                            <h2 className="semi-bold font__size--48 text__48-1024 text__48-md text__48-sm mb-0">Privacy Policy</h2>
                            <p className='light font__size--16 text__16-1024 color__gray-1'>This Privacy Policy describes how [Company Name] collects, uses, and protects the <br /> personal information of our website visitors and customers.</p>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-md-8">

                                <div className="mb-4">
                                    <h4 className='medium font__size--20 text__20-1024'>Information We Collect</h4>
                                    <p className='light font__size--16 text__16-1024 color__gray-1'>We may collect the following types of personal information:</p>

                                    <ul className='light font__size--16 text__16-1024 color__gray-1'>
                                        <li>Name, email address, and other contact information.</li>
                                        <li>Demographic information such as age, gender, and location.</li>
                                        <li>Payment information such as credit card details.</li>
                                        <li>Information about how you use our website and services.</li>
                                    </ul>
                                </div>

                                <div className="mb-4">
                                    <h4 className='medium font__size--20 text__20-1024'>How We Use Your Information</h4>
                                    <p className='light font__size--16 text__16-1024 color__gray-1'>We may use your personal information for the following purposes:</p>

                                    <ul className='light font__size--16 text__16-1024 color__gray-1'>
                                        <li>To provide you with our services and products.</li>
                                        <li>To process payments and fulfill orders.</li>
                                        <li>To send you marketing and promotional materials.</li>
                                        <li>To improve our website and services.</li>
                                    </ul>
                                </div>

                                <div className="mb-4">
                                    <h4 className='medium font__size--20 text__20-1024'>How We Protect Your Information</h4>
                                    <p className='light font__size--16 text__16-1024 color__gray-1'>We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information. We use encryption to protect sensitive information transmitted online, and we also protect your information offline.</p>
                                </div>

                                <div className="mb-4">
                                    <h4 className='medium font__size--20 text__20-1024'>Information Sharing</h4>
                                    <p className='light font__size--16 text__16-1024 color__gray-1'>We do not sell or rent your personal information to third parties. However, we may share your information with our trusted third-party service providers who assist us in operating our website and services.</p>
                                </div>

                                <div className="mb-4">
                                    <h4 className='medium font__size--20 text__20-1024'>Cookies and Tracking</h4>
                                    <p className='light font__size--16 text__16-1024 color__gray-1'>We use cookies and other tracking technologies to collect information about your browsing behavior and preferences. This information is used to personalize your experience on our website and to analyze how visitors use our website.</p>
                                </div>

                                <div className="mb-4">
                                    <h4 className='medium font__size--20 text__20-1024'>Your Rights</h4>
                                    <p className='light font__size--16 text__16-1024 color__gray-1'>You have the right to access, update, or delete your personal information. You can contact us using the information provided on our contact page to exercise these rights.</p>
                                </div>

                                <div className="mb-4">
                                    <h4 className='medium font__size--20 text__20-1024'>Changes to Privacy Policy</h4>
                                    <p className='light font__size--16 text__16-1024 color__gray-1'>We reserve the right to update this Privacy Policy at any time. We will notify you of any changes by posting the new Privacy Policy on our website.</p>
                                </div>

                                <div className="mb-4">
                                    <h4 className='medium font__size--20 text__20-1024'>Contact Us</h4>
                                    <p className='light font__size--16 text__16-1024 color__gray-1'>If you have any questions about our Privacy Policy, please contact us using the information provided on our contact page.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <SecSubscribe />

                <Footer />
            </div>
        </Fragment>
    )
}

export default Policy