import React, { useState } from 'react';
import './styles/login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate()
  const [register, setRegister] = useState({name:"",email:"",password:""});
  
  const navigation = ()=>{
    navigate('/login')
  }

  const handleChange = (event) => {
    const {name,value}=event.target
    setRegister(prev=>({...prev,[name]:value}));
  };

  

  const handleSubmit = async (event) => {
    event.preventDefault();
    try{

        const  res = await axios.post('http://localhost:8080/api/v1/auth/register',register)
       
        if(res.data.status){
            navigate('/login')
        }
      
    }catch(err){
        console.log(err)
        alert(err?.response?.data?.message || "something went wrong")
   // Reset form fields
   setRegister({name:"",email:"",password:""});
    }

  };

  return (
  
    <div className="login-container">
      <h2>New User Register</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={register.name}
            name='name'
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Email:</label>
          <input
            type="email"
            id="username"
            value={register.email}
            name='email'
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name='password'
            value={register.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn-login">Register</button>
      </form>
      <p className='link' onClick={navigation} >Existing User</p>
    </div>
    
  );
};

export default Login;
