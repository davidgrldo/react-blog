import React from 'react'
import './detailPost.scss'
import { Gap, Link } from '../../components'
import { RegisterBackground } from '../../assets'
import { useHistory } from 'react-router-dom'

const DetailPost = () => {
  const history = useHistory()
  return (
    <div className="detail-post-wrapper">
      <img className="img-cover" src={RegisterBackground} alt="detail-img" />
      <p className="post-title">Title Post</p>
      <p className="post-author">Author - created_at</p>
      <p className="post-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      <Gap height={20} />
      <Link title="Back to homepage" onClick={() => history.push('/')} /> 
    </div>
  )
}

export default DetailPost
