import React from "react";
import { useDispatch, useSelector } from "react-redux";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import InfoIcon from "@material-ui/icons/Info";

import { deleteProduct } from "../../store/product/actions";
import DataTable from "../../common/components/DataTable";
const ProductList = (props) => {
  let products = useSelector((state) => state.productState.products);
  const dispatch = useDispatch();

  products = products.map((pr) => {
    pr.edit = "<a>edit</a>";
    return pr;
  });

  const columns = [
    { field: "name", headerName: "First name", flex: 4 },
    { field: "price", headerName: "Last name", flex: 2 },
    {
      field: "Info",
      disableColumnSelector: true,
      flex: 1,
      filterable: false,
      sortable: false,
      renderCell: (params) => (
        <InfoIcon
          color="action"
          onClick={() => props.history.push(`products/${params.id}`)}
        />
      ),
    },
    {
      field: "Edit",
      disableColumnSelector: true,
      flex: 1,
      filterable: false,
      sortable: false,
      renderCell: (params) => (
        <EditIcon color="primary" onClick={() => alert("dasda")} />
      ),
    },
    {
      field: "Delete",
      disableColumnSelector: true,
      flex: 1,
      filterable: false,
      sortable: false,
      renderCell: (params) => (
        <DeleteIcon
          color="error"
          onClick={() => dispatch(deleteProduct(params.id))}
        />
      ),
    },
  ];

  return (
    <>
      <div style={{ marginTop: "50px" }}>
        <DataTable columns={columns} rows={products} pageSize={5} />
      </div>
      {/* <pre>{JSON.stringify(products, null, 2)}</pre> */}
    </>
  );
};

export default ProductList;
