import React from 'react';

export class ResultatGares extends React.Component<any,any>{

    constructor(props : any){
        super(props);
    }

    render(){
        return (
            <ul className="list-group">
                {this.props.gares.map(function(gare:string,index:number){
                    return <li className="list-group-item" key={index}>{gare}</li>;
                })}
            </ul>
        )}
}