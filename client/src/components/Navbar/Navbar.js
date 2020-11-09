import React from "react";
import "./Navbar.css";
import { Navbar, Nav } from "react-bootstrap";






function NavbarComp() {

    return (

        <>

            <Navbar className="navbar" fixed="top sticky-top" variant="dark" expand="lg" bg="black">

                <Navbar.Brand href="/">Table <span className="blackFont nav-item">Turner</span></Navbar.Brand>


                <Navbar.Toggle aria-controls="responsive-navbar-nav navButtonMargin" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="d-lg-flex ml-auto">

                        <Nav.Link className="nav-item active ml-auto" href="">Add Tables
                        </Nav.Link>

                        <Nav.Link className="nav-item ml-auto" href="">View Tables
                        </Nav.Link>

                        <Nav.Link className="nav-item ml-auto" href="">Take Order 
                        </Nav.Link>

                        <Nav.Link className="nav-item ml-auto" href="">Update Menu
                        </Nav.Link>

                    </Nav>

                </Navbar.Collapse>
            </Navbar>

        </>


    );
}

export default NavbarComp;







