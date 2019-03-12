import React, { Component } from 'react'

import Navigation from '../../components/Navigation/Navigation';
import Header from '../../components/Header/Header';
import About from '../../components/About/About';
import Retailers from '../../components/Retailers/Retailers';
import Footer from '../../components/Footer/Footer';


export default class Home extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Header />
        <About />
        <Retailers />
        <Footer />
      </div>
    )
  }
}
