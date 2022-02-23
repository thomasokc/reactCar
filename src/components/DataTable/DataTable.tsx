import React, { useState } from 'react';
import { DataGrid, GridValueGetterParams, GridColDef } from '@mui/x-data-grid';
import { server_calls } from '../../api';
import { useGetData } from '../../custom-hooks';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'name',
      headerName: 'Name',
      width: 150,
      editable: true,
    },
    {
      field: 'description',
      headerName: 'Description',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 150,
    },
    {
      field: 'price',
      headerName: 'Price',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'make',
      headerName: 'Make',
      width: 160,
      editable: true,
    },
    {
      field: 'model',
      headerName: 'Model',
      width: 160,
      editable: true,
    },
  ];
  
  export const DataTable = () =>{ 
    let { droneData, getData } = useGetData();
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={droneData}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}