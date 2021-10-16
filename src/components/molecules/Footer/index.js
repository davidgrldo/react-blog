import React from 'react'
import './footer.scss'
import { PostLogo, GithubIcon, InstagramIcon, LinkedinIcon } from '../../../assets'

const Icon = ({img}) => {
  return (
    <div className="icon-wrapper">
      <img className="icon-medsos" src={img} alt="icon" />
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div>
          <img className="logo" src={PostLogo} alt="logo" />
        </div>
        <div className="medsos-wrapper">
          <Icon img={InstagramIcon} />
          <Icon img={LinkedinIcon} />
          <Icon img={GithubIcon} />
        </div>
      </div>
      <div className="copyright">
        <p>Copyright</p>
      </div>
    </div>
  )
}

export default Footer
