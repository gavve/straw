import React from 'react'

import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Retailers from '../components/Retailers';
import About from '../components/About';
import OrderSection from '../components/OrderSection';


const Home = (props) => {
    return (
      <>
        <Navigation />
        <Header />
        <OrderSection />
        <About />
        <Retailers />
      </>
    )
}

export default Home