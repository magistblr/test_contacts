import React, { useContext } from 'react'
import s from './Login.module.scss'
import { LoginForm } from './LoginForm';
import { AuthContext, AuthContextType } from '../../context';
import { Contacts } from '../Contacts/Contacts';



export const Login = () => {
  const {isAuth} = useContext<AuthContextType>(AuthContext)

  if(isAuth){
      return <Contacts/>
  }

  return (
    <div className={s.wrapper}>
      <div className={s.login}>
        <LoginForm />
      </div>
    </div>
  )
}

