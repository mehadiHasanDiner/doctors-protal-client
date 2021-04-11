import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Appointment from './Components/Appointment/Appointment/Appointment';
import Login from './Components/Login/Login';



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path ="/">
          <Home></Home>
        </Route>
        <Route path="/appointment">
          <Appointment></Appointment>
        </Route>
        <Route path ="/login">
          <Login></Login>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
