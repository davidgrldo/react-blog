import React from 'react'
import './createPost.scss'
import { Button, Gap, Input, Link, Textarea, Upload } from '../../components'
import { useHistory } from 'react-router-dom'

const CreatePost = () => {
  const history = useHistory()
  return (
    <div className="post">
      <p className="title">Create New Post</p>
      <Input label="Post Title" />
      <Upload />
      <Textarea />
      <Gap height={10} />
      <div className="button-action">
        <Link title="Back" onClick={() => history.push('/')} />
        <Gap width={20} />
        <Button title="Save" />
      </div>
    </div>
  )
}

export default CreatePost
