import React, { Component, Fragment } from 'react'
import SliderDetailDesc from './SliderDetailDesc';

export default class SliderCircle extends Component {
    state = {
        carouselDeg: 17,
        itemDeg: -17,
        centerItem: 0,
        prevItem: 6,
        lastItem: 6,
        nextItem: 1,
        carousel: [
            { title: "VR Development", id: 0, position: 1 },
            { title: "VR Games", id: 1, position: 2 },
            { title: "VR Events", id: 2, position: 3 },
            { title: "VR Design", id: 3, position: 4 },
            { title: "VR Consulting", id: 4, position: 5 },
            { title: "VR Entertainment", id: 5, position: 6 },
            { title: "Client Testimony", id: 6, position: 7 },
        ],
        active: 0,
    };

    setActive = (e) => {
        this.setState(
            {
                active: e
            }
        )
    }

    getIdItems = side => {
        // true = next, false = prev
        const { nextItem, prevItem, lastItem } = this.state;

        if (side) {
            this.setState(
                {
                    centerItem: nextItem
                },
                () => prevNext(this.state.centerItem)
            );
            this.setActive(nextItem)
        } else {
            this.setState(
                {
                    centerItem: prevItem
                },
                () => prevNext(this.state.centerItem)
            );
            this.setActive(prevItem)
        }

        const prevNext = itemId => {
            if (itemId === lastItem) {
                this.setState({
                    nextItem: 0,
                    prevItem: lastItem - 1
                });
            } else if (itemId === 0) {
                this.setState({
                    prevItem: lastItem,
                    nextItem: 1
                });
            } else {
                this.setState(state => ({
                    nextItem: state.centerItem + 1,
                    prevItem: state.centerItem - 1
                }));
            }
        };
    };

    next = () => {
        if (this.state.centerItem < 3 || this.state.centerItem >= 4) {
            this.getIdItems(true);
            this.setState(state => ({
                carouselDeg: state.carouselDeg - (window.innerWidth >= 490 ? 28 : 18),
                itemDeg: state.itemDeg + (window.innerWidth >= 490 ? 28 : 18)
            }));
        }
    };

    prev = () => {
        if (this.state.centerItem <= 3 || this.state.centerItem > 4) {
            this.getIdItems(false);
            this.setState(state => ({
                carouselDeg: state.carouselDeg + (window.innerWidth >= 490 ? 28 : 18),
                itemDeg: state.itemDeg - (window.innerWidth >= 490 ? 28 : 18)
            }));

        }
    };

    getCssClass = id => {
        const { centerItem, nextItem, prevItem } = this.state;
        // console.log(id)
        if (id === centerItem) {
            return "active";
        } else if (id === nextItem) {
            return "next";
        } else if (id === prevItem) {
            return "prev";
        }
    };

    onClickModel = (e) => {
        console.log(e)
        this.setState(
            {
                centerItem: e
            }
        );

        this.getCssClass(e)

        this.setActive(e)
    }

    render() {
        return (
            <Fragment>
                <div className="wrapper__wrap-slider-round position-relative z-2">
                    <img src="./../images/sasasa.png" className='w-100' alt="" />
                    <div className="wrapper__circle-slider-menu">

                        <div
                            className="carousel"
                            style={{ transform: `rotate(${this.state.carouselDeg}deg)` }}
                        >
                            {this.state.carousel.map((item, index) => (
                                <div
                                    className={`item-carousel pointer ${this.getCssClass(index)}`}
                                    key={item.id}
                                    id={item.id}
                                    style={{ transform: `rotate(${this.state.itemDeg}deg)` }}
                                    onClick={() => this.onClickModel(index)}
                                >
                                    <div className="wrapper__circle-card position-realtive">
                                        <img src="./../images/sd (1).png" className='off' alt="" />
                                        <img src="./../images/sd (2).png" className='on' alt="" />
                                        <h5 className='mb-0 normal font__size--14 color__whute position-relative z-2'>{item.title}</h5>
                                    </div>
                                </div>
                            ))}
                        </div>


                    </div>
                    <div className="wrapper__arrow-wrap d-xl-none">
                        <img src="./../images/sas (1).png" onClick={this.next} className='pointer' alt="" />
                        <img src="./../images/sas (2).png" onClick={this.prev} className='pointer ml-3' alt="" />
                    </div>
                </div>

                <SliderDetailDesc active={this.state.active} setActive={(e) => this.setActive(e)} />

            </Fragment>
        )
    }
}
