import React, { Fragment } from 'react'
import { useRef } from 'react';
import Slider from 'react-slick';

const SliderArticle = () => {

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const slider1 = useRef(null);

    const previous = () => {
        slider1.current.slickNext();
    };

    const next = () => {
        slider1.current.slickPrev();
    };
    return (
        <Fragment>
            <h4 className='semi-bold font__size--28 text__28-1024 mb-4'>Popular Article</h4>

            <Slider ref={slider1} {...settings} className="wrapper__slider-article">
                <div className="items">
                    <div className="wrapper__article-wrap position-relative">
                        <img src="./../images/2.png" className='img' alt="" />
                        <div className="bg"></div>
                        <div className="desc">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className='mr-3'>
                                    <div className="tag medium font__size--14 text__14-1024 mb-3">VR Games</div>
                                    <h5 className='semi-bold font__size--32 text__32-1024 text__32-xs mb-0'>Entertainment Goes Virtual: The Rise of VR Gaming</h5>
                                </div>
                                <div className="arrow pointer flex-shrink-0" onClick={next}>
                                    <img src="./../images/next 1.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="items">
                    <div className="wrapper__article-wrap position-relative">
                        <img src="./../images/2.png" className='img' alt="" />
                        <div className="bg"></div>
                        <div className="desc">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className='mr-3'>
                                    <div className="tag medium font__size--14 text__14-1024 mb-3">VR Games</div>
                                    <h5 className='semi-bold font__size--32 text__32-1024 text__32-xs mb-0'>Entertainment Goes Virtual: The Rise of VR Gaming</h5>
                                </div>
                                <div className="arrow pointer flex-shrink-0" onClick={next}>
                                    <img src="./../images/next 1.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="items">
                    <div className="wrapper__article-wrap position-relative">
                        <img src="./../images/2.png" className='img' alt="" />
                        <div className="bg"></div>
                        <div className="desc">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className='mr-3'>
                                    <div className="tag medium font__size--14 text__14-1024 mb-3">VR Games</div>
                                    <h5 className='semi-bold font__size--32 text__32-1024 text__32-xs mb-0'>Entertainment Goes Virtual: The Rise of VR Gaming</h5>
                                </div>
                                <div className="arrow pointer flex-shrink-0" onClick={next}>
                                    <img src="./../images/next 1.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </Fragment>
    )
}

export default SliderArticle