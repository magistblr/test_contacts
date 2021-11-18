import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button/Button'
import s from './Header.module.scss'

type HeaderPropsType = {
  isAuth: boolean
  onLogout: () => void
  // state: boolean
}

export const Header: React.FC<HeaderPropsType> = ({isAuth, onLogout}) => {




  return (
    <div className={s.header}>
      {!isAuth
      ? <div className={s.header_login}>
        <Link to="login">Login</Link>
      </div>
      :
      <>
      <div className={s.header_login}>
        <Link to="contacts">Contacts</Link>
      </div>
      <div className={s.header_login}>
        <Link onClick={onLogout} to="login">Logout</Link>
      </div>
      </>
      }
    </div>
  )
}
