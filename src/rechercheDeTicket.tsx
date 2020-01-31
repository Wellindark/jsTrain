import {Component} from "react";
import React from "react";
import {recherche} from "./utils/recherche";
import Trajet from "./trajet";
import {ResultatGares} from "./utils/resultatgares";
import {Autocomplete} from '@material-ui/lab/';
import {TextField} from "@material-ui/core";

export default class RechercheDeTicket extends Component<any,any> {
    constructor(props : any,context : any){
        super(props,context);
        this.state ={
            gareDepart : '',
            gareArrivee : '',
            garesDepart :[],
            garesArrivees :[]
        };
    }

    async onChangeGareDepart(e:any){
       // this.setState({gareDepart: e.target.value});
        let gares =await recherche(e.target.value) || [];
        this.setState({garesDepart : gares})
    }

    async onChangeGareArrivee(e:any){
        let gares = await recherche(e.target.value) || [];
        this.setState({garesArrivees : gares})
    }
    updateStateGareDepart(e:any){
        this.setState({gareDepart :e.target.innerHTML});
        console.log(this.state.gareDepart);
    }

    updateStateGareArrivee(e:any){
        this.setState({gareArrivee : e.target.innerHTML});
    }

    render(){
        return <div style={{width: "18rem"}}>
            <h4>Recherche de gare</h4>
            Choisir votre billet
            <Autocomplete
            id="country-select-demo"
            style={{ width: 300 }}
            options={this.state.garesDepart}
            onChange={this.updateStateGareDepart.bind(this)}
            renderInput={params => (
                    <TextField
                        {...params}
                        label="Choose a country"
                        variant="outlined"
                        fullWidth
                        inputProps={{
                            ...params.inputProps,
                            autoComplete: 'new-password', // disable autocomplete and autofill
                        }}
                        defaultValue={this.state.gareDepart} onChange={(e:any)=>this.onChangeGareDepart(e)}
                    />
                )}
            />
                <Autocomplete
                    id="country-select-demo"
                    style={{ width: 300 }}
                    options={this.state.garesArrivees}
                    onChange={this.updateStateGareArrivee.bind(this)}
                    renderInput={params => (
                        <TextField
                            {...params}
                            label="Choisissez une gare d'arrivée"
                            variant="outlined"
                            fullWidth
                            inputProps={{
                                ...params.inputProps,
                                autoComplete: 'new-password', // disable autocomplete and autofill
                            }}
                            defaultValue={this.state.gareArrivee} onChange={(e:any)=>this.onChangeGareArrivee(e)}
                        />
                    )}
                />
                <button onClick={(evt:any)=>this.props.func(this.state.gareDepart, this.state.gareArrivee)
             }>Rechercher</button>

        </div>;
    };

}
