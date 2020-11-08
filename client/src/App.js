import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Passport from "./components/Passport/Passport";
import Menus from "./pages/newMenu"



function App() {
  return (
    <Router>
      <Passport />
    <Route exact path={["/", "/menus"]}>
        <Menus />
      </Route> 
        

    </Router >
  )

};


export default App;
