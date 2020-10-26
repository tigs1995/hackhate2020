import {
  SearchkitManager,
  SearchkitProvider,
  SearchBox,
  Hits,
} from "searchkit";
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
import MenuIcon from "@material-ui/icons/Menu";
import NavBar from "../components/navBar";
import SortingTable from "../components/sortingTable/sortingTable";
import React, { useState } from "react";
import Data from "../components/sortingTable/data.json";

const sk = new SearchkitManager("http://18.134.149.85:9200", {
  basicAuth: "read: elastic",
});

export default class HomePage extends React.Component {
  render() {
    return (
      <Box className="homePageContent">
        <NavBar />
        <SearchkitProvider searchkit={sk}>
          <div>
            <Typography>Search below:</Typography>
            <SearchBox />
            <Hits />
          </div>
          <SortingTable data={Data} />
        </SearchkitProvider>
      </Box>
    );
  }
}
