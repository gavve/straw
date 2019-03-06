import React, { Component } from 'react'

import Navigation from '../../components/Navigation/Navigation';
import Header from '../../components/Header/Header';
import PortfolioGrid from '../../components/PortfolioGrid/PortfolioGrid';
import About from '../../components/About/About';
import Retailers from '../../components/Retailers/Retailers';


export default class Home extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Header />
        <About />
        <PortfolioGrid />
        <Retailers />
      </div>
    )
  }
}
