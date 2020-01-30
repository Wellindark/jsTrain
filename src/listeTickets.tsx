import React, {Component} from "react";
import Trajet, {Ticket} from "./trajet";


export default class ListeTickets extends Component<Ticket,any>{
    tickets :Ticket[] = [
        {gareArrive: 'Paris', gareDepart:'Lille',dateDepart:'31/01/2020'},
        {gareArrive: 'Paris', gareDepart:'Lille',dateDepart:'31/01/2020'},
        {gareArrive: 'Paris', gareDepart:'Lille',dateDepart:'31/01/2020'},
        {gareArrive: 'Paris', gareDepart:'Lille',dateDepart:'31/01/2020'},
        {gareArrive: 'Paris', gareDepart:'Lille',dateDepart:'31/01/2020'},
        {gareArrive: 'Paris', gareDepart:'Lille',dateDepart:'31/01/2020'},
        ];

    generateList(){
       return this.tickets.map((ticket)=>{return <Trajet gareDepart={ticket.gareDepart} gareArrive={ticket.gareArrive} dateDepart={ticket.dateDepart}></Trajet>})
    }
    render(){
        return this.generateList()
    }
}