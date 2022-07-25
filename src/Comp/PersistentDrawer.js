import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { Button } from "@material-ui/core";

const drawerWidth = "30vw";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    background: "#5DAAE0",
    maxWidth: "3vw",
    height: "100vh",
    left: 0,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    //width: "100",
    //marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  toolbar: {
    paddingLeft: "1.5vw",
  },
  divider: {
    backgroundColor: "#FFFFFF",
  },
  accountIcon: {
    marginTop: "85vh",
  },
  menuButton: {
    marginTop: "1.7vh",
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#5DAAE0",
    color: "#FFFFFF",
  },
  drawerHeader: {
    display: "flex",
    flexDirection: "horizontal",
  },
  drawerFooter: {
    display: "flex",
    marginTop: "75vh",
  },
  button: {
    backgroundColor: "#2D4250",
    color: "white",
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon style={{ position: "absolute", left: "2" }} />
          </IconButton>
        </Toolbar>
        <div>
          <Divider className={classes.divider} />
        </div>
        <div className={classes.accountIcon}>
          <AccountCircleIcon />
        </div>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton color="inherit" edge="start" onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? <MenuIcon /> : <ChevronRightIcon />}
          </IconButton>
          <Typography className={classes.menuButton}>Menu</Typography>
        </div>
        <Divider />
        <List>
          <ListItem button key={"Switch Back to Enterprise UI"}>
            <ListItemIcon>
              <ArrowBackIcon />
            </ListItemIcon>
            <ListItemText primary={"Switch Back to Enterprise UI"} />
          </ListItem>
        </List>

        <List className={classes.drawerFooter}>
          <ListItem button key={"profile"}>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary={"Sankalp Wahane"} />
            <Button className={classes.button}>Logout</Button>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}
