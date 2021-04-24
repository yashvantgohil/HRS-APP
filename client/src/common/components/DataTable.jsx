import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";

const DataTable = ({ rows, columns, pageSize }) => {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns.map((column) => ({
          ...column,
          disableClickEventBubbling: true,
        }))}
        pageSize={pageSize}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
