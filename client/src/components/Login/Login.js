
import React, { useState } from "react";
import axios from "axios";

import { Container, Jumbotron, Form, Button } from "react-bootstrap";
import "./Login.css";
import { propTypes } from "react-bootstrap/esm/Image";

function LoginComp(props) {

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
            url: "/api/login",
        }).then((res) => {
            console.log("LOOK HERE")
            console.log(res)
            window.location.replace("/welcome")
        
        })
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
                            <Form.Control className="formControl" placeholder="Password" type="password" onChange={e => setloginPassword(e.target.value)} />
                        </Form.Group>

                        <Button className="my-2 my-lg-0 formControl logInButton" variant="outline-dark" onClick={login} block>Sign In</Button>

                        <br />

                        <p className="formControl">New user? Create an <a href="/register" className="aLoginSignUpLink effect-shine">account.</a></p>

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

