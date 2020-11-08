import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Menus from "./pages/newMenu"
// import Passport from "./components/Passport/Passport";
import SignupComp from "./components/Signup/Signup";
// import LoginComp from "./components/Login/Login";
// import NavbarComp from "./components/Navbar/Navbar"
// import WelcomePageComp from "./components/WelcomePage/WelcomePage"
import MenuPageComp from"./components/MenuPage/MenuPage";





function App() {
  return (
    // <Router>
      // <Passport />
    // {/* <Route exact path={["/", "/menus"]}>
    //     <Menus />
    //   </Route>  */}
        
  
    // {/* <Passport /> */}
    // {/* <NavbarComp /> */}
    // {/* <WelcomePageComp /> */}
    // {/* <MenuPageComp /> */}
    // {/* <LoginComp /> */}
    <SignupComp /> 

    // </Router >
  )

};


export default App;
