import React from 'react';
import { Header } from "./styles/Header.styled";
import {useNavigate} from 'react-router-dom'
import './styles/login.css'
const HeaderComponent = ({onLogout}) => {
  const navigate = useNavigate()
  const logoutHandler = () =>{
    sessionStorage.clear()
    onLogout()
    navigate('/')
  }
  return (
    <header>
    <Header>

    <h1>SAPIENS - Bharath</h1>
    <p className='logout' onClick={logoutHandler} >Logout</p>
    </Header>
    </header>
  );
};

export default HeaderComponent;
