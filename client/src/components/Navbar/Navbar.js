import React from "react";
import "./Navbar.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import API from "../../utils/API"




function NavbarComp({ user, getUser }) {
    const location = useLocation();
    
    const logout = async() => {

        await API.logoutUser();

        console.log("logging out!")

        await getUser();
        location.pathname="/login"
    }

    return (

        <>

            <Navbar className="navbar" fixed="top sticky-top" variant="dark" expand="lg" bg="black">

                <Navbar.Brand to="/welcome"><strong>Table</strong><span className="redFont nav-item">Turner</span></Navbar.Brand>


                <Navbar.Toggle aria-controls="responsive-navbar-nav navButtonMargin" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="d-lg-flex ml-auto">


                        {((user.title === "Manager") || (user.title === "Wait Staff")) ?
                        <Nav.Link className={location.pathname === "/welcome" ? "nav-link active": "nav-link"} 
                        href={user ? "/welcome" : "/login"}>Get Started
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

                        {user ?
                        <Nav.Link className="nav-link"
                        onClick={logout}>Logout
                        </Nav.Link>
                        : ""
                        }
                        </Nav>

                </Navbar.Collapse>
            </Navbar>

        </>


    );
}

export default NavbarComp;














// jonathan's attempts with dominique. had everything working except the logout.

// import React from "react";
// import "./Navbar.css";
// import { Navbar, Nav } from "react-bootstrap";
// import { Link, useLocation } from "react-router-dom";





// function NavbarComp({setUser}) {
// 	const location = useLocation();

//     return (

//         <>

//             <Navbar className="navbar" fixed="top sticky-top" variant="dark" expand="lg" bg="black">

//                 <Navbar.Brand to="/"><strong>Table</strong><span className="redFont nav-item">Turner</span></Navbar.Brand>


//                 <Navbar.Toggle aria-controls="responsive-navbar-nav navButtonMargin" />
//                 <Navbar.Collapse id="responsive-navbar-nav">

//                     <Nav className="d-lg-flex ml-auto">

//                         <Nav.Link className={location.pathname === "/welcome" ? "nav-link active": "nav-link"} href="/welcome">Get Started
//                         </Nav.Link>

//                         <Nav.Link className={location.pathname === "/viewTables" ? "nav-link active": "nav-link"} href="/viewTables">View Tables
//                         </Nav.Link>

//                         <Nav.Link className={location.pathname === "/menu" ? "nav-link active": "nav-link"} href="/menu">View Menu
//                         </Nav.Link>

//                         <Nav.Link className={location.pathname === "/importMenu" ? "nav-link active": "nav-link"} href="/importMenu">Update Menu
//                         </Nav.Link>

//                         <li className="nav-item ml-auto">
//                             <Link
//                                 href="/logout"
//                                 to="/"
//                                 activeClass="active"
//                                 className="nav-link"
//                                 >
//                                 Log Out
//                             </Link>
//                         </li>

//                         <Nav.Link className={location.pathname === "/" ? "nav-link active": "nav-link"} onClick={()=>{setUser({})}}>Log Out
//                         </Nav.Link>


//                     </Nav>

//                 </Navbar.Collapse>
//             </Navbar>

//         </>


//     );
// }

// export default NavbarComp;













// prior work when attmempting logout via setUser and an onClick method in the logout nav link


// function NavbarComp({setUser}) {
// 	const location = useLocation();

//     return (

//         <>

//             <Navbar className="navbar" fixed="top sticky-top" variant="dark" expand="lg" bg="black">

//                 <Navbar.Brand to="/"><strong>Table</strong><span className="redFont nav-item">Turner</span></Navbar.Brand>


//                 <Navbar.Toggle aria-controls="responsive-navbar-nav navButtonMargin" />
//                 <Navbar.Collapse id="responsive-navbar-nav">

//                     <Nav className="d-lg-flex ml-auto">

//                         <Nav.Link className={location.pathname === "/welcome" ? "nav-link active": "nav-link"} href="/welcome">Get Started
//                         </Nav.Link>

//                         <Nav.Link className={location.pathname === "/viewTables" ? "nav-link active": "nav-link"} href="/viewTables">View Tables
//                         </Nav.Link>

//                         <Nav.Link className={location.pathname === "/menu" ? "nav-link active": "nav-link"} href="/menu">View Menu
//                         </Nav.Link>

//                         <Nav.Link className={location.pathname === "/importMenu" ? "nav-link active": "nav-link"} href="/importMenu">Update Menu
//                         </Nav.Link>

//                         <Nav.Link className={location.pathname === "/" ? "nav-link active": "nav-link"} onClick={()=>{setUser({})}}>Log Out
//                         </Nav.Link>


//                     </Nav>

//                 </Navbar.Collapse>
//             </Navbar>

//         </>


//     );
// }






