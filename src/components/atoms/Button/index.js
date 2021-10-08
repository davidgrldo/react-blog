import React from 'react'
import './button.scss'

const Button = ({title, ...res}) => {
  return (
    <div>
      <button className="button" {...res}>{title}</button>
    </div>
  )
}

export default Button
