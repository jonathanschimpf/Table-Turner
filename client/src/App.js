import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Menus from "./pages/newMenu"
// import Passport from "./components/Passport/Passport";
// import SignupComp from "./components/Signup/Signup";
// import LoginComp from "./components/Login/Login";
import NavbarComp from "./components/Navbar/Navbar"
// import WelcomePageComp from "./components/WelcomePage/WelcomePage"
import MenuPageComp from "./pages/MenuPage/MenuPage";
import ImportMenuComp from "./components/ImportMenu/ImportMenu";
// import AddNewOrderComp from "./components/AddNewOrder/AddNewOrder";
// import AddNewTableComp from "./components/AddNewTable/AddNewTable";
import ViewAllTablesComp from "./components/ViewAllTables/ViewAllTables";





function App() {
  return (

    <>

      <Router>
      <NavbarComp />
        <Switch>
        <Route exact path={["/", "/add"]}><ImportMenuComp /></Route>
        <Route exact path="/menus"><MenuPageComp  /></Route>
       

        
        {/* <ImportMenuComp/> */}
        {/* <MenuPageComp  /> */}
        </Switch>
        </Router> 
      

      {/* <Passport /> */}
      
      {/* <WelcomePageComp /> */}
      
      {/* <LoginComp /> */}
      {/* <ImportMenuComp/> */}
      {/* <SignupComp /> */}
      {/* <AddNewTableComp /> */}
      {/* <AddNewOrderComp /> */}
      {/* <MenuPageComp /> */}
      {/* <ViewAllTablesComp /> */}

      

    </>

  );
};


export default App;
