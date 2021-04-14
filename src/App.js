import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Appointment from './Components/Appointment/Appointment/Appointment';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './Components/Login/PrivateRoute';
import AllPatients from './Components/Dashboard/AllPatients/AllPatients/AllPatients';
import AddDoctor from './Components/AddDoctor/AddDoctor';

export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value ={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path ="/">
          <Home></Home>
        </Route>

        <Route path="/addDoctor"> 
        <AddDoctor></AddDoctor>       
        </Route>
        
        <Route path="/doctor/appointment">
          <AllPatients></AllPatients>        
        </Route>
        {/* <Route path="/doctor/patients">   
             <AllPatients></AllPatients>
        </Route> */}
        {/* <Route path="/doctor/prescriptions">        
        </Route>
        <Route path="/doctor/setting">        
        </Route> */}
        
        <Route path="/appointment">
          <Appointment></Appointment>
        </Route>
        <Route path="/dashboard/appointment">
          <Dashboard></Dashboard>
        </Route>
        <Route path ="/login">
          <Login></Login>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
