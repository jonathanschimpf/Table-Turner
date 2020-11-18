import React, { useState } from "react";
import axios from "axios";

import { Container, Jumbotron, Form, Button } from "react-bootstrap";
import "./Login.css";
import API from "../../utils/API";

function LoginComp(props) {

    
    
    const [loginUsername, setloginUsername] = useState("");
    const [loginPassword, setloginPassword] = useState("");
    const [loginTitle, setLoginTitle] = useState("");
    
    
    
    const login = () => {
        
        axios({
            method: "POST",
            
            data: {
                username: loginUsername,
                password: loginPassword,
                title: loginTitle
                
            },
            withCredentials: true,
            url: "/api/login",
        }).then((res) => {
           
            if (loginTitle === "Wait Staff"){
            window.location.replace("/welcome")}
            if (loginTitle === "Manager") {
            window.location.replace("/manager")}
            if (loginTitle === "Kitchen") {
            window.location.replace("/kitchen")
            }
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
                            <Form.Control className="formControl" placeholder="Username" autocomplete="off" onChange={e => setloginUsername(e.target.value)} />
                        </Form.Group>

                        <Form.Group>
<<<<<<< HEAD
                            <Form.Control className="formControl" placeholder="Password" type="password" onChange={e =>  setloginPassword(e.target.value)}/>
=======
                            <Form.Control className="formControl" autocomplete="off" placeholder="Password" type="password" onChange={e => setloginPassword(e.target.value)} />
>>>>>>> 787d6c7138dae98d19caaf7fe32d86a51495ff2d
                        </Form.Group>

                        <Form.Group className="formControl">
                            <h6>Select Title: </h6>
                            <Form.Control as="select" className="formControl" onChange={e => setLoginTitle(e.target.value)}
                            >
                                <option></option>
                                <option>Wait Staff</option>
                                <option>Kitchen</option>
                                <option>Manager</option>
                               
                            </Form.Control>
                        </Form.Group>

                        <Button className="my-2 my-lg-0 formControl logInButton" variant="outline-dark" onClick={login} block >Sign In</Button>
                        <br />

                        <p className="formControl">New user? Create an <a href="/register" className="aLoginSignUpLink effect-shine">account.</a></p>

                    </Form>
                   
                </Jumbotron>

            </Container>
            <br />
            <br />
            <br />


        </>
    );
};


export default LoginComp;