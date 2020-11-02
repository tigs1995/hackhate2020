import React from "react";
import { Typography, AppBar, Toolbar, Box } from "@material-ui/core";
import HateHackLogo from "../components/images/hateHackLogo.png";

export default class NavBar extends React.Component {
  render() {
    return (
      <AppBar
        position="static"
        color="primary"
        style={{ backgroundColor: "#1155ccff" }}
      >
        <Toolbar>
          <Box className="leftNavBar">
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
