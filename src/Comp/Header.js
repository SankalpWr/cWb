import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Box, TextField } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import { alpha} from "@material-ui/core/styles";
import Freeda from "./Freeda";
import DetailsTwoToneIcon from '@material-ui/icons/DetailsTwoTone';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "-9%",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    border: "2px solid black",
    borderRadius: "50px 50px",
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  search: {
    position: "relative",
    // borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
    borderRadius: "30px",
  },
  searchIcon: {
    // padding: theme.spacing(0, 2),
    height: "67%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5daae0",
    borderRadius: "20px",
    padding: "5px",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(3)}px)`,
    transition: theme.transitions.create("width"),
    width: "10%",
    [theme.breakpoints.up("md")]: {
      width: "16ch",
      fontSize:"15px"
    },
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
  
        <div className={classes.root}>
      <Box position="static" style={{ backgroundColor: "#39495E" }}>
        <Toolbar>
          <ArrowBackIcon
            style={{ marginLeft: "5%", color: "white" }}
          ></ArrowBackIcon>
          <Typography
            style={{ marginLeft: "1%", color: "#5DAAE0", fontSize: "25px" }}
          >
            Call Workboard
          </Typography>
          <Paper
            variant="outlined"
            style={{
              backgroundColor: "#FC7500",
              width: "15%",
              height: "20px",
              marginLeft: "25%",
              marginTop: "-3%",
              color: "white",
              fontSize: "10px",
              textAlign: "center",
              borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px",
            }}
          >
            
            AUTONOMOUS RECEIVABLES
          </Paper>
          {/* <InputBase
          
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            /> */}

          {/* <Box  style={{borderRadius:"50px 50px",border:"2px solid #5DAAE0"}}><TextField ></TextField></Box> */}
          {/* <Paper
            style={{
              backgroundColor: "#FC7500",
              color: "white",
              borderRadius: "50px 50px",
              marginLeft: "25%",
              fontSize: "12px",
              width: "6.5rem",
              height: "2rem",
            }}
          >
              <Typography
                style={{
                  fontSize: "12px",
                  textAlign: "center",
                  marginTop: "7px",
                  marginLeft: "-19px",
                }}
              >
                FREEDA
              </Typography>
              <img
                style={{
                  width: "30px",
                  marginLeft: "73px",
                  marginTop: "-5.5rem",
                }}
                src={"freeda.svg"}
              ></img>

          </Paper> */}
          <div style={{ display: "flex", marginLeft: "auto" }}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon style={{color:"white"}} />
              </div>
              <InputBase
          
                placeholder="Search Name"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
                
              />
          
            </div>
           {/* <Freeda/> */}
           <Fab
              variant="extended"
              style={{ backgroundColor: "#fc7501", color: "white",paddingRight:"0" }}
              size="small"
              aria-label="add"
            >
           
              Freeda
              <img src="freeda.svg" style={{height:"30px"}}/>
            </Fab>
          </div>
        </Toolbar>
      </Box>
      {/* <Fab  size="small" color="primary" style={{marginLeft:"5%",marginTop:"50%"}}>
        <AddIcon  />
      </Fab> */}
    </div>
   

  );
}
