import React from 'react'
import './button.scss'

const Button = ({title, ...res}) => {
  return <button className="button" {...res}>{title}</button>
}

export default Button
