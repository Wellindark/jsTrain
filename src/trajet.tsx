import React, {Component} from "react";

export interface Ticket {
    gareDepart : string;
    gareArrive : string;
    dateDepart : string;
}
export default class Trajet extends Component<Ticket,any>{

    render(){
        return <div>
            <p>Depart : {this.props.gareDepart}</p>
            <p>Arrivee : {this.props.gareArrive}</p>
            <p>Date depart :{this.props.dateDepart}</p>
        </div>
    };

}