import React from "react";
import {
  BrowserRouter as Router,
  Route,
  withRouter,
  Redirect,
} from "react-router-dom";
import HomePage from "../pages/homePage";
import SearchPage from "../pages/searchPage";
import {
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Box,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import HateHackLogo from "../components/images/hateHackLogo.png";
import Formatting from "../CSS/formatting.css";

export default class NavBar extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     anchorEl: null,
  //     menuOpen: false,
  //   };
  // }

  // handleMenuClick = (event) => {
  //   this.setState({ anchorEl: event.currentTarget });
  //   this.setState({ menuOpen: true });
  // };

  // handleClose = (event) => {
  //   this.setState({ anchorEl: false });
  //   this.setState({ menuOpen: false });
  //   let myValue = event.currentTarget.dataset.myValue;
  //   if (myValue === "search") {
  //     this.props.history.push("./search");
  //   }
  // };

  render() {
    return (
      <AppBar
        position="static"
        color="primary"
        style={{ backgroundColor: "#1155ccff" }}
      >
        <Toolbar>
          <Box className="leftNavBar">
            {/* <Box>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={this.handleMenuClick}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={this.state.anchorEl}
                open={this.state.menuOpen}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.handleClose} data-my-value="home">
                  Home
                </MenuItem>
                <MenuItem onClick={this.handleClose} data-my-value="search">
                  Search
                </MenuItem>
              </Menu>
            </Box> */}
            <Box>
              <Typography variant="h6" color="inherit">
                Hackhate 2020
              </Typography>
            </Box>
          </Box>
          <img src={HateHackLogo} alt="Logo" height="75px" />
        </Toolbar>
      </AppBar>
    );
  }
}
