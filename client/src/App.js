import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch, useHistory, Redirect } from "react-router-dom";
import API from "./utils/API"


import SignupComp from "./components/Signup/Signup";
import LoginComp from "./components/Login/Login";
import NavbarComp from "./components/Navbar/Navbar"
import WelcomePageComp from "./pages/WelcomePage/WelcomePage"
import MenuPageComp from "./pages/MenuPage/MenuPage";
import ImportMenuComp from "./pages/ImportMenu/ImportMenu";
import AddNewOrderComp from "./components/AddNewOrder/AddNewOrder";
import AddNewTableComp from "./components/AddNewTable/AddNewTable";
import ViewAllTablesComp from "./pages/ViewAllTables/ViewAllTables";
import KitchenComp from "./pages/Kitchen/Kitchen";
import ViewRestaurantComp from "./pages/ViewRestaurant/ViewRestaurant";
import ManagerComp from "./pages/ManagerPage/ManagerPage";


function App() {

  const [user, setUser] = useState({})
  const [redirect, setRedirect] = useState(false);
  console.log(user)
  
  
  let history = useHistory();

  useEffect(() => {
  getUser()
  }, [])

  const getUser = () => {
    if(window.location.pathname === "/") {
      history.push("/login")
    }
    API.getUser()
      .then(res => { setUser(res.data) ; console.log(res.data.id) })
      .catch(err => { console.log(err) })
      
  }
 
    
    localStorage.setItem('UserId', user.id)
 localStorage.setItem('Username', user.username)
  
  return (

    <>
    
        
        <NavbarComp getUser={getUser} user={user} />
        <Switch>
            <Route exact path="/welcome" >
              {user ? <WelcomePageComp/> : <Redirect to="/login"/>}</Route>
              <Route exact path="/manager" >
              {user ? <ManagerComp/> : <Redirect to="/login"/>}</Route>
              <Route exact path="/importmenu" >
              {user ? <ImportMenuComp/> : <Redirect to="/login"/>}</Route>
              <Route exact path="/menu" >
              {user ? <MenuPageComp /> : <Redirect to="/login"/>}</Route>
              <Route exact path="/startTable" >
              {user ? <AddNewTableComp/> : <Redirect to="/login"/>}</Route>
              <Route exact path="/viewTables" >
              {user ? <ViewAllTablesComp/> : <Redirect to="/login"/>}</Route>
              <Route exact path="/viewRestaurant" >
              {user ? <ViewRestaurantComp/> : <Redirect to="/login"/> }</Route>
              <Route exact path="/takeOrder" >
              {user ? <AddNewOrderComp/> : <Redirect to="/login"/>}</Route>
              <Route exact path="/importMenu" >
              {user ? <ImportMenuComp/> : <Redirect to="/login"/>}</Route>
              <Route exact path="/kitchen" >
              {user ? <KitchenComp/> : <Redirect to="/login"/> }
              </Route>  
              <Route path="/login"><LoginComp setUser={setUser}/></Route>
              <Route path="/register"><SignupComp setUser={setUser}/></Route>
        </Switch>
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

