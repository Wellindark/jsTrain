import React, {Component} from "react";
import Trajet, {Ticket} from "./trajet";
import {recherche} from "./utils/recherche";
import rechercheDeTicket from "./rechercheDeTicket";
import RechercheDeTicket from "./rechercheDeTicket";
import {Button} from "@material-ui/core";


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

    reserverBillet(){
        var billet = JSON.stringify({
            "gareDepart": this.state.gareDepart,
            "gareArrivee" : this.state.gareArrivee,
        });
        var billets: string | null = localStorage.getItem("billets") ;

        if(billets) {
            billets = JSON.parse(billets);
        }

        localStorage.setItem("billets", JSON.stringify(billets));
        document.location.href="/mesTickets";
    }



render() {

        {
            return <div>
                <RechercheDeTicket func={this.handleGareDepart}></RechercheDeTicket>
                <p>gare départ : {this.state.gareDepart}</p>
                <p>gare arrivée : {this.state.gareArrivee}</p>
                <Button onClick={()=> this.reserverBillet()}>
                    Réserver ce billet
                </Button>

            </div>
        }
    }
}