import React, { Component } from 'react'
import ReactHtmlParser from 'react-html-parser';
import AnchorLink from 'react-anchor-link-smooth-scroll'

import Button from '../../components/Button/Button';

var classNames = require('classnames');

export default class CarouselItem extends Component {
  render() {
    let item = this.props.item;
    
    let classes = classNames({
        "carousel-item": true,
        "active": item.active
    });

    let btnClasses = classNames({
        "btn": true,
        "btn-outline-primary": true,
        'btn-lg': true
    });

    return (
            
        <div className={classes}>
            <img className="d-block w-100" src={item.imageUrl} alt="hej" />
            <div className="carousel-caption d-none d-md-block">
                <h2>{ ReactHtmlParser(item.title) }</h2>
                <AnchorLink href={item.href}>
                    <Button classes={btnClasses} text={item.buttonText} href={item.href} />
                </AnchorLink>
            </div>
        </div>
    )
  }
}
