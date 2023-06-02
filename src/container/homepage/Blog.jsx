import React, { useRef, useState } from 'react'
import { Fragment } from 'react'
import CardBlog from '../../component/Card/CardBlog'
import Footer from '../../component/Other/Footer'
import Navbar from '../../component/Other/Navbar'
import Head from '../../component/Page/Head'
import SecChoose from '../../component/Page/SecChoose'
import SecSubscribe from '../../component/Page/SecSubscribe'

const Blog = () => {
    const video = useRef(null);

    const blogData = [
        {
            tag: "VR Games",
            title: "Entertainment Goes Virtual: The Rise of VR Gaming",
            img: "./../images/bgg (4).png",
            link: "#!"
        },
        {
            tag: "VR Games",
            title: "Entertainment Goes Virtual: The Rise of VR Gaming",
            img: "./../images/bgg (3).png",
            link: "#!"
        },
        {
            tag: "VR Entertainment",
            title: "Making Events Memorable: The Power of VR for Corporate and Special Occasions",
            img: "./../images/bgg (1).png",
            link: "#!"
        },
        {
            tag: "VR Event",
            title: "Exploring New Worlds: The Benefits of VR Travel",
            img: "./../images/bgg (5).png",
            link: "#!"
        },
        {
            tag: "VR Architecture",
            title: "Bringing Designs to Life: How VR is Changing Architecture",
            img: "./../images/bgg (8).png",
            link: "#!"
        },
        {
            tag: "VR Games",
            title: "Entertainment Goes Virtual: The Rise of VR Gaming",
            img: "./../images/bgg (2).png",
            link: "#!"
        },
        {
            tag: "VR Games",
            title: "Entertainment Goes Virtual: The Rise of VR Gaming",
            img: "./../images/bgg (6).png",
            link: "#!"
        },
        {
            tag: "VR Games",
            title: "Entertainment Goes Virtual: The Rise of VR Gaming",
            img: "./../images/bgg (9).png",
            link: "#!"
        },
        {
            tag: "VR Education",
            title: "The Future of Education: How VR is Revolutionizing the Classroom",
            img: "./../images/bgg (3).png",
            link: "#!"
        },
    ]

    return (
        <Fragment>
            <div className="overflow-hidden position-relative">
                <img src="./../images/sdsad.png" className="images__head-top" alt="" />
                <Navbar />
                <Head title={"Blog"} sub={"Blog"} />

                <section className='pt__md-0'>
                    <div className="container">

                        <div className="row mb-5">
                            {
                                blogData.map((obj) => {
                                    return <div className="col-md-6 col-lg-4 mb-4">
                                        <CardBlog data={obj} />
                                    </div>
                                })
                            }

                        </div>

                        <div className="wrapper__pagination text__16-1024">
                            <div className="items active">
                                1
                            </div>
                            <div className="items">
                                2
                            </div>
                            <div className="items">
                                3
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

export default Blog