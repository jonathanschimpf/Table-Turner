import React from "react";
import "./NavigationBar.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import API from "../../utils/API"




export default function NavigationBar({ user, getUser, isLoggedIn }) {
    const location = useLocation();
    
    const logout = async() => {
        console.log('logging out...');

        await API.logoutUser();

        console.log("logging out!")

        await getUser();
        window.location.replace("/login");
    }

    return (

        <>

            <Navbar className="navbar" fixed="top sticky-top" variant="dark" expand="lg" bg="black">

                <Navbar.Brand to="/welcome"><strong>Table</strong><span className="redFont nav-item">Turner</span></Navbar.Brand>
                <p className="invisibleTrickery">‏‏‎ ‎</p>    

                <Navbar.Toggle aria-controls="responsive-navbar-nav navButtonMargin" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="d-lg-flex ml-auto">

                        


                        {(user.title === "Wait Staff") ?
                        <Nav.Link className={location.pathname === "/welcome" ? "nav-link active": "nav-link"} 
                        href={user ? "/welcome" : "/login"}>Get Started
                        </Nav.Link>
                        : ""
                        } 

                        
                        {(user.title === "Manager") ?
                        <Nav.Link className={location.pathname === "/manager" ? "nav-link active": "nav-link"} 
                        href={user ? "/manager" : "/login"}>Manager Home
                        </Nav.Link>
                        : ""
                        }     


                        {((user.title === "Manager") || (user.title === "Wait Staff")) ?
                        <Nav.Link className={location.pathname === "/viewTables" ? "nav-link active": "nav-link"}
                        href={user ? "/viewTables" : "/login"}>View Tables
                        </Nav.Link>
                        : ""
                        }

                        {((user.title === "Manager") || (user.title === "Wait Staff")) ?
                        <Nav.Link className={location.pathname === "/menu" ? "nav-link active": "nav-link"} 
                        href={user ? "/menu" : "/login"}>View Menu
                        </Nav.Link>
                        : ""
                        }
                        
                        {(user.title === "Manager") ?
                        <Nav.Link className={location.pathname === "/importMenu" ? "nav-link active": "nav-link"} 
                        href={user ? "/importMenu" : "/login"}>Update Menu
                        </Nav.Link>
                        : ""
                        }

                        {((user.title === "Manager") || (user.title === "Kitchen")) ?
                        <Nav.Link className={location.pathname === "/kitchen" ? "nav-link active": "nav-link"} 
                        href={user ? "/kitchen" : "/login"}>Kitchen
                        </Nav.Link>
                        : ""
                        }

                        {isLoggedIn ?
                        <Nav.Link className="nav-link"
                        onClick={logout}>Logout
                        </Nav.Link>
                        :
                        <>
                        <Nav.Link as={Link} className={location.pathname === "/register" ? "nav-link active": "nav-link"} to={"/register"}>Sign Up</Nav.Link>
                        <Nav.Link as={Link} className={location.pathname === "/login" ? "nav-link active": "nav-link"} to={"/login"}>Sign In</Nav.Link>
                        </>
                        }
                        </Nav>

                </Navbar.Collapse>
            </Navbar>

        </>


    );
}
