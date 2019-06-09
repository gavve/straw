import React from 'react'
import ReactHtmlParser from 'react-html-parser';
import classNames from 'classnames';


const CarouselItem = ({item}) => {
  
  let classes = classNames({
    "carousel-item": true,
    "active": item.active
  });
  

  return ( 
    <div className={classes}>
      <img className="d-block w-100" src={item.imageUrl} alt="hej" />
      <div className="carousel-caption d-none d-md-block">
        <h2>{ ReactHtmlParser(item.title) }</h2>
          <a href={item.href}>
            {item.buttonText}
          </a>
      </div>
    </div>
  )
  
}

export default CarouselItem