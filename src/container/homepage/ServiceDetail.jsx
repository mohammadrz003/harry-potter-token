import React, { useRef, useState } from 'react'
import { Fragment } from 'react'
import Footer from '../../component/Other/Footer'
import Navbar from '../../component/Other/Navbar'
import Head from '../../component/Page/Head'
import SecChoose from '../../component/Page/SecChoose'
import SecSubscribe from '../../component/Page/SecSubscribe'
import SliderCircle from '../../component/Slider/SliderCircle'
import SliderDetailDesc from '../../component/Slider/SliderDetailDesc'

const ServiceDetail = () => {
    const video = useRef(null);

    return (
        <Fragment>
            <div className="overflow-hidden position-relative">
                <img src="./../images/sdsad.png" className="images__head-top" alt="" />
                <Navbar />
                <Head title={"Detail Service"} sub={"Detail Service"} />

                <section>
                    <div className="container">

                        <SliderCircle />

                    </div>
                </section>

                <section>
                    <div className="container">
                        <div className="text-center mb-5">
                            <p className="medium font__size--16 text__16-1024 text-uppercase text__gr-default">OUR VR DESIGN PROJECT</p>
                            <h2 className="semi-bold font__size--48 text__48-1024 text__48-md text__48-sm mb-0">Revolutionize Your Experience with Our <br /> Cutting-Edge VR Design Project</h2>
                        </div>

                        <div className="wrapper__video-wrap position-relative mb-5">
                            <div className="desc">
                                <div className="tag mb-2 medium font__size--14 text__14-1024">VR Design</div>
                                <h4 className="medium font__size--36">VR Design Projects</h4>
                            </div>
                            <video
                                ref={video}
                                id="myVideo"
                                poster="./../images/sasa.png"
                                controls={true}
                                playsInline
                                preload="auto"
                                loop
                                muted
                            >
                                <source
                                    src="./../images/_import_6074c15f84e8d8.40886416_preview.mp4"
                                    type="video/mp4"
                                />
                                Your browser does not support the video tag.
                            </video>
                        </div>

                        <div className="text-center">
                            <a href="#!" className="bold font__size--14 text__14-1024 btn__action-more color__white ls__1 text-uppercase">GET STARTED</a>
                        </div>
                    </div>
                </section>

                <SecChoose status={"center"} />

                <SecSubscribe />

                <Footer />
            </div>
        </Fragment>
    )
}

export default ServiceDetail