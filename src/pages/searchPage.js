import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory from "react-bootstrap-table2-filter";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import tableData from "../components/data/tableData.json";
import { Typography, Box } from "@material-ui/core";
import NavBar from "../components/navBar";
import Formatting from "../CSS/formatting.css";
import RenderIcon from "../components/sortingTable/renderIcon";

const { SearchBar } = Search;

class Table extends React.Component {
  columns = [
    {
      dataField: "handle",
      text: "Perpetrator Handle",
      sort: true,
      formatter: (dataField) => {
        return dataField ? dataField : "N/A";
      },
      style: { fontSize: "10pt", width: "165px", wordBreak: "break-all" },
      headerStyle: {
        fontSize: "11pt",
        backgroundColor: "#668cff",
        color: "white",
        textAlign: "center",
      },
    },
    {
      dataField: "platform",
      text: "Handle Platform",
      sort: true,
      formatter: (dataField) => {
        return RenderIcon(dataField);
      },
      style: { textAlign: "center", width: "80px" },
      headerStyle: {
        fontSize: "11pt",
        backgroundColor: "#668cff",
        color: "white",
        textAlign: "center",
      },
    },
    {
      dataField: "content",
      text: "Incident Content",
      sort: true,
      style: {
        maxWidth: "60px",
        overflow: "hidden",
        wordWrap: "break-word",
        fontSize: "10pt",
      },
      headerStyle: {
        fontSize: "11pt",
        backgroundColor: "#668cff",
        color: "white",
        textAlign: "center",
      },
    },
    {
      dataField: "extracted_link",
      text: "Content Link",
      sort: true,
      formatter: (dataField) => {
        return dataField ? (
          <a href={dataField} target="_blank">
            {dataField}
          </a>
        ) : (
          "N/A"
        );
      },
      style: {
        fontSize: "10pt",
        width: "140px",
        wordBreak: "break-all",
      },
      headerStyle: {
        fontSize: "11pt",
        backgroundColor: "#668cff",
        color: "white",
        textAlign: "center",
      },
    },
    {
      dataField: "created_at",
      text: "Incident Date",
      sort: true,
      style: { fontSize: "10pt", width: "140px", wordBreak: "break-all" },
      headerStyle: {
        fontSize: "11pt",
        backgroundColor: "#668cff",
        color: "white",
        textAlign: "center",
      },
    },
    {
      dataField: "origin",
      text: "Crime ref",
      sort: true,
      formatter: (dataField) => {
        return dataField ? (
          dataField
        ) : (
          <a
            href="https://www.met.police.uk/advice/advice-and-information/acr/after-you-report-a-crime/"
            target="_blank"
          >
            0293747585
          </a>
        );
      },
      style: { fontSize: "10pt", width: "120px", wordBreak: "break-all" },
      headerStyle: {
        fontSize: "11pt",
        backgroundColor: "#668cff",
        color: "white",
        textAlign: "center",
      },
    },
  ];

  render() {
    return (
      <Box>
        <NavBar />
        <Box className="homePageContent">
          <ToolkitProvider
            bootstrap4
            keyField="name"
            data={tableData}
            columns={this.columns}
            search
          >
            {(props) => (
              <div>
                <div>
                  <Typography>Search below:</Typography>
                  <Box className="topPartOfSearchPage">
                    <SearchBar
                      {...props.searchProps}
                      style={{ width: "200px", height: "35px" }}
                    />
                    <button className="exportButton">CSV</button>
                  </Box>
                </div>
                <BootstrapTable
                  {...props.baseProps}
                  filter={filterFactory()}
                  noDataIndication="There is no solution"
                  striped
                  hover
                  condensed
                />
              </div>
            )}
          </ToolkitProvider>
        </Box>
      </Box>
    );
  }
}

export default Table;
