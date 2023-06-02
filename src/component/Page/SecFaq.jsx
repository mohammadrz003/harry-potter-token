import React from 'react'
import AccordionFaq from '../Other/AccordionFaq'

const SecFaq = () => {
    const dataAccordionFaq = [
        {
            title: "What is virtual reality?",
            desc: "Virtual reality (VR) is a technology that uses headsets or other devices to create a simulated environment. Users can interact with this environment as if it were real, allowing for immersive experiences in gaming, education, training, and more."
        },
        {
            title: "What types of VR services do you offer?",
            desc: "Virtual reality (VR) is a technology that uses headsets or other devices to create a simulated environment. Users can interact with this environment as if it were real, allowing for immersive experiences in gaming, education, training, and more."
        },
        {
            title: "How much does your VR services cost?",
            desc: "The cost of our VR services depends on several factors, including the type of service, the complexity of the project, and the amount of customization required. We're always happy to discuss pricing with our clients and provide transparent, upfront estimates for our services."
        },
        {
            title: "What equipment do I need to use your VR services?",
            desc: "Depending on the type of VR service you're interested in, you may need a VR headset or other specialized equipment. We offer VR equipment rental and sales to make it easy for you to access the tools you need for an exceptional VR experience."
        },
        {
            title: "Can I try out your VR services before I commit?",
            desc: `Absolutely! We offer demos and trial periods for many of our VR services to help you get a feel for what we can offer. Contact us today to learn more about trying out our VR services.
            If you have any other questions or concerns, please don't hesitate to contact us. Our team is always here to help and provide the information you need to make the best decisions for your VR needs.`
        },
    ]
    return (
        <section className='position-relative'>
            <img src="./../images/sasadsad.png" className='images__bg-wrap-faq' alt="" />
            <div className="container position-relative z-2">
                <div className="mb-5 text-center">
                    <p className="medium font__size--16 text__16-1024 text-uppercase text__gr-default">FAQ</p>
                    <h2 className="semi-bold font__size--48 text__48-1024 text__48-md text__48-sm mb-0">Frequently Asked Questions</h2>
                    <p className='light font__size--16 text__16-1024 color__gray-1'>At VRNas, we want to make sure that you have all the information you need to make informed decisions <br className='d-none d-lg-block' /> about our VR services. Here are some of the most common questions we receive:</p>
                </div>

                <div className="row justify-content-center">
                    <div className="col-md-8">
                        {
                            dataAccordionFaq.map((obj, i) => {
                                return <AccordionFaq data={obj} id={i} />
                            })
                        }

                    </div>
                </div>
            </div>
        </section>
    )
}

export default SecFaq