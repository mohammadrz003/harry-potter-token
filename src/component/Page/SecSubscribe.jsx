import React from 'react'

const SecSubscribe = () => {
    return (
        <section>
            <div className="container">
                <div className="wrapper__subscribe-wrap">
                    <div className="row justify-content-between">
                        <div className="col-md-6 col-lg-7 col-xl-6 mb-4 my-md-auto text-center text-md-left">
                            <h2 className="semi-bold font__size--40 text__40-1024 text__40-md text__40-mm mb-0">Subscribe to our newsletter for latest updates</h2>
                        </div>
                        <div className="col-md-6 col-lg-5 col-xl-4 my-auto">
                            <div className="wrapper__input-subscribe">
                                <div className="items d-flex align-items-center">
                                    <img src="./../images/Message.png" className="mr-2" alt="" />
                                    <input type="text" placeholder="Enter your email address" className="color__white font__size--16" />
                                </div>
                                <button><img src="./../images/Send.png" alt="" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SecSubscribe