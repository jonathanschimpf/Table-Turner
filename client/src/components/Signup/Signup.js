
import React, { useState } from "react";
import axios from "axios";
import API from "../../utils/API";
import { Container, Form, Button } from "react-bootstrap";
import "./Signup.css";
import { Link } from "react-router-dom";


function SignupComp() {

    const getUser = () => {
        if (window.location.pathname === "/") {
            history.push("/login")
        }
        API.getUser()
            .then(res => { setUser(res.data); console.log(res.data.id) })
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
        }).then(function (res) {
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

                if (registerTitle === "Wait Staff") {
                    window.location.replace("/welcome")
                }
                if (registerTitle === "Manager") {
                    window.location.replace("/manager")
                }
                if (registerTitle === "Kitchen") {
                    window.location.replace("/kitchen")
                }

            })
        })
    }



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

                <div className="divLoginSignUp" >
                    <h2 className="text-center responsiveH1Font">Get Started</h2>
                    <hr style={{ height: '4px' }} />
                    <h4 className="text-center"></h4>
                    <h6 className="text-center text-muted">Create an account below to start turning tables.</h6>

                    <Form className="login">

                        <Form.Group className="formControl mb-1">
                            <label>Enter a Username + Password: </label>
                            <Form.Control className="form-control" autocomplete="off" placeholder="Username" onChange={e => setRegisterUsername(e.target.value)} />
                        </Form.Group>

                        <Form.Group >
                            <Form.Control id="myPass" type="password" className="formControl mb-1" autocomplete="off" placeholder="Password" onChange={e => setRegisterPassword(e.target.value)} />

                        </Form.Group>

                        <Form.Group className="formControl mt-2">
                            <label>Select Title: </label>
                            <Form.Control as="select" className="form-select mb-1" onChange={e => setRegisterTitle(e.target.value)}
                            >
                                <option></option>
                                <option>Wait Staff</option>
                                <option>Kitchen</option>
                                <option>Manager</option>

                            </Form.Control>
                        </Form.Group>

                        <div className="mt-3">
                            <Button className="mt-2 mb-2 my-sm-0" variant="dark" onClick={register} getUser={getUser} user={user}>Create New Account</Button>
                        </div>
                        <p className="formControl mt-2">Existing user? <Link to="/login" className="aLoginSignUpLink effect-shine">Sign in.</Link></p>

                    </Form>

                </div>

            </Container>
            <br />
            <br />
            <br />


        </>
    );
};
export default SignupComp;

