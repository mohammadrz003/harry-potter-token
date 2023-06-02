import React from 'react'
import { useState } from 'react'

const SecChooseSecon = () => {
    const dataAccordion = [
        {
            title: "Passionate and Experienced Team",
            desc: "We are proud of our team of VR experts who are passionate about VR and dedicated to delivering the highest quality work. Our team consists of experienced VR developers, designers, and technicians who have a proven track record of creating immersive and engaging VR experiences."
        },
        {
            title: "Customized Solutions",
            desc: "We understand that every client has unique needs and goals, which is why we offer customized VR solutions that are tailored to meet your specific requirements. From initial consultation to final delivery, we work closely with you to ensure that your VR experience is everything you envisioned."
        },
        {
            title: "Exceptional Customer Service",
            desc: "Our goal is to provide exceptional customer service from start to finish. We are committed to ensuring that you are completely satisfied with every aspect of your VR experience, and our team is always available to answer any questions and address any concerns you may have."
        },
    ]

    const [accordion, setAccordion] = useState(-1)

    const accordionFunc = (e) => {
        if (e == accordion) {
            setAccordion(-1);
        } else {
            setAccordion(e);
        }
    }

    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mb-4 my-md-auto">
                        <img src="./../images/Group 82.png" className="position-relative z-2" alt="" />
                        <img src="./../images/Ellipse 34.png" className="images__bg-sec" alt="" />
                    </div>
                    <div className="col-md-6 my-auto">
                        <p className="medium font__size--16 text__16-1024 text-uppercase text__gr-default">WHY CHOOSE US</p>
                        <h2 className="semi-bold font__size--48 text__48-1024 text__48-md text__48-sm mb-4">Why Choose Us for Your VR Needs</h2>

                        {
                            dataAccordion.map((obj, i) => {
                                return <div className={"wrapper__accordion-wrap mb-4 " + (accordion == i ? "active" : "")}>
                                    <div className={"head pointer "} onClick={() => accordionFunc(i)} >
                                        <h5 className="mb-0 semi-bold font__size--20 text__20-1024">{obj.title}</h5>
                                        <img src="./../images/expand_more_FILL0_wght400_GRAD0_opsz48.png" className="arrow ml-2" />
                                    </div>
                                    <hr />
                                    <div className="desc">
                                        <p className="mb-0 normal font__size--16 text__16-1024 color__gray-1">{obj.desc}</p>
                                    </div>
                                </div>
                            })
                        }



                    </div>
                </div>
            </div>
        </section>
    )
}

export default SecChooseSecon