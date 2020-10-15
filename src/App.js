import React from 'react';
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

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/customer/order">
            <PlaceOrder></PlaceOrder>
          </Route>
          <Route path="/servicelist">
            <ServiceList></ServiceList>
          </Route>
          <Route path="/customer/review">
            <Review></Review>
          </Route>
          <Route path="/admin/addservices">
            <AddServices></AddServices>
          </Route>
          <Route path="/admin/makeadmin">
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route  path="*">
            <h1>404 Not Found</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

//style={{cursor:"pointer"}}
