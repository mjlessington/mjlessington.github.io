import React from 'react'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import {CTX} from './Store.js'



const useStyles = makeStyles((theme) => ({
    root: {
        margin: '50px',
        padding: theme.spacing(3,2)
    },
    flex: {
        display: 'flex',
        alignItems: 'center'
    },
    sectionWindow: {
        width: '30%',
        height: '300px',
        borderRight: '1px solid black'

    },
    chatWindow: {
        width: '70%',
        height: '300px',
        padding: '10px'

    },
    chatBox: {
        width: '85%'

    },
    button: {
        width:'15%'

    }
  }));
  
  export default function MainChat() {
    const classes = useStyles();

    //Store
    const {allChats, sendChatAction} = React.useContext(CTX);
    const sections = Object.keys(allChats);


    //local state
    const [activeSection, changeActiveSection]= React.useState(sections[0])
    const [textValue, changeTextValue]= React.useState('');
  
    return (
     <div>
        <Paper className={classes.root} elevation={3}>
            <Typography variant="h4" component="h4">
                Chit Chat
            </Typography>
            <Typography variant="h6" gutterBottom>
                {activeSection}
            </Typography>
            <Divider />
            <div className={classes.flex}>
                <div className={classes.sectionWindow}>
                    <List>
                        {
                            sections.map(section => (
                                <ListItem onClick={e => changeActiveSection(e.target.innerText)} key={section} button>
                                    <ListItemText primary={section} />
                                </ListItem>

                            ))
                        }
                    </List>

                </div>
                <div className={classes.chatWindow}>
                        {
                            allChats[activeSection].map((chat, i) => (
                                <div className={classes.flex} key={i}>
                                <Chip label={chat.from} className={classes.chip} />
                                <Typography variant="body1" gutterBottom> {chat.msg} </Typography>
                                </div>

                            ))
                        }
                </div>
            </div>
            <div className={classes.flex}>
            <TextField id="filled-basic" 
                label="Type Message" 
                className={classes.chatBox} 
                variant="filled"
                value={textValue} 
                onChange={e => changeTextValue(e.target.value)}/>
            <Button 
                variant="contained" 
                color="primary"
                className={classes.button}
                onClick={() => {
                    sendChatAction(textValue); 
                    changeTextValue('');
                }}
                
                >
                Send
            </Button>
                                    
            </div>
        </Paper> 

      </div>
    );
  }

