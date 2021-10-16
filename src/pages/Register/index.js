import React from 'react';
import './register.scss';
import { RegisterBackground } from '../../assets';
import { Input, Button, Gap, Link } from '../../components/atoms';
import { useHistory } from 'react-router-dom'

const Register = () => {
  const history = useHistory()
  return (
    <div className="main-page">
      <div className="left">
        <img src={RegisterBackground} alt="Register Background" className="bg-image" />
      </div>
      <div className="right">
        <p className="title">Form Register</p>
        <Input label="Full Name" placeholder="Full Name" />
        <Gap height={16} />
        <Input label="Email" placeholder="Email" />
        <Gap height={16} />
        <Input label="Password" placeholder="Password" />
        <Gap height={32} />
        <Button title="Register" onClick={() => history.push('/')} />
        <Gap height={64} />
        <Link title="Kembali ke halaman login" onClick={() => history.push('/login')} />
      </div>
    </div>
  )
}

export default Register
