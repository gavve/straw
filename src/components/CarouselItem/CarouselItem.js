import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleModal } from '../../redux/actions/ui/uiActions'
import ReactHtmlParser from 'react-html-parser';

// Bootstrap
import Button from 'react-bootstrap/Button';


var classNames = require('classnames');

class CarouselItem extends Component {
  constructor(props) {
    super(props)
    this.toggleModal = this.toggleModal.bind(this)
    this.scrollTo = this.scrollTo.bind(this)
  }
  toggleModal() {
    console.log("toggleModal func")
    this.props.toggleModal()
  }
  scrollTo() {
    document.querySelector(`a[href^="${this.props.item.href}"]`)
  }
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

            {
              item.modal ? 
              <Button variant="primary" onClick={this.toggleModal}>
                {item.buttonText}
              </Button>
              :
              <Button variant="primary" onClick={this.scrollTo}>
                {item.buttonText}
              </Button>
            }
          
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    ui: state.ui
  })

export default connect(
  mapStateToProps,
  {
    toggleModal
  }
)(CarouselItem)