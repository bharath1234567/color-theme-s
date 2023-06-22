import React from 'react';
import { Header } from "./styles/Header.styled";
import {useNavigate} from 'react-router-dom'
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
    <p style={{cursor:"pointer"}} onClick={logoutHandler} >Logout</p>
    </Header>
    </header>
  );
};

export default HeaderComponent;
