import React, {Component, useState} from 'react';
import ReactDom from 'react-dom';


export default class LoginForm extends Component<any,any>{
    constructor(props: any,context:any) {
        super(props, context);
        this.state={
            email:"",
            password:""
        };
        this.emailChange = this.emailChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
    }

    emailChange(event :any){
        this.setState({email: event.target.value});
        console.log(this.state.email);
    }
    passwordChange(event:any){
        this.setState({password: event.target.value});
        console.log(this.state.password);
    }

    public LoginSubmit(email:string, password:string) {

        const url = "https://reqres.in/api/login"
        const data = {email: this.state.email, password: this.state.password}
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {'Content-Type': 'application/json'}
        })
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response))
    }

    render(){

        return <div className="LoginForm">
            <form onSubmit={(event:any) =>{
                event.preventDefault();
                this.LoginSubmit(this.state.email,this.state.password)}}>
                <label> Email :
                    <input type="email" onChange={(event:any)=>this.emailChange(event)}/>
                </label>
                <label> Password:
                    <input type="password" onChange={(event:any)=>this.passwordChange(event)}/>
                </label>
                <input type="submit" value="submit"/>
            </form>
        </div>;
    };






}/*
export default class Login extends Component<{ email: string, password: string }> {
    render() {
        let {email, password} = this.props;

        //const [email, setEmail] = useState("");
        //const [password, setPassword] = useState("");

        function setEmail(this: any, email: string) {
            this.setState({
                email: email,
            });
        }

        function setPassword(this: any, password: string) {
            this.setState({
                password: password,
            });
        }

        function loginSubmit(this: any, event: any) {
            event.preventDefault();
            const url = "https://reqres.in/api/login"
            const data = {email: this.state.email, password: this.state.password}
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {'Content-Type': 'application/json'}
            })
                .catch(error => console.error('Error:', error))
                .then(response => console.log('Success:', response))
        }

        return (
            <div className="LoginForm">
                <form onSubmit={loginSubmit}>
                    <label> Email :
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                    </label>
                    <label> Password:
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    </label>
                    <input type="submit" value="submit"/>
                </form>
            </div>
        );
    }
}
/*class loginForm extends React.Component<any, any>{
    constructor(props) {
        super(props);
        this.state ={value :''};
        this.loginSubmit = this.loginSubmit.bind(this);
    }


    loginSubmit(event) {
        alert('Login was done: ' + this.state.value);
    }
    loginChange(event){
        this.setState({value: event.target.value});
    }
render() {
    return(

    <div className="LoginForm">
        <form onSubmit={this.loginSubmit}>
            <label> Email :
                <input type="email" value={this.state.value} onChange={this.loginChange}/>
            </label>
            <label> Password:
                <input type="password" name="password"/>
            </label>
            <input type="submit" value="submit" />
        </form>
    </div>
    );
}*/

