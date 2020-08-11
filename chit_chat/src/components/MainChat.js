import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';



const useStyles = makeStyles((theme) => ({
    root: {
        margin: '50px',
        padding: theme.spacing(3,2)
    },
    flex: {
        display: 'flex'
    },
    sectionWindow: {
        width: '30%',
        height: '300px',
        borderRight: '1px solid black'

    },
    chatWindow: {
        width: '70%',
        height: '300px'

    },
    chatBox: {
        width: '85%'

    },
    button: {
        width:'15%'

    },
  }));
  
  export default function MainChat() {
    const classes = useStyles();
  
    return (
     <div>
        <Paper className={classes.root} elevation={3}>
            <Typography variant="h4" component="h4">
                Chit Chat
            </Typography>
            <Typography variant="h6" gutterBottom>
                Chat Room
            </Typography>
            <Divider />
            <div className={classes.flex}>
                <div className={classes.sectionWindow}>
                    <List>
                        {
                            [].map(section => (
                                <div className= {classes.flex}>


                                </div>

                            ))
                        }
                    </List>

                </div>
                <div className={classes.chatWindow}>
                
                        {
                            [{from:'user', msg: 'Welcome'}].map((chat, i) => (
                                <div className={classes.flex} key={}>
                                <Chip label="Basic" />

                            ))
                        }
                

                </div>
                

            </div>
            <div className={classes.flex}>


            </div>
        </Paper> 

      </div>
    );
  }

