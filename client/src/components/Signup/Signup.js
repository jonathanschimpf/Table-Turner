
import React, { useState } from "react";
import axios from "axios";

import { Container, Jumbotron, Form, Button } from "react-bootstrap";
import "./Signup.css";


function SignupComp() {

    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerTitle, setRegisterTitle] = useState("");
    //   const [loginUsername, setloginUsername] = useState("");
    //   const [loginPassword, setloginPassword] = useState("");
    //   const [data, setData] = useState(null);

    const register = () => {
        axios({
            method: "POST",
            data: {
                username: registerUsername,
                password: registerPassword,
                title: registerTitle
            },
            withCredentials: true,
            url: "/api/register",
        }).then(function(res){
            axios({
                method: "POST",
                data: {
                    username: registerUsername,
                    password: registerPassword,
                },
                withCredentials: true,
                url: "/api/login",
            }).then((res) => {
                console.log("LOOK HERE")
                console.log(res)
                window.location.replace("/welcome")
            
            })
    })}

    // const login = () => {
    //     axios({
    //         method: "POST",
    //         data: {
    //             username: registerUsername,
    //             password: registerPassword,
    //         },
    //         withCredentials: true,
    //         url: "http://localhost:3001/login",
    //     }).then((res) => {
    //         console.log("LOOK HERE")
    //         console.log(res)
    //         window.location.replace("/welcome")
        
    //     })
    // };

    //   const login = () => {
    //   axios({
    //     method:"POST",
    //     data: {
    //       username: loginUsername,
    //       password: loginPassword,
    //     },
    //     withCredentials: true,
    //     url: "http://localhost:3001/login",
    //   }).then((res) => console.log(res))
    // };
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


    function showPassword() {
        var showPass = document.getElementById("myPass");
        if (showPass.type === "password") {
            showPass.type = "text";
        } else {
            showPass.type = "password";
        }

    }

    return (
        <>

            <br />
            <br />
            <Container className="vertical-center">

                <Jumbotron className="jumbotronLoginSignUp" >
                    <h2 className="text-center responsiveH1Font">Get Started</h2>
                    <hr style={{ height: '4px' }} />
                    <h4 className="text-center"></h4>
                    <h6 className="text-center text-muted">Create an account below to start turning tables.</h6>

                    <Form className="login">

                        <Form.Group className="formControl">
                            <h6>Enter a Username + Password: </h6>
                            <Form.Control className="formControl" placeholder="Username" onChange={e => setRegisterUsername(e.target.value)} />

                            {/* <input type="checkbox" onClick={showPassword} /> */}

                        </Form.Group>

                        <Form.Group >

                            <Form.Control id="myPass" type="password" className="formControl" placeholder="Password" onChange={e => setRegisterPassword(e.target.value)} />

                        </Form.Group>





                        <Form.Group>
                            <Form.Control className="formControl" placeholder="What's your name?" onChange={e => setRegisterTitle(e.target.value)} />
                        </Form.Group>

                        <Button className="my-2 my-sm-0 formControl signUpButton" variant="outline-dark" onClick={register} block>Create New Account</Button>

                        <br />

                        <p className="formControl">Existing user? <a href="/" className="aLoginSignUpLink effect-shine">Log in.</a></p>

                    </Form>

                </Jumbotron>

            </Container>
            <br />
            <br />
            <br />


        </>
    );
};
export default SignupComp;

