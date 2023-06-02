import React from 'react'
import { useState } from 'react';

const AccordionFaq = (props) => {
    const [accordion, setAccordion] = useState(-1)

    const accordionFunc = (e) => {
        if (e == accordion) {
            setAccordion(-1);
        } else {
            setAccordion(e);
        }
    }
    return (
        <div className={"wrapper__accordion-wrap wrap mb-4 " + (props.id == accordion ? "active" : "")}>
            <div className="head pointer " onClick={() => accordionFunc(props.id)}>
                <h5 className="mb-0 medium font__size--20 text__20-1024 color__gray-1">{props.data.title}</h5>
                <img src="./../images/expand_more_FILL0_wght400_GRAD0_opsz48.png" className="arrow ml-2" />
            </div>
            <hr />
            <div className="desc">
                <p className="mb-0 normal font__size--16 text__16-1024 color__gray-1">{props.data.desc}</p>
            </div>
        </div>
    )
}

export default AccordionFaq