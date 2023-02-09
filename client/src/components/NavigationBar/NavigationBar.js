import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import API from "../../utils/API"
import "./NavigationBar.css";




export default function NavigationBar({ user, getUser, isLoggedIn }) {
    const location = useLocation();


    const [expanded, setExpanded] = useState(false);  // initially closed


    const clearLocalStorage = () => {
        localStorage.clear();
    }

    const logout = async () => {
        console.log('logging out...');

        await API.logoutUser();
        clearLocalStorage();


        await getUser();
        window.location.replace("/login");
    }



    const closeMenu = () => {
        setExpanded(false);
    }

    const toggleMenu = () => {
        setExpanded(!expanded)
    }


    const pathname = location.pathname;
    const active = "nav-link active";
    const inactive = "nav-link";

    return (

        <>

            <Navbar className="navbar" fixed="top sticky-top" variant="dark" bg="black" expand="lg" expanded={expanded}>

                <Navbar.Brand to="/welcome"><strong>Table</strong><span className="redFont nav-item">Turner</span></Navbar.Brand>
                <p className="invisibleTrickery">‏‏‎ ‎</p>

                <Navbar.Toggle aria-controls="responsive-navbar-nav navButtonMargin" onClick={toggleMenu} />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="d-lg-flex ml-auto">


                        {(user.title === "Wait Staff") ?
                            <Nav.Link as={Link} className={pathname === "/welcome" ? active : inactive} onClick={closeMenu}
                                to={user ? "/welcome" : "/login"}>Get Started
                            </Nav.Link>
                            : ""
                        }


                        {(user.title === "Manager") ?
                            <Nav.Link as={Link} className={pathname === "/manager" ? active : inactive} onClick={closeMenu}
                                to={user ? "/manager" : "/login"}>Manager Home
                            </Nav.Link>
                            : ""
                        }


                        {((user.title === "Manager") || (user.title === "Wait Staff")) ?
                            <Nav.Link as={Link} className={pathname === "/viewTables" ? active : inactive} onClick={closeMenu}
                                to={user ? "/viewTables" : "/login"}>View Tables
                            </Nav.Link>
                            : ""
                        }

                        {((user.title === "Manager") || (user.title === "Wait Staff")) ?
                            <Nav.Link as={Link} className={pathname === "/menu" ? active : inactive} onClick={closeMenu}
                                to={user ? "/menu" : "/login"}>View Menu
                            </Nav.Link>
                            : ""
                        }

                        {(user.title === "Manager") ?
                            <Nav.Link as={Link} className={pathname === "/importMenu" ? active : inactive} onClick={closeMenu}
                                to={user ? "/importMenu" : "/login"}>Update Menu
                            </Nav.Link>
                            : ""
                        }

                        {((user.title === "Manager") || (user.title === "Kitchen")) ?
                            <Nav.Link as={Link} className={pathname === "/kitchen" ? active : inactive} onClick={closeMenu}
                                to={user ? "/kitchen" : "/login"}>Kitchen
                            </Nav.Link>
                            : ""
                        }

                        {isLoggedIn ?
                            <Nav.Link className="nav-link"
                                onClick={logout}>Logout
                            </Nav.Link>
                            :
                            <>
                                <Nav.Link as={Link} className={pathname === "/register" ? active : inactive} to={"/register"}>Sign Up</Nav.Link>
                                <Nav.Link as={Link} className={pathname === "/login" ? active : inactive} to={"/login"}>Sign In</Nav.Link>
                            </>
                        }
                    </Nav>

                </Navbar.Collapse>
            </Navbar>

        </>


    );
}
