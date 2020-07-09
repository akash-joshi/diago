import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';


export default function Report(){


    let reports=[["Blood Sugar","10-03-2020"],["Blood Sugar","20-02-2020"]]
    const useStyles = makeStyles((theme) => ({
        root: {
          width: '100%',
          maxWidth: '50ch',
          backgroundColor: theme.palette.background.paper,
        },
        inline: {
          display: 'inline',
        },
      }));


      const classes = useStyles();
    return (<>
        <h1>Report</h1>
        <List className={classes.root}>
        {reports.map(report=>{
      return (<>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Femy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={report[0]}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {report[1]}
              </Typography>
              
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="Middle" component="li" />
      </>)
    })}
    </List>
    
        
    
    </>)
}
