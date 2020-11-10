import React from "react";
import "./Navbar.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";





function NavbarComp() {
	const location = useLocation();

    return (

        <>

            <Navbar className="navbar" fixed="top sticky-top" variant="dark" expand="lg" bg="black">

                <Navbar.Brand to="/"><strong>Table</strong><span className="redFont nav-item">Turner</span></Navbar.Brand>


                <Navbar.Toggle aria-controls="responsive-navbar-nav navButtonMargin" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="d-lg-flex ml-auto">

                        <Nav.Link className={location.pathname === "/addTables" ? "nav-link active": "nav-link"} href="/addTables">Start New Table
                        </Nav.Link>

                        <Nav.Link className={location.pathname === "/viewTables" ? "nav-link active": "nav-link"} href="/viewTables">View Tables
                        </Nav.Link>

                        <Nav.Link className={location.pathname === "/menu" ? "nav-link active": "nav-link"} href="/menu">Add To Last Order
                        </Nav.Link>

                        <Nav.Link className={location.pathname === "/importMenu" ? "nav-link active": "nav-link"} href="/importMenu">Update Menu
                        </Nav.Link>


                    </Nav>

                </Navbar.Collapse>
            </Navbar>

        </>


    );
}

export default NavbarComp;







