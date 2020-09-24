import React from 'react';
import './login.css';
import {  withStyles,TextField, Button}    from '@material-ui/core';
import { withRouter } from "react-router";


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
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
});

export class UserProfile extends React.Component {

    constructor(props){
        super(props);
        this.state = {name:'',email:'',password:'',confirpass:''};
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleConfirpassChange = this.handleConfirpassChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleNameChange(e){
        this.setState({
            name: e.target.value
        });
    };

    handleEmailChange(e){
        this.setState({
            email: e.target.value
        });
    };


    handlePasswordChange(e){
        this.setState({
            password: e.target.value
        });
    };

    handleConfirpassChange(e){
        this.setState({
            confirpass: e.target.value
        });
    };

    handleSubmit(e){
        e.preventDefault();
        console.log("vamos a editar el perfil");
        if(this.state.email !== "" && this.state.name !== "" && this.state.password !==""
            && this.state.confirpass !=="")
        {
            if(this.state.password === this.state.confirpass){
                console.log("Vamos editar datos");
            }
            else{
                alert("La constraseña no es la misma");
            }
        }
        else{
            alert("Datos incompletos");
        }

    };

    render() { 
        const { classes } = this.props;
                
        return (
            <div className="fondo">
                 <div>
                    <form onSubmit={this.handleSubmit} className="form" >
                        <br></br>
                        <h2>Registrar</h2>
                        <br></br>
                        <div className="text">
                            <div>
                                <TextField  id="name" label="FullName" placeholder="Full Name"
                                    onChange={this.handleNameChange} fullWidth autoFocus required />
                            </div>
                            <br></br>
                            <div>
                                <TextField  id="email" label="Email"  placeholder="email"
                                    onChange={this.handleEmailChange} fullWidth autoFocus required />
                            </div>
                            <br></br>
                            <div >
                                <TextField id="password" label="Password" type="password" placeholder="password"
                                    onChange={this.handlePasswordChange} fullWidth required />
                            </div >
                            <br></br>
                            <div >
                                <TextField id="second-password" label="Confirm password" type="password" placeholder="password"
                                    onChange={this.handleConfirpassChange} fullWidth required />
                            </div >
                        </div>
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

export default withRouter(withStyles(styles)(UserProfile));