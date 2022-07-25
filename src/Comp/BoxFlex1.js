
import React from 'react'
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add'
import Grid from '@material-ui/core/Grid';
import { Box, Typography } from '@material-ui/core';
import Chart from './HighChart';
import HighChart from './HighChart';
import DemoHigh from '../New folder/DemoHigh';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function BoxFlex1(props) {

 
  const classes = useStyles();
  return (
    <div>
   
      <Box display="flex" flexDirection="row" p={1}>
        <Box style={{height:"30vh",width:"55vh",borderRadius:"2%"}} p={2} bgcolor="#273D49BF">
          <Box>
          <Typography style={{marginLeft:"6",marginTop:"-2%",color:"#FFFFFF80"}}>Remaining Account Balance</Typography>
          
          <Divider orientation="vertical" style={{right:"20px"}} dividerColor="white"/>
         
          <DemoHigh />
        
          </Box>
          </Box>
        </Box>
       
    
    
    </div>
  )
}

export default BoxFlex1;
