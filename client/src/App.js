import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from "./utils/API"

// import Menus from "./pages/newMenu"
// import Passport from "./components/Passport/Passport";
import SignupComp from "./components/Signup/Signup";
import LoginComp from "./components/Login/Login";
import NavbarComp from "./components/Navbar/Navbar"
import WelcomePageComp from "./components/WelcomePage/WelcomePage"
import MenuPageComp from "./pages/MenuPage/MenuPage";
import ImportMenuComp from "./components/ImportMenu/ImportMenu";
import AddNewOrderComp from "./components/AddNewOrder/AddNewOrder";
import AddNewTableComp from "./components/AddNewTable/AddNewTable";
import ViewAllTablesComp from "./components/ViewAllTables/ViewAllTables";




function App() {

  const [user, setUser] = useState({})

  useEffect(()=>{
    API.getUser()
    .then(res =>{console.log(res.data); setUser(res.data)})
    .catch(err => {console.log(err)})
  },[])

  
  return (

    <>
      <Router>
        <NavbarComp />
        <Switch>
          <Route exact path="/" component={SignupComp}></Route>
          <Route exact path="/user" component={LoginComp}></Route>
          <Route exact path="/welcome" component={WelcomePageComp}></Route>
          <Route exact path="/importmenu" component={ImportMenuComp}></Route>
          <Route exact path="/menu" component={MenuPageComp}></Route>
          <Route exact path="/startTable" component={AddNewTableComp}></Route>
          <Route exact path="/viewTables" component={ViewAllTablesComp}></Route>
          <Route exact path="/takeOrder" component={AddNewOrderComp}></Route>
          <Route exact path="/importMenu" component={ImportMenuComp}></Route>



          <MenuPageComp />
        </Switch>
      </Router>


      {/* <Passport /> */}

      {/* <WelcomePageComp /> */}

      {/* <LoginComp /> */}
      {/* <ImportMenuComp/> */}

      {/* <AddNewTableComp /> */}
      {/* <AddNewOrderComp /> */}
      {/* <MenuPageComp /> */}
      {/* <ViewAllTablesComp /> */}
 

    </>

  );
};


export default App;
