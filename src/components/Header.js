import React from 'react'

import CarouselItem from './CarouselItem';


let carouselData = [
    {
        'title': '100% Bamboo. </br> 100% Beautiful. </br> 100% Biodegradable Straws from Bali.',
        'buttonText': 'Order now',
        'imageUrl': '/carouselImages/wasteless-2.jpg',
        'active': true,
        'href': '/order',
        'modal':true,
    },
    {
        'title': 'We’re starting with a straw, but we have bigger things in mind! ',
        'buttonText': 'Our mission',
        'imageUrl': '/carouselImages/wasteless.jpg',
        'active': false,
        'href': ''
    },
    {
        'title': 'Who the f#(k are you?',
        'buttonText': 'About us',
        'imageUrl': '/carouselImages/wasteless-4.jpg',
        'active': false,
        'href': '#about'
    },
]

const Header = (props) => {

  let carouselItems = carouselData.map((item, idx) => {
      return <CarouselItem item={item} key={idx} />;
  });

  return (
    <header className="masthead" id="page-top">
      <div id="headerCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#headerCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#headerCarousel" data-slide-to="1"></li>
          <li data-target="#headerCarousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          {carouselItems}
        </div>
        <a className="carousel-control-prev" href="#headerCarousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#headerCarousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
  </header>
  )
}


export default Header