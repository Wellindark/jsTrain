import React, {Component} from "react";

export interface Ticket {
    gareDepart : string;
    gareArrive : string;
    dateDepart : string;
}
export default class Trajet extends Component<Ticket,any>{

    render(){
        return <div>
            Gare de départ du trajet : {this.props.gareDepart};
            Date départ du trajet : {this.props.dateDepart};

        </div>
    };

}