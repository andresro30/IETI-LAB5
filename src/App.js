import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Login} from './components/login';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import TempDrawer from './components/tempDrawer';
import NewTask from './components/NewTask';
import  UserProfile  from './components/UserProfile';

class App extends Component {

    constructor(props) {
        console.log("estamos en app");
        super(props);
        
        this.state = {isLoggedIn: false};
        this.handleLogginChange = this.handleLogginChange.bind(this);
        this.logOut = this.logOut.bind(this);
        this.logIn = this.logIn.bind(this);
    }

    handleLogginChange() {
        this.setState({
            isLoggedIn: !this.state.isLoggedIn
        });
    };

    logIn(){
        console.log("vamos al menu");
        this.handleLogginChange();
        console.log(localStorage.getItem('isLoggedIn'));
        document.href="/panel";
    };

    
    logOut(){
        localStorage.clear();
        localStorage.setItem('isLoggedIn',false);
        this.handleLogginChange();
    };

    render() {
        const LoginView = () => (<Login login={this.logIn}/>);

        const DrawerView = () => (<TempDrawer logOut={this.logOut}/>);

        const NewTaskView = () => (<NewTask />);

        const UserProfile = () => (<UserProfile />);

        return (
            
            <BrowserRouter>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h3 className="App-title">Lab 5 IETI</h3>
                    </header>
                    <div>
                        {localStorage.getItem('isLoggedIn') === "false" ? <Redirect to="/"/>: null}
                        {console.log(localStorage.getItem('isLoggedIn'))}
                        <Switch>
                            <Route exact path="/" component={LoginView}/>
                            <Route exact path="/panel" component={DrawerView}/>
                            <Route exact path="/panel/register" component={NewTaskView}/>
                            <Route exact path="/panel/user" component={UserProfile}/>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}
export default App;
