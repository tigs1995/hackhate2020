import React from "react";
import {
  Typography,
  AppBar,
  Toolbar,
  Box,
  Button,
  Popover,
} from "@material-ui/core";
import HateHackLogo from "../components/images/hateHackLogo.png";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      popoverOpen: false,
    };
  }

  render() {
    return (
      <AppBar
        position="static"
        color="primary"
        style={{ backgroundColor: "#1155ccff" }}
      >
        <Toolbar>
          <Box className="leftNavBar">
            <Box data-test="project-name">
              <Typography variant="h6" color="inherit">
                Hackhate 2020
              </Typography>
              <Button
                onClick={() => this.setState({ popoverOpen: true })}
                data-test="button-for-popover"
              >
                Click me
              </Button>
              <Popover open={this.state.popoverOpen} data-test="popover">
                <Typography>Popover Open</Typography>
              </Popover>
            </Box>
          </Box>
          <Box data-test="logo-image">
            <img src={HateHackLogo} alt="Logo" height="75px" />
          </Box>
        </Toolbar>
      </AppBar>
    );
  }
}
