import React, { Component } from 'react';
import {
    DataGrid,
    GridToolbar,
  } from "@mui/x-data-grid";
  import "./dataTable.css";
  import { Link } from "react-router-dom";
  import deleteImg from '../../assests/delete.svg';
  
  // const DataTable = ({columns, rows}) => {
    class DataTable extends Component {
    state = {
      rows : []
    }
    // const handleDelete = (id) => {
    //   //delete the item
    //   // mutation.mutate(id)
    // };

    componentDidMount(){
      console.log('sdsd');
      this.setState({rows : this.props.rows});
    }

    getRowId = (row) => {
      // Return the unique ID of each row
      return row.username; // Assuming your data has an 'id' property
    };

    handleDelete = id =>{
      const rows = this.state.rows.filter(m => m.id !== id);
      this.setState({rows});
    };
  
    actionColumn = {
      field: "action",
      headerName: "Delete",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="action">
            
            <div className="delete" onClick={() => this.handleDelete(params.row.id)}>
              <img src={deleteImg} alt="" />
            </div>
          </div>
        );
      },
    };
  
    render() {
    return (
      <div className="dataTable">
        { <DataGrid
          className="dataGrid"
          getRowId={this.getRowId}
          rows={this.state.rows}
          columns={[...this.props.columns, this.actionColumn]}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
          pageSizeOptions={[100]}
          checkboxSelection
          disableRowSelectionOnClick
          disableColumnFilter
          disableDensitySelector
          disableColumnSelector
        /> }
      </div>
    );
  };
}
  
  export default DataTable;
  