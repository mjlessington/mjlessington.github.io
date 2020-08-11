import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    root: {
      padding: theme.spacing(3,2)
    },
  }));
  
  export default function MainChat() {
    const classes = useStyles();
  
    return (
      
        <Paper className={classes.root} elevation={3}/>
            <Typography variant="h5" gutterBottom>
                Test
            </Typography>
            <Typography variant="body1" gutterBottom>
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
            unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
            dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>

      
    );
  }

