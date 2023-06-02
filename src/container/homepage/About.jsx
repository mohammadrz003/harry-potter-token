import React, { useState } from 'react'
import { Fragment } from 'react'
import Footer from '../../component/Other/Footer'
import Navbar from '../../component/Other/Navbar'
import Head from '../../component/Page/Head'
import SecChooseSecon from '../../component/Page/SecChooseSecon'
import SecFaq from '../../component/Page/SecFaq'
import SecSubscribe from '../../component/Page/SecSubscribe'

const About = () => {

    const teamData = [
        {
            img: "./../images/rc (6).png",
            title: "CEO",
            name: "Bondan Prabowo",
            facebook: "#!",
            twitter: "#!",
            instagram: "#!",

        },
        {
            img: "./../images/rc (1).png",
            title: "VR Development",
            name: "Bayu Aji",
            facebook: "#!",
            twitter: "#!",
            instagram: "#!",

        },
        {
            img: "./../images/rc (3).png",
            title: "VR Artist",
            name: "Agung Brandon",
            facebook: "#!",
            twitter: "#!",
            instagram: "#!",

        },
        {
            img: "./../images/rc (2).png",
            title: "3D Designer",
            name: "Aldo Boy",
            facebook: "#!",
            twitter: "#!",
            instagram: "#!",

        },
    ]

    return (
        <Fragment>
            <div className="overflow-hidden position-relative">
                <img src="./../images/sdsad.png" className="images__head-top" alt="" />
                <Navbar />

                <Head title={"About Us"} sub={"About Us"} />


                <section className='pt__md-0'>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 my-auto">
                                <p className="medium font__size--16 text__16-1024 text-uppercase text__gr-default">ABOUT US</p>
                                <h2 className="semi-bold font__size--48 text__48-1024 text__48-md text__48-sm">Bring your events to life like never before with our VR services.</h2>
                                <p className="light font__size--16 text__16-1024 color__gray-1 mb-3">VRNas is a leading provider of VR services for education, entertainment, architecture, and events. Our mission is to bring the power of virtual reality to everyone, allowing them to explore new worlds, learn in new ways, and experience events in a whole new light.</p>
                                <p className="light font__size--16 text__16-1024 color__gray-1 mb-3">Our team consists of experienced VR developers, designers, and technicians who are passionate about VR and dedicated to delivering the highest quality work. We use the latest VR hardware and software to create immersive, interactive experiences that are tailored to your specific needs.</p>
                                <p className="light font__size--16 text__16-1024 color__gray-1 mb-3">From initial consultation to final delivery, we are committed to providing exceptional customer service. Our goal is to ensure that you are completely satisfied with every aspect of your VR experience.</p>

                            </div>
                            <div className="col-md-6 my-md-auto mt-4">
                                <img src="./../images/Group 81.png" className="position-relative z-2" alt="" />
                                <img src="./../images/Ellipse 34.png" className="images__bg-sec" alt="" />
                            </div>

                        </div>
                    </div>
                </section>


                <section>
                    <div className="container">
                        <div className="text-center mb-5">
                            <p className="medium font__size--16 text__16-1024 text-uppercase text__gr-default">DISCOVER</p>
                            <h2 className="semi-bold font__size--48 text__48-1024 text__48-md text__48-sm">Empowering Your Virtual <br className='d-none d-sm-block' /> Reality Experience</h2>
                        </div>

                        <div className="wrapper__sec-about">
                            <div className="row">
                                <div className="col-md-4 mb-4 mb-md-0">
                                    <img src="./../images/Frame 9.png" className="mb-4" alt="" />
                                    <h5 className="normal font__size--20 text__20-1024">Expertise</h5>
                                    <p className="normal font__size--14 text__14-1024 color__gray-1">Our team consists of experienced VR developers, designers, and technicians who have a passion for VR and a commitment to delivering quality work and give the best service</p>
                                </div>
                                <div className="col-md-4 mb-4 mb-md-0">
                                    <img src="./../images/Frame 10.png" className="mb-4" alt="" />
                                    <h5 className="normal font__size--20 text__20-1024">Customization</h5>
                                    <p className="normal font__size--14 text__14-1024 color__gray-1">Every client is unique, and we believe every VR experience should be too. We'll work with you to create a customized solution that meets your specific needs and goals</p>
                                </div>
                                <div className="col-md-4">
                                    <img src="./../images/Frame 11.png" className="mb-4" alt="" />
                                    <h5 className="normal font__size--20 text__20-1024">Service</h5>
                                    <p className="normal font__size--14 text__14-1024 color__gray-1">We believe in providing exceptional customer service, from initial consultation to final delivery. Our goal is to ensure you're satisfied with every aspect of your VR experience.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <SecChooseSecon />

                <section>
                    <div className="container">
                        <div className="d-flex flex-wrap align-items-end justify-content-center justify-content-md-between text-center text-md-left mb-5">
                            <div className="">
                                <p className="medium font__size--16 text__16-1024 text-uppercase text__gr-default">OUR Team</p>
                                <h2 className="semi-bold font__size--48 text__48-1024 text__48-md text__48-sm mb-0">Our Professionals Team</h2>
                            </div>
                            <a href='#!' className="ml-sm-3 bold font__size--14 text__14-1024 text__14-1024 btn__action width text-uppercase color__white pointer d-none d-md-block">see all</a>
                        </div>

                        <div className="row mb-5 mb-md-0">
                            {
                                teamData.map((obj) => {
                                    return <div className="col-md-6 col-xl-3 mb-4">
                                        <div className="wrapper__card-team about">
                                            <div className=" position-relative wrap">
                                                <img src={obj.img} className='cover' alt="" />
                                                <div className="bg"></div>
                                                <div className="sosmed">
                                                    <a href={obj.instagram}>
                                                        <img src="./../images/sss (3).png" alt="" />
                                                    </a>
                                                    <a href={obj.facebook}>
                                                        <img src="./../images/sss (2).png" alt="" />
                                                    </a>
                                                    <a href={obj.twitter}>
                                                        <img src="./../images/sss (1).png" alt="" />
                                                    </a>
                                                </div>

                                                <div className="about text-center">
                                                    <h5 className='normal font__size--20 text__20-1024'>{obj.name}</h5>
                                                    <p className='mb-0 normal font__size--14 text__14-1024 color__gray-1'>{obj.title}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </div>

                        <div className="text-center d-md-none">
                            <a href='#!' className="bold font__size--14 text__14-1024 text__14-1024 btn__action width text-uppercase color__white pointer">see all</a>
                        </div>
                    </div>
                </section>


                <section>
                    <div className="container">
                        <div className="mb-5 text-center">
                            <p className="medium font__size--16 text__16-1024 text-uppercase text__gr-default">Our Trusted Partners</p>
                            <h2 className="semi-bold font__size--48 text__48-1024 text__48-md text__48-sm mb-0">Discover the Companies We Work With</h2>
                        </div>

                        <div className="text-center">
                            <img src="./../images/Group 53.png" className="w-100" alt="" />
                        </div>

                    </div>
                </section>

                <SecFaq />

                <SecSubscribe />

                <Footer />
            </div>
        </Fragment>
    )
}

export default About