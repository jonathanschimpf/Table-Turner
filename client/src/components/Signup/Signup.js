
import React, { useState } from "react";
import axios from "axios";
import API from "../../utils/API";
import { Container, Jumbotron, Form, Button } from "react-bootstrap";
import "./Signup.css";


function SignupComp() {
    
    const getUser = () => {
        if(window.location.pathname === "/") {
          history.push("/login")
        }
        API.getUser()
          .then(res => { setUser(res.data) ; console.log(res.data.id) })
          .catch(err => { console.log(err) })
          
      }
    const [user, setUser] = useState({})
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
                    title: registerTitle
                },
                withCredentials: true,
                url: "/api/login",
            }).then((res) => {
                
                if (registerTitle === "Wait Staff"){
                window.location.replace("/welcome")}
                if (registerTitle === "Manager") {
                window.location.replace("/manager")}
                if(registerTitle === "Kitchen") {
                window.location.replace("/kitchen")
                }
            
            })
    })}



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

                        <Form.Group className="formControl">
                            <h6>Select Title: </h6>
                            <Form.Control as="select" className="formControl" onChange={e => setRegisterTitle(e.target.value)}
                            >
                                <option></option>
                                <option>Wait Staff</option>
                                <option>Kitchen</option>
                                <option>Manager</option>
                               
                            </Form.Control>
                        </Form.Group>

                        <Button className="my-2 my-sm-0 formControl signUpButton" variant="outline-dark" onClick={register} block getUser={getUser} user={user}>Create New Account</Button>

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

