import React, {Component} from "react";
import Trajet, {Ticket} from "./trajet";

export default class CreerListeTickets extends Component<any,any>{
    constructor(props: any, context : any) {
        super(props, context)
        this.state = {
            gareDepart: '',
            gareArrivee: '',
        };
    }

    tickets :Ticket[] = [

        {gareArrive: this.state.gareDepart, gareDepart: this.state.gareArrivee,dateDepart:'31/01/2020'},
        {gareArrive: 'Paris', gareDepart:'Lille',dateDepart:'31/01/2020'},
        {gareArrive: 'Paris', gareDepart:'Lille',dateDepart:'31/01/2020'},
        {gareArrive: 'Paris', gareDepart:'Lille',dateDepart:'31/01/2020'},
        {gareArrive: 'Paris', gareDepart:'Lille',dateDepart:'31/01/2020'},
        {gareArrive: 'Paris', gareDepart:'Lille',dateDepart:'31/01/2020'},
    ];

    generateList(){
        return this.tickets.map((ticket)=>{return <Trajet gareDepart={ticket.gareDepart} gareArrive={ticket.gareArrive} dateDepart={ticket.dateDepart}></Trajet>})
    }
}