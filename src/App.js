import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import PlaceOrder from './Components/Customer/PlaceOrder/PlaceOrder';
import ServiceList from './Components/Shared/ServiceList/ServiceList';
import Review from './Components/Customer/Review/Review';
import MakeAdmin from './Components/Admin/MakeAdmin/MakeAdmin';
import AddServices from './Components/Admin/AddServices/AddServices';
import PrivateRoute from './Components/Login/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      <div>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/customer/order">
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>
          <PrivateRoute path="/servicelist">
            <ServiceList></ServiceList>
          </PrivateRoute>
          <PrivateRoute path="/customer/review">
            <Review></Review>
          </PrivateRoute>
          <PrivateRoute path="/admin/addservices">
            <AddServices></AddServices>
          </PrivateRoute>
          <PrivateRoute path="/admin/makeadmin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route  path="*">
            <h1>404 Not Found</h1>
          </Route>
        </Switch>
      </div>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
