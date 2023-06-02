import React, { useRef, useState } from 'react'
import { Fragment } from 'react'
import Footer from '../../component/Other/Footer'
import Navbar from '../../component/Other/Navbar'
import SecSubscribe from '../../component/Page/SecSubscribe'

const BlogDetail = () => {
    const article = [
        {
            img: "./../images/14.png",
            title: "The Future of Education: How VR is Revolutionizing the Classroom",
            tag: "VR Education",
            linjk: "#!"
        },
        {
            img: "./../images/1.png",
            title: "Bringing Designs to Life: How VR is Changing Architecture",
            tag: "VR Architecture",
            linjk: "#!"
        },
        {
            img: "./../images/5.png",
            title: "Making Events Memorable: The Power of VR for Corporate and Special Occasions",
            tag: "VR Entertainment ",
            linjk: "#!"
        },
        {
            img: "./../images/4.png",
            title: "Exploring New Worlds: The Benefits of VR Travel",
            tag: "VR Event",
            linjk: "#!"
        },
    ]

    const tags = ["#VRDesign", "#ArchitectureInnovation ", "#DesignThinking", "#VirtualRealityArchitecture", "#BringingDesignsToLife", "#DesignVisualization", "#DesignVisualization", "#RevolutionizingArchitecture", "#BuildingInVR"]
    return (
        <Fragment>
            <div className="overflow-hidden position-relative">
                <img src="./../images/sdsad.png" className="images__head-top" alt="" />
                <Navbar />

                <section>
                    <div className="container">

                        <p className='semi-bold font__size--16 text__16-1024 color__white mb-5'>
                            <span>Home</span>
                            <span className='mx-2'>{">"}</span>
                            <span>Blog</span>
                            <span className='mx-2'>{">"}</span>
                            <span className='color__gray-1'>Bringing Designs to Life: How VR is Changing Architecture</span>
                        </p>

                        <div className="row">
                            <div className="col-lg-7 col-xl-8 mb-4 mb-lg-0">
                                <div className="wrapper__tag normal font__size--14 text__14-1024 mb-3">VR Architecture</div>
                                <h2 className='normal font__size--40 text__40-1024 text__40-md text__40-mm'>Bringing Designs to Life: How VR is Changing Architecture</h2>
                                <p className='text-uppercase font__size--16 text__16-1024 text__gr-default mb-4'>NASYIYA ULFA | 25 NOV 2022</p>

                                <img src="./../images/Image.png" className='w-100 img-cover mb-4' alt="" />

                                <p className='light font__size--16 text__16-1024 color__gray-1'>Architecture is an art and science that is constantly evolving with technology. The industry has gone through various transformations over the years, from pencil and paper sketches to computer-aided design (CAD) software. However, one technology that is revolutionizing architecture is virtual reality (VR) design.</p>
                                <p className='light font__size--16 text__16-1024 color__gray-1'>With VR design, architects can bring their designs to life and offer clients an immersive experience that was previously impossible. The technology enables architects to create a virtual representation of their designs, allowing clients to step into the building and explore its features and spaces before it is built.</p>
                                <p className='light font__size--16 text__16-1024 color__gray-1'>VR design is a game-changer for architects and clients alike. It enables architects to design with a greater level of detail and precision, allowing them to identify design flaws and make necessary modifications before construction begins. This not only saves time and money but also ensures that the final product meets the client's expectations.</p>
                                <p className='light font__size--16 text__16-1024 color__gray-1'>Clients can also benefit from VR design by having a better understanding of the design and how it will look and feel in real life. It allows them to experience the design in a more realistic way, helping them make informed decisions and providing valuable feedback to the architects.</p>
                                <p className='light font__size--16 text__16-1024 color__gray-1 mb-4'>Moreover, VR design is not only limited to the design phase. It can also be used in the construction process to visualize the project's progress and identify any issues that may arise.</p>

                                <div className="row mb-4">
                                    <div className="col-md-6 mb-4 mb-md-0">
                                        <img src="./../images/bgg (2).png" className='w-100' alt="" />
                                    </div>
                                    <div className="col-md-6">
                                        <img src="./../images/bgg (3).png" className='w-100' alt="" />
                                    </div>
                                </div>

                                <p className='light font__size--16 text__16-1024 color__gray-1 mb-4'>The benefits of VR design in architecture are clear, and the technology is becoming increasingly accessible and affordable. More and more architects and firms are incorporating VR design into their workflows, and the industry is poised for a major transformation.</p>
                                <p className='light font__size--16 text__16-1024 color__gray-1 mb-4'>In conclusion, VR design is changing the way architects design and bring their projects to life. It is a powerful tool that offers a range of benefits, from increased precision and efficiency in the design phase to better communication and understanding with clients. As the technology becomes more advanced and widespread, we can expect to see more innovative designs and better-designed buildings in the future.</p>

                                <h5 className='semi-bold font__size--16 text__16-1024' >Post Tags :</h5>
                                <p className='light font__size--16 text__16-1024 text__gr-default mb-4'>#VRDesign #ArchitectureInnovation #VirtualRealityArchitecture #BringingDesignsToLife #DesignVisualization #ArchitecturalVisualization #RevolutionizingArchitecture #BuildingInVR #DesignThinking #VRInArchitecture</p>

                                <h5 className='semi-bold font__size--16 text__16-1024' >Share :</h5>
                                <div className="d-flex align-items-center">
                                    <a href="#!"><img src="./../images/ss2 (3).png" alt="" /></a>
                                    <a href="#!" className='mx-3'><img src="./../images/ss2 (1).png" alt="" /></a>
                                    <a href="#!"><img src="./../images/ss2 (2).png" alt="" /></a>
                                </div>
                            </div>
                            <div className="col-lg-5 col-xl-4">
                                <div className="mb-5">
                                    <h4 className='semi-bold font__size--20 text__20-1024 mb-4'>Recent Article</h4>
                                    {
                                        article.map((obj) => {
                                            return <Fragment>
                                                <div className="wrapper__article-list singgle">
                                                    <div className="d-flex align-items-center">
                                                        <img src={obj.img} alt="" />
                                                        <div className="des ml-3">
                                                            <div className="tag medium font__size--14 text__14-1024 mb-3">{obj.tag}</div>
                                                            <h5 className="mb-0 normal font__size--18 text__18-1024">{obj.title}</h5>
                                                        </div>
                                                    </div>
                                                </div>

                                                <hr className="hr__line-article my-4" />
                                            </Fragment>
                                        })
                                    }
                                </div>

                                <h4 className='semi-bold font__size--20 text__20-1024 mb-4'>Popular Hashtag</h4>

                                <div className="d-flex align-items-center flex-wrap mx-min-2">
                                    {
                                        tags.map((obj) => {
                                            return <div className="wrapper__tag medium font__size--10 text__10-1024 mb-3 mx-2">
                                                {obj}
                                            </div>
                                        })
                                    }

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

export default BlogDetail