
import React, { useState } from "react";
import axios from "axios";

import { Container, Jumbotron, Form, Button } from "react-bootstrap";
import "./Login.css";

function LoginComp() {

    // const [registerUsername, setRegisterUsername] = useState("");
    //   const [registerPassword, setRegisterPassword] = useState("");
    //   const [registerTitle, setRegisterTitle] = useState("");
      const [loginUsername, setloginUsername] = useState("");
      const [loginPassword, setloginPassword] = useState("");
    //   const [data, setData] = useState(null);
    
    //   const register = () => {
    //   axios({
    //     method:"POST",
    //     data: {
    //       username: registerUsername,
    //       password: registerPassword,
    //       title: registerTitle
    //     },
    //     withCredentials: true,
    //     url: "http://localhost:3001/register",
    //   }).then((res) => console.log(res))
    //   };
    
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


    //   const getUser = () => {
    //   axios({
    //     method:"GET",
      
    //     withCredentials: true,
    //     url: "http://localhost:3001/user",
    //   }).then((res) => {
    //       setData(res.data);
    //       console.log(res.data)
    //   })
      
    // };

        
        return (
          <>

          {/* <div>
           <h1>Login</h1>
           <input placeholder='username' onChange={e => setloginUsername(e.target.value)} />
           <input placeholder='password' onChange={e => setloginPassword(e.target.value)}/>
            <button onClick={login}>Submit</button>
          </div> */}


  <br />
  <br />
  <br />
  <br />
  <Container className="vertical-center">

    <Jumbotron className="jumbotronLoginSignUp" >
      <h1 className="display-4 text-center responsiveH1Font">Placeholder Title</h1>
      <hr style={{height: '4px'}} />
      <h4 className="text-center">Plaeholder Description</h4>
      <h6 className="text-center text-muted">Placeholder Text </h6>
      <Form className="login">

        <Form.Group className="formControl">
          <h6>Return User? Log Into Your Account:</h6>
          <Form.Control className="formControl" placeholder="Username" onChange={e => setloginUsername(e.target.value)} />
        </Form.Group>

        <Form.Group>
          <Form.Control className="formControl" placeholder="Password" onChange={e => setloginPassword(e.target.value)} />
        </Form.Group>
        
        <Button className="my-2 my-lg-0 formControl" onClick={login} block>Log In</Button>
        
      </Form>

      <br />

      <p className="formControl">New user? Create an <a href="/" className="effect-shine">account.</a></p>

    </Jumbotron>

  </Container>
  <br />
  <br />
  <br />

    
          </>
        );
      };


     export default LoginComp;








          {/* <div>
           <h1>Register</h1>
           <input placeholder='username' onChange={e => setRegisterUsername(e.target.value)}/>
           <input placeholder='password' onChange={e => setRegisterPassword(e.target.value)}/>
           <input placeholder='title' onChange={e => setRegisterTitle(e.target.value)}/>
            <button onClick={register}>Submit</button>
          </div> */}



                 {/*     
          <div>
           <h1>Get User</h1>
          <button onClick={getUser}>Submit</button>
          { data ? <h1>Welcome {data.username}</h1> : null}
          
          </div> */}