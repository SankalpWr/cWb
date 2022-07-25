

import React from "react";
import clsx from "clsx";
import { alpha, makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { Fab, InputBase } from "@material-ui/core";
import ArrowBack from "@material-ui/icons/ArrowBack";
import SearchIcon from "@material-ui/icons/Search";
 
 
const drawerWidth = 300;
 
const useStyles = makeStyles((theme) => ({
  appBar: {
    // zIndex: theme.zIndex.drawer + 1,
    position: "fixed",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "#3b4b60",
    // shadowOpacity: 0.27,
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
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
    height: "100%",
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
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
 
}));
 
export default function Header1() {
  const classes = useStyles();
  // const theme = useTheme();
  const [open, setOpen] = React.useState(false);
 
 
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        elevation={0}
        // style={{ marginLeft: "100px" }}
      >
        <Toolbar style={{ marginLeft: "50px" }}>
          <ArrowBack />
          <Typography
            variant="h6"
            noWrap
            style={{ marginLeft: "10px", color: "#5393c2" }}
          >
            Call Workboard
          </Typography>
          <div style={{ display: "flex", marginLeft: "auto" }}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
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
            <Fab
              variant="extended"
              style={{ backgroundColor: "#fc7501", color: "white" }}
              size="small"
              aria-label="add"
            >
           
              Freda
              <img src="freeda.svg" />
            </Fab>
          </div>
        </Toolbar>
      </AppBar>
 
    </div>
  );
}
 

