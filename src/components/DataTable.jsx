import { DataGrid } from '@mui/x-data-grid';

function DataTable({
  columns,
  rows,
  pageSizeOptions = [10, 20, 30, 50, 100],
  checkboxSelection = false,
  disableColumnMenu = false,
  disableColumnSorting = false,
}) {
  const initialState = {};

  if (pageSizeOptions.length > 0) {
    initialState.pagination = {
      paginationModel: {
        pageSize: pageSizeOptions[0],
      },
    };
  }

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      pageSizeOptions={pageSizeOptions}
      checkboxSelection={checkboxSelection}
      initialState={initialState}
      disableColumnMenu={disableColumnMenu}
      disableColumnSorting={disableColumnSorting}
      autoHeight
    />
  );
}

export default DataTable;
