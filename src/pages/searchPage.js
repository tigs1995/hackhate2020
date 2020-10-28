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

class HitsTable extends React.Component {

  render(){
    let { hits } = this.props
    return (
      <div style={{width: '100%', boxSizing: 'border-box', padding: 8}}>
        <table className="sk-table sk-table-striped" style={{width: '100%', boxSizing: 'border-box'}}>
          <thead>
            <tr>
              <th>Email</th>
              <th>Handle</th>
              <th>Tweet</th>
              <th>Extracted Link</th>
            </tr>
          </thead>
          <tbody>
            {hits.map(hit => (
              <tr key={hit._id}>
                <td>{hit._source.email}</td>
                <td>{hit._source.handle}</td>
                <td>{hit._source.tweet}</td>
                <td><a href={hit._source.extracted_link} target="_blank">{hit._source.extracted_link}</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

const sk = new SearchkitManager(
  "http://18.134.149.85:9200/hackhate-raw-3/"
);

export default class HomePage extends React.Component {
  render() {
    return (
      <Box>
        <NavBar />
        <Box className="homePageContent">
          <SearchkitProvider searchkit={sk}>
            <div>
              <Typography>Search below:</Typography>
              <SearchBox
              searchOnChange={true}
              queryOptions={{analyzer:"standard"}}
              queryFields={["*"]}
              />
              <Hits hitsPerPage={50} listComponent={HitsTable} />
            </div>
          </SearchkitProvider>{" "}
          {/*<SortingTable data={Data} //*/}
        </Box>
      </Box>
    );
  }
}
