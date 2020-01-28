import React from 'react';
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom';
import Login from './login';
import logo from './logo.svg';
import './App.css';

export function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">Accueil</Link>
        <Link to="/login">Login</Link>
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/" component={Login}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
