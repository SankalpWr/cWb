import React,{useEffect,useState}from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Card, Paper } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import { useSelector } from 'react-redux';
import axios from "axios"


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
  
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
        
      {value === index && (
        <Box p={3} >
          <Typography >{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  
    
   
  },
}));

export default function SimpleTabs() {
  const [callingData,setCallingData] = useState({});

  useEffect(()=>{
    const getData = async ()=>{
      const res = await axios.post("http://localhost:4000/getUserCallWorkbook.do?pageNumber=0&pageSize=5");
      console.log("getData",res.data)
      setCallingData(res.data.overview);
    }
    getData()
  },[])

  const classes = useStyles();
  // const data = useSelector((state)=>state.cardReducer.card)
console.log("callingData callingMinutes",callingData.expectedCallingMinutes)
// console.log("jifjeiwj")
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return (
      <div  className={classes.root}>
        <Box position="static" style={{backgroundColor:"#39495E"}}>
          <Tabs   indicatorColor="primary"
          textColor="primary" value={value} onChange={handleChange} aria-label="simple tabs example" >
            <Tab label="TO CALL LIST(12)" {...a11yProps(0)}/>
            <Tab label="FINISHED CALL LIST(12)" {...a11yProps(1)} />
            <Typography style={{marginTop:"0.5%",marginLeft:"20%",color:"white",fontSize:"12px"}}><span style={{fontSize:"17px"}}>{callingData.processedCustomerCount}/</span><span style={{color:"#FFFFFFA6"}}>{callingData.totalCustomerCount}</span></Typography>
            <Divider orientation="vertical" flexItem style={{marginLeft:"8.5%"}}/>
            <Typography style={{marginTop:"0.5%",marginLeft:"1.5%",color:"white",fontSize:"12px"}}><span style={{fontSize:"17px"}}>{callingData.completedCallingMinutes}<span style={{fontSize:"12px"}}></span><span style={{fontSize:"12px"}}>min</span>/</span><span style={{color:"#FFFFFFA6"}}>{callingData.expectedCallingMinutes} min</span></Typography>
            <Divider orientation="vertical" flexItem style={{marginLeft:"6.5%"}}/>
            <Typography style={{marginTop:"0.5%",marginLeft:"1.5%",color:"white",fontSize:"12px"}}><span style={{fontSize:"17px"}}>${callingData.totalPastDueAmount}/</span> <span style={{color:"#FFFFFFA6"}}>${callingData.totalPastDueProcessed}M</span></Typography>
          </Tabs>
        <div style={{}}>
          <div>
            <Typography style={{marginTop:"-1.5%",marginLeft:"48.5%",color:"#5DAAE0",fontSize:"12px"}}>Total Customers Called</Typography>
            </div>
            <div>
         <Typography style={{marginTop:"-1.5%",marginLeft:"61.5%",color:"#5DAAE0",fontSize:"12px"}}>Total Time Spend on Call</Typography>
         </div>
         <div>
        <Typography style={{marginTop:"-1.5%",marginLeft:"75.5%",color:"#5DAAE0",fontSize:"12px"}}>Total Paid Due Touched</Typography>
    </div>
        </div>
  
  
  
  
  
  
        </Box>
      
  
      
      </div>
    ); 
}
