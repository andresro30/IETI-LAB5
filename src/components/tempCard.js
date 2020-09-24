import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const styles = them => ({
  root: {
    minWidth: 275,
    margin: '20px 50px 20px 50px',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  titleProgress: {
    fontSize: 40,
    color: "#DA4B15",
  },
  titleReady: {
    fontSize: 40,
    color: "#0071EA",
  },
  titleCompleted: {
    fontSize: 40,
    color: "#3CCA0A",
  },
  pos: {
    marginBottom: 12,
  }
});


class TempCard extends Component{
    constructor(props){
        super(props);
    }

    render(){    
        const { classes } = this.props;
        const date = new Date().getDate()+"/"+ new Date().getMonth() +"/"+ new Date().getFullYear();

        return (
            <Card className={classes.root}>
              <CardContent>
                {this.props.estado==="In progress" && <Typography className={classes.titleProgress} color="textPrimary" gutterBottom>{this.props.titulo}</Typography>}
                {this.props.estado==="Ready" && <Typography className={classes.titleReady} color="textPrimary" gutterBottom>{this.props.titulo}</Typography>}
                {this.props.estado==="Completed" && <Typography className={classes.titleCompleted} color="textPrimary" gutterBottom>{this.props.titulo}</Typography>}

                <br></br>
                <br></br>
                <Typography variant="h5" component="h5">
                    {this.props.estado}
                </Typography>
                <br></br>
                <Typography variant="h5" component="h3">
                    {date}
                </Typography>
                <Typography variant="h5" component="h5" color="textSecondary">
                    {this.props.responsible}
                </Typography>
              </CardContent>
            </Card>
          );
    }
}


export default withStyles(styles, { withTheme: true })(TempCard);