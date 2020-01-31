import {Component} from "react";
import React from "react";

export class MesTickets extends Component<any,any> {
    constructor(props : any){
        super(props);
        this.state = {
            billets: []
        };
        this.rechargerBillets();
    }
    rechargerBillets(){
        var billets = localStorage.getItem("billets");
        if(!billets){
            return;
        }
        this.setState({billets :JSON.parse(billets)});
    }
    render() {
        return <div>
            {this.state.billets.map(function (billet: any, index: number) {
                billet = JSON.parse(billet);
                {billet.gareDepart}
                {billet.gareArrivee}
            })}
        </div>
    }


}