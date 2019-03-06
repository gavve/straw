import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    return (
      <a type="button" className={this.props.classes} href={this.props.href}>{this.props.text}</a>
    )
  }
}
