import React, { useState } from 'react'
import { Fragment } from 'react'
import Footer from '../../component/Other/Footer'
import Navbar from '../../component/Other/Navbar'
import Head from '../../component/Page/Head'
import SecSubscribe from '../../component/Page/SecSubscribe'

const Error = () => {
    return (
        <Fragment>
            <div className="overflow-hidden position-relative">
                <img src="./../images/sdsad.png" className="images__head-top" alt="" />
                <Navbar />

                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 ">

                                <p className="medium font__size--16 text__16-1024 text-uppercase text__gr-default">404 Error</p>
                                <h2 className="semi-bold font__size--48 text__48-1024 text__48-md text__48-sm mb-0">Page Not Found</h2>
                                <p className='light font__size--16 text__16-1024 color__gray-1'>Oops! It looks like the page you were looking for is not here. Here are some possible reasons why:</p>

                                <ul className='light font__size--16 text__16-1024 color__gray-1 mb-4'>
                                    <li>The page may have been moved or deleted.</li>
                                    <li>You may have mistyped the URL.</li>
                                    <li>There may be a temporary problem with our server.</li>
                                </ul>

                                <p className='light font__size--16 text__16-1024 color__gray-1'>You can try the following options to find what you're looking for:</p>

                                <ul className='light font__size--16 text__16-1024 color__gray-1 mb-4'>
                                    <li>Check the URL for typos or errors and try again.</li>
                                    <li>Go back to our homepage and browse from there.</li>
                                </ul>

                                <p className='light font__size--16 text__16-1024 color__gray-1 mb-4'>If you believe there's an issue with our website, please <span className='text__underline color__white'>contact us</span> using the information provided on our contact page.</p>

                                <a href="#!" className="bold font__size--14 text__14-1024 btn__action-more color__white ls__1 text-uppercase">back home</a>
                            </div>
                            <div className="col-lg-6 mt-4 mt-lg-0">
                                <img src="./../images/Group 32.png" className='images__side-error' alt="" />
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

export default Error