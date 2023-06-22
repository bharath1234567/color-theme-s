import React, {  useState } from 'react';
import './styles/login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const Login = ({ isAuthenticated, onLogin }) => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 

  const navigation = ()=>{
    navigate('/register')
  }
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try{

      const  res = await axios.post('http://localhost:8080/api/v1/auth/login',{email:username,password})
    
        if(res.data.status){
            sessionStorage.setItem('user',res.data.user.email)
            sessionStorage.setItem('token',res.data.token)
            sessionStorage.setItem('userId',res.data.user._id)
        
            onLogin();
              navigate('/home')
           

        }

   
    }catch(err){
      alert('something went wrong');
          // Reset form fields
          setUsername('');
          setPassword('');
    }
  };

  return (
  
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Email:</label>
          <input
            type="email"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit" className="btn-login">Login</button>
      </form>
        <p className='link' onClick={navigation} >New User</p>
    </div>
    
  );
};

export default Login;
