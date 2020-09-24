import React from 'react';
import './login.css';
import {  withStyles,TextField, MenuItem, Paper, Button, Typography} from '@material-ui/core';
import {Redirect} from 'react-router-dom'


const styles = theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      link: {
        display: 'flex',
      },
      icon: {
        marginRight: theme.spacing(0.5),
        width: 25,
        height: 25,
      },
});

export class Login extends React.Component {

    constructor(props){
        console.log("llegamos a login");
        super(props);
        this.state = {user:'',password:'',rol:''};
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleRolChange = this.handleRolChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUserChange(e){
        this.setState({
            user: e.target.value
        });
    };

    handlePasswordChange(e){
        this.setState({
            password: e.target.value
        });
    };

    handleRolChange(e){
        this.setState({
            rol: e.target.value
        });
    };

    handleSubmit(e){
        e.preventDefault();
        console.log("vamos a logearnos");
        if(this.state.user === "andres@hotmail.com" && this.state.password === "3015"){
            localStorage.setItem('isLoggedIn',true);
            this.props.login();
        }else{
            localStorage.setItem('isLoggedIn',false);
            alert("El correo o la contraseña son incorrectos");
        }
    };

    render() { 
        const { classes } = this.props;
                
        return (
            <div className="fondo">
                 <div>
                 {localStorage.getItem("isLoggedIn") === "true" && <Redirect to="/panel" />}
                    <form onSubmit={this.handleSubmit} className="form" >
                        <br></br>
                        <h2>Iniciar Sesión</h2>
                        <br></br>
                        <div className="text">
                            <div>
                                <TextField  id="username" label="Username" type="email" placeholder="andres@hotmail.com"
                                    onChange={this.handleUserChange} fullWidth autoFocus required />
                            </div>
                            <br></br>
                            <div >
                                <TextField id="username" label="Password" type="password" placeholder="3015"
                                    onChange={this.handlePasswordChange} fullWidth required />
                            </div >
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div>
                            <Button type="submit" color="primary" variant="contained"  className="submit"
                                onChange={this.handleSubmit}>
                                Entrar    
                            </Button>
                        </div>
                        <br></br>
                        <br></br>
                    </form>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Login);