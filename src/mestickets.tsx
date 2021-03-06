import {Component} from "react";
import React from "react";

export default class MesTickets extends Component<any,any> {
    constructor(props : any, context :any){
        super(props,context);
        this.state = {
            billet : ""
        };
        this.billetHandler= this.billetHandler.bind(this);
    }

    billetHandler(jsonParsed : string | null){
        this.setState({billet : jsonParsed});
    }
    rechargerLesBillets(){
        console.log(localStorage.getItem("billet"));
        let billet = localStorage.getItem("billet");
            this.billetHandler(billet);
            console.log(billet);
            if (billet != null) {
                console.log("localstorage billet 2 " + JSON.parse(billet))
            }

        if (billet != null) {
            this.billetHandler(billet);
            console.log('state' + this.state.billet);
        }else{
            return;
        }

    }

    render() {
        return <div>
            {this.rechargerLesBillets}
            Mon billet : {this.state.billet}
        </div>
    }


}