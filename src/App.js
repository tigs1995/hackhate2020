import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  withRouter,
  Redirect,
} from "react-router-dom";
import HomePage from "./pages/homePage";
import SearchPage from "./pages/searchPage";
import {
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      menuOpen: false,
    };
  }

  render() {
    return (
      <Router>
        <Route exact path="/" component={withRouter(SearchPage)}></Route>
        <Route exact path="/search" component={withRouter(SearchPage)}></Route>
      </Router>
    );
  }
}
