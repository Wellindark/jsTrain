import React, {useState} from 'react';
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom';
import Login from './login';
import RechercheDeTicket from './rechercheDeTicket';
import logo from './logo.svg';
import './App.css';
import Trajet from './trajet';
import ListeTickets from "./listeTickets";
import {MesTickets} from "./mestickets";

export function App() {
  const [isLogged, setIsLogged] = useState();
  const [listeTickets, setListeTickets] = useState([
    {gareArrive: 'Paris', gareDepart:'Lille',dateDepart:'31/01/2020'},
    {gareArrive: 'Paris', gareDepart:'Lille',dateDepart:'31/01/2020'},
    {gareArrive: 'Paris', gareDepart:'Lille',dateDepart:'31/01/2020'},
    {gareArrive: 'Paris', gareDepart:'Lille',dateDepart:'31/01/2020'},
    {gareArrive: 'Paris', gareDepart:'Lille',dateDepart:'31/01/2020'},
    {gareArrive: 'Paris', gareDepart:'Lille',dateDepart:'31/01/2020'},
  ]);


  return (
    <div className="App">
      <Router>
        <Link to="/">Accueil</Link>
        <Link to="/login">Login</Link>
        <Link to="/tickets">Tickets</Link>
        <Link to="/trajet">Trajet</Link>
        <Link to="/mestickets">Mes Tickets</Link>
        <Switch>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/tickets" component={ListeTickets}/>
          <Route exact path="/trajet"></Route>
          <Route exact path="/mestickets" component={MesTickets}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
