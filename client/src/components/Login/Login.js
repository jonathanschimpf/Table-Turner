
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
            method: "POST",
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

            <br />
            <br />
            <Container className="vertical-center">

                <Jumbotron className="jumbotronLoginSignUp" >
                    <h2 className="text-center responsiveH1Font">Get Back To Work</h2>
                    <hr style={{ height: '4px' }} />
                    <h4 className="text-center"></h4>
                    <h6 className="text-center text-muted">Welcome back. Sign in to get back to turning tables.</h6>
                    <Form className="login">
                        
                        <Form.Group className="formControl">
                            <h6>Return User? Sign Into Your Account:</h6>
                            <Form.Control className="formControl" placeholder="Username" onChange={e => setloginUsername(e.target.value)} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Control className="formControl" placeholder="Password" onChange={e => setloginPassword(e.target.value)} />
                        </Form.Group>

                        <Button className="my-2 my-lg-0 formControl logInButton" variant="outline-dark" onClick={login} block>Sign In</Button>

                        <br />

                        <p className="formControl">New user? Create an <a href="/" className="aLoginSignUpLink effect-shine">account.</a></p>

                    </Form>
                    <br/>
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