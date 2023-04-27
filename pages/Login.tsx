import React from 'react'
import { useState } from 'react';
import axios from 'axios';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      const response = await axios.post('/api/login', {
        username,
        password,
      });
  
      if (response.data.valid) {
        // Redirect the user to the desired page
      } else {
        // Display an error message to the user
      }
    };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
}

export default Login