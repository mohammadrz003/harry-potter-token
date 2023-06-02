import React, { useState } from 'react'
import { Fragment } from 'react'
import Footer from '../../component/Other/Footer'
import Navbar from '../../component/Other/Navbar'
import Head from '../../component/Page/Head'
import SecServiceCount from "../../component/Page/SecServiceCount"
import SecSubscribe from '../../component/Page/SecSubscribe'

const Team = () => {
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

        {
            img: "./../images/rc (4).png",
            title: "CEUI / UX DesignerO",
            name: "Aril Laso",
            facebook: "#!",
            twitter: "#!",
            instagram: "#!",

        },
        {
            img: "./../images/rc (5).png",
            title: "3D Artist",
            name: "Beni Barak",
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
                <Head title={"Our Team"} sub={"Our Team"} />

                <section className='pt__md-0'>
                    <div className="container">
                        <div className="text-center mb-5">
                            <p className="medium font__size--16 text__16--1024 text-uppercase text__gr-default">OUR TEAM</p>
                            <h2 className="semi-bold font__size--48 text__48-1024 text__48-md text__48-sm mb-0">Meet Our Amazing Team</h2>
                        </div>

                        <div className="row">
                            {
                                teamData.map((obj) => {
                                    return <div className="col-md-6 col-xl-4 mb-4">
                                        <div className="wrapper__card-team">
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
                    </div>
                </section>

                <SecServiceCount />

                <SecSubscribe />

                <Footer />
            </div>
        </Fragment>
    )
}

export default Team