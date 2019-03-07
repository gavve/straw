import React, { Component } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

var classNames = require('classnames');

function MenuItem(props) {
  return <li className="nav-item"><AnchorLink href={props.href} className="nav-link">{props.title}</AnchorLink></li>
}

let menuData = [
  {
    href: '#about',
    title: 'About'
  },
  {
    href: '#retailers',
    title: 'Retailers'
  },
];

export default class Navigation extends Component {

  constructor(props) {
    super(props);

    this.state = {
      shrink: false,
      menuOpen: false
    }

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  setNavbarShrink(scroll_pos) {
    if(scroll_pos > 100) {
      this.setState({
        shrink: true
      })
    } else {
      this.setState({
        shrink: false
      })
    }
  }

  componentDidMount() {
    let last_known_scroll_position = 0;
    let ticking = false;
    let _this = this;
    window.addEventListener('scroll', function(e) {
      last_known_scroll_position = window.scrollY;
    
      if (!ticking) {
        window.requestAnimationFrame(function() {
          _this.setNavbarShrink(last_known_scroll_position);
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  toggleMenu() {
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  }

  render() {
    let classes = classNames({
      "navbar": true,
      "navbar-expand-lg": true,
      "navbar-dark": true,
      "fixed-top": true,
      "navbar-shrink": this.state.shrink
    });

    let hamburgerClasses = classNames({
      'hamburger':true,
      'hamburger--squeeze': true,
      'is-active': this.state.menuOpen
    });

    let navClasses = classNames({
      'collapse':true,
      'navbar-collapse': true,
      'show': this.state.menuOpen
    });


    return (
        <nav className={classes} id="mainNav">
          <div className="container">
            <AnchorLink href="#page-top">
              <a className="navbar-brand" href="#"><img src="/icons/wasteless.png" alt="WastelessCo" /></a>
            </AnchorLink>
            
            <button className={hamburgerClasses} onClick={this.toggleMenu} type="button"  data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>

            <div className={navClasses} id="navbarResponsive">
              <ul className="navbar-nav text-uppercase ml-auto">

                {
                  menuData.map((item, idx) => {
                    return <MenuItem href={item.href} title={item.title} key={idx} />;
                  })
                }
                
              </ul>
            </div>
          </div>
        </nav>
    )
  }
}
