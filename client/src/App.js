import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import API from "./utils/API"


// Pages
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

// ProtectedRoute
import ProtectedRoute from "./components/ProtectedRoute";
import { getHomepageLink } from "./utils/HomepageHelper";


function App() {

  const [user, setUser] = useState({});

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);


  const navigate = useNavigate();


  useEffect(() => {
    getUser()
  }, [])




  // Load the user, if logged in
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



    let username = localStorage.getItem("username");
    let title = localStorage.getItem("title");
    let _id = localStorage.getItem("_id");

    console.log({ username, title, _id });

    // Check if these vals are defined. If they are, user is logged in.
    let isLoggedIn = (username && title && _id) ? true : false;
    console.log("isLoggedIn: ", isLoggedIn);

    if (isLoggedIn) {
      setUser({ username, title, _id })

      let homepage = getHomepageLink(title);
      navigate(homepage);
    }

    setIsLoggedIn(isLoggedIn);
    setIsLoaded(true);
  }



  return (
    <>
      <NavigationBar getUser={getUser} user={user} isLoggedIn={isLoggedIn} />


      {isLoading && "Loading..."}

      {!isLoading && isLoaded &&
        <>
          <Routes>
            <Route path="/" element={<LandingPage />} />

            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/register" element={<Signup setUser={setUser} />} />
            <Route path="/yup" element={<h1>youre redirecteed!</h1>} />


            {/* Protected Routes below. User must be logged in to view these pages. */}
            <Route element={<ProtectedRoute isAllowed={isLoggedIn} />}>
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
            </Route>


            <Route path="*" element={<h1>404 - Page not found</h1>} />

          </Routes>
        </>
      }

    </>
  );
};


export default App;