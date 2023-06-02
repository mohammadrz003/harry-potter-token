import React, { useState } from 'react'
import { Fragment } from 'react'
import Footer from '../../component/Other/Footer'
import Navbar from '../../component/Other/Navbar'
import Head from '../../component/Page/Head'
import SecSubscribe from '../../component/Page/SecSubscribe'

const Terms = () => {
    return (
        <Fragment>
            <div className="overflow-hidden position-relative">
                <img src="./../images/sdsad.png" className="images__head-top" alt="" />
                <Navbar />
                <Head title={"Tems & Conditions"} sub={"Tems & Conditions"} />

                <section className='position-relative pt__md-0'>
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
                            <p className="medium font__size--16 text__16-1024 text-uppercase text__gr-default">Tems & Conditions</p>
                            <h2 className="semi-bold font__size--48 text__48-1024 text__48-md text__48-sm mb-0">Terms and Conditions</h2>
                            <p className='light font__size--16 text__16-1024 color__gray-1'>Welcome to VRNas. Please read these Terms and Conditions carefully before using our <br /> website and services.</p>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-md-10 col-xl-8">
                                <div className="mb-4">
                                    <h4 className='medium font__size--20 text__20-1024'>Acceptance of Term</h4>
                                    <p className='light font__size--16 text__16-1024 color__gray-1'>By accessing or using any part of our website or services, you agree to be bound by these Terms and Conditions. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services.</p>
                                </div>
                                <div className="mb-4">
                                    <h4 className='medium font__size--20 text__20-1024'>Use of Website and Services</h4>
                                    <p className='light font__size--16 text__16-1024 color__gray-1'>You may use our website and services solely for lawful purposes and in accordance with these Terms and Conditions. You agree not to use our website or services:</p>

                                    <ul className='light font__size--16 text__16-1024 color__gray-1'>
                                        <li>In any way that violates any applicable federal, state, local or international law or regulation.</li>
                                        <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter" or "spam" or any other similar solicitation.</li>
                                        <li>To impersonate or attempt to impersonate [Company Name], a [Company Name] employee, another user or any other person or entity.</li>
                                        <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the website or services, or which, as determined by us, may harm [Company Name] or users of the website or services or expose them to liability.</li>
                                    </ul>
                                </div>

                                <div className="mb-4">
                                    <h4 className='medium font__size--20 text__20-1024'>Intellectual Property</h4>
                                    <p className='light font__size--16 text__16-1024 color__gray-1'>The content and materials available on our website and services, including but not limited to text, graphics, logos, images, and software, are the property of [Company Name] or its licensors and are protected by copyright, trademark, and other intellectual property laws.</p>
                                    <p className='light font__size--16 text__16-1024 color__gray-1'>You may not use any of our content or materials for commercial purposes without obtaining a license to do so from [Company Name] or its licensors.</p>
                                </div>

                                <div className="mb-4">
                                    <h4 className='medium font__size--20 text__20-1024'>Limitation of Liability</h4>
                                    <p className='light font__size--16 text__16-1024 color__gray-1'>In no event shall [Company Name] be liable for any direct, indirect, incidental, consequential, special, or exemplary damages arising out of or in connection with your use of our website or services.</p>
                                </div>

                                <div className="mb-4">
                                    <h4 className='medium font__size--20 text__20-1024'>Changes to Terms and Conditions</h4>
                                    <p className='light font__size--16 text__16-1024 color__gray-1'>We reserve the right, at our sole discretion, to modify or replace these Terms and Conditions at any time. By continuing to access or use our website and services after any revisions become effective, you agree to be bound by the revised terms.</p>
                                </div>
                                <div className="mb-4">
                                    <h4 className='medium font__size--20 text__20-1024'>Contact Us</h4>
                                    <p className='light font__size--16 text__16-1024 color__gray-1'>If you have any questions about these Terms and Conditions, please contact us using the information provided on our contact page.</p>
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

export default Terms