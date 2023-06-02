import React, { useState } from 'react'
import { Fragment } from 'react'
import Footer from '../../component/Other/Footer'
import Navbar from '../../component/Other/Navbar'
import Head from '../../component/Page/Head'
import SecChoose from '../../component/Page/SecChoose'
import SecService from '../../component/Page/SecService'
import SecServiceCount from '../../component/Page/SecServiceCount'
import SecSubscribe from '../../component/Page/SecSubscribe'
import SecTestimonial from '../../component/Page/SecTestimonial'

const Service = () => {
    return (
        <Fragment>
            <div className="overflow-hidden position-relative">
                <img src="./../images/sdsad.png" className="images__head-top" alt="" />
                <Navbar />
                <Head title={"Our Service"} sub={"Our Service"} />

                <SecService />

                <SecServiceCount />

                <SecChoose />

                <SecTestimonial />

                <SecSubscribe />

                <Footer />
            </div>
        </Fragment>
    )
}

export default Service