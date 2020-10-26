import { useTable, useSortBy } from "react-table";
import React from "react";
import ColumnGenerator from "./columnGenerator";
import SortTable from "./sortTable";
import Formatting from "../../CSS/formatting.css";
import Styles from "./styles";

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
  const firstPageRows = rows.slice(0, 20);

  return (
    <Styles>
      <table {...getTableProps()} id="myTable">
        <thead>
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
          {firstPageRows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
      {/* <div>Showing the first 20 results of {rows.length} rows</div> */}
    </Styles>
  );
}

export default SortingTable;
