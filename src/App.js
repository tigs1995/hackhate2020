import React from "react";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import SearchPage from "./pages/searchPage";

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
      </Router>
    );
  }
}
