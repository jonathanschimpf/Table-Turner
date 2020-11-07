import React, { useState } from "react";
import axios from "axios";


function App() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerTitle, setRegisterTitle] = useState("");
  const [loginUsername, setloginUsername] = useState("");
  const [loginPassword, setloginPassword] = useState("");
  const register = () => {
  axios({
    method:"POST",
    data: {
      username: registerUsername,
      password: registerPassword,
      title: registerTitle
    },
    withCredentials: true,
    url: "http://localhost:3001/register",
  }).then((res) => console.log(res))
  };

  const login = () => {
  axios({
    method:"POST",
    data: {
      username: loginUsername,
      password: loginPassword,
    },
    withCredentials: true,
    url: "http://localhost:3001/login",
  }).then((res) => console.log(res))
};
  const getUser = () => {
  axios({
    method:"GET",
  
    withCredentials: true,
    url: "http://localhost:3001/user",
  }).then((res) => console.log(res))
};
    
    return (
      <>
      <div>
       <h1>Register</h1>
       <input placeholder='username' onChange={e => setRegisterUsername(e.target.value)}/>
       <input placeholder='password' onChange={e => setRegisterPassword(e.target.value)}/>
       <input placeholder='title' onChange={e => setRegisterTitle(e.target.value)}/>
        <button onClick={register}>Submit</button>
      </div>

      <div>
       <h1>Login</h1>
       <input placeholder='username' onChange={e => setloginUsername(e.target.value)} />
       <input placeholder='password' onChange={e => setloginPassword(e.target.value)}/>
        <button onClick={login}>Submit</button>
      </div>

      <div>
       <h1>Get User</h1>
      <button onClick={getUser}>Submit</button>
      </div>

      </>
    );
  };


export default App;
