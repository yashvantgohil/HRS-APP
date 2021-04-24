import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import InfoIcon from "@material-ui/icons/Info";

import { deleteHacker, fetchAllHacker } from "../../store/hacker/actions";
import { Button } from "@material-ui/core";
import { DataGrid, GridToolbar } from "@material-ui/data-grid";
import { toast } from "react-toastify";
const HackerGrid = (props) => {
  let hackers = useSelector((state) => state.hacker.hackers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllHacker());
  }, [dispatch]);

  hackers = hackers.map((pr) => {
    pr.id = pr._id;
    pr.edit = "<a>edit</a>";
    return pr;
  });

  const columns = [
    { field: "id", headerName: "Id", width: 250 },
    { field: "name", headerName: "First Name", width: 150 },
    { field: "overallRank", headerName: "Overall Rank", width: 150 },
    {
      field: "Profile",
      disableColumnSelector: true,
      width: 150,
      filterable: false,
      sortable: false,
      renderCell: (params) => (
        <img
          style={{
            maxWidth: "50px",
            maxHeight: "50x",
            borderRadius: "25px",
          }}
          src="https://picsum.photos/50"
          alt=".."
        />
      ),
    },
    {
      field: "Info",
      disableColumnSelector: true,
      width: 100,
      filterable: false,
      sortable: false,
      renderCell: (params) => (
        <InfoIcon
          color="action"
          onClick={() => props.history.push(`hackers/${params.id}`)}
        />
      ),
    },
    {
      field: "Edit",
      disableColumnSelector: true,
      width: 100,
      filterable: false,
      sortable: false,
      renderCell: (params) => (
        <EditIcon
          color="primary"
          onClick={() => props.history.push(`hackers/edit/${params.id}`)}
        />
      ),
    },
    {
      field: "Delete",
      disableColumnSelector: true,
      width: 100,
      filterable: false,
      sortable: false,
      renderCell: (params) => (
        <DeleteIcon
          color="error"
          onClick={async () => {
            await dispatch(deleteHacker(params.id));
            toast.success("deleted successfully !!");
          }}
        />
      ),
    },
  ];

  return (
    <>
      <div style={{ marginTop: "50px" }}>
        <div className="row mb-2">
          <div className="col">
            <Button
              style={{ float: "right" }}
              color="primary"
              variant="contained"
              onClick={() => props.history.push("/hackers/new")}
            >
              Add New Hacker
            </Button>
          </div>
        </div>
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            columns={columns}
            rows={hackers}
            pageSize={5}
            checkboxSelection
            components={{
              Toolbar: GridToolbar,
            }}
          />
        </div>
      </div>
      {/* <pre>{JSON.stringify(products, null, 2)}</pre> */}
    </>
  );
};

export default HackerGrid;
