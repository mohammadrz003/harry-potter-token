import React from 'react'

const Head = (props) => {
    return (
        <section className="position-relative z-2 mt-5">
            <img src="./../images/sasadsad.png" className='images__bg-head' alt="" />
            <div className="container position-relative z-2">
                <div className="text-center mb__5">
                    <h2 className='semi-bold font__size--64 text__65-1024 text__65-sm mb-4'>{props.title}</h2>
                    <div className="d-flex align-items-center justify-content-center font__size--16 text__16-1024">
                        <span className='semi-bold'>Home</span>
                        <span className='mx-2'>{">"}</span>
                        <span className='light color__gray-1'>{props.sub}</span>
                    </div>
                </div>

                <div className="line__hr-footer"></div>

            </div>
        </section>
    )
}

export default Head