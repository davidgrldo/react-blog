import React from 'react'
import './post.scss'
import { Button, Gap } from '../../atoms'
import { RegisterBackground } from '../../../assets'
import { useHistory } from 'react-router-dom'

const Post = () => {
  const history = useHistory()
  return (
    <div className="post-item">
      <img className="image-thumb" src={RegisterBackground} alt="post" />
      <div className="content-detail">
        <p className="title">Title Post</p>
        <p className="author">Author - created_at</p>
        <p className="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        <Gap height={20} />
        <Button title="View Post" onClick={() => history.push('/detail-post')} />
      </div>
    </div>
  )
}

export default Post
