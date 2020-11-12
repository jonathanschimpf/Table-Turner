import React, { useEffect, useState } from "react";
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
  const [redirect, setRedirect] = useState("");

  useEffect(() => {
    API.getUser()
      .then(res => { console.log(res.data); setUser(res.data) })
      .catch(err => { console.log(err) })
  }, [])

  

  return (

    <>
      <Router>
        
        <NavbarComp />
        <Switch>
          {user ? <>
            <Route exact path="/welcome" component={WelcomePageComp}></Route>
            <Route exact path="/importmenu" component={ImportMenuComp}></Route>
            <Route exact path="/menu" component={MenuPageComp}></Route>
            <Route exact path="/startTable" component={AddNewTableComp}></Route>
            <Route exact path="/viewTables" component={ViewAllTablesComp}></Route>
            <Route exact path="/takeOrder" component={AddNewOrderComp}></Route>
            </> :
             <>
            <Route exact path="/signup"><SignupComp/></Route>
            <Route path="/" ><LoginComp/></Route>
             </>}
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













//jonathan's attempts with dominique. everything was working except logout


// import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import API from "./utils/API"

// import Menus from "./pages/newMenu"
// import Passport from "./components/Passport/Passport";
// import SignupComp from "./components/Signup/Signup";
// import LoginComp from "./components/Login/Login";
// import NavbarComp from "./components/Navbar/Navbar"
// import WelcomePageComp from "./components/WelcomePage/WelcomePage"
// import MenuPageComp from "./pages/MenuPage/MenuPage";
// import ImportMenuComp from "./components/ImportMenu/ImportMenu";
// import AddNewOrderComp from "./components/AddNewOrder/AddNewOrder";
// import AddNewTableComp from "./components/AddNewTable/AddNewTable";
// import ViewAllTablesComp from "./components/ViewAllTables/ViewAllTables";





// function App() {

//   const [user, setUser] = useState({})
//   const [redirect, setRedirect] = useState("");

//   useEffect(() => {
//     API.getUser()
//       .then(res => { console.log(res.data); setUser(res.data) })
//       .catch(err => { console.log(err) })
//   }, [])

// log out method sets user to empty object and then redirects to the main login page  

  // return (

  //   <>
  //     <Router>
        
  //       <NavbarComp setUser={setUser}/>
  //       <Switch>
  //         {user ? <>
  //           <Route exact path="/welcome" component={WelcomePageComp}></Route>
  //           <Route exact path="/importmenu" component={ImportMenuComp}></Route>
  //           <Route exact path="/menu" component={MenuPageComp}></Route>
  //           <Route exact path="/startTable" component={AddNewTableComp}></Route>
  //           <Route exact path="/viewTables" component={ViewAllTablesComp}></Route>
  //           <Route exact path="/takeOrder" component={AddNewOrderComp}></Route>
  //           </> :
  //            <>
  //           <Route path="/signup" ><SignupComp setUser={setUser}/></Route>
  //           <Route path="/"><LoginComp setUser={setUser}/></Route>
  //            </>}
  //       </Switch>
  //     </Router>


//   );
// };


// export default App;

