import {Component} from "react";
import React from "react";
import {recherche} from "./utils/recherche";

export default class Tickets extends Component<any,any> {
    constructor(props : any,context : any){
        super(props,context);
        this.state ={
            gareDepart : '',
            gareArrivee : '',

        };
    }
    async onChangeInput(e:any){
        let gares =await recherche(e.target.value) || [];

    }

    async onChangeGareDepart(e:any){
        this.setState({gareDepart: e.target.value});
    }

    async onChangeGareArrivee(e:any){
        this.setState({gareArrivee : e.target.value});
    }

    render(){
        return <div style={{width: "18rem"}}>
            <h4>Recherche de gare</h4>
            <input type="search" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" defaultValue={this.state.gareDepart} onChange={(e:any)=>this.onChangeGareDepart(e)}/>
            <input type="search" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" defaultValue={this.state.gareArrivee} onChange={(e:any) => this.onChangeGareArrivee(e)}/>
        </div>;
    };

}
