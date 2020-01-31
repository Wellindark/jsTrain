import React, {Component} from "react";

export default class Reduction extends Component<any,any>{
    constructor(props : any, context:any){
        super(props,context);
        this.state = {
            promo : '',
            promoAppliquee: localStorage.getItem("promo"),
            email: localStorage.getItem('mail'),
            billet : ''
        };
        this.ajouterPromo = this.ajouterPromo.bind(this);
        this.supprimerPromo = this.supprimerPromo.bind(this);
        this.onChangePromo= this.onChangePromo.bind(this);
        this.getBillet = this.getBillet.bind(this);
    }

    ajouterPromo(){
        if(!this.getBillet()){
            localStorage.setItem("promo", JSON.stringify(this.state.promo));
            this.setState({promoAppliquee:this.state.promo});
        }
    }

    onChangePromo(e :any){
        this.setState({promo:e.target.value});
    }

    supprimerPromo(){
        if(!this.getBillet()){
            localStorage.removeItem("promo");
            this.setState({promoAppliquee: null});
        }
    }

    getBillet(){
        var billet = localStorage.getItem("billet");
        if(billet){
            this.setState({billet : billet});
        }
        return billet;
    }

    render(){
        if(this.state.promoApplique == null) {
            return <div>
                <form noValidate autoComplete="off">
                    <div>
                        <input type="text" onChange={(event: any) => this.onChangePromo(event)}/>
                        <button color="primary" onClick={() => this.ajouterPromo()}>
                            Ajouter une promotion
                        </button>
                    </div>
                </form>
            </div>
        }else if(this.getBillet()!= null) {
            return <div>
                <p>Vous ne pouvez pas ajouter de code promo, un billet existe déjà.</p>
            </div>
            } else {
            return <div>Email : {this.state.email}
                    <div>
                        Votre code promo : {JSON.parse(this.state.promoApplique)}
                        <button onClick={()=>this.supprimerPromo()}>
                            Supprimer la promo
                        </button>
                    </div>
            </div>

            }
    }
}