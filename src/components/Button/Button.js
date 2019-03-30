import React from 'react'

export default function(props) {
  return (
    <button type="button" className={props.classes} href={props.href}>{props.text ? props.text : props.children}</button>
  )
}
