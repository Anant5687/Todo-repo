import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const paginationModel = { page: 0, pageSize: 10 };

export default function BasicTable({ data, columns, isDarkMode }) {
  return (
    <Paper sx={{ width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        sx={{
          border: 0,
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: isDarkMode ? '#424242' : '#f0f0f0',
            color: isDarkMode ? '#FFFFFF' : '#000000',
          },
          '& .MuiDataGrid-cell': {
            color: isDarkMode ? '#FFFFFF' : '#000000',
            backgroundColor: isDarkMode ? '#212121' : '#FFFFFF',
          },
          '& .MuiDataGrid-footerContainer': {
            backgroundColor: isDarkMode ? '#424242' : '#f0f0f0',
          },
          '& .MuiDataGrid-row': {
            backgroundColor: isDarkMode ? '#212121' : '#FFFFFF',
          },
        }}
      />
    </Paper>
  );
}
