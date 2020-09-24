import React, {Component} from 'react';
import clsx from 'clsx';
import { withStyles } from "@material-ui/core/styles";
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Button from '@material-ui/core/Button';
import NavigationIcon from '@material-ui/icons/Navigation';
import Card from '@material-ui/core/Card';
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import TempCard from './tempCard';
import { Redirect } from 'react-router-dom';
import { NewTask } from './NewTask';
import { withRouter } from "react-router";



class TempDrawer extends Component {

    constructor(props) {
        super(props);
        this.state = {activo: false,nombre:"",email:"",newUser:null}
        
        this.handleActivoChange = this.handleActivoChange.bind(this);
        this.logOut = this.logOut.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleActivoChange() {
      this.setState({ activo: !this.state.activo });
    };

    logOut(){
        console.log("logOut en draw");
        this.props.logOut();
    }

    handleSubmit(){
        console.log("Vamos a crear");
    }

    sendData(x){
        this.setState.nombre({ nombre: x.name });
        this.setState.email({ email: x.email });
    }

    componentDidMount(){
        this.setState({newUser:JSON.parse(localStorage.getItem("newUser"))});
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
              <CssBaseline />
              <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                  [classes.appBarShift]: this.state.activo,
                })}
              >
                <Toolbar position="fixed">
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={this.handleActivoChange}
                    edge="start"
                    className={clsx(classes.menuButton, this.state.activo && classes.hide)}
                  >
                    <MenuIcon />
                  </IconButton>
                </Toolbar>
              </AppBar>
              <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={this.state.activo}
                classes={{
                  paper: classes.drawerPaper,
                }}
              >
                  
                <div className={classes.drawerHeader}>
                  <IconButton onClick={this.handleActivoChange}>
                    {classes.direction === 'ltr' ?  <ChevronRightIcon/> : <ChevronLeftIcon />}
                  </IconButton>
                </div>

                <Divider />
                <Grid>
                    <Card className={classes.rootCard}>
                      <CardHeader
                          className={classes.cardHeader}
                          avatar={
                          <Avatar aria-label="recipe" className={classes.avatar}>
                              A
                          </Avatar>
                          }
                          title="Andres Rocha"
                          subheader="andres@gmail.com"
                      />
                    </Card>
                </Grid>
                  {localStorage.getItem("isLoggedIn") === "true" &&
                  <Grid>
                  <Button
                      variant="contained"
                      color="primary"
                      className={classes.signOff}
                      onClick={this.logOut}
                  >
                      Logout
                  </Button></Grid>}

              </Drawer>
              <main
                className={clsx(classes.content, {
                  [classes.contentShift]: this.state.activo,
                })}
              >
                <div className={classes.drawerHeader} />
                <div>
                  <TempCard titulo={'Implement Login View'} estado={'In progress'}/>
                  <TempCard titulo={'Implement Login Controller'} estado={'Ready'}/>
                  <TempCard titulo={'Facebook Integration'} estado={'Completed'}/>
                  {this.state.newUser  && <TempCard titulo={this.state.newUser.description} estado={this.state.newUser.estado} 
                    responsible={this.state.newUser.responsible} date={this.state.newUser.date}/>}
                </div>
                <br></br>
                <Fab
                      variant="extended"
                      size="small"
                      color="primary"
                      aria-label="add"
                      href="/panel/register"
                      className={classes.margin}
                    >
                      <NavigationIcon className={classes.extendedIcon} />
                      Register
                  </Fab>
              </main>
          </div>
        )
    }
}
const drawerWidth = 240;

//const ShowTheLocationWithRouter = withRouter(NewTask);

const styles = theme => ({

    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },

    root: {
        display: 'flex',
    },
    rootCard: {
        width: "auto",
        alignItems: "center",
        alignContent: "center",
        marginBottom: "100%"
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    avatar: {
        backgroundColor: "#EA0000",
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    cardHeader : {
        margin: "auto"
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    signOff: {
       
        position:"static",
        bottom:"10%",
        right:"75px",
        marginTop: "20%"

    }
});


export default withStyles(styles, { withTheme: true })(TempDrawer);