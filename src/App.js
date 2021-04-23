import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Homepage from './Components/Homepage/Homepage'
import Login from './Components/LoginPage/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AfterLogin from './Components/AfterLogin/AfterLogin';
import { useContext } from 'react';
import { createContext } from 'react';
import { useState } from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import ParticlesBackground from './Components/OngshoGrohon/OngshoGrohon';
import User from './Components/AfterLogin/User/User';
import 'bootstrap/dist/css/bootstrap.min.css';
import Record from './Components/OnudaanRecords/Record';
import OngshoGrohon from './Components/OngshoGrohon/OngshoGrohon';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Context=createContext({})
function App() {
  const [Loggedin,setLoggedin]=useState({})
  console.log(Loggedin)
  const [bot,Setbot]=useState()
// console.log(bot)

  return (
    <Context.Provider value={[Loggedin,setLoggedin]}>
    <Router>
      <Switch>
        <Route exact path="/">
         <Homepage/>
        </Route>
        <Route path="/Homepage">
          <Homepage  Setbot={Setbot}/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <PrivateRoute path="/Afterlogin">
          <AfterLogin/>
        </PrivateRoute>
        
        <Route path="/Onudaan">
          <Record/>
        </Route>
      </Switch>
    </Router>
    </Context.Provider>
  );
}

export default App;
