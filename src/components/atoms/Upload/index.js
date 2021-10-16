import React from 'react'
import { LoginBackground } from '../../../assets'
import './upload.scss'

const Upload = () => {
  return (
    <div className="upload">
      <input type="file" />
      <img className="preview" src={LoginBackground} alt="preview" />
    </div>
  )
}

export default Upload
