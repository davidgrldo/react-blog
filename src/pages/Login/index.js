import React from 'react';
import { LoginBackground } from '../../assets';
import { Input, Button, Gap, Link } from '../../components/atoms';
import { useHistory } from 'react-router-dom'

const Login = () => {
  const history = useHistory()
  return (
    <div className="main-page">
      <div className="left">
        <img src={LoginBackground} alt="Login Background" className="bg-image" />
      </div>
      <div className="right">
        <p className="title">Form Login</p>
        <Input label="Email" placeholder="Email" />
        <Gap height={16} />
        <Input label="Password" placeholder="Password" />
        <Gap height={32} />
        <Button title="Login" onClick={() => history.push('/')} />
        <Gap height={64} />
        <Link title="Anda belum memiliki akun?" onClick={() => history.push('/register')} />
      </div>
    </div>
  )
}

export default Login
