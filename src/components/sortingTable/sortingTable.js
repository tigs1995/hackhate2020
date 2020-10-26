import { useTable, useSortBy } from "react-table";
import React from "react";
import ColumnGenerator from "./columnGenerator";
import SortTable from "./sortTable";
import Formatting from "../../CSS/formatting.css";
import Table from "react-bootstrap/Table";
import { Box, Typography } from "@material-ui/core";
import TwitterIcon from "../images/twitterIcon.png";
import RenderIcon from "./renderIcon";

function SortingTable({ data }) {
  const columns = data[0] ? ColumnGenerator(data[0]) : [];

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  );

  // We don't want to render all 2000 rows for this example, so cap
  // it at 20 for this use case
  // const firstPageRows = rows.slice(0, 20);

  return (
    <Box className="sortingTable">
      <Typography>{rows.length} Results</Typography>
      <Table {...getTableProps()} id="myTable" striped bordered hover>
        <thead style={{ backgroundColor: "#71a1f4", color: "white" }}>
          {headerGroups.map((headerGroup) => (
            <tr>
              {headerGroup.headers.map((column, index) => (
                // Add the sorting props to control sorting. For this example
                // we can add them into the header props
                <th onClick={() => SortTable(index)}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {data.map((individualData) => {
            return (
              <tr>
                <td>{individualData.victim}</td>
                <td>
                  <span className="icon">
                    {RenderIcon(individualData.contactType)}
                  </span>
                </td>
                <td>{individualData.contact}</td>
                <td>{individualData.summary}</td>
                <td>{individualData.date}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Box>
  );
}

export default SortingTable;
