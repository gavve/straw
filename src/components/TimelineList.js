import React, { Component } from 'react'

import TimelineItem from './TimelineItem';

var classNames = require('classnames');

export default class TimelineList extends Component {
  render() {
    return (
      <ul className="timeline">
        {
          this.props.items.map((item, idx) => {
            if(idx % 2 === 0) {
              return <TimelineItem item={item} classes={classNames()} />
            } else {
              return <TimelineItem item={item} classes={classNames({'timeline-inverted': true})} />
            }
            
          })
        }
      </ul>
    )
  }
}
