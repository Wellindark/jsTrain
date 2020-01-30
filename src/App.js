import React, {useState} from 'react';
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom';
import Login from './login';
import logo from './logo.svg';
import './App.css';

export function App() {
  const [isLogged, setIsLogged] = useState();

  return (
    <div className="App">
      <Router>
        <Link to="/">Accueil</Link>
        <Link to="/login">Login</Link>
        <Link to="/tickets">Tickets</Link>
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route exact path={"/"}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
