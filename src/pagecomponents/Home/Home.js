import React, { Component } from 'react'

import Navigation from '../../components/Navigation/Navigation';
import Header from '../../components/Header/Header';
import Retailers from '../../components/Retailers/Retailers';
import Order from '../../components/Order/Order';
import StrawModal from '../../components/Modal/Modal';
import About from '../../components/About/About';


export default class Home extends Component {
  render() {
    return (
      <>
        <Navigation />
        <Header />
        <Order />
        <About />
        <Retailers />
        <StrawModal />
      </>
    )
  }
}
