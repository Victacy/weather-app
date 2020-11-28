//import logo from './logo.svg';
import './App.css';
import Weather from './Weather'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Navigation from './Navigation';
import LogIn from './LogIn';
import SignUp from './SignUp';
import Home from './Home';




function App() {
  return (
    <Router>
      <Navigation/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route  className="acc" path ="/login" component={LogIn}/>
        <Route path ="/signup" component={SignUp}/>
        <Route path="/weather" component={Weather}/>
     
      </Switch>

    </Router>
      
      
  );
}

export default App;
