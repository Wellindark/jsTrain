import React, {Component} from "react";
import Trajet, {Ticket} from "./trajet";
import {recherche} from "./utils/recherche";
import rechercheDeTicket from "./rechercheDeTicket";
import RechercheDeTicket from "./rechercheDeTicket";


export default class ListeTickets extends Component<any,any>{

    constructor(props: any, context : any){
        super(props,context)
        this.handleGareDepart = this.handleGareDepart.bind(this);
        this.state={
            gareDepart : '',
            gareArrivee :'',
        };
        this.handleGareArrivee = this.handleGareArrivee.bind(this);

    };

    handleGareDepart(evt : string, evt2 : string) {
        this.setState({gareDepart: evt});
        this.setState({gareArrivee : evt2})
    };

    handleGareArrivee(evt : string){
        this.setState({gareArrivee :evt});
    };


    tickets :Ticket[] = [

        {gareArrive: 'Paris', gareDepart: 'Lille',dateDepart:'31/01/2020'},
        {gareArrive: 'Paris', gareDepart:'Lille',dateDepart:'31/01/2020'},
        {gareArrive: 'Paris', gareDepart:'Lille',dateDepart:'31/01/2020'},
        {gareArrive: 'Paris', gareDepart:'Lille',dateDepart:'31/01/2020'},
        {gareArrive: 'Paris', gareDepart:'Lille',dateDepart:'31/01/2020'},
        {gareArrive: 'Paris', gareDepart:'Lille',dateDepart:'31/01/2020'},
        ];

    generateList(){
            return this.tickets.map((ticket)=>{return <Trajet gareDepart={ticket.gareDepart} gareArrive={ticket.gareArrive} dateDepart={ticket.dateDepart}></Trajet>})
        }



render() {

        {
            return <div>
                <RechercheDeTicket func={this.handleGareDepart}></RechercheDeTicket>
                {this.generateList()}

            </div>
        }
    }
}