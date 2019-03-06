import React, { Component } from 'react'


export default class TimelineItem extends Component {
  render() {
    let {date, title, body, imageUrl } = this.props.item;
    return (
      <li className={this.props.classes}>
        <div className="timeline-image">
          <img className="rounded-circle img-fluid" src={imageUrl} alt="" />
        </div>

        <div className="timeline-panel">
          <div className="timeline-heading">
            <h4>{date}</h4>
            <h4 className="subheading">{title}</h4>
          </div>
          <div className="timeline-body">
            <p className="text-muted">{body}</p>
          </div>
        </div>
      </li>
    )
  }
}
