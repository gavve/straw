import React, { Component } from 'react'


function Retailer(props) {
  return (
    <div className="col-md-3 col-sm-6">
      <a href={props.href}>
        <img className="img-fluid d-block mx-auto" src={props.imgSrc} alt={props.altText} />
      </a>
    </div>
  )
}

let retailerData = [
  {
    href: 'https://www.lekiosk.se/',
    imgSrc: 'https://shop.textalk.se/shop/28283/files/LeKiosklogga.jpg?max-width=600&max-height=150&quality=85',
    altText: 'Le Kiosk bamboo straws'
  }
]

export default class Retailers extends Component {
  render() {
    return (
      <section className="py-5" id="retailers">
      <div className="container">
        <div className="row">
          <div className="col-12" style={{padding: "30px"}}>
            <h1>Retailers</h1>
          </div>
          
        </div>
        <div className="row">
          
          {
            retailerData.map((retailer, idx) => {
              return <Retailer href={retailer.href} imgSrc={retailer.imgSrc} alt={retailer.altText} />
            })
          }
        </div>
      </div>
    </section>
    )
  }
}
