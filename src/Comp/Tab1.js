import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import BoxFlex from './BoxFlex';
import {useSelector} from "react-redux"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={1}>
          <Typography>{children}</Typography>
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
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Tab1() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const cardArray = useSelector((state) => state.cardReducer.card);
  return (
    <div className={classes.root}>
      <div position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="Page One" href="/drafts" {...a11yProps(0)} />
          <LinkTab label="Page Two" href="/trash" {...a11yProps(1)} />
         
        </Tabs>
      </div>
      <TabPanel value={value} index={0}>
          <div style = {{width:"100vw",height:"100%",display:"flex",flexWrap:"wrap"}}>
      {
      cardArray.map((data)=>(
        <>
        <BoxFlex customerName = {data.customerName} customerNumber = {data.customerNumber} bucketNames = {data.bucketNames} pastDueBucketDocumentCount = {data.pastDueBucketDocumentCount}/>
        </>
      )
      )
      
    }
      </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Page Two
      </TabPanel>
     
    </div>
  );
}
