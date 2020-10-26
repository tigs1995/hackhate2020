import { SearchkitManager } from "searchkit";
import {
  Typography,
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Box,
} from "@material-ui/core";
import React from "react";
import HackHateLogo from "../components/images/hackHateLogo.png";
import NavBar from "../components/navBar";
import Formatting from "../CSS/formatting.css";

const sk = new SearchkitManager("http://18.134.149.85:9200", {
  basicAuth: "read: elastic",
});

export default class HomePage extends React.Component {
  render() {
    return (
      <>
        <NavBar {...this.props} />
        <Box className="homePageComponent">
          <Box className="homePageContent">
            <Box className="imageLogo">
              <img src={HackHateLogo} alt="Logo" height="500px" />
            </Box>
          </Box>
        </Box>
      </>
    );
  }
}
