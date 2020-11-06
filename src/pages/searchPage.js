import {
  SearchkitManager,
  SearchkitProvider,
  SearchBox,
  Hits,
} from "searchkit";
import { Typography, Box, Button } from "@material-ui/core";
import NavBar from "../components/navBar";
import React from "react";
import Table from "react-bootstrap/Table";
import RenderIcon from "../components/sortingTable/renderIcon";
import SortTable from "../components/sortingTable/sortTable";
import Formatting from "../CSS/formatting.css";

class HitsTable extends React.Component {
  render() {
    let { hits } = this.props;
    //Rendering more than 50 hits at a time slows the sorting of the table. In the future, use pagination to solve this problem
    //Last 10 contain the referral data, therefore last 50 have to be taken
    let last50Hits = hits.slice(Math.max(hits.length - 50, 0));
    //This is where kingkevin471 (example being used in presentation) is
    let hitsIncludingKingKevin = hits.slice(200, 250);
    for (let hit of hitsIncludingKingKevin) {
      last50Hits.push(hit);
    }
    return (
      <Table id="myTable" striped bordered hover className="sortingTable">
        <thead className="tableHeader">
          <tr>
            <th onClick={() => SortTable(0)}>Perpetrator Handle</th>
            <th>Handle Platform</th>
            <th onClick={() => SortTable(2)}>Incident Content</th>
            <th onClick={() => SortTable(3)}>Content Link</th>
            <th onClick={() => SortTable(4)}>Incident Date</th>
            <th onClick={() => SortTable(5)}>Crime ref</th>
          </tr>
        </thead>
        <tbody>
          {last50Hits.map((hit) => (
            <tr key={hit._id}>
              <td
                className={
                  hit._source.screen_name ? "handleCell" : "handleCellReferral"
                }
              >
                {hit._source.screen_name
                  ? hit._source.screen_name
                  : hit._source["Perpetrator Twitter handle"] === "N/A"
                  ? hit._source["Perpetrator Twitter handle"]
                  : "@" + hit._source["Perpetrator Twitter handle"]}
              </td>
              <td className="iconCell">
                {hit._source.data_origin
                  ? RenderIcon(hit._source.data_origin)
                  : RenderIcon("/twitter/")}
              </td>
              <td className="contentBodyCell">
                {hit._source.text
                  ? hit._source.text
                  : hit._source["Incident Description"]}
              </td>
              <td className="contentLink">
                <a href={hit._source.extracted_link} target="_blank">
                  {hit._source.extracted_link
                    ? hit._source.extracted_link
                    : "N/A"}
                </a>
              </td>
              <td className="dateCell">
                {hit._source.created_at
                  ? hit._source.created_at
                  : hit._source["Incident Date"]}
              </td>
              <td className="crimeReference">
                <a
                  href="https://www.met.police.uk/advice/advice-and-information/acr/after-you-report-a-crime/"
                  target="_blank"
                >
                  0293747585
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

const sk = new SearchkitManager(
  "http://18.134.149.85:9200/referrals,flagged-incidents"
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
              <Box className="topPartOfSearchPage">
                <SearchBox
                  searchOnChange={true}
                  queryOptions={{ analyzer: "standard" }}
                  queryFields={["*"]}
                />
                <button className="exportButton">CSV</button>
              </Box>

              <Hits hitsPerPage={1000} listComponent={HitsTable} />
            </div>
          </SearchkitProvider>
        </Box>
      </Box>
    );
  }
}
