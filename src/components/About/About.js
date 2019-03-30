import React, { Component } from 'react'

import TimelineList from '../TimelineList/TimelineList';


let aboutData = [
  {
    date: '',
    title: 'Why Bamboo?',
    body: 'Bamboo is often labelled ‘the world’s most renewable material’ and is the fastest growing woody plant in the world. It can grow up to four feet in one day, no joke. It can also be grown in areas where other crops cannot and harvesting it can be done without damaging the surrounding environment. The panda’s kryptonite also absorbs five times more carbon dioxide and produces 35% more oxygen than a similar group of trees.',
    imageUrl: '/aboutImages/bamboo_straw_1.jpg'
  },
  {
    date: '',
    title: 'Our mission!',
    body: 'More and more innovative bamboo products enter the consumer markets every year. It’s hard to change our consumption-based economy, but we can certainly change the resources we use and the way we manufacture our products. Our goal is to make this world a little bit better by influencing people to live more environmentally sustainable. We’re starting small with one product, but over time, we will expand our store and eventually provide you with all the things you need to go fully green. ',
    imageUrl: '/aboutImages/bamboo_straw_2.jpg'
  },
  {
    date: '',
    title: 'Product Information',
    body: "We all love sipping on a juice or smoothie or might pop a straw into a water bottle like it's not a big deal, but the humble plastic straw is one of the worst culprits in environmental damage. We use hundreds of millions of plastic straws every day, and most of them end up in landfills or oceans, polluting the water and killing marine life. If nothing changes, there will be more plastic in the sea than fish by 2050. Bamboo straws make a great eco-friendly alternative to traditional plastic straws since they can be washed and reused over and over again and are fully recyclable once they've been used for years. Made from 100% Bamboo, these earth-friendly straws are both cost-effective and beautiful. Our straws are made in Bali, then shipped to Sweden for a secondary cleaning and quality inspection.",
    imageUrl: '/aboutImages/bamboo_straw_3.jpg'
  },
  {
    date: '',
    title: 'To clean',
    body: 'simply rinse them out under the tap after everyday use or shake in a jar of warm soapy water if you like. Every month or so, you can boil a pot of vinegar water mix and soak the straws for a few minutes if you want a super thorough clean. Make this straw you’re first move to a more sustainable lifestyle!',
    imageUrl: '/aboutImages/bamboo_straw_1.jpg'
  },
]

export default class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">About</h2>
              <h3 className="section-subheading text-muted">Go bambooooo!</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <TimelineList items={aboutData} />
            </div>
          </div>
        </div>
      </section>
    )
  }
}
