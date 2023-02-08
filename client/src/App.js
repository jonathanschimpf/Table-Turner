import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import API from "./utils/API"



import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import NavigationBar from "./components/NavigationBar/NavigationBar"
import WelcomePage from "./pages/WelcomePage/WelcomePage"
import MenuPage from "./pages/MenuPage/MenuPage";
import ImportMenu from "./pages/ImportMenu/ImportMenu";
import AddNewOrder from "./components/AddNewOrder/AddNewOrder";
import AddNewTable from "./components/AddNewTable/AddNewTable";
import ViewAllTables from "./pages/ViewAllTables/ViewAllTables";
import Kitchen from "./pages/Kitchen/Kitchen";
import ViewRestaurant from "./pages/ViewRestaurant/ViewRestaurant";
import Manager from "./pages/ManagerPage/ManagerPage";
import LandingPage from "./pages/LandingPage/LandingPage";


function App() {

  const [user, setUser] = useState({})



  useEffect(() => {
    getUser()
  }, [])





  const getUser = () => {
    console.log('getting user...')
    
    API.getUser()
      .then(res => {
        console.log('user: ', res.data);
        setUser(res.data);
      }
      )
      .catch(err => {
        console.log(err);
        // window.location.replace('/login')
      })

  }


  // localStorage.setItem('UserId', user.id)
  // localStorage.setItem('Username', user.username)




  return (

    <>


      <Router>

        <NavigationBar getUser={getUser} user={user} />


        <Routes>

          <Route path="/" element={<LandingPage />} />

          
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Signup setUser={setUser} />} />


          {/* {user ? */}

          <>
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="/manager" element={<Manager />} />

            <Route path="/importmenu" element={<ImportMenu />} />
            <Route path="/menu" element={<MenuPage />} />
            
            <Route path="/startTable" element={<AddNewTable />} />
            <Route path="/viewTables" element={<ViewAllTables />} />
            <Route path="/viewRestaurant" element={<ViewRestaurant />} />
            <Route path="/takeOrder" element={<AddNewOrder />} />
            <Route path="/importMenu" element={<ImportMenu />} />
            <Route path="/kitchen" element={<Kitchen />} />

          </>
          :
          {/* <h1>you must login</h1> */}
          {/* } */}






          <Route path="*" element={<h1>Page not found</h1>} />


        </Routes>

      </Router>


      <WelcomePage />



    </>


  );
};


export default App;