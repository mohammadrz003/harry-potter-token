import React from 'react'

const CardBlog = (props) => {
  return (
    <div className="wrapper__card-blog">
        <img src={props.data.img} className='cover' alt="" />
        <div className="desc">
            <div className="tag medium font__size--14 text__14-1024 color__white mb-3">{props.data.tag}</div>
            <h5 className='semi-bold font__size--18 text__18-1024'>{props.data.title}</h5>
            <a href="#!" className='bold font__size--14 text__14-1024 d-inline text__gr-default text-uppercase'>read more</a>
        </div>
    </div>
  )
}

export default CardBlog