import React, { Component } from 'react'

import Home from './Home'
import StrawModal from '../components/Modal'


const OrderPage = (props) => {

  async function addToCart() {
    console.log("start posting order...");

    let cartUrl = new URL('http://localhost:5000/api/cart');
    let addToCartUrl = new URL('http://localhost:5000/api/cart/addproduct');

    // if(!this.state.cart) {
    //   fetch(cartUrl)
    //   .then((cart) => {
    //     this.setState({ cart: cart.json() })
    //     let promise = fetch(addToCartUrl, {
    //       data: {
    //         product_id: '5c326cd056c3193d5c27c045',
    //         cart_id: this.state.cart._id
    //       }
    //     })
    //     .then((data) => {
    //       return data.json()
    //     })
    //   })
    //   .then((cart) => {

    //   })
    // } else {
    let data = {
      product_id: '5c3263f3272fb84220c2ef89',
      cart_id: '5c32629d12fe623580617f22'
    }

    fetch(addToCartUrl, {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded'
      }
    })
    .then((response) => {
      if(response.ok) {
        
        return response.json()
      } else {
        var error = new Error(response.statusText)
        error.response = response
        throw error
      }
    })
    .then((data) => {
      console.log("result", data)
    })
    
    

    // (async () => {
    //   if(!this.state.cart) {
    //     const cartResponse = await fetch(cartUrl, {
    //       method: 'POST',
    //       headers: {
    //         'cache-control': "no-cache",
    //         'Content-Type': 'application/x-www-form-urlencoded'
    //       }, 
    //       body: ""
    //     });
    //     const content = await cartResponse.json();
    //     this.setState({
    //       cart: content
    //     })
    //   }

      
    //   const productResponse = await fetch(addToCartUrl, {
    //     method: 'POST',
    //     headers: {
    //       'cache-control': "no-cache",
    //       'Content-Type': 'application/x-www-form-urlencoded'
    //     }, 
    //     body: {
    //       product_id: '5c326cd056c3193d5c27c045',
    //       cart_id: this.state.cart_id
    //     }
    //   });
    //   const content = await productResponse.json();
    
    // })();
  }


  return (
    <>
      <Home />
      <StrawModal open />
    </>
  )

}


export default OrderPage