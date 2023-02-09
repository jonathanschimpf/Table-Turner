import React, { useState } from "react";
import { Container } from "react-bootstrap";
import API from "../../utils/API";
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import ErrorAlert from "../Alerts/ErrorAlert";
import "./Login.css";
import { getHomepageLink } from "../../utils/HomepageHelper";

export default function Login() {


    const [isError, setIsError] = useState(false);
    // const [isLoading, setIsLoading] = useState(false);


    const navigate = useNavigate();
   


    function storeUserInLocalStorage(userData) {
        let { username, _id, title } = userData;
        localStorage.setItem("username", username);
        localStorage.setItem("_id", _id);
        localStorage.setItem("title", title);
    }



    const login = (values) => {


        API.login(values)
            .then(res => {
                console.log(res);
                let userData = res.data;
                let { title } = userData;
                storeUserInLocalStorage(userData);

                // Redirect to homepage
                let homepage = getHomepageLink(title);
                navigate(homepage);
                
                setIsError(false);
            })
            .catch(err => {
                console.log(err);
                setIsError(true);
            })
    };


    const goTo = () => {
        navigate("/register")
    }



    return (
        <>
            <Container className="vertical-center">


                <button onClick={goTo}>go</button>


                <div className="divLoginSignUp mt-5" >
                    <h2 className="text-center responsiveH1Font">Sign In</h2>
                    <hr style={{ height: '4px' }} />


                    <h6 className="text-center text-muted">Welcome back. Sign in to get back to turning tables.</h6>


                    <div className="login">
                        {isError && <ErrorAlert text="Login failed. Please check your username and password." />}
                        <LoginForm submitForm={login} />
                    </div>

                    <p className="formControl mt-2">New user? Create an <Link to="/register" className="aLoginSignUpLink effect-shine">account.</Link></p>
                </div>

            </Container>
        </>
    );
};
