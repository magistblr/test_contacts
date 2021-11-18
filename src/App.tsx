import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom';
import { userAPI } from './api/authApi';
import './App.module.scss';
import { Contacts } from './components/Contacts/Contacts';
import { Error } from './components/Error/Error';
import { Header } from './components/Header/Header';
import { Login } from './components/Login/Login';
import { AuthContext } from './context';

export const App = () => {

  const [isAuth, setIsAuth] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

const getAuth = () => {
  userAPI.login()
  .then(res => {
    console.log(res);
    if(res.email === "men@gmail.com" && res.password === "admin"){
      setIsAuth(true)
    } else setError(true)
  })
}


  const onLogout = () => {
    setIsAuth(false)
  }

  useEffect(() => {
    if(!error){
      setTimeout(() => {
        setError(false)
      }, 3000);
    }
  }, [error])

  return (
      <AuthContext.Provider value={{
        isAuth,
        setIsAuth
      }}>
        <BrowserRouter>
          <div className="App">
            <Header onLogout={onLogout} isAuth={isAuth}></Header>
            <Routes>
                <Route path='/'  element={<Login/>}/>
                <Route path='login'  element={<Login/>}/>
                <Route path="contacts" element={<Contacts/>}/>
                <Route path="*" element={<h1>404: PAGE NOT FOUND</h1>} />
            </Routes>
            <button onClick={getAuth}>POST</button>
            {error && <Error/>}
          </div>
        </BrowserRouter>
      </AuthContext.Provider>
  );
}

